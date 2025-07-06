import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Phone, Mail, MapPin, Award, ChevronRight, Home } from 'lucide-react';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

// Mock agent data
const featuredAgents = [
  {
    id: '1',
    name: 'Adebayo Johnson',
    company: 'Premium Properties Nigeria',
    location: 'Lagos, Nigeria',
    rating: 4.9,
    reviews: 127,
    properties: 34,
    verified: true,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    specialties: ['Luxury Homes', 'Commercial', 'Investment Properties'],
    phone: '+234 801 234 5678',
    email: 'adebayo@premiumproperties.ng'
  },
  {
    id: '2',
    name: 'Sarah Okonkwo',
    company: 'Elite Real Estate',
    location: 'Abuja, Nigeria',
    rating: 4.8,
    reviews: 89,
    properties: 28,
    verified: true,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b913?w=150&h=150&fit=crop&crop=face',
    specialties: ['Residential', 'First-time Buyers', 'Rentals'],
    phone: '+234 803 456 7890',
    email: 'sarah@eliterealestate.ng'
  },
  {
    id: '3',
    name: 'Chukwuma Okoro',
    company: 'Lagos Property Hub',
    location: 'Lagos, Nigeria',
    rating: 4.7,
    reviews: 156,
    properties: 45,
    verified: true,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    specialties: ['Luxury Apartments', 'Waterfront Properties'],
    phone: '+234 802 345 6789',
    email: 'chukwuma@lagospropertyhub.ng'
  },
  {
    id: '4',
    name: 'Fatima Abdul',
    company: 'Northern Properties Ltd',
    location: 'Kaduna, Nigeria',
    rating: 4.6,
    reviews: 73,
    properties: 22,
    verified: true,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    specialties: ['Affordable Housing', 'Land Sales'],
    phone: '+234 805 678 9012',
    email: 'fatima@northernproperties.ng'
  },
  {
    id: '5',
    name: 'David Emeka',
    company: 'Mega Homes Realty',
    location: 'Port Harcourt, Nigeria',
    rating: 4.8,
    reviews: 94,
    properties: 31,
    verified: true,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    specialties: ['Industrial Properties', 'Commercial Spaces'],
    phone: '+234 804 567 8901',
    email: 'david@megahomes.ng'
  },
  {
    id: '6',
    name: 'Blessing Uche',
    company: 'Dream Home Ventures',
    location: 'Lagos, Nigeria',
    rating: 4.9,
    reviews: 112,
    properties: 38,
    verified: true,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
    specialties: ['Family Homes', 'School District Properties'],
    phone: '+234 806 789 0123',
    email: 'blessing@dreamhomeventures.ng'
  }
];

const Agents: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/agent/verification');
  };

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
            <span className="text-blue-600 font-medium">Agents</span>
          </nav>
        </div>
      </div>
      
      {/* Page Header */}
      <div className="bg-terra-charcoal py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-4">Verified Real Estate Agents</h1>
            <p className="text-lg text-gray-300">Connect with trusted professionals who understand the Nigerian property market</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-terra-gold">500+</div>
              <div className="text-gray-600">Verified Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-terra-gold">2,000+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-terra-gold">15+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-terra-gold">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-terra-charcoal mb-2">Featured Agents</h2>
              <p className="text-sm text-gray-600">All agents are verified and background-checked for your security</p>
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
                <option>All Locations</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
                <option>Kaduna</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white">
                <option>All Specialties</option>
                <option>Luxury Homes</option>
                <option>Commercial</option>
                <option>Residential</option>
                <option>Land Sales</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredAgents.map((agent) => (
            <div key={agent.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Agent Header */}
              <div className="p-6 text-center border-b">
                <div className="relative inline-block mb-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {agent.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-terra-gold rounded-full p-1">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-terra-charcoal mb-1">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{agent.company}</p>
                <div className="flex items-center justify-center gap-1 mb-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{agent.location}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{agent.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({agent.reviews} reviews)</span>
                </div>
              </div>

              {/* Agent Stats */}
              <div className="px-6 py-4 bg-gray-50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-terra-gold">{agent.properties}</div>
                  <div className="text-sm text-gray-600">Active Properties</div>
                </div>
              </div>

              {/* Specialties */}
              <div className="px-6 py-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-terra-gold/10 text-terra-gold rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Actions */}
              <div className="px-6 pb-6">
                <div className="flex gap-2">
                  <CustomButton
                    variant="primary"
                    size="sm"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </CustomButton>
                  <CustomButton
                    variant="secondary"
                    size="sm"
                    className="flex-1"
                  >
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </CustomButton>
                </div>
                <CustomButton
                  variant="ghost"
                  size="sm"
                  className="w-full mt-2"
                >
                  View Properties
                </CustomButton>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <CustomButton variant="secondary" size="lg">
            Load More Agents
          </CustomButton>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-terra-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to become a verified agent?
          </h2>
          <p className="text-base text-terra-off-white/80 mb-6 max-w-2xl mx-auto">
            Join our network of trusted real estate professionals and reach thousands of potential clients
          </p>
          <CustomButton variant="primary" size="lg" onClick={handleApplyNow}>
            Apply Now
          </CustomButton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Agents;
