
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
    <div className={cn("overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white", className)}>
      {/* Property Image */}
      <div className="relative h-48 bg-gray-200">
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
      </div>

      {/* Property Details - White Background Section */}
      <div className="p-4 bg-white">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        
        {/* Price */}
        <div className="text-xl font-bold text-green-600 mb-3">
          {price}
        </div>
        
        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Pin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        
        {/* Property Features */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>{beds} Beds</span>
          <span>•</span>
          <span>{baths} Baths</span>
          <span>•</span>
          <span>{area}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
