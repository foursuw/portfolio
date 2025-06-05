
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log('HeroSection mounted');
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    console.log('Image failed to load');
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-32 left-40 w-72 h-72 bg-yellow-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Simplified Profile Image */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'}`}>
            <div className="relative inline-block">
              <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/80">
                {!imageError ? (
                  <img 
                    src="/lovable-uploads/77877bab-2a5b-4dfb-be6e-3ffcf92a0173.png" 
                    alt="Bagadi Sarana Sai" 
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-6xl font-bold">
                    BSS
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Simplified Main Heading */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translateY-0' : 'opacity-0 transform translateY-4'}`}>
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200">
                ✨ Available for Freelance
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                Bagadi
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sarana Sai
              </span>
            </h1>
            
            <div className="flex justify-center mb-8">
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Simplified Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translateY-0' : 'opacity-0 transform translateY-4'}`}>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
              Professional 
              <span className="text-blue-600 font-semibold mx-2">Engineer</span> 
              in
            </p>
            <p className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold mb-8">
              Vizag City
            </p>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Electrical & Electronics Engineer specializing in 
                <span className="text-blue-600 font-semibold"> web development</span>, 
                <span className="text-purple-600 font-semibold"> 3D modeling with Blender</span>, 
                and innovative engineering solutions.
              </p>
              <p className="text-lg text-gray-500">
                Passionate about creating digital experiences that matter.
              </p>
            </div>
          </div>

          {/* Simplified CTA Section */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translateY-0' : 'opacity-0 transform translateY-4'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToAbout}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-300"
              >
                Discover My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                View Resume
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>21 Years Old</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Based in Visakhapatnam</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>EEE Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
