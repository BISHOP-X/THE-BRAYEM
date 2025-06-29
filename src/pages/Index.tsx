
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import KeyStats from '../components/KeyStats';
import Testimonials from '../components/Testimonials';
import SignInBanner from '../components/SignInBanner';
import Footer from '../components/Footer';

// Mock data for featured properties
const mockProperties = [
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
  },
  {
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
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Spacious 4-Bedroom Bungalow',
    location: 'Magodo Phase 2, Lagos',
    beds: 4,
    baths: 3,
    area: '300 sqm',
    price: '₦65,000,000',
    status: 'For Sale' as const
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProperties properties={mockProperties} />
      <WhyChooseUs />
      <KeyStats />
      <SignInBanner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
