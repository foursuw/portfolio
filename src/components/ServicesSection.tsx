
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Creating modern, responsive websites using HTML, CSS, and JavaScript with a focus on user experience and performance.',
    },
    {
      icon: '🎨',
      title: '3D Modeling',
      description: 'Professional 3D modeling and visualization using Blender for architectural, product, and engineering applications.',
    },
    {
      icon: '⚡',
      title: 'Electrical Engineering',
      description: 'Comprehensive electrical and electronics engineering solutions, from circuit design to system optimization.',
    },
    {
      icon: '🚀',
      title: 'Project Consulting',
      description: 'Technical consulting and project management for engineering and web development projects of all scales.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-gray-800 mb-4">
            My Services
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive solutions combining engineering expertise with modern technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-raleway font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
