
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
  MapPin
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

// News items data
const latestNews = [
  {
    id: 1,
    title: "Water Supply Improvement Project Begins Next Week",
    date: "May 15, 2025",
    excerpt: "The municipality is launching a comprehensive water infrastructure upgrade project to improve water quality and supply reliability.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "New Public Park Opening Celebration",
    date: "May 10, 2025",
    excerpt: "Join us for the grand opening of our new community park featuring playgrounds, walking paths, and green spaces for all residents.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Municipal Budget Approved for Next Fiscal Year",
    date: "May 5, 2025",
    excerpt: "The town council has approved the municipal budget for the upcoming fiscal year, with increased funding for infrastructure and community services.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21ed1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

// Events data
const upcomingEvents = [
  {
    id: 1,
    title: "Town Hall Meeting",
    date: "May 28, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Municipal Building, Main Hall"
  },
  {
    id: 2,
    title: "Community Clean-up Day",
    date: "June 5, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Central Square"
  },
  {
    id: 3,
    title: "Summer Festival Planning Committee",
    date: "June 12, 2025",
    time: "5:30 PM - 7:00 PM",
    location: "Community Center"
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
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentBanner === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
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
                    <link.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                  <p className="text-muted-foreground flex-grow">{link.description}</p>
                  <div className="mt-4 flex items-center text-primary">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Announcements Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Latest News</h2>
            <Button variant="outline" asChild>
              <Link to="/news">
                View All News
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <Card key={item.id} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="text-primary flex items-center">
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Upcoming Events</h2>
            <Button variant="outline" asChild>
              <Link to="/events">
                View Calendar
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="card-hover">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 rounded p-2 text-center min-w-[60px]">
                      <div className="text-sm text-primary font-medium">
                        {event.date.split(',')[0]}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center">
                      <Clock size={18} className="mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link to={`/events/${event.id}`} className="text-primary flex items-center">
                      Event Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
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
                    <ArrowRight size={16} className="ml-2" />
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
                alt="Bar Elias Municipality Building"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center">
                  <Building size={24} className="text-white mr-2" />
                  <h3 className="text-xl text-white font-medium">
                    Municipal Building
                  </h3>
                </div>
              </div>
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
