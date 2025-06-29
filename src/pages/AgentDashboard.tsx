
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Plus, BarChart3, Eye, MessageSquare, User, Settings, LogOut, Menu, X, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import CustomButton from '../components/CustomButton';
import CustomBadge from '../components/CustomBadge';

const AgentDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole || userRole !== 'agent') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  // Mock agent data
  const agentStats = {
    totalListings: 12,
    totalViews: 3456,
    newEnquiries: 8,
    activeListings: 9
  };

  // Mock properties data
  const agentProperties = [
    {
      id: 1,
      title: 'Luxury 4-Bedroom Duplex',
      location: 'Lekki Phase 1, Lagos',
      price: '₦85,000,000',
      status: 'Approved' as const,
      views: 234,
      enquiries: 5
    },
    {
      id: 2,
      title: 'Modern 3-Bedroom Apartment',
      location: 'Victoria Island, Lagos',
      price: '₦8,500,000/year',
      status: 'Pending' as const,
      views: 67,
      enquiries: 2
    },
    {
      id: 3,
      title: 'Executive 5-Bedroom Villa',
      location: 'Banana Island, Lagos',
      price: '₦150,000,000',
      status: 'Rejected' as const,
      views: 45,
      enquiries: 1
    }
  ];

  const navigationItems = [
    { icon: Home, label: 'Dashboard', active: true, onClick: () => {} },
    { icon: Plus, label: 'Add Property', active: false, onClick: () => navigate('/agent/add-property') },
    { icon: BarChart3, label: 'Analytics', active: false, onClick: () => {} },
    { icon: User, label: 'Profile', active: false, onClick: () => {} },
    { icon: Settings, label: 'Settings', active: false, onClick: () => {} }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Approved': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'error';
      default: return 'default';
    }
  };

  const handleEditProperty = (id: number) => {
    console.log('Edit property:', id);
  };

  const handleDeleteProperty = (id: number) => {
    console.log('Delete property:', id);
  };

  return (
    <div className="min-h-screen bg-terra-off-white flex">
      {/* Mobile Menu Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-terra-charcoal text-terra-off-white
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-terra-gold">TheBrayem</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-terra-off-white hover:text-terra-gold"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-2">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={item.onClick}
                  className={`
                    w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors
                    ${item.active 
                      ? 'bg-terra-gold text-terra-charcoal font-semibold' 
                      : 'hover:bg-gray-700 text-terra-off-white'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden mr-4 p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-terra-charcoal">Agent Dashboard</h1>
                <p className="text-gray-600 mt-1">Manage your properties and track performance</p>
              </div>
            </div>
            <CustomButton variant="primary" size="md">
              <Plus className="w-4 h-4 mr-2" />
              Add Property
            </CustomButton>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 lg:p-6 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">My Listings</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-terra-gold">{agentStats.totalListings}</div>
                <p className="text-xs text-muted-foreground">
                  {agentStats.activeListings} active listings
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-terra-gold">{agentStats.totalViews.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Enquiries</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-terra-gold">{agentStats.newEnquiries}</div>
                <p className="text-xs text-muted-foreground">
                  +3 this week
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-terra-gold">87%</div>
                <p className="text-xs text-muted-foreground">
                  Approval rate
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Properties Table */}
          <Card>
            <CardHeader>
              <CardTitle>My Properties</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Enquiries</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {agentProperties.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{property.title}</div>
                          <div className="text-sm text-muted-foreground">{property.location}</div>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-terra-gold">{property.price}</TableCell>
                      <TableCell>
                        <CustomBadge variant={getStatusVariant(property.status)}>
                          {property.status}
                        </CustomBadge>
                      </TableCell>
                      <TableCell>{property.views}</TableCell>
                      <TableCell>{property.enquiries}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEditProperty(property.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => handleDeleteProperty(property.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;
