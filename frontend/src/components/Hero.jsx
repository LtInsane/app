import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc"
          alt="Academic Setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[#0a5f5f] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-[#8b7355] rounded-lg opacity-20 transform rotate-45 animate-bounce"></div>

      {/* Creative Diagonal Stripe */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#0a5f5f]/20 to-transparent transform skew-x-12 translate-x-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Animated Badge */}
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0a5f5f]/90 text-white text-sm font-semibold tracking-wide uppercase rounded-full backdrop-blur-sm border-2 border-white/20 animate-pulse">
              <Sparkles size={16} />
              <span>Professor of Strategic Management</span>
            </div>
          </div>
          
          {/* Large Name with Creative Typography */}
          <div className="relative mb-6">
            {/* Background shadow text */}
            <h1
              className="absolute top-2 left-2 text-5xl md:text-6xl lg:text-8xl font-bold text-[#0a5f5f] opacity-50 blur-sm"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Dr. Sarah Anderson
            </h1>
            {/* Main text */}
            <h1
              className="relative text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Dr. Sarah <br />
              <span className="inline-block transform -rotate-2 bg-[#0a5f5f] px-4 py-2">
                Anderson
              </span>
            </h1>
          </div>
          
          {/* Tagline with creative border */}
          <div className="relative pl-6 mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0a5f5f] via-white to-[#8b7355]"></div>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Transforming organizations through{' '}
              <span className="text-[#0a5f5f] font-bold bg-white px-2 py-1">strategic innovation</span>,{' '}
              sustainable practices, and evidence-based leadership research.
            </p>
          </div>
          
          {/* CTA Buttons with creative hover effects */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-[#0a5f5f] hover:bg-[#083d3d] text-white text-lg px-8 py-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0a5f5f] text-lg px-8 py-6 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Get in Touch
            </Button>
          </div>

          {/* Creative Stats Bar */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                15+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Years</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                200+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Publications</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform">
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                50+
              </div>
              <div className="text-white/80 text-sm uppercase tracking-wide">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with creative animation */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white hover:text-[#0a5f5f] transition-colors group"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm uppercase tracking-widest opacity-80 group-hover:opacity-100">Scroll</span>
          <ArrowDown size={32} />
        </div>
      </button>
    </section>
  );
};

export default Hero;