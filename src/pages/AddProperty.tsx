
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';
import CustomButton from '../components/CustomButton';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const AddProperty: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    type: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    photos: [] as File[]
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const newFiles = Array.from(files).slice(0, 8 - formData.photos.length);
      setFormData(prev => ({ ...prev, photos: [...prev.photos, ...newFiles] }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Property submitted:', formData);
    // Redirect to success page or listing
    navigate('/agent/dashboard');
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.title && formData.price && formData.description && formData.type;
      case 2:
        return formData.address && formData.bedrooms && formData.bathrooms && formData.area;
      case 3:
        return formData.photos.length > 0;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-terra-off-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
              >
                <ArrowLeft className="w-6 h-6 text-terra-charcoal" />
              </button>
              <h1 className="text-2xl font-bold text-terra-charcoal">Add New Property</h1>
            </div>
            <div className="text-sm text-gray-600">
              Step {currentStep} of 3
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-terra-gold text-terra-charcoal' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step}
                </div>
                <div className={`flex-1 h-1 mx-4 ${
                  step < currentStep ? 'bg-terra-gold' : 'bg-gray-200'
                } ${step === 3 ? 'hidden' : ''}`} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Basic Info</span>
            <span>Location & Details</span>
            <span>Photos</span>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form onSubmit={handleSubmit}>
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium text-terra-charcoal">
                    Property Title *
                  </label>
                  <Input
                    id="title"
                    placeholder="e.g., Luxury 3-bedroom apartment in Lekki"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium text-terra-charcoal">
                      Price *
                    </label>
                    <Input
                      id="price"
                      placeholder="e.g., ₦25,000,000"
                      value={formData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-terra-charcoal">
                      Property Type *
                    </label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="bungalow">Bungalow</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium text-terra-charcoal">
                    Description *
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Describe the property features, amenities, and what makes it special..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    required
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Location & Details */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Location & Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium text-terra-charcoal">
                    Address *
                  </label>
                  <Input
                    id="address"
                    placeholder="Full address including city and state"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="bedrooms" className="text-sm font-medium text-terra-charcoal">
                      Bedrooms *
                    </label>
                    <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Beds" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="bathrooms" className="text-sm font-medium text-terra-charcoal">
                      Bathrooms *
                    </label>
                    <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange('bathrooms', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Baths" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="area" className="text-sm font-medium text-terra-charcoal">
                      Area (sqm) *
                    </label>
                    <Input
                      id="area"
                      placeholder="e.g., 120"
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Photos */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Property Photos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-terra-gold transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-terra-charcoal mb-2">
                      Upload Property Photos
                    </p>
                    <p className="text-gray-600 mb-4">
                      Drop files here or click to browse (Max 8 photos)
                    </p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <CustomButton type="button" variant="secondary" className="cursor-pointer">
                        Choose Files
                      </CustomButton>
                    </label>
                  </div>

                  {formData.photos.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {formData.photos.map((photo, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`Property ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <div>
              {currentStep > 1 && (
                <CustomButton type="button" variant="secondary" onClick={prevStep}>
                  Previous
                </CustomButton>
              )}
            </div>
            <div>
              {currentStep < 3 ? (
                <CustomButton 
                  type="button" 
                  variant="primary" 
                  onClick={nextStep}
                  disabled={!isStepValid()}
                >
                  Next
                </CustomButton>
              ) : (
                <CustomButton 
                  type="submit" 
                  variant="primary"
                  disabled={!isStepValid()}
                >
                  Submit for Review
                </CustomButton>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
