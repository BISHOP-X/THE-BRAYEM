
import React from 'react';
import { Pin } from 'lucide-react';
import CustomBadge from './CustomBadge';
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  price: string;
  status?: 'For Rent' | 'For Sale' | 'Featured';
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  beds,
  baths,
  area,
  price,
  status,
  className
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300", className)}>
      {/* Property Image */}
      <div className="relative h-64 bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 left-3">
            <CustomBadge 
              variant={status === 'Featured' ? 'featured' : status === 'For Rent' ? 'rent' : 'sale'}
            >
              {status}
            </CustomBadge>
          </div>
        )}
        
        {/* Dark Overlay for Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          {/* Property Details */}
          <div className="text-white">
            <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
            
            {/* Location */}
            <div className="flex items-center text-sm text-gray-200 mb-3">
              <Pin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
            
            {/* Property Features */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-200">
                <span>{beds} Beds</span>
                <span>{baths} Baths</span>
                <span>{area}</span>
              </div>
              
              {/* Price */}
              <div className="text-terra-gold font-bold text-lg">
                {price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
