
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, CheckCheck, Mail, User, UserPlus, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define form schema using Zod
const volunteerFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  interests: z.string().min(1, { message: "Please select an area of interest." }),
  availability: z.string().min(1, { message: "Please select your availability." }),
  experience: z.string().optional(),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

const Volunteer = () => {
  const navigate = useNavigate();

  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      interests: "",
      availability: "",
      experience: "",
      agreeToTerms: false,
    },
  });

  function onSubmit(data: VolunteerFormValues) {
    // In a real app, we would send this data to the server
    console.log(data);
    
    toast({
      title: "Volunteer Registration Successful",
      description: "Thank you for volunteering! We'll be in touch soon.",
    });
    
    // Reset the form
    form.reset();
    
    // Optional: Redirect to confirmation page or home page
    // navigate('/');
  }

  return (
    <div className="container-custom section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Become a Volunteer</h1>
          <p className="text-lg text-muted-foreground">
            Join our community of volunteers and make a difference in Bar Elias.
            We have various projects and activities where your help would be valuable.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-6 w-6 text-primary" />
              Volunteer Registration Form
            </CardTitle>
            <CardDescription>
              Fill out the form below to register as a volunteer. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Areas of Interest *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="community">Community Events</SelectItem>
                            <SelectItem value="education">Education Programs</SelectItem>
                            <SelectItem value="environment">Environmental Projects</SelectItem>
                            <SelectItem value="health">Health Services</SelectItem>
                            <SelectItem value="youth">Youth Programs</SelectItem>
                            <SelectItem value="elderly">Elderly Support</SelectItem>
                            <SelectItem value="maintenance">City Maintenance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Availability *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select availability" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays</SelectItem>
                            <SelectItem value="evenings">Evenings</SelectItem>
                            <SelectItem value="weekends">Weekends</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Previous Volunteer Experience (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about any previous volunteer experience you may have..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Include any relevant skills or experience that might be useful.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the terms and conditions *
                        </FormLabel>
                        <FormDescription>
                          By checking this box, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full md:w-auto">
                  <UserPlus className="mr-2 h-4 w-4" /> Register as Volunteer
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-start border-t pt-6 text-sm text-muted-foreground">
            <div className="flex items-center mb-2">
              <CheckCheck className="mr-2 h-4 w-4 text-primary" />
              <span>Your information is secure and will only be used for volunteer coordination.</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4 text-primary" />
              <span>Join over 200+ volunteers already making an impact in our community.</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Volunteer;
