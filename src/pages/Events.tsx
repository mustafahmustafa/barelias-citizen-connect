
import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Tag, Calendar as CalendarComponent, Image, Filter, X } from 'lucide-react';
import { format, isAfter, isBefore, isEqual, startOfDay } from 'date-fns';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider
} from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

// Sample events data
const allEvents = [
  {
    id: 1,
    title: "Town Hall Meeting",
    date: new Date(2025, 4, 28),
    time: "6:00 PM - 8:00 PM",
    location: "Municipal Building, Main Hall",
    category: "Municipal",
    description: "Monthly town hall meeting to discuss current issues and upcoming initiatives. All citizens are welcome to attend and participate.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Community Clean-up Day",
    date: new Date(2025, 5, 5),
    time: "9:00 AM - 12:00 PM",
    location: "Central Square",
    category: "Community",
    description: "Join us for a community-wide clean-up effort. Volunteers will help collect litter, plant flowers, and beautify public spaces.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Summer Festival Planning Committee",
    date: new Date(2025, 5, 12),
    time: "5:30 PM - 7:00 PM",
    location: "Community Center",
    category: "Cultural",
    description: "Planning meeting for the annual summer festival. Committee members will discuss event logistics, activities, and vendor applications.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Public Infrastructure Forum",
    date: new Date(2025, 5, 15),
    time: "7:00 PM - 9:00 PM",
    location: "Municipal Building, Conference Room A",
    category: "Infrastructure",
    description: "Public forum to discuss upcoming infrastructure projects, including road repairs, public lighting, and water system upgrades.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Youth Sports Tournament",
    date: new Date(2025, 5, 18),
    time: "10:00 AM - 4:00 PM",
    location: "Community Sports Field",
    category: "Sports",
    description: "Annual youth sports tournament featuring soccer, basketball, and volleyball competitions for different age groups.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Senior Citizens Social",
    date: new Date(2025, 5, 20),
    time: "2:00 PM - 4:00 PM",
    location: "Senior Center",
    category: "Community",
    description: "Monthly social gathering for senior citizens featuring music, refreshments, and social activities.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Environmental Workshop",
    date: new Date(2025, 5, 25),
    time: "4:00 PM - 5:30 PM",
    location: "Community Library",
    category: "Environment",
    description: "Educational workshop on sustainable practices and environmental conservation for residents of all ages.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Business Development Meeting",
    date: new Date(2025, 6, 2),
    time: "11:00 AM - 1:00 PM",
    location: "Chamber of Commerce",
    category: "Business",
    description: "Meeting for local business owners to discuss economic development initiatives and networking opportunities.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Public Health Seminar",
    date: new Date(2025, 6, 10),
    time: "6:30 PM - 8:00 PM",
    location: "Community Center",
    category: "Health",
    description: "Informational seminar on public health issues, vaccinations, and available health services in the community.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Grade 12 Graduation Ceremony",
    date: new Date(2025, 8, 5), // September 5, 2025
    time: "5:00 PM - 8:00 PM",
    location: "Municipal Cultural Center",
    category: "Education",
    description: "Celebrate the achievements of Bar Elias Grade 12 students as they graduate and prepare for the next chapter of their lives. The ceremony will include speeches, diploma presentations, and a reception for graduates and their families.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Football Game: Al Nahda vs Naser Club",
    date: new Date(2025, 5, 22), // June 22, 2025
    time: "4:00 PM - 6:00 PM",
    location: "Bar Elias Municipal Stadium",
    category: "Sports",
    description: "Come support your local teams in this exciting football match between Al Nahda and Naser Club. Refreshments will be available, and tickets can be purchased at the stadium entrance.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Event categories with colors
const eventCategories = {
  "Municipal": "bg-blue-500",
  "Community": "bg-green-500",
  "Cultural": "bg-purple-500",
  "Infrastructure": "bg-amber-500",
  "Sports": "bg-red-500",
  "Environment": "bg-teal-500",
  "Business": "bg-orange-500",
  "Health": "bg-rose-500",
  "Education": "bg-indigo-500"
};

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState('list'); // 'list' or 'calendar'
  
  // Filter states
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState<{start?: Date, end?: Date}>({});
  const [sortBy, setSortBy] = useState<string>('date-asc');

  // Get list of available categories from events
  const categories = Object.keys(eventCategories);
  
  // Apply filters to events
  const filterEvents = () => {
    return allEvents.filter(event => {
      // Filter by date if selected
      if (date) {
        const eventDate = startOfDay(event.date);
        const selectedDate = startOfDay(date);
        if (!(isEqual(eventDate, selectedDate))) {
          return false;
        }
      }
      
      // Filter by category if any selected
      if (selectedCategories.length > 0 && !selectedCategories.includes(event.category)) {
        return false;
      }
      
      // Filter by date range if set
      if (dateRange.start && isBefore(event.date, startOfDay(dateRange.start))) {
        return false;
      }
      
      if (dateRange.end && isAfter(event.date, startOfDay(dateRange.end))) {
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      // Sort events
      switch (sortBy) {
        case 'date-asc':
          return a.date.getTime() - b.date.getTime();
        case 'date-desc':
          return b.date.getTime() - a.date.getTime();
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return a.date.getTime() - b.date.getTime();
      }
    });
  };
  
  // Get filtered events
  const filteredEvents = filterEvents();
  
  // Check if any filters are active
  const isFilterActive = selectedCategories.length > 0 || dateRange.start || dateRange.end;
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setDateRange({});
  };
  
  // Handle category selection/deselection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };
  
  // Get unique event dates for the calendar
  const eventDates = allEvents.map(event => format(event.date, 'yyyy-MM-dd'));

  // Function to render event cards
  const renderEventCard = (event: any) => (
    <Card key={event.id} className="card-hover overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Image Container with improved height */}
        <div className="relative h-64 md:h-auto overflow-hidden">
          <AspectRatio ratio={4/5} className="h-full">
            <img 
              src={event.image} 
              alt={event.title} 
              className="h-full w-full object-cover transition-transform hover:scale-105 duration-700"
            />
          </AspectRatio>
          
          {/* Date overlay on the image */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm shadow-lg rounded-lg p-3 text-center min-w-[80px]">
            <div className="text-xs font-semibold uppercase text-primary">
              {format(event.date, 'MMM')}
            </div>
            <div className="text-2xl font-bold text-primary mt-1">
              {format(event.date, 'd')}
            </div>
            <div className="text-xs text-muted-foreground">
              {format(event.date, 'yyyy')}
            </div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="p-6 md:col-span-3">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={(eventCategories as any)[event.category] || "bg-gray-500"}>
              {event.category}
            </Badge>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{event.description}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mt-auto">
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-primary" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-primary" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Events & Calendar</h1>
            <p className="text-xl opacity-90">
              Stay informed about upcoming municipal events, meetings, and community activities in Bar Elias.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar & Events Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="list" value={view} onValueChange={setView} className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <TabsList>
                <TabsTrigger value="list" className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  List View
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center">
                  <CalendarComponent className="mr-2 h-4 w-4" />
                  Calendar View
                </TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[240px] justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      modifiers={{
                        hasEvent: (day) => 
                          eventDates.includes(format(day, 'yyyy-MM-dd'))
                      }}
                      modifiersStyles={{
                        hasEvent: { fontWeight: 'bold', textDecoration: 'underline' }
                      }}
                      className={`p-3 pointer-events-auto`}
                    />
                  </PopoverContent>
                </Popover>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setDate(new Date())}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    if (date) {
                      const nextDay = new Date(date);
                      nextDay.setDate(date.getDate() + 1);
                      setDate(nextDay);
                    }
                  }}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant={isFilterActive ? "default" : "outline"}
                  size="icon"
                  onClick={() => setShowFilters(!showFilters)}
                  className={isFilterActive ? "relative" : ""}
                >
                  {isFilterActive ? (
                    <>
                      <Filter className="h-4 w-4" />
                      <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {selectedCategories.length + (dateRange.start || dateRange.end ? 1 : 0)}
                      </span>
                    </>
                  ) : (
                    <Filter className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="bg-card border rounded-lg p-4 mb-6 animate-in fade-in-0 zoom-in-95 duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Filter Events</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground hover:text-foreground">
                    <X className="h-3.5 w-3.5 mr-1" /> Clear
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Category filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Categories</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label 
                            htmlFor={`category-${category}`}
                            className="text-sm flex items-center cursor-pointer"
                          >
                            <div className={`h-3 w-3 rounded-full ${(eventCategories as any)[category] || "bg-gray-500"} mr-2`}></div>
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Date range filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Date Range</h4>
                    <div className="space-y-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left text-sm"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange.start ? format(dateRange.start, 'PPP') : <span>Start date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dateRange.start}
                            onSelect={(date) => setDateRange(prev => ({ ...prev, start: date }))}
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left text-sm"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateRange.end ? format(dateRange.end, 'PPP') : <span>End date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dateRange.end}
                            onSelect={(date) => setDateRange(prev => ({ ...prev, end: date }))}
                            fromDate={dateRange.start}
                            className="p-3 pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  {/* Sort filter */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Sort By</h4>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sort by..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date-asc">Date (Newest First)</SelectItem>
                        <SelectItem value="date-desc">Date (Oldest First)</SelectItem>
                        <SelectItem value="title-asc">Title (A-Z)</SelectItem>
                        <SelectItem value="title-desc">Title (Z-A)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mb-4">
              {isFilterActive && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedCategories.map(category => (
                    <Badge key={category} variant="secondary" className="flex items-center gap-1">
                      <div className={`h-2 w-2 rounded-full ${(eventCategories as any)[category] || "bg-gray-500"}`}></div>
                      {category}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => toggleCategory(category)}
                      />
                    </Badge>
                  ))}
                  
                  {(dateRange.start || dateRange.end) && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {dateRange.start ? format(dateRange.start, 'MMM d') : '...'}
                      {' to '}
                      {dateRange.end ? format(dateRange.end, 'MMM d, yyyy') : '...'}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => setDateRange({})}
                      />
                    </Badge>
                  )}
                </div>
              )}
            </div>

            <TabsContent value="list" className="mt-0">
              <div className="space-y-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => renderEventCard(event))
                ) : (
                  <div>
                    <div className="text-center py-8 bg-muted rounded-lg mb-10">
                      <h3 className="text-xl font-medium mb-2">No events found</h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your filters or selecting a different date
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={clearFilters}
                        className="mb-4"
                      >
                        Clear Filters
                      </Button>
                    </div>
                    
                    {!isFilterActive && (
                      <>
                        <h3 className="text-2xl font-semibold mb-6">All Upcoming Events</h3>
                        <div className="space-y-6">
                          {allEvents
                            .sort((a, b) => a.date.getTime() - b.date.getTime())
                            .map((event) => renderEventCard(event))
                          }
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-0">
              <div className="bg-white p-6 rounded-lg border">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold">
                    {date ? format(date, 'MMMM yyyy') : format(new Date(), 'MMMM yyyy')}
                  </h2>
                </div>
                
                {/* Simplified Calendar View */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center font-medium text-sm py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-2">
                  {/* Placeholder for calendar days */}
                  {Array.from({ length: 35 }).map((_, index) => {
                    const currentDay = new Date(date || new Date());
                    currentDay.setDate(1);
                    const firstDayOfMonth = currentDay.getDay();
                    const dayNumber = index - firstDayOfMonth + 1;
                    currentDay.setDate(dayNumber);
                    
                    const isCurrentMonth = currentDay.getMonth() === (date?.getMonth() || new Date().getMonth());
                    const isToday = format(currentDay, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
                    const isSelected = date && format(currentDay, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
                    
                    const dayEvents = allEvents.filter(event => 
                      format(event.date, 'yyyy-MM-dd') === format(currentDay, 'yyyy-MM-dd')
                    );
                    
                    const hasEvents = dayEvents.length > 0;
                    
                    return (
                      <button
                        key={index}
                        className={`
                          h-20 p-1 text-left rounded-md transition-colors relative
                          ${isCurrentMonth ? '' : 'text-gray-300'}
                          ${isToday ? 'bg-primary-light' : ''}
                          ${isSelected ? 'ring-2 ring-primary' : ''}
                          ${hasEvents ? 'font-medium' : ''}
                          hover:bg-gray-50
                        `}
                        onClick={() => setDate(new Date(currentDay))}
                        disabled={!isCurrentMonth}
                      >
                        <span className="text-sm">{dayNumber}</span>
                        {hasEvents && (
                          <div className="absolute bottom-1 left-1 right-1">
                            <div className="flex flex-wrap gap-1">
                              {dayEvents.slice(0, 2).map((event, eventIndex) => (
                                <div 
                                  key={eventIndex}
                                  className={`h-2 w-2 rounded-full ${(eventCategories as any)[event.category] || "bg-gray-500"}`}
                                />
                              ))}
                              {dayEvents.length > 2 && (
                                <div className="text-xs font-normal text-muted-foreground ml-1">
                                  +{dayEvents.length - 2}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Event Categories Legend */}
                <div className="mt-8 pt-4 border-t">
                  <h4 className="text-sm font-medium mb-2">Event Categories</h4>
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(eventCategories).map(([category, colorClass]) => (
                      <div key={category} className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${colorClass} mr-2`}></div>
                        <span className="text-sm">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Submit Event Section */}
      <section className="bg-primary-light py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Have a Community Event?</h2>
            <p className="text-muted-foreground mb-6">
              Submit your community event for consideration to be added to our municipal calendar
            </p>
            <Button size="lg">Submit Your Event</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
