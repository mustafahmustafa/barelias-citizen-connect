
import React, { useState } from 'react';
import { MapPin, FileImage, Send, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

// Issue categories
const issueCategories = [
  { value: "roads", label: "Road & Street Issues" },
  { value: "lighting", label: "Street Lighting Problems" },
  { value: "water", label: "Water & Sewage Issues" },
  { value: "waste", label: "Waste Collection Problems" },
  { value: "public_spaces", label: "Public Spaces & Parks" },
  { value: "other", label: "Other Issues" },
];

const Report = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState({ latitude: '', longitude: '', address: '' });
  const [issueDetails, setIssueDetails] = useState({
    category: '',
    description: '',
    name: '',
    email: '',
    phone: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleLocationDetection = () => {
    // Check if geolocation is available in the browser
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by your browser.",
        variant: "destructive"
      });
      return;
    }

    // Get current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
          address: "Detecting address..." // This would normally be resolved with a geocoding service
        });

        // Simulating address resolution after a delay
        setTimeout(() => {
          setLocation(prev => ({
            ...prev,
            address: "Near Main Street, Bar Elias" // This would come from a geocoding API
          }));
        }, 1500);

        toast({
          title: "Success",
          description: "Location detected successfully."
        });
      },
      (error) => {
        let errorMessage = "Unknown error occurred.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
        }
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive"
        });
      }
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.match('image.*')) {
      toast({
        title: "Error",
        description: "Please select an image file (JPEG, PNG, etc).",
        variant: "destructive"
      });
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "File size exceeds 5MB limit.",
        variant: "destructive"
      });
      return;
    }

    // Create image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Report Submitted",
        description: "Thank you! Your issue has been reported successfully. Reference #: REF-" + Math.floor(10000 + Math.random() * 90000)
      });
      
      // Reset form
      setStep(1);
      setLocation({ latitude: '', longitude: '', address: '' });
      setIssueDetails({
        category: '',
        description: '',
        name: '',
        email: '',
        phone: '',
      });
      setImagePreview(null);
    }, 1500);
  };

  const nextStep = () => {
    if (step === 1 && !location.address) {
      toast({
        title: "Location Required",
        description: "Please provide the location of the issue.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && (!issueDetails.category || !issueDetails.description)) {
      toast({
        title: "Details Required",
        description: "Please select a category and describe the issue.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Report an Issue</h1>
            <p className="text-xl opacity-90">
              Help us improve Bar Elias by reporting municipal issues such as potholes, broken streetlights, 
              or other infrastructure problems.
            </p>
          </div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                {/* Steps Indicator */}
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className={`text-center flex-1 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 
                        ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                        1
                      </div>
                      <div className="text-sm font-medium">Location</div>
                    </div>
                    <div className={`text-center flex-1 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 
                        ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                        2
                      </div>
                      <div className="text-sm font-medium">Details</div>
                    </div>
                    <div className={`text-center flex-1 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center mx-auto mb-2 
                        ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                        3
                      </div>
                      <div className="text-sm font-medium">Contact</div>
                    </div>
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                      <div 
                        className="h-full bg-primary transition-all" 
                        style={{ width: `${(step - 1) * 50}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Location */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold">Where is the issue located?</h2>
                        <p className="text-muted-foreground mt-1">
                          Help us pinpoint the exact location of the problem
                        </p>
                      </div>

                      <div className="flex flex-col space-y-4">
                        <div className="border rounded-lg p-4 bg-gray-50">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-medium flex items-center">
                                <MapPin size={18} className="mr-1 text-primary" />
                                Detect My Location
                              </h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                Use your device's GPS to automatically detect your current location
                              </p>
                            </div>
                            <Button 
                              type="button" 
                              onClick={handleLocationDetection}
                              variant="outline"
                            >
                              Detect Location
                            </Button>
                          </div>

                          {location.latitude && (
                            <div className="bg-white p-3 rounded border text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Coordinates:</span>
                                <span>{location.latitude}, {location.longitude}</span>
                              </div>
                              <div className="flex justify-between mt-2">
                                <span className="text-muted-foreground">Address:</span>
                                <span>{location.address}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <Label htmlFor="address">Or Enter Address Manually</Label>
                          <Textarea 
                            id="address" 
                            placeholder="Enter the street address or describe the location" 
                            value={location.address}
                            onChange={(e) => setLocation({...location, address: e.target.value})}
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <Button type="button" onClick={nextStep} disabled={!location.address}>
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Issue Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold">Describe the Issue</h2>
                        <p className="text-muted-foreground mt-1">
                          Provide details about the problem you've observed
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Issue Category</Label>
                          <Select
                            value={issueDetails.category}
                            onValueChange={(value) => setIssueDetails({...issueDetails, category: value})}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                              {issueCategories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea 
                            id="description" 
                            placeholder="Please describe the issue in detail" 
                            value={issueDetails.description}
                            onChange={(e) => setIssueDetails({...issueDetails, description: e.target.value})}
                            className="min-h-[120px]"
                          />
                          <p className="text-xs text-muted-foreground">
                            Please include any relevant details about the problem, how long it has existed, and its severity.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="image">Upload Photo (Optional)</Label>
                          <div className="flex items-center gap-4">
                            <div className="flex-grow">
                              <Input 
                                id="image" 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageUpload}
                                className="cursor-pointer"
                              />
                              <p className="text-xs text-muted-foreground mt-1">
                                Max file size: 5MB. Supported formats: JPG, PNG, GIF
                              </p>
                            </div>
                            
                            {imagePreview && (
                              <div className="h-20 w-20 rounded overflow-hidden border">
                                <img 
                                  src={imagePreview} 
                                  alt="Preview" 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button 
                          type="button" 
                          onClick={nextStep}
                          disabled={!issueDetails.category || !issueDetails.description}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Information */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold">Your Contact Information</h2>
                        <p className="text-muted-foreground mt-1">
                          So we can follow up with you about this issue
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            placeholder="Enter your full name" 
                            value={issueDetails.name}
                            onChange={(e) => setIssueDetails({...issueDetails, name: e.target.value})}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email"
                            placeholder="Enter your email address" 
                            value={issueDetails.email}
                            onChange={(e) => setIssueDetails({...issueDetails, email: e.target.value})}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (Optional)</Label>
                          <Input 
                            id="phone" 
                            type="tel"
                            placeholder="Enter your phone number" 
                            value={issueDetails.phone}
                            onChange={(e) => setIssueDetails({...issueDetails, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="pt-4 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="bg-primary"
                          disabled={submitting || !issueDetails.name || !issueDetails.email}
                        >
                          {submitting ? (
                            <>Processing...</>
                          ) : (
                            <>
                              <Send size={16} className="mr-2" />
                              Submit Report
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about reporting issues in Bar Elias
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="followup">Follow-up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-4 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">What types of issues can I report?</h3>
                    <p className="text-muted-foreground">
                      You can report a wide range of municipal issues including road damage, broken street lights, 
                      water leaks, waste collection problems, damaged public facilities, and other infrastructure concerns.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Is my information kept confidential?</h3>
                    <p className="text-muted-foreground">
                      Yes, your personal information is kept confidential. We only use your contact details to follow up 
                      on your report or to ask for more information if needed.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Do I need to create an account?</h3>
                    <p className="text-muted-foreground">
                      No, you don't need an account to submit a report. However, providing your contact information 
                      allows us to follow up with you about the status of your report.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="process" className="space-y-4 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">What happens after I submit a report?</h3>
                    <p className="text-muted-foreground">
                      After submission, your report is reviewed by our municipal staff and assigned to the appropriate 
                      department. You'll receive a confirmation email with a reference number for tracking.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">How long does it take to address reported issues?</h3>
                    <p className="text-muted-foreground">
                      Response times vary depending on the nature and severity of the issue. Emergency issues like water 
                      main breaks are addressed immediately, while less urgent matters typically take 2-10 business days.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Why do you need my location?</h3>
                    <p className="text-muted-foreground">
                      Accurate location information helps our teams quickly find and fix the reported issue. 
                      You can either allow automatic location detection or manually describe the location.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="followup" className="space-y-4 mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">How can I check the status of my report?</h3>
                    <p className="text-muted-foreground">
                      You can check the status of your report using the reference number provided in your confirmation 
                      email. Contact our citizen service center with this number for updates.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Will I be notified when the issue is resolved?</h3>
                    <p className="text-muted-foreground">
                      Yes, if you provided contact information, you will receive a notification when your reported 
                      issue has been resolved or if we need additional information.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">What if the issue persists after it's marked resolved?</h3>
                    <p className="text-muted-foreground">
                      If an issue persists or recurs after being marked as resolved, please submit a new report 
                      referencing the original report number so we can investigate further.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Emergency Notice Section */}
      <section className="py-8 bg-red-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex items-center">
              <AlertTriangle size={24} className="text-red-500 mr-3" />
              <div>
                <h3 className="font-medium">For Emergencies</h3>
                <p className="text-sm text-muted-foreground">
                  For urgent situations requiring immediate attention, please call our emergency hotline.
                </p>
              </div>
            </div>
            <Button variant="destructive">
              Emergency Contact: +961 (0)8 123 456
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Report;
