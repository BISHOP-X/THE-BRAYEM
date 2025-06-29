
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Listings', href: '/listings' },
    { name: 'Agents', href: '/agents' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-terra-charcoal/95 backdrop-blur-sm border-b border-terra-charcoal/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-terra-gold hover:text-terra-gold/80 transition-colors cursor-pointer"
            >
              TheBrayem
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-terra-off-white hover:text-terra-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <CustomButton 
              variant="outline" 
              size="md"
              onClick={() => navigate('/login')}
            >
              Sign In
            </CustomButton>
            <CustomButton 
              variant="secondary" 
              size="md"
              onClick={() => navigate('/agent/add-property')}
            >
              Add Property
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-terra-off-white hover:text-terra-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-terra-green rounded-lg mt-2 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-terra-off-white hover:text-terra-gold transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-terra-off-white/20 space-y-3">
                <CustomButton 
                  variant="outline" 
                  size="md" 
                  className="w-full"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </CustomButton>
                <CustomButton 
                  variant="secondary" 
                  size="md" 
                  className="w-full"
                  onClick={() => {
                    navigate('/agent/add-property');
                    setIsMenuOpen(false);
                  }}
                >
                  Add Property
                </CustomButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
