
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState({ html: 0, css: 0, javascript: 0 });

  const skills = [
    { name: 'HTML', percentage: 100, color: 'bg-orange-500' },
    { name: 'CSS', percentage: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 75, color: 'bg-yellow-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            setAnimatedProgress({
              html: 100,
              css: 90,
              javascript: 75,
            });
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-raleway font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-portfolio-primary to-portfolio-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technical expertise across web development technologies and engineering tools.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`transition-all duration-1000 delay-${(index + 1) * 200} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                  <span className="text-portfolio-primary font-semibold">{skill.percentage}%</span>
                </div>
                <div className="relative">
                  <Progress 
                    value={animatedProgress[skill.name.toLowerCase() as keyof typeof animatedProgress]} 
                    className="h-3"
                  />
                  <div 
                    className={`absolute top-0 left-0 h-3 ${skill.color} rounded-full transition-all duration-2000 ease-out`}
                    style={{ 
                      width: `${animatedProgress[skill.name.toLowerCase() as keyof typeof animatedProgress]}%` 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className={`mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-raleway font-semibold text-gray-800 mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Blender 3D', 'Electrical Design', 'Circuit Analysis', 'Project Management'].map((skill, index) => (
                <div key={skill} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-portfolio-primary/5 transition-colors duration-300">
                  <span className="text-gray-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
