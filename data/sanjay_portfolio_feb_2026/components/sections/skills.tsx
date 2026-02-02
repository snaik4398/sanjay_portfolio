'use client';

import { skills } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning backend development, AI/ML, healthcare tech, and cloud infrastructure
          </p>
        </div>

        {/* Compact Skills List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="space-y-6">
            {skills.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Title */}
                <div className="flex items-start gap-4">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white min-w-[200px] pt-1">
                    {category.title}:
                  </h3>
                  
                  {/* Skills in one line */}
                  <div className="flex-1">
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {category.items.map((skill, index) => (
                        <span key={skill.name}>
                          {skill.name}
                          {index < category.items.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Years Experience', value: '3.5+' },
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Technologies', value: '30+' },
            { label: 'Code Quality', value: '95%' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center p-6 rounded-xl 
                bg-white dark:bg-gray-800
                border-2 border-primary/30 dark:border-primary/30
                hover:border-primary dark:hover:border-primary 
                transition-all duration-300
                ${isVisible ? 'animate-slide-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
