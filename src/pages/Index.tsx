import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle,
  FileText, 
  Calendar, 
  Phone, 
  Clock, 
  ArrowRight,
  Megaphone,
  Building,
  MapPin,
  Image,
  Play,
  Film,
  Trophy,
  GraduationCap,
  UserPlus,
  HelpingHand,
  Hospital
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Hero banner data
const heroBanners = [
  {
    title: "Welcome to Bar Elias Municipality",
    subtitle: "Serving our community with dedication and excellence",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    buttonText: "Discover Services",
    buttonLink: "/services",
  },
  {
    title: "Report Local Issues",
    subtitle: "Help us improve our town by reporting infrastructure problems",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    buttonText: "Report Now",
    buttonLink: "/report",
  },
  {
    title: "Stay Updated",
    subtitle: "Get the latest news and announcements from Bar Elias Municipality",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    buttonText: "View News",
    buttonLink: "/news",
  }
];

// News items data - Updated with new content
const latestNews = [
  {
    id: 1,
    title: "Football Game: Al Nahda vs Naser Club",
    date: "July 25, 2025",
    excerpt: "An exciting football match between Al Nahda and Naser clubs will take place at Bar Elias Municipal Stadium. Join us for this thrilling local derby that promises great action and community spirit.",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: Trophy // Using Trophy icon as alternative
  },
  {
    id: 2,
    title: "Opening of the Barelias Hospital",
    date: "August 12, 2025",
    excerpt: "We are proud to announce the opening of the new Barelias Hospital, a state-of-the-art medical facility designed to provide comprehensive healthcare services to our community. This modern facility features advanced medical equipment.",
    image: "/lovable-uploads/976951c3-614b-4064-8fa4-a28de2757dde.png",
    icon: Hospital // Using Hospital icon
  },
  {
    id: 3,
    title: "Grade 12 Graduation Ceremony",
    date: "September 5, 2025",
    excerpt: "Celebrate the achievements of Bar Elias Grade 12 students as they graduate and prepare for the next chapter of their lives. The ceremony will take place at the Municipal Cultural Center with awards presentation.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    icon: GraduationCap
  }
];

// Quick links data
const quickLinks = [
  {
    title: "Report an Issue",
    description: "Report infrastructure problems, street issues, or other concerns",
    icon: AlertTriangle,
    link: "/report",
    color: "bg-red-500"
  },
  {
    title: "News & Announcements",
    description: "Stay updated with the latest municipal news and announcements",
    icon: Megaphone,
    link: "/news",
    color: "bg-blue-500"
  },
  {
    title: "Upcoming Events",
    description: "View and participate in community events and activities",
    icon: Calendar,
    link: "/events",
    color: "bg-green-500"
  },
  {
    title: "Contact Us",
    description: "Get in touch with municipal officials and departments",
    icon: Phone,
    link: "/contact",
    color: "bg-purple-500"
  }
];

