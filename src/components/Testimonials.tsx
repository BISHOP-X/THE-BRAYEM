
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import CustomButton from './CustomButton';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Adebayo Okunola",
      location: "Lagos, Nigeria",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "TheBrayem made finding my dream home so easy. The agents were professional, the process was transparent, and I felt supported throughout. I couldn't be happier with my new home in Lekki!",
      rating: 5
    },
    {
      id: 2,
      name: "Fatima Mohammed",
      location: "Abuja, Nigeria",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "As a first-time buyer, I was nervous about the process. TheBrayem's team guided me every step of the way and helped me secure a fantastic property in Maitama. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Chukwuma Okafor",
      location: "Port Harcourt, Nigeria",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "I've used several property platforms, but TheBrayem stands out. No fake listings, verified agents, and excellent customer service. They truly care about their clients' satisfaction.",
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 px-4 bg-terra-charcoal">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-terra-off-white mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hear from satisfied clients who found their perfect homes through TheBrayem
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-terra-gold fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl font-medium text-terra-off-white mb-8 leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="text-terra-gold font-semibold text-lg">
                  {current.name}
                </div>
                <div className="text-gray-300">
                  {current.location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CustomButton
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="text-terra-off-white hover:text-terra-gold"
            >
              <ChevronLeft className="w-6 h-6" />
            </CustomButton>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-terra-gold' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <CustomButton
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="text-terra-off-white hover:text-terra-gold"
            >
              <ChevronRight className="w-6 h-6" />
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
