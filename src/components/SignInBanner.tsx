
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const SignInBanner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-terra-green py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-terra-off-white mb-4">
          Sign in to streamline your search
        </h2>
        <p className="text-terra-off-white/80 mb-6 max-w-2xl mx-auto">
          Save your favorite properties, get personalized recommendations, and connect directly with verified agents.
        </p>
        <CustomButton 
          variant="primary" 
          size="lg"
          onClick={() => navigate('/signup')}
        >
          Sign in or create an account
        </CustomButton>
      </div>
    </section>
  );
};

export default SignInBanner;