// Media gallery data with locations
const mediaGallery = [
  {
    id: 1,
    type: "image",
    location: "Bar Elias",
    title: "Public Garden",
    thumbnail: "/lovable-uploads/d9ee6bd0-56d6-4849-b8dc-f31860d00ae5.png"
  },
  {
    id: 2,
    type: "image",
    location: "Bar Elias",
    title: "Municipal Hospital",
    thumbnail: "/lovable-uploads/defc9481-6868-4602-881b-86983fbaf101.png"
  },
  {
    id: 3,
    type: "image",
    location: "Madinah",
    title: "Town Center Renovation",
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    type: "image",
    location: "Riyadh",
    title: "Municipal Building",
    thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    type: "image",
    location: "Jeddah",
    title: "Infrastructure Works",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    type: "image",
    location: "Abha",
    title: "Parks and Green Spaces",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Index = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Rotating Banners */}
      <section className="relative h-[90vh] min-h-[600px] bg-gray-900">
        {heroBanners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBanner === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden={currentBanner !== index}
          >
            <div className="container-custom h-full flex flex-col justify-center items-start">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
                  {banner.subtitle}
                </p>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-white animate-fade-in"
                  asChild
                >
                  <Link to={banner.buttonLink}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Banner Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {heroBanners.map((banner, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentBanner === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}: ${banner.title}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link to={link.link} key={index}>
                <Card className="p-6 h-full flex flex-col card-hover">
                  <div className={`${link.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                    <link.icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                  <p className="text-muted-foreground flex-grow">{link.description}</p>
                  <div className="mt-4 flex items-center text-primary">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-1" aria-hidden="true" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements Section with Fixed Read More positioning */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Latest News</h2>
            <Button variant="outline" asChild>
              <Link to="/news">
                View All News
                <ArrowRight size={16} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <Card key={item.id} className="overflow-hidden card-hover flex flex-col h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} - News event on ${item.date}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 h-[4.5rem]">{item.excerpt}</p>
                  <div className="mt-auto">
                    <Link to={`/news/${item.id}`} className="text-primary flex items-center">
                      Read More
                      <ArrowRight size={16} className="ml-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Media Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-semibold">Visual Assets</h2>
              <p className="text-muted-foreground mt-2">
                Explore our media library and discover 2000+ visuals for your marketing and promotions
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/gallery">
                View All
                <ArrowRight size={16} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          
          {/* Desktop Gallery (Grid Layout) */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {mediaGallery.map((item) => (
              <Link to={`/gallery/${item.id}`} key={item.id}>
                <Card className="overflow-hidden card-hover group">
                  <div className="relative h-60">
                    <img 
                      src={item.thumbnail} 
                      alt={`${item.title} - ${item.type} from ${item.location}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                          <Play className="text-white" size={30} aria-hidden="true" />
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Mobile Gallery (Carousel) */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {mediaGallery.map((item) => (
                  <CarouselItem key={item.id}>
                    <Link to={`/gallery/${item.id}`}>
                      <Card className="overflow-hidden card-hover group">
                        <div className="relative h-60">
                          <img 
                            src={item.thumbnail} 
                            alt={`${item.title} - ${item.type} from ${item.location}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                                <Play className="text-white" size={30} aria-hidden="true" />
                              </div>
                            </div>
                          )}
                        </div>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative inset-auto mr-2" aria-label="Previous slide" />
                <CarouselNext className="relative inset-auto ml-2" aria-label="Next slide" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* About Municipality Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">About Bar Elias Municipality</h2>
              <p className="mb-4 text-lg">
                The Municipality of Bar Elias is dedicated to providing high-quality public services and fostering community development to enhance the quality of life for all residents.
              </p>
              <p className="mb-6 text-muted-foreground">
                Located in the beautiful Bekaa Valley, Bar Elias is a thriving town with rich history and culture. 
                Our municipal administration works tirelessly to implement infrastructure projects, maintain public facilities, and create a sustainable environment for future generations.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link to="/about">
                    Learn More
                    <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Bar Elias Municipality Building - Main administrative center located in the town center"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center">
                  <Building size={24} className="text-white mr-2" aria-hidden="true" />
                  <h3 className="text-xl text-white font-medium">
                    Municipal Building
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Volunteer Component */}
      <section className="bg-primary text-white py-12 mb-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold mb-2">Become a Volunteer</h2>
              <p className="text-white/80">Join our community projects and make a difference in Bar Elias</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/volunteer">
                  <UserPlus className="mr-2" size={18} aria-hidden="true" />
                  Register as Volunteer
                </Link>
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/projects">
                  <HelpingHand className="mr-2" size={18} aria-hidden="true" />
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="bg-accent text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold mb-2">Need Immediate Assistance?</h2>
              <p className="text-white/80">Our emergency services are available 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Emergency Contacts
              </Button>
              <Button className="bg-white text-accent hover:bg-white/90">
                Call Hotline
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
