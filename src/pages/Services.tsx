
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  // Service categories with their respective services
  const serviceCategories = [
    {
      title: "Administrative Services",
      description: "Official documents and municipal permits",
      services: [
        {
          title: "Family Registry",
          description: "Access the comprehensive database of all families registered in Bar Elias",
          link: "/families"
        },
        {
          title: "Birth Registration",
          description: "Register newborns and obtain birth certificates",
          link: "#"
        },
        {
          title: "Marriage Certificates",
          description: "Apply for and receive official marriage documentation",
          link: "#"
        },
        {
          title: "Property Registration",
          description: "Register property ownership and transfers",
          link: "#"
        }
      ]
    },
    {
      title: "Business Services",
      description: "Licenses and permissions for commercial activities",
      services: [
        {
          title: "Business Permits",
          description: "Apply for permits to operate businesses in Bar Elias",
          link: "#"
        },
        {
          title: "Commercial Licensing",
          description: "Obtain required licenses for commercial establishments",
          link: "#"
        },
        {
          title: "Market Registration",
          description: "Register for allocated spaces in municipal markets",
          link: "#"
        }
      ]
    },
    {
      title: "Public Works",
      description: "Infrastructure maintenance and development",
      services: [
        {
          title: "Road Maintenance",
          description: "Report issues with roads and sidewalks",
          link: "#"
        },
        {
          title: "Water & Sewage",
          description: "Water supply and sewage system services",
          link: "#"
        },
        {
          title: "Public Lighting",
          description: "Report street light issues and request installation",
          link: "#"
        }
      ]
    },
    {
      title: "Environmental Services",
      description: "Waste management and environmental protection",
      services: [
        {
          title: "Waste Collection",
          description: "Schedules and special collection requests",
          link: "#"
        },
        {
          title: "Recycling Programs",
          description: "Information about municipal recycling initiatives",
          link: "#"
        },
        {
          title: "Green Spaces",
          description: "Parks and public green areas maintenance",
          link: "#"
        }
      ]
    }
  ];

  return (
    <div className="container-custom section-padding">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary mb-2">Municipal Services</h1>
        <p className="text-lg text-muted-foreground">Explore the services offered by the Municipality of Bar Elias</p>
      </div>

      <div className="space-y-10">
        {serviceCategories.map((category, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{category.title}</h2>
            <p className="text-muted-foreground mb-6">{category.description}</p>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className="card-hover">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild>
                      <Link to={service.link}>Access Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
