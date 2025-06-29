
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Square, MapPin, Phone, MessageCircle, Heart, Share2 } from 'lucide-react';
import CustomButton from '../components/CustomButton';
import CustomBadge from '../components/CustomBadge';
import { Card, CardContent } from '@/components/ui/card';

const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // Mock property data
  const property = {
    id: id || '1',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    title: 'Luxury 4-Bedroom Duplex',
    price: '₦85,000,000',
    location: 'Lekki Phase 1, Lagos',
    beds: 4,
    baths: 3,
    area: '350 sqm',
    status: 'For Sale' as const,
    description: 'This stunning 4-bedroom duplex is located in the heart of Lekki Phase 1, one of Lagos\' most prestigious neighborhoods. The property features modern architecture, spacious rooms, and premium finishes throughout. With a private garden, swimming pool, and 24-hour security, this home offers the perfect blend of luxury and comfort for discerning buyers.',
    features: [
      'Swimming Pool',
      'Parking Space',
      '24/7 Security',
      'Generator',
      'Fitted Kitchen',
      'Air Conditioning',
      'Garden',
      'Gym Access'
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '+234 808 123 4567',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      rating: 4.8,
      properties: 45
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the property: ${property.title} (₦${property.price})`;
    const whatsappUrl = `https://wa.me/${property.agent.phone.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEnquiry = () => {
    // In a real app, this would open an enquiry form or modal
    alert('Enquiry form would open here');
  };

  return (
    <div className="min-h-screen bg-terra-off-white">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`p-2 rounded-full ${isSaved ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'}`}
            >
              <Heart className="w-6 h-6" fill={isSaved ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:max-w-7xl lg:mx-auto">
        {/* Left Column - Images and Details */}
        <div className="lg:w-2/3">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <CustomBadge variant="sale">
                  {property.status}
                </CustomBadge>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="p-6 bg-white">
            {/* Desktop Back Button */}
            <div className="hidden lg:block mb-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to results
              </button>
            </div>

            {/* Title and Price */}
            <div className="mb-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-terra-charcoal mb-2">
                {property.title}
              </h1>
              <div className="text-3xl font-bold text-terra-gold mb-4">
                {property.price}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            {/* Property Features */}
            <div className="flex items-center space-x-6 mb-6 text-gray-600">
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center">
                <Square className="w-5 h-5 mr-2" />
                <span>{property.area}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-terra-charcoal mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Features Grid */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-terra-charcoal mb-3">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {property.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-terra-off-white p-3 rounded-lg text-center text-sm font-medium text-terra-charcoal"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Agent Card (Desktop) */}
        <div className="hidden lg:block lg:w-1/3 lg:p-6">
          <div className="sticky top-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-terra-charcoal">
                    {property.agent.name}
                  </h3>
                  <p className="text-gray-600">Verified Agent</p>
                  <div className="flex items-center justify-center mt-2">
                    <span className="text-terra-gold font-semibold">{property.agent.rating}</span>
                    <span className="text-gray-500 ml-1">★</span>
                    <span className="text-gray-500 ml-2">({property.agent.properties} properties)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <CustomButton
                    variant="default"
                    size="lg"
                    className="w-full bg-terra-gold hover:bg-terra-gold/90 text-terra-charcoal"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </CustomButton>
                  
                  <CustomButton
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    onClick={handleEnquiry}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Enquire Now
                  </CustomButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex space-x-3">
          <CustomButton
            variant="default"
            size="lg"
            className="flex-1 bg-terra-gold hover:bg-terra-gold/90 text-terra-charcoal"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </CustomButton>
          
          <CustomButton
            variant="secondary"
            size="lg"
            className="flex-1"
            onClick={handleEnquiry}
          >
            <Phone className="w-5 h-5 mr-2" />
            Enquire
          </CustomButton>
        </div>
      </div>

      {/* Bottom spacing for mobile sticky bar */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default PropertyDetails;
