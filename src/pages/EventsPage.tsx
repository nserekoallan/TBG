import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Calendar, Clock, MapPin, Users, Search, Plus } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [rsvpStatus, setRsvpStatus] = useState<{[key: string]: boolean}>({});

  const categories = ['All', 'Academic', 'Social', 'Sports', 'Cultural', 'Career', 'Leadership'];

  const events = [
    {
      id: 'innovation-hub',
      title: 'Innovation Hub Launch',
      description: 'Grand opening of the new student innovation and entrepreneurship center with guest speakers and networking opportunities.',
      date: '2024-02-18',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Hall, Block A',
      category: 'Academic',
      attendees: 245,
      maxAttendees: 300,
      organizer: 'Student Council',
      image: '/timothy-2.jpg',
      featured: true
    },
    {
      id: 'town-hall',
      title: 'Student Town Hall Meeting',
      description: 'Monthly forum for students to discuss university policies, share feedback, and propose improvements.',
      date: '2024-02-20',
      time: '2:00 PM - 4:00 PM',
      location: 'Freedom Square',
      category: 'Leadership',
      attendees: 180,
      maxAttendees: 500,
      organizer: 'Timothy Bulumba',
      image: '/timothy-3.jpg',
      featured: true
    },
    {
      id: 'career-fair',
      title: 'Annual Career Fair 2024',
      description: 'Connect with leading employers, attend workshops, and explore internship and job opportunities.',
      date: '2024-02-25',
      time: '9:00 AM - 5:00 PM',
      location: 'Sports Complex',
      category: 'Career',
      attendees: 420,
      maxAttendees: 1000,
      organizer: 'Career Services',
      image: '/timothy-4.jpg',
      featured: false
    },
    {
      id: 'cultural-night',
      title: 'International Cultural Night',
      description: 'Celebrate diversity with performances, food, and exhibitions from various cultural groups on campus.',
      date: '2024-03-02',
      time: '6:00 PM - 11:00 PM',
      location: 'University Gardens',
      category: 'Cultural',
      attendees: 156,
      maxAttendees: 400,
      organizer: 'International Students Association',
      image: '/timothy-5.jpg',
      featured: false
    },
    {
      id: 'research-symposium',
      title: 'Undergraduate Research Symposium',
      description: 'Showcase of outstanding undergraduate research projects across all faculties with presentations and poster sessions.',
      date: '2024-03-08',
      time: '8:00 AM - 6:00 PM',
      location: 'Senate Building',
      category: 'Academic',
      attendees: 89,
      maxAttendees: 200,
      organizer: 'Research Office',
      image: '/timothy-6.jpg',
      featured: false
    }
  ];

  const handleRSVP = (eventId: string) => {
    setRsvpStatus(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
    
    // In a real app, this would make an API call
    const isRSVPing = !rsvpStatus[eventId];
    alert(isRSVPing ? 'RSVP confirmed! You will receive a confirmation email.' : 'RSVP cancelled.');
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEvents = events.filter(event => event.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Campus Events</h1>
                <p className="text-gray-600">Discover and join university activities</p>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredEvents.map(event => (
              <Card key={event.id} className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {event.category}
                    </Badge>
                    <div className="text-right text-sm text-gray-600">
                      <div className="font-semibold">{new Date(event.date).toLocaleDateString('en-UG', { month: 'short', day: 'numeric' })}</div>
                      <div>{event.time.split(' - ')[0]}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}/{event.maxAttendees} attending</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleRSVP(event.id)}
                    className={rsvpStatus[event.id] ? 
                      "bg-green-600 hover:bg-green-700 w-full" : 
                      "bg-blue-600 hover:bg-blue-700 w-full"
                    }
                  >
                    {rsvpStatus[event.id] ? 'RSVP Confirmed ✓' : 'RSVP Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="container mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {selectedCategory === 'All' ? 'All Events' : `${selectedCategory} Events`}
          <span className="text-gray-500 text-base font-normal ml-2">
            ({filteredEvents.length} events)
          </span>
        </h2>
        
        <div className="grid gap-6">
          {filteredEvents.map(event => (
            <Card key={event.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString('en-UG', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}/{event.maxAttendees} attending</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Organized by {event.organizer}
                      </div>
                      <Button
                        onClick={() => handleRSVP(event.id)}
                        variant={rsvpStatus[event.id] ? "default" : "outline"}
                        className={rsvpStatus[event.id] ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {rsvpStatus[event.id] ? 'RSVP Confirmed ✓' : 'RSVP'}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;