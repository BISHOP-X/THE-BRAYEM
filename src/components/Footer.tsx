
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-terra-charcoal text-terra-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TERRAFYND</h3>
            <p className="text-gray-300 mb-4">
              Nigeria's premier property listing platform. Discover your perfect home with trusted agents and verified properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/listings" className="text-gray-300 hover:text-terra-gold transition-colors">Browse Properties</a></li>
              <li><a href="/agents" className="text-gray-300 hover:text-terra-gold transition-colors">Find Agents</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-terra-gold transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-terra-gold transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+234 (0) 123 456 789</li>
              <li>info@terrafynd.com</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              <li><a href="/privacy" className="text-gray-300 hover:text-terra-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-terra-gold transition-colors">Terms of Service</a></li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-terra-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-terra-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-terra-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-terra-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TERRAFYND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
