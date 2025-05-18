
import React, { useState } from 'react';
import { Search, FileText, ArrowRight, AlertCircle } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

// Sample services data
const allServices = [
  {
    id: "utilities",
    title: "Utilities & Bills",
    services: [
      {
        id: "water-billing",
        title: "Water Billing Services",
        description: "Information about water billing cycles, payment options, and assistance programs.",
        icon: "💧",
        forms: ["Water Service Application", "Bill Payment Form"],
      },
      {
        id: "waste-management",
        title: "Waste Management",
        description: "Garbage collection schedules, special waste disposal guidelines, and recycling information.",
        icon: "🗑️",
        forms: ["Special Waste Collection Request"],
      },
    ]
  },
  {
    id: "permits",
    title: "Permits & Licenses",
    services: [
      {
        id: "building-permits",
        title: "Building Permits",
        description: "Application process for construction, renovation, and demolition permits.",
        icon: "🏗️",
        forms: ["Building Permit Application", "Demolition Permit Application"],
      },
      {
        id: "business-licenses",
        title: "Business Licenses",
        description: "Requirements and procedures for obtaining and renewing business licenses.",
        icon: "🏪",
        forms: ["Business License Application", "License Renewal Form"],
      },
      {
        id: "event-permits",
        title: "Event Permits",
        description: "Permits for organizing community events, festivals, and gatherings in public spaces.",
        icon: "🎪",
        forms: ["Public Event Application", "Noise Permit Form"],
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    services: [
      {
        id: "road-maintenance",
        title: "Road Maintenance",
        description: "Information on road repair programs, street cleaning, and traffic management initiatives.",
        icon: "🛣️",
        forms: ["Road Maintenance Request"],
      },
      {
        id: "public-lighting",
        title: "Public Lighting",
        description: "Street lighting installation, maintenance requests, and reporting outages.",
        icon: "💡",
        forms: ["Street Light Request", "Outage Report Form"],
      }
    ]
  },
  {
    id: "community",
    title: "Community Programs",
    services: [
      {
        id: "senior-services",
        title: "Senior Citizen Services",
        description: "Programs and resources specifically designed for senior citizens in our community.",
        icon: "👵",
        forms: ["Senior Program Registration"],
      },
      {
        id: "youth-programs",
        title: "Youth Programs",
        description: "Educational and recreational programs for children and teenagers.",
        icon: "👶",
        forms: ["Youth Program Registration", "Scholarship Application"],
      },
      {
        id: "public-health",
        title: "Public Health Services",
        description: "Community health initiatives, vaccination programs, and health education resources.",
        icon: "🏥",
        forms: ["Health Service Inquiry Form"],
      }
    ]
  },
  {
    id: "business",
    title: "Business Services",
    services: [
      {
        id: "economic-development",
        title: "Economic Development",
        description: "Programs to support local businesses, attract investment, and promote economic growth.",
        icon: "📈",
        forms: ["Business Support Application"],
      },
      {
        id: "procurement",
        title: "Municipal Procurement",
        description: "Information on bidding for municipal contracts and vendor registration.",
        icon: "📋",
        forms: ["Vendor Registration Form", "Bid Submission Form"],
      }
    ]
  },
  {
    id: "documents",
    title: "Official Documents",
    services: [
      {
        id: "residency-letter",
        title: "Residency Letter Service",
        description: "Official documentation confirming your residency status in the municipality for legal, educational, or employment purposes.",
        icon: "📄",
        forms: ["Residency Letter Application", "Identity Verification Form"],
      },
      {
        id: "birth-certificates",
        title: "Birth Certificates",
        description: "Services related to obtaining or amending birth certificates and vital records.",
        icon: "👶",
        forms: ["Birth Certificate Request", "Amendment Request Form"],
      }
    ]
  }
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter services based on search query and active tab
  const filteredCategories = allServices.filter(category => {
    if (activeTab !== 'all' && category.id !== activeTab) {
      return false;
    }
    
    if (!searchQuery) return true;
    
    return category.services.some(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Filter individual services based on search query
  const getFilteredServices = (categoryServices: any[]) => {
    if (!searchQuery) return categoryServices;
    
    return categoryServices.filter(service => 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Municipal Services</h1>
            <p className="text-xl opacity-90">
              Discover the range of services provided by the Municipality of Bar Elias to residents and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for services..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="w-full justify-start h-auto p-1">
                <TabsTrigger 
                  value="all" 
                  className="py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  All Services
                </TabsTrigger>
                {allServices.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              {filteredCategories.length > 0 ? (
                <div className="space-y-12">
                  {filteredCategories.map((category) => {
                    const filteredServices = getFilteredServices(category.services);
                    if (filteredServices.length === 0) return null;
                    
                    return (
                      <div key={category.id}>
                        <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredServices.map((service) => (
                            <Card key={service.id} className="overflow-hidden card-hover h-full flex flex-col">
                              <CardContent className="p-6 flex-1">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3 h-[4.5rem]">{service.description}</p>
                                
                                {service.forms.length > 0 && (
                                  <div className="space-y-2">
                                    <h4 className="text-sm font-medium">Available Forms:</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {service.forms.map((form, index) => (
                                        <Badge key={index} variant="outline" className="flex items-center">
                                          <FileText size={12} className="mr-1" />
                                          {form}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                              <CardFooter className="p-0 mt-auto">
                                <Button className="w-full rounded-none" variant="secondary" asChild>
                                  <a href={`/services/${category.id}/${service.id}`}>
                                    View Service Details
                                    <ArrowRight size={16} className="ml-2" />
                                  </a>
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No services found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try changing your search terms to find what you're looking for
                  </p>
                  <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                </div>
              )}
            </TabsContent>

            {allServices.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                {getFilteredServices(category.services).length > 0 ? (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {getFilteredServices(category.services).map((service) => (
                        <Card key={service.id} className="overflow-hidden card-hover h-full flex flex-col">
                          <CardContent className="p-6 flex-1">
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-4 line-clamp-3 h-[4.5rem]">{service.description}</p>
                            
                            {service.forms.length > 0 && (
                              <div className="space-y-2">
                                <h4 className="text-sm font-medium">Available Forms:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {service.forms.map((form, index) => (
                                    <Badge key={index} variant="outline" className="flex items-center">
                                      <FileText size={12} className="mr-1" />
                                      {form}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                          <CardFooter className="p-0 mt-auto">
                            <Button className="w-full rounded-none" variant="secondary" asChild>
                              <a href={`/services/${category.id}/${service.id}`}>
                                View Service Details
                                <ArrowRight size={16} className="ml-2" />
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No services found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try changing your search terms to find what you're looking for
                    </p>
                    <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Request Info Section */}
      <section className="bg-primary-light py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Need a Custom Service?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Contact our citizen services department for assistance 
                with specialized requests or unique situations.
              </p>
              <Button asChild>
                <a href="/contact">Contact Citizen Services</a>
              </Button>
            </div>
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <AlertCircle size={24} className="text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Service Hours</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span>8:00 AM - 4:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday:</span>
                      <span>8:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
