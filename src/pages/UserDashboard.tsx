
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Home, User, Settings, LogOut, Menu, X } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import CustomButton from '../components/CustomButton';

const UserDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem('userRole');
    if (!userRole || userRole !== 'user') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  // Mock saved properties data
  const savedProperties = [
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Luxury 4-Bedroom Duplex',
      location: 'Lekki Phase 1, Lagos',
      beds: 4,
      baths: 3,
      area: '350 sqm',
      price: '₦85,000,000',
      status: 'For Sale' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern 3-Bedroom Apartment',
      location: 'Victoria Island, Lagos',
      beds: 3,
      baths: 2,
      area: '180 sqm',
      price: '₦8,500,000/year',
      status: 'For Rent' as const
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Executive 5-Bedroom Villa',
      location: 'Banana Island, Lagos',
      beds: 5,
      baths: 4,
      area: '500 sqm',
      price: '₦150,000,000',
      status: 'Featured' as const
    }
  ];

  const navigationItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: Heart, label: 'Saved Properties', active: false },
    { icon: User, label: 'Profile', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  const handleRemoveProperty = (index: number) => {
    // In a real app, this would make an API call to remove the property
    console.log('Remove property at index:', index);
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
                <h1 className="text-2xl font-bold text-terra-charcoal">Saved Properties</h1>
                <p className="text-gray-600 mt-1">Manage your favorite properties</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 lg:p-6">
          {savedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {savedProperties.map((property, index) => (
                <div key={index} className="relative">
                  <PropertyCard
                    image={property.image}
                    title={property.title}
                    location={property.location}
                    beds={property.beds}
                    baths={property.baths}
                    area={property.area}
                    price={property.price}
                    status={property.status}
                  />
                  <div className="mt-3">
                    <CustomButton
                      variant="ghost"
                      size="sm"
                      className="w-full text-red-600 hover:bg-red-50"
                      onClick={() => handleRemoveProperty(index)}
                    >
                      Remove from saved
                    </CustomButton>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No saved properties yet</h3>
              <p className="text-gray-500 mb-6">Start browsing properties and save your favorites here</p>
              <CustomButton variant="primary" size="lg">
                Browse Properties
              </CustomButton>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
