'use client';

import { education, certifications } from '@/lib/data';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Education() {
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
    <section ref={sectionRef} id="education" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic foundation and professional certifications in computer science and emerging technologies
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`
                  bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 
                  border border-gray-200 dark:border-gray-700
                  hover:border-primary/50 dark:hover:border-primary/50
                  hover:shadow-xl transition-all duration-300
                  ${isVisible ? 'animate-slide-up' : 'opacity-0'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 relative">
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg object-contain"
                      style={{ width: 'auto', height: 'auto', maxWidth: '48px', maxHeight: '48px' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-sm font-semibold text-primary mt-3">
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h3>
          </div>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className={`
                  bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 
                  border border-gray-200 dark:border-gray-700
                  hover:border-primary/50 dark:hover:border-primary/50
                  hover:shadow-xl transition-all duration-300
                  ${isVisible ? 'animate-slide-up' : 'opacity-0'}
                `}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium text-sm"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
