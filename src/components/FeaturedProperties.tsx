import React from 'react';
import { ChevronRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import CustomButton from './CustomButton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';

interface Property {
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
  status: 'For Rent' | 'For Sale' | 'Featured';
}

interface FeaturedPropertiesProps {
  properties: Property[];
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ properties }) => {
  const navigate = useNavigate();

  const handleSeeAllListings = () => {
    navigate('/listings');
  };

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-terra-charcoal mb-2">
            Featured Properties
          </h2>
          <p className="text-lg font-semibold text-green-500">
            🔥 Hot
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          {properties.slice(0, 6).map((property, index) => (
            <div key={index} onClick={() => handlePropertyClick(`${index + 1}`)}>
              <PropertyCard
                {...property}
                className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden max-w-7xl mx-auto mb-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {properties.map((property, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2">
                  <div onClick={() => handlePropertyClick(`${index + 1}`)}>
                    <PropertyCard
                      {...property}
                      className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* See All Button */}
        <div className="text-center">
          <CustomButton 
            variant="primary" 
            size="lg" 
            className="inline-flex items-center gap-2"
            onClick={handleSeeAllListings}
          >
            See All Listings
            <ChevronRight className="w-5 h-5" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
