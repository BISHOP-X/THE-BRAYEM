
import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import CustomButton from '../components/CustomButton';
import SearchFilters from '../components/SearchFilters';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

// Mock data for demonstration
const mockProperties = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury 4-Bedroom Duplex in Victoria Island",
    location: "Victoria Island, Lagos",
    beds: 4,
    baths: 3,
    area: "450 sqm",
    price: "₦125M",
    status: "For Sale" as const
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern 3-Bedroom Apartment in Lekki",
    location: "Lekki Phase 1, Lagos",
    beds: 3,
    baths: 2,
    area: "200 sqm",
    price: "₦45M",
    status: "For Rent" as const
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Executive 5-Bedroom Villa in Banana Island",
    location: "Banana Island, Lagos",
    beds: 5,
    baths: 4,
    area: "600 sqm",
    price: "₦280M",
    status: "Featured" as const
  }
];

const SearchResults: React.FC = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1000 >=
        document.documentElement.scrollHeight &&
        hasMore &&
        !loading
      ) {
        loadMoreProperties();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  const loadMoreProperties = () => {
    if (loading) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const moreProperties = mockProperties.map((prop, index) => ({
        ...prop,
        title: `${prop.title} - Batch ${Math.floor(properties.length / 3) + 1}`,
      }));
      
      setProperties(prev => [...prev, ...moreProperties]);
      setLoading(false);
      
      // Stop loading more after 3 batches for demo
      if (properties.length > 15) {
        setHasMore(false);
      }
    }, 1000);
  };

  const FilterContent = () => (
    <SearchFilters onClose={() => setFiltersOpen(false)} />
  );

  const FilterTrigger = () => (
    <CustomButton 
      variant="ghost" 
      className="flex items-center gap-2"
      onClick={() => setFiltersOpen(true)}
    >
      <SlidersHorizontal className="w-4 h-4" />
      Filter
    </CustomButton>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-terra-charcoal mb-2">
              Search Results
            </h1>
            <p className="text-gray-600">
              {properties.length}+ properties found
            </p>
          </div>

          {/* Mobile Filter Button */}
          {isMobile ? (
            <Drawer open={filtersOpen} onOpenChange={setFiltersOpen}>
              <DrawerTrigger asChild>
                <FilterTrigger />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filter Properties</DrawerTitle>
                </DrawerHeader>
                <FilterContent />
              </DrawerContent>
            </Drawer>
          ) : (
            <FilterTrigger />
          )}
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          {!isMobile && (
            <aside className="w-80 flex-shrink-0">
              <div className="sticky top-24">
                <SearchFilters />
              </div>
            </aside>
          )}

          {/* Results Grid */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard
                  key={`${property.title}-${index}`}
                  {...property}
                  className="hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-terra-gold"></div>
              </div>
            )}

            {/* End of results */}
            {!hasMore && (
              <div className="text-center py-8">
                <p className="text-gray-600">You've seen all available properties</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
