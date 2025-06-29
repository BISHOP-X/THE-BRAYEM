import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import CustomButton from '../components/CustomButton';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Beautiful Nigerian property images for background carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here (mock)
    console.log('Signup attempt:', { email, password, accountType });
    alert('Account created successfully! Please log in.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Left Side - Branding & Info */}
      <div className="relative z-10 hidden lg:flex lg:w-1/2 flex-col justify-center px-12 text-white">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-terra-gold mb-6">TheBrayem</h1>
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-200 mb-8">
            Start your journey to finding the perfect Nigerian property today
          </p>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>Free account setup</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>Access to verified listings</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>Save your favorite properties</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>Direct contact with agents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center px-4 py-8">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 flex items-center text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="w-full max-w-md">
          {/* Mobile Branding */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold text-terra-gold mb-2">TheBrayem</h1>
            <p className="text-white/80">Authentic Nigerian Properties</p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-terra-charcoal">
                Create Account
              </CardTitle>
              <p className="text-gray-600">
                Join thousands finding their perfect home
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-gray-300 focus:border-terra-gold focus:ring-terra-gold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="border-gray-300 focus:border-terra-gold focus:ring-terra-gold pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="accountType" className="text-sm font-medium text-gray-700">
                    Account Type
                  </label>
                  <Select value={accountType} onValueChange={setAccountType} required>
                    <SelectTrigger className="border-gray-300 focus:border-terra-gold focus:ring-terra-gold">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">Property Seeker</SelectItem>
                      <SelectItem value="agent">Agent/Landlord</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-terra-gold focus:ring-terra-gold mt-0.5"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the{' '}
                      <Link to="/terms" className="text-terra-gold hover:text-terra-gold/80">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-terra-gold hover:text-terra-gold/80">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-terra-gold focus:ring-terra-gold mt-0.5"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Subscribe to our newsletter for property updates
                    </span>
                  </label>
                </div>

                <CustomButton type="submit" className="w-full" size="lg">
                  Create Account
                </CustomButton>
              </form>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-terra-gold hover:text-terra-gold/80 font-medium">
                  Sign in here
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  By creating an account, you'll be able to save properties, contact agents, and get personalized recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
