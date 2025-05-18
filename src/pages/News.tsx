
import React, { useState } from 'react';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample news data
const allNews = [
  {
    id: 1,
    title: "Water Supply Improvement Project Begins Next Week",
    date: "May 15, 2025",
    excerpt: "The municipality is launching a comprehensive water infrastructure upgrade project to improve water quality and supply reliability across all neighborhoods.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Infrastructure",
    content: "The municipality is launching a comprehensive water infrastructure upgrade project..."
  },
  {
    id: 2,
    title: "New Public Park Opening Celebration",
    date: "May 10, 2025",
    excerpt: "Join us for the grand opening of our new community park featuring playgrounds, walking paths, and green spaces for all residents to enjoy.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Events",
    content: "Join us for the grand opening of our new community park..."
  },
  {
    id: 3,
    title: "Municipal Budget Approved for Next Fiscal Year",
    date: "May 5, 2025",
    excerpt: "The town council has approved the municipal budget for the upcoming fiscal year, with increased funding for infrastructure and community services.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21ed1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Administration",
    content: "The town council has approved the municipal budget..."
  },
  {
    id: 4,
    title: "Summer Youth Programs Registration Now Open",
    date: "April 28, 2025",
    excerpt: "Registration for summer youth programs is now open. Sign up your children for sports, arts, and educational activities during the summer break.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Community",
    content: "Registration for summer youth programs is now open..."
  },
  {
    id: 5,
    title: "Road Maintenance Schedule for June",
    date: "April 22, 2025",
    excerpt: "The public works department has announced the road maintenance schedule for June. Check which streets will be affected and plan your routes accordingly.",
    image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Infrastructure",
    content: "The public works department has announced the road maintenance schedule..."
  },
  {
    id: 6,
    title: "Community Meeting on Environmental Initiatives",
    date: "April 15, 2025",
    excerpt: "The municipality invites all residents to a community meeting to discuss upcoming environmental initiatives and sustainability projects.",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Environment",
    content: "The municipality invites all residents to a community meeting..."
  },
  {
    id: 7,
    title: "New Waste Collection Schedule Starts June 1st",
    date: "April 10, 2025",
    excerpt: "Starting June 1st, the municipality will implement a new waste collection schedule to improve efficiency and promote recycling.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Environment",
    content: "Starting June 1st, the municipality will implement a new waste collection schedule..."
  },
  {
    id: 8,
    title: "Public Safety Workshop Series Announced",
    date: "April 5, 2025",
    excerpt: "The municipality will host a series of public safety workshops covering topics such as home security, emergency preparedness, and fire safety.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Safety",
    content: "The municipality will host a series of public safety workshops..."
  }
];

// Available categories for filtering
const categories = [
  "All Categories",
  "Infrastructure", 
  "Events", 
  "Administration", 
  "Community", 
  "Environment", 
  "Safety"
];

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // Filter news based on search query and category
  const filteredNews = allNews.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">News & Announcements</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest news, announcements, and developments from the Municipality of Bar Elias.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search news..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select 
              value={selectedCategory} 
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden card-hover">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={`${item.title} - ${item.category} article from ${item.date}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={14} className="mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center text-sm bg-primary-light text-primary px-2 py-1 rounded">
                        <Tag size={14} className="mr-1" />
                        {item.category}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.excerpt}</p>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button variant="link" className="p-0 text-primary flex items-center">
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                Try changing your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-light py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest news and announcements delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="flex-grow"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
