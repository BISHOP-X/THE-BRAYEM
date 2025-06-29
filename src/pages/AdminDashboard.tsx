import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Building, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  CheckCircle, 
  XCircle,
  Ban,
  UserCheck,
  Eye,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import CustomButton from '../components/CustomButton';
import CustomBadge from '../components/CustomBadge';

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('listings');
  const navigate = useNavigate();

  // Mock data for listings
  const pendingListings = [
    {
      id: 1,
      title: 'Luxury 4-Bedroom Duplex',
      ownerName: 'John Adebayo',
      ownerEmail: 'john@example.com',
      location: 'Lekki Phase 1, Lagos',
      price: '₦85,000,000',
      status: 'Pending' as const,
      submittedDate: '2025-06-28'
    },
    {
      id: 2,
      title: 'Modern 3-Bedroom Apartment',
      ownerName: 'Sarah Okafor',
      ownerEmail: 'sarah@example.com',
      location: 'Victoria Island, Lagos',
      price: '₦8,500,000/year',
      status: 'Pending' as const,
      submittedDate: '2025-06-27'
    },
    {
      id: 3,
      title: 'Executive 5-Bedroom Villa',
      ownerName: 'Michael Okoro',
      ownerEmail: 'michael@example.com',
      location: 'Banana Island, Lagos',
      price: '₦150,000,000',
      status: 'Rejected' as const,
      submittedDate: '2025-06-26'
    }
  ];

  // Mock data for users
  const users = [
    {
      id: 1,
      email: 'user@example.com',
      role: 'User',
      activeListings: 0,
      joinDate: '2025-06-15',
      status: 'Active'
    },
    {
      id: 2,
      email: 'john@example.com',
      role: 'Agent',
      activeListings: 5,
      joinDate: '2025-06-10',
      status: 'Active'
    },
    {
      id: 3,
      email: 'sarah@example.com',
      role: 'Agent',
      activeListings: 3,
      joinDate: '2025-06-05',
      status: 'Suspended'
    }
  ];

  const navigationItems = [
    { icon: Building, label: 'Property Listings', key: 'listings' },
    { icon: Users, label: 'User Management', key: 'users' },
    { icon: UserCheck, label: 'Verification Requests', key: 'verification' },
    { icon: Settings, label: 'Settings', key: 'settings' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  const handleApproveProperty = (id: number) => {
    alert(`Property ${id} approved successfully!`);
  };

  const handleRejectProperty = (id: number) => {
    alert(`Property ${id} rejected.`);
  };

  const handleBanUser = (id: number) => {
    alert(`User ${id} has been banned.`);
  };

  const handleSuspendUser = (id: number) => {
    alert(`User ${id} has been suspended.`);
  };

  return (
    <div className="min-h-screen bg-terra-off-white flex">
      {/* Sidebar */}
      <aside className={`bg-terra-charcoal text-terra-off-white transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-16'
      } lg:w-64`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className={`text-xl font-bold text-terra-gold ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
              Admin Panel
            </h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden text-terra-off-white hover:text-terra-gold"
            >
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                  activeTab === item.key
                    ? 'bg-terra-gold text-terra-charcoal'
                    : 'text-terra-off-white hover:bg-terra-green'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center p-3 text-terra-off-white hover:bg-red-600 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className={`ml-3 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
                Logout
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-terra-charcoal mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage properties, users, and platform settings
          </p>
        </div>

        {/* Property Listings Tab */}
        {activeTab === 'listings' && (
          <Card>
            <CardHeader>
              <CardTitle>Property Listings Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property Title</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingListings.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell className="font-medium">{listing.title}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{listing.ownerName}</div>
                            <div className="text-sm text-gray-500">{listing.ownerEmail}</div>
                          </div>
                        </TableCell>
                        <TableCell>{listing.location}</TableCell>
                        <TableCell className="font-medium">{listing.price}</TableCell>
                        <TableCell>
                          <CustomBadge 
                            variant={listing.status === 'Pending' ? 'warning' : 'error'}
                          >
                            {listing.status}
                          </CustomBadge>
                        </TableCell>
                        <TableCell>{listing.submittedDate}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <CustomButton
                              size="sm"
                              variant="primary"
                              onClick={() => handleApproveProperty(listing.id)}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </CustomButton>
                            <CustomButton
                              size="sm"
                              variant="secondary"
                              onClick={() => handleRejectProperty(listing.id)}
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </CustomButton>
                            <CustomButton
                              size="sm"
                              variant="ghost"
                              onClick={() => navigate(`/property/${listing.id}`)}
                            >
                              <Eye className="w-4 h-4" />
                            </CustomButton>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* User Management Tab */}
        {activeTab === 'users' && (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Active Listings</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.activeListings}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <CustomBadge 
                            variant={user.status === 'Active' ? 'success' : 'error'}
                          >
                            {user.status}
                          </CustomBadge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <CustomButton
                              size="sm"
                              variant="secondary"
                              onClick={() => handleSuspendUser(user.id)}
                            >
                              <Ban className="w-4 h-4 mr-1" />
                              Suspend
                            </CustomButton>
                            <CustomButton
                              size="sm"
                              variant="ghost"
                              onClick={() => handleBanUser(user.id)}
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Ban
                            </CustomButton>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Verification Requests Tab */}
        {activeTab === 'verification' && (
          <Card>
            <CardHeader>
              <CardTitle>Agent Verification Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <UserCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Pending Verification Requests
                </h3>
                <p className="text-gray-500">
                  New agent verification requests will appear here.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Settings Panel
                </h3>
                <p className="text-gray-500">
                  Platform configuration options will be available here.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
