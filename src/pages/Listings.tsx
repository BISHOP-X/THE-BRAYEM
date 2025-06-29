import React from 'react';
import Header from '../components/Header';
import SearchFilters from '../components/SearchFilters';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data for all properties (extended from homepage)
const allProperties = [
  {
    id: '1',
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
    id: '2',
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
    id: '3',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Executive 5-Bedroom Villa',
    location: 'Banana Island, Lagos',
    beds: 5,
    baths: 4,
    area: '500 sqm',
    price: '₦150,000,000',
    status: 'Featured' as const
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Cozy 2-Bedroom Flat',
    location: 'Ikeja GRA, Lagos',
    beds: 2,
    baths: 2,
    area: '120 sqm',
    price: '₦4,200,000/year',
    status: 'For Rent' as const
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Contemporary 3-Bedroom Terrace',
    location: 'Chevron Alternative Route, Lekki',
    beds: 3,
    baths: 3,
    area: '200 sqm',
    price: '₦45,000,000',
    status: 'For Sale' as const
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Spacious 4-Bedroom Bungalow',
    location: 'Magodo Phase 2, Lagos',
    beds: 4,
    baths: 3,
    area: '300 sqm',
    price: '₦65,000,000',
    status: 'For Sale' as const
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Studio Apartment',
    location: 'Yaba, Lagos',
    beds: 1,
    baths: 1,
    area: '45 sqm',
    price: '₦2,500,000/year',
    status: 'For Rent' as const
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Penthouse',
    location: 'Ikoyi, Lagos',
    beds: 4,
    baths: 4,
    area: '420 sqm',
    price: '₦200,000,000',
    status: 'Featured' as const
  }
];

const Listings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-terra-off-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-500 hover:text-terra-gold transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-terra-gold font-medium">All Listings</span>
          </nav>
        </div>
      </div>
      
      {/* Page Header */}
      <div className="bg-terra-charcoal py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">All Property Listings</h1>
            <p className="text-xl text-gray-300">Discover your perfect home from our verified properties</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <SearchFilters />
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {allProperties.length} properties
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
                <option>Sort by: Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Bedrooms: Most</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  image={property.image}
                  title={property.title}
                  location={property.location}
                  beds={property.beds}
                  baths={property.baths}
                  area={property.area}
                  price={property.price}
                  status={property.status}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-terra-gold text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
