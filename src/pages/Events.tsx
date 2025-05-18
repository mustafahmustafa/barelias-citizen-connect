
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight, Tag, Calendar as CalendarComponent } from 'lucide-react';
import { format } from 'date-fns';
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

// Sample events data
const allEvents = [
  {
    id: 1,
    title: "Town Hall Meeting",
    date: new Date(2025, 4, 28),
    time: "6:00 PM - 8:00 PM",
    location: "Municipal Building, Main Hall",
    category: "Municipal",
    description: "Monthly town hall meeting to discuss current issues and upcoming initiatives. All citizens are welcome to attend and participate."
  },
  {
    id: 2,
    title: "Community Clean-up Day",
    date: new Date(2025, 5, 5),
    time: "9:00 AM - 12:00 PM",
    location: "Central Square",
    category: "Community",
    description: "Join us for a community-wide clean-up effort. Volunteers will help collect litter, plant flowers, and beautify public spaces."
  },
  {
    id: 3,
    title: "Summer Festival Planning Committee",
    date: new Date(2025, 5, 12),
    time: "5:30 PM - 7:00 PM",
    location: "Community Center",
    category: "Cultural",
    description: "Planning meeting for the annual summer festival. Committee members will discuss event logistics, activities, and vendor applications."
  },
  {
    id: 4,
    title: "Public Infrastructure Forum",
    date: new Date(2025, 5, 15),
    time: "7:00 PM - 9:00 PM",
    location: "Municipal Building, Conference Room A",
    category: "Infrastructure",
    description: "Public forum to discuss upcoming infrastructure projects, including road repairs, public lighting, and water system upgrades."
  },
  {
    id: 5,
    title: "Youth Sports Tournament",
    date: new Date(2025, 5, 18),
    time: "10:00 AM - 4:00 PM",
    location: "Community Sports Field",
    category: "Sports",
    description: "Annual youth sports tournament featuring soccer, basketball, and volleyball competitions for different age groups."
  },
  {
    id: 6,
    title: "Senior Citizens Social",
    date: new Date(2025, 5, 20),
    time: "2:00 PM - 4:00 PM",
    location: "Senior Center",
    category: "Community",
    description: "Monthly social gathering for senior citizens featuring music, refreshments, and social activities."
  },
  {
    id: 7,
    title: "Environmental Workshop",
    date: new Date(2025, 5, 25),
    time: "4:00 PM - 5:30 PM",
    location: "Community Library",
    category: "Environment",
    description: "Educational workshop on sustainable practices and environmental conservation for residents of all ages."
  },
  {
    id: 8,
    title: "Business Development Meeting",
    date: new Date(2025, 6, 2),
    time: "11:00 AM - 1:00 PM",
    location: "Chamber of Commerce",
    category: "Business",
    description: "Meeting for local business owners to discuss economic development initiatives and networking opportunities."
  },
  {
    id: 9,
    title: "Public Health Seminar",
    date: new Date(2025, 6, 10),
    time: "6:30 PM - 8:00 PM",
    location: "Community Center",
    category: "Health",
    description: "Informational seminar on public health issues, vaccinations, and available health services in the community."
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
  "Health": "bg-rose-500"
};

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState('list'); // 'list' or 'calendar'
  
  // Filter events for the selected date
  const filteredEvents = date 
    ? allEvents.filter(event => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear()
      )
    : allEvents;
  
  // Get unique event dates for the calendar
  const eventDates = allEvents.map(event => format(event.date, 'yyyy-MM-dd'));

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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
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
              </div>
            </div>

            <TabsContent value="list" className="mt-0">
              <div className="space-y-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <Card key={event.id} className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="bg-primary/10 rounded p-4 text-center min-w-[100px]">
                            <div className="text-sm text-primary font-medium">
                              {format(event.date, 'MMM')}
                            </div>
                            <div className="text-3xl font-bold text-primary">
                              {format(event.date, 'd')}
                            </div>
                            <div className="text-sm text-primary font-medium">
                              {format(event.date, 'yyyy')}
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge className={(eventCategories as any)[event.category] || "bg-gray-500"}>
                                {event.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
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
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No events on this date</h3>
                    <p className="text-muted-foreground mb-4">
                      Try selecting a different date or check back later
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setDate(new Date())}
                    >
                      Back to Today
                    </Button>
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
