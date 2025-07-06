
import React from 'react';
import { Shield, CheckCircle, Scale } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Agents",
      description: "Every agent on our platform is thoroughly vetted and verified to ensure you work with trusted professionals."
    },
    {
      icon: CheckCircle,
      title: "No Scams",
      description: "We implement strict verification processes for all listings to protect you from fraudulent properties and fake offers."
    },
    {
      icon: Scale,
      title: "Legal Help",
      description: "Get expert legal guidance throughout your property transaction with our network of qualified real estate lawyers."
    }
  ];

  return (
    <section className="py-16 px-4 bg-terra-off-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-terra-charcoal mb-3">
            Why Choose Us
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in finding the perfect property with complete peace of mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-terra-gold/20 rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-terra-gold" />
                </div>
                <h3 className="text-lg font-bold text-terra-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
