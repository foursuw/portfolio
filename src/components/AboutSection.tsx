
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const personalDetails = [
    { label: 'Name', value: 'Bagadi Sarana Sai' },
    { label: 'Website', value: 'www.saranasai.com' },
    { label: 'Phone', value: '+91 XXXXX XXXXX' },
    { label: 'City', value: 'Visakhapatnam, India' },
    { label: 'Age', value: '21' },
    { label: 'Degree', value: 'B.Tech EEE' },
    { label: 'Email', value: 'saranasai@example.com' },
    { label: 'Freelance', value: 'Available' },
  ];

  const statistics = [
    { number: '50+', label: 'Happy Clients', color: 'text-green-600' },
    { number: '75+', label: 'Projects', color: 'text-blue-600' },
    { number: '3+', label: 'Years Experience', color: 'text-purple-600' },
    { number: '12+', label: 'Awards', color: 'text-orange-600' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I am a passionate electrical and electronics engineer with expertise in web development and 3D modeling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/28b3d2c8-3952-4e17-90a2-43ba1963aabf.png" 
                alt="Bagadi Sarana Sai - About" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-accent/20 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Personal Details */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {personalDetails.map((detail, index) => (
                <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">{detail.label}:</span>
                  <span className="text-gray-600">{detail.value}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              As a 21-year-old professional electrical and electronics engineer based in Visakhapatnam, 
              I bring together technical expertise and creative innovation. My passion lies in creating 
              digital solutions that bridge the gap between engineering principles and modern web technologies. 
              With extensive experience in HTML, CSS, JavaScript, and 3D modeling using Blender, I've successfully 
              completed numerous projects for satisfied clients.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
