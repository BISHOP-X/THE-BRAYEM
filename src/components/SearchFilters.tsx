
import React, { useState } from 'react';
import { X } from 'lucide-react';
import CustomButton from './CustomButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchFiltersProps {
  onClose?: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleApplyFilters = () => {
    // Apply filters logic here
    console.log('Applying filters:', {
      priceRange,
      propertyType,
      location,
      bedrooms
    });
    onClose?.();
  };

  const handleClearFilters = () => {
    setPriceRange([0, 500]);
    setPropertyType('');
    setLocation('');
    setBedrooms('');
  };

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      {/* Mobile header */}
      {onClose && (
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="text-xl font-bold text-terra-charcoal">Filter Properties</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-terra-charcoal">
          Price Range (₦M)
        </Label>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>₦{priceRange[0]}M</span>
            <span>₦{priceRange[1]}M</span>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-terra-charcoal">
          Property Type
        </Label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="duplex">Duplex</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="penthouse">Penthouse</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-terra-charcoal">
          Location
        </Label>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="victoria-island">Victoria Island</SelectItem>
            <SelectItem value="lekki">Lekki</SelectItem>
            <SelectItem value="ikoyi">Ikoyi</SelectItem>
            <SelectItem value="banana-island">Banana Island</SelectItem>
            <SelectItem value="ikeja">Ikeja</SelectItem>
            <SelectItem value="surulere">Surulere</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bedrooms */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-terra-charcoal">
          Bedrooms
        </Label>
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '4+'].map((bed) => (
            <CustomButton
              key={bed}
              variant={bedrooms === bed ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setBedrooms(bedrooms === bed ? '' : bed)}
            >
              {bed}
            </CustomButton>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold text-terra-charcoal">
          Amenities
        </Label>
        <div className="space-y-3">
          {[
            'Swimming Pool',
            'Gym/Fitness Center',
            'Security',
            'Parking',
            'Generator',
            'Air Conditioning'
          ].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox id={amenity} />
              <Label htmlFor={amenity} className="text-sm text-gray-700">
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <CustomButton
          variant="secondary"
          className="flex-1"
          onClick={handleClearFilters}
        >
          Clear All
        </CustomButton>
        <CustomButton
          variant="primary"
          className="flex-1"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </CustomButton>
      </div>
    </div>
  );
};

export default SearchFilters;
