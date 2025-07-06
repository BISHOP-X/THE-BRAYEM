import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, Home } from 'lucide-react';
import CustomButton from '../components/CustomButton';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  return (
    <div className="min-h-screen bg-terra-off-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-gray-500 hover:text-terra-gold transition-colors"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-blue-600 font-medium">Contact</span>
          </nav>
        </div>
      </div>
      
      {/* Page Header */}
      <div className="bg-terra-charcoal py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">We're here to help you find your perfect property</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-terra-charcoal mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="property">Property Question</SelectItem>
                        <SelectItem value="agent">Agent Support</SelectItem>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="Brief subject of your message"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>

                <CustomButton type="submit" variant="primary" size="lg" className="w-full">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Message
                </CustomButton>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-terra-charcoal mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-terra-gold/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-terra-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-terra-charcoal mb-1">Phone</h3>
                    <p className="text-gray-600">+234 (0) 1 234 5678</p>
                    <p className="text-gray-600">+234 (0) 8012 345 678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terra-gold/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-terra-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-terra-charcoal mb-1">Email</h3>
                    <p className="text-gray-600">hello@terrafynd.com</p>
                    <p className="text-gray-600">support@terrafynd.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terra-gold/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-terra-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-terra-charcoal mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Business District<br />
                      Victoria Island, Lagos<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terra-gold/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-terra-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-terra-charcoal mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-terra-charcoal mb-6">Quick Questions?</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-terra-charcoal mb-2">How do I list my property?</h3>
                  <p className="text-gray-600 text-sm">Sign up as an agent, complete verification, then add your property for review.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-terra-charcoal mb-2">Are all agents verified?</h3>
                  <p className="text-gray-600 text-sm">Yes, we verify all agents with government ID and property documents.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-terra-charcoal mb-2">How do I contact an agent?</h3>
                  <p className="text-gray-600 text-sm">Click on any property to view agent contact details and send inquiries.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-terra-charcoal mb-2">Is the platform free for buyers?</h3>
                  <p className="text-gray-600 text-sm">Yes, browsing and contacting agents is completely free for property seekers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Placeholder) */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map</p>
              <p className="text-sm">Find us in Victoria Island, Lagos</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
