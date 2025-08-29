import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  title: React.ReactNode;
  description: string;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black ${className}`}>
      {/* Full screen content with proper navbar spacing */}
      <div className="min-h-screen flex flex-col">
        {/* Spacer for fixed navbar */}
        <div className="h-20"></div>
        
        {/* Main content area that uses full remaining screen */}
        <div className="flex-grow flex flex-col justify-center py-16 md:py-20 lg:py-24">
          <div className="container-spacing">
            {/* Page Header */}
            <div className="text-center mb-20 md:mb-24 lg:mb-32 fade-in-up">
              <h1 className="heading-responsive mb-8">
                {title}
              </h1>
              <p className="text-responsive text-gray-300 max-w-4xl mx-auto">
                {description}
              </p>
            </div>

            {/* Page Content */}
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
