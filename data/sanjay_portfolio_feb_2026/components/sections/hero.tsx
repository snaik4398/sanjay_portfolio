'use client';

import { bio } from '@/lib/data';
import { Github, Linkedin, Mail, ExternalLink, Download, MapPin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Greeting */}
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8 animate-fade-in">
          👋 Hi there! I'm
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
          {bio.name}
        </h1>

        {/* Typing Animation */}
        <div className="text-2xl md:text-4xl font-semibold mb-8 h-20 text-primary">
          <TypeAnimation
            sequence={bio.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
          {bio.tagline}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-8">
          <MapPin className="w-5 h-5 text-primary" />
          <span>{bio.location}</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href={bio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all font-medium"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href={bio.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all font-medium"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(bio.email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all font-medium"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center gap-4">
          <a
            href={bio.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-primary text-primary rounded-lg font-semibold transition-all hover:scale-105 hover:bg-primary hover:text-white"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
