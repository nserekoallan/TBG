import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { BookOpen, Download, ExternalLink, Search, FileText, Video, Link, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResourcesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Academic', 'Financial Aid', 'Career', 'Forms', 'Guides', 'Policies'];

  const resources = [
    {
      id: 'student-handbook',
      title: 'Student Handbook 2024',
      description: 'Complete guide to university policies, procedures, and student life.',
      category: 'Academic',
      type: 'PDF',
      size: '2.1 MB',
      downloads: 1247,
      lastUpdated: '2024-01-15',
      url: '/documents/student-handbook-2024.pdf',
      featured: true
    },
    {
      id: 'guild-scholars-application',
      title: 'Guild Scholars Fund Application',
      description: 'Application form for the Guild Scholars Fund financial assistance program.',
      category: 'Financial Aid',
      type: 'Form',
      size: '156 KB',
      downloads: 892,
      lastUpdated: '2024-02-01',
      url: '/forms/guild-scholars-application.pdf',
      featured: true
    },
    {
      id: 'accommodation-guide',
      title: 'Campus Accommodation Guide',
      description: 'Information about on-campus housing, application process, and facilities.',
      category: 'Guides',
      type: 'PDF',
      size: '3.2 MB',
      downloads: 2156,
      lastUpdated: '2024-01-20',
      url: '/documents/accommodation-guide.pdf',
      featured: false
    },
    {
      id: 'academic-calendar',
      title: 'Academic Calendar 2024',
      description: 'Important dates, semester schedules, and examination periods.',
      category: 'Academic',
      type: 'PDF',
      size: '890 KB',
      downloads: 3421,
      lastUpdated: '2024-01-10',
      url: '/documents/academic-calendar-2024.pdf',
      featured: false
    },
    {
      id: 'career-services-guide',
      title: 'Career Services Guide',
      description: 'Resources for job hunting, internships, and career development.',
      category: 'Career',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 756,
      lastUpdated: '2024-01-25',
      url: '/documents/career-services-guide.pdf',
      featured: false
    },
    {
      id: 'course-registration',
      title: 'Course Registration Tutorial',
      description: 'Step-by-step video guide for online course registration.',
      category: 'Academic',
      type: 'Video',
      size: '45 MB',
      downloads: 1893,
      lastUpdated: '2024-01-30',
      url: 'https://youtube.com/watch?v=example',
      featured: false
    },
    {
      id: 'fee-payment-guide',
      title: 'Fee Payment Methods',
      description: 'Information about tuition payment options and deadlines.',
      category: 'Financial Aid',
      type: 'Guide',
      size: '567 KB',
      downloads: 2341,
      lastUpdated: '2024-02-05',
      url: '/guides/fee-payment.html',
      featured: false
    },
    {
      id: 'student-complaint-form',
      title: 'Student Complaint Form',
      description: 'Official form for submitting complaints or grievances.',
      category: 'Forms',
      type: 'Form',
      size: '123 KB',
      downloads: 234,
      lastUpdated: '2024-01-18',
      url: '/forms/student-complaint.pdf',
      featured: false
    }
  ];

  const quickLinks = [
    { title: 'Student Portal', url: 'https://portal.makerere.ac.ug', icon: ExternalLink },
    { title: 'Library Catalog', url: 'https://library.makerere.ac.ug', icon: BookOpen },
    { title: 'Email Access', url: 'https://mail.makerere.ac.ug', icon: Link },
    { title: 'Academic Calendar', url: '/documents/calendar.pdf', icon: Calendar }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF': return FileText;
      case 'Video': return Video;
      case 'Form': return FileText;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'PDF': return 'bg-red-100 text-red-700 border-red-200';
      case 'Video': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Form': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Academic Resources</h1>
              <p className="text-gray-600">Essential documents, forms, and guides for students</p>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
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

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Resources */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {resources.filter(r => r.featured).map(resource => {
                  const TypeIcon = getTypeIcon(resource.type);
                  return (
                    <Card key={resource.id} className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getTypeColor(resource.type)}>
                            <TypeIcon className="w-3 h-3 mr-1" />
                            {resource.type}
                          </Badge>
                          <div className="text-sm text-gray-500">
                            {resource.downloads.toLocaleString()} downloads
                          </div>
                        </div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-gray-500">
                            <div>Size: {resource.size}</div>
                            <div>Updated: {new Date(resource.lastUpdated).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Download className="w-4 h-4 mr-2" />
                          Download / View
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* All Resources */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'All' ? 'All Resources' : `${selectedCategory} Resources`}
                <span className="text-gray-500 text-base font-normal ml-2">
                  ({filteredResources.length} resources)
                </span>
              </h2>
              
              <div className="space-y-4">
                {filteredResources.map(resource => {
                  const TypeIcon = getTypeIcon(resource.type);
                  return (
                    <Card key={resource.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                              <Badge className={getTypeColor(resource.type)} variant="outline">
                                <TypeIcon className="w-3 h-3 mr-1" />
                                {resource.type}
                              </Badge>
                              <Badge variant="outline">{resource.category}</Badge>
                            </div>
                            <p className="text-gray-600 mb-3">{resource.description}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                              <span>Size: {resource.size}</span>
                              <span>Downloads: {resource.downloads.toLocaleString()}</span>
                              <span>Updated: {new Date(resource.lastUpdated).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <Button size="sm" className="ml-4">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {filteredResources.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
                  <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                    <span className="text-gray-700 group-hover:text-blue-600">{link.title}</span>
                    <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-4">
                  Can't find what you're looking for? Contact our support team.
                </p>
                <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Recent Downloads */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resources
                    .sort((a, b) => b.downloads - a.downloads)
                    .slice(0, 5)
                    .map(resource => (
                      <div key={resource.id} className="text-sm">
                        <div className="font-medium text-gray-900 truncate">{resource.title}</div>
                        <div className="text-gray-500">{resource.downloads.toLocaleString()} downloads</div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResourcesPage;