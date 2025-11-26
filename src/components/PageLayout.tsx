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
    // FIX 1: Removed min-h-screen here. The content dictates the height now.
    <div className={`bg-gradient-to-br from-black via-gray-900 to-black ${className}`}>
      
      {/* Container ensures proper navbar spacing */}
      <div className="flex flex-col"> 
        {/* Spacer for fixed navbar */}
        <div className="h-20"></div>
        
        {/* Main content wrapper */}
        {/* FIX 2: Removed min-h-screen and justify-center. Content starts at the top and scrolls. */}
        <div className="py-16 md:py-20 lg:py-24">
          <div className="container-spacing">
            {/* Page Header (Kept fixed padding) */}
            <div className="text-center mb-20 md:mb-24 lg:mb-32 fade-in-up">
              <h1 className="heading-responsive mb-8">
                {title}
              </h1>
              <p className="text-responsive text-gray-300 max-w-4xl mx-auto">
                {description}
              </p>
            </div>

            {/* Page Content (Where your cards/forms go) */}
            {/* FIX 3: Removed flex-grow here as content should stack, not stretch */}
            <div> 
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;