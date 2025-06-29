
import React, { useState } from 'react';
import { ArrowLeft, Upload, FileText, Shield, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomButton from '../components/CustomButton';

const AgentVerification: React.FC = () => {
  const navigate = useNavigate();
  const [govIdFile, setGovIdFile] = useState<File | null>(null);
  const [propertyDocFile, setPropertyDocFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState<string>('');

  const handleDrag = (e: React.DragEvent, type: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(type);
    } else if (e.type === "dragleave") {
      setDragActive('');
    }
  };

  const handleDrop = (e: React.DragEvent, type: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive('');
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (type === 'govId') {
        setGovIdFile(file);
      } else {
        setPropertyDocFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (type === 'govId') {
        setGovIdFile(file);
      } else {
        setPropertyDocFile(file);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the files to the server
    console.log('Submitting verification documents');
    alert('Verification documents submitted successfully! We will review them within 24-48 hours.');
    navigate('/agent/dashboard');
  };

  const FileUploadArea = ({ 
    type, 
    file, 
    title, 
    description 
  }: { 
    type: string; 
    file: File | null; 
    title: string; 
    description: string; 
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-terra-charcoal">
        {title}
      </label>
      <div
        className={`
          border-2 border-dashed rounded-lg p-8 text-center transition-colors
          ${dragActive === type ? 'border-terra-gold bg-terra-gold/5' : 'border-gray-300'}
          ${file ? 'border-green-500 bg-green-50' : 'hover:border-terra-gold hover:bg-terra-gold/5'}
        `}
        onDragEnter={(e) => handleDrag(e, type)}
        onDragLeave={(e) => handleDrag(e, type)}
        onDragOver={(e) => handleDrag(e, type)}
        onDrop={(e) => handleDrop(e, type)}
      >
        {file ? (
          <div className="flex items-center justify-center space-x-2">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-medium">{file.name}</span>
          </div>
        ) : (
          <div>
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 mb-1">Drag and drop your file here, or</p>
            <label className="cursor-pointer">
              <span className="text-terra-gold hover:text-terra-gold/80 font-medium">
                browse to upload
              </span>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, type)}
              />
            </label>
            <p className="text-xs text-gray-500 mt-2">{description}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-terra-off-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4 lg:p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to dashboard
          </button>
          <div>
            <h1 className="text-2xl font-bold text-terra-charcoal">Agent Verification</h1>
            <p className="text-gray-600 mt-1">Submit your documents to get verified and start listing properties</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 lg:p-6">
        {/* Security Notice */}
        <Card className="mb-8 border-terra-gold/20 bg-terra-gold/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-terra-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-terra-charcoal mb-2">Your Data is Secure</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We use bank-level encryption to protect your personal information. Your documents are securely stored 
                  and only accessed by our verification team. We never share your information with third parties without 
                  your explicit consent.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2 text-terra-gold" />
              Document Upload
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <FileUploadArea
                type="govId"
                file={govIdFile}
                title="Government ID *"
                description="Upload a clear photo of your National ID, Driver's License, or Passport (PDF, JPG, PNG - Max 5MB)"
              />

              <FileUploadArea
                type="propertyDoc"
                file={propertyDocFile}
                title="Property Document *"
                description="Upload a property ownership document, CAC certificate, or business registration (PDF, JPG, PNG - Max 5MB)"
              />

              {/* Terms and Conditions */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 text-terra-gold border-gray-300 rounded focus:ring-terra-gold"
                  />
                  <span className="text-sm text-gray-700">
                    I confirm that all information provided is accurate and I agree to TheBrayem's{' '}
                    <a href="#" className="text-terra-gold hover:underline">Terms of Service</a> and{' '}
                    <a href="#" className="text-terra-gold hover:underline">Privacy Policy</a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <CustomButton
                  variant="secondary"
                  size="lg"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={!govIdFile || !propertyDocFile}
                  className="min-w-[200px]"
                >
                  Submit for Review
                </CustomButton>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>What happens next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terra-gold text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium text-terra-charcoal">Review Process</h4>
                  <p className="text-sm text-gray-600">Our team will review your documents within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terra-gold text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium text-terra-charcoal">Verification Complete</h4>
                  <p className="text-sm text-gray-600">You'll receive an email notification once approved</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-terra-gold text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium text-terra-charcoal">Start Listing</h4>
                  <p className="text-sm text-gray-600">Begin adding your properties and connecting with buyers</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AgentVerification;
