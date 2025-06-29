
import React from 'react';

const KeyStats: React.FC = () => {
  const stats = [
    { number: "15K+", label: "Properties For Sale" },
    { number: "26K+", label: "Happy Clients" },
    { number: "500+", label: "Verified Agents" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-terra-charcoal mb-6">
              A Track Record of Trust
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With years of experience in the Nigerian real estate market, we've helped thousands 
              of families find their dream homes and investors secure profitable properties. 
              Our commitment to transparency and excellence has made us the most trusted 
              property platform in Nigeria.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-terra-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Nigerian home"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyStats;
