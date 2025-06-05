
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'Web', 'App', '3D'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      description: 'Modern responsive e-commerce platform',
    },
    {
      id: 2,
      title: 'Mobile App UI',
      category: 'App',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      description: 'Clean and intuitive mobile application design',
    },
    {
      id: 3,
      title: 'Product Visualization',
      category: '3D',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      description: '3D product rendering and visualization',
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      description: 'Professional corporate website development',
    },
    {
      id: 5,
      title: 'Dashboard App',
      category: 'App',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop',
      description: 'Analytics dashboard application',
    },
    {
      id: 6,
      title: 'Architectural Model',
      category: '3D',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      description: '3D architectural visualization project',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-gray-800 mb-4">
            My Portfolio
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of my recent projects and creative work across various technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? 'bg-portfolio-primary hover:bg-portfolio-primary/90' 
                    : 'hover:bg-portfolio-primary/10'
                } transition-colors duration-300`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`transition-all duration-1000 delay-${(index + 1) * 100} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="bg-portfolio-primary text-white px-2 py-1 rounded text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-raleway font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
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

export default PortfolioSection;
