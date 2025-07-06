import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import CustomButton from '../components/CustomButton';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
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
    setError('');
    
    // Mock authentication logic
    if (email === 'user' && password === 'userpassword') {
      localStorage.setItem('userRole', 'user');
      localStorage.setItem('userEmail', 'user@example.com');
      navigate('/dashboard');
    } else if (email === 'admin' && password === 'adminpassword') {
      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('userEmail', 'admin@terrafynd.com');
      navigate('/admin/dashboard');
    } else if (email === 'landlord' && password === 'landlord') {
      localStorage.setItem('userRole', 'agent');
      localStorage.setItem('userEmail', 'landlord@example.com');
      navigate('/agent/dashboard');
    } else {
      setError('Invalid credentials. Try: user/userpassword, admin/adminpassword, or landlord/landlord');
    }
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
          <h1 className="text-5xl font-bold text-terra-gold mb-6">TERRAFYND</h1>
          <h2 className="text-3xl font-semibold mb-4">Welcome Back</h2>
          <p className="text-xl text-gray-200 mb-8">
            Your trusted platform for authentic Nigerian property listings
          </p>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>Verified agents only</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>No rental fraud</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-terra-gold rounded-full mr-3"></div>
              <span>Authentic listings guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
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
            <h1 className="text-3xl font-bold text-terra-gold mb-2">TERRAFYND</h1>
            <p className="text-white/80">Authentic Nigerian Properties</p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-terra-charcoal">
                Sign In
              </CardTitle>
              <p className="text-gray-600">
                Access your account to continue
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded">
                    {error}
                  </div>
                )}
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Username/Email
                  </label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Try: user, admin, or landlord"
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
                      placeholder="Try: userpassword, adminpassword, or landlord"
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

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-terra-gold focus:ring-terra-gold"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-terra-gold hover:text-terra-gold/80"
                  >
                    Forgot password?
                  </Link>
                </div>

                <CustomButton type="submit" className="w-full" size="lg">
                  Sign In
                </CustomButton>
              </form>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-terra-gold hover:text-terra-gold/80 font-medium">
                  Sign up here
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Demo Credentials: user/userpassword, admin/adminpassword, landlord/landlord
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
