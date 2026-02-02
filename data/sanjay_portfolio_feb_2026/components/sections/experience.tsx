'use client';

import { experience } from '@/lib/data';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Experience() {
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
    <section ref={sectionRef} id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building scalable healthcare platforms and AI-driven solutions at enterprise scale
          </p>
        </div>

        {/* Experience Items - Full Width */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`
                bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 
                shadow-lg hover:shadow-2xl transition-all duration-300 
                border border-gray-200 dark:border-gray-700
                hover:border-primary/50 dark:hover:border-primary/50
                ${isVisible ? 'animate-slide-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-16 h-16 relative">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={64}
                    height={64}
                    className="rounded-lg object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Achievements */}
              <div className="space-y-3 mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements & Responsibilities:
                </h4>
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
