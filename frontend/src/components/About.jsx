import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Target, Award } from 'lucide-react';
import academicianData from '../mock';

const About = () => {
  const { profile } = academicianData;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1501503069356-3c6b82a17d89"
                alt="Academic Environment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a5f5f]/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {profile.bio}
            </p>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0a5f5f] mb-4 flex items-center gap-2">
                <GraduationCap size={28} />
                Education
              </h3>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[#0a5f5f] pl-4">
                    <h4 className="font-bold text-[#1a1a1a]">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Interests */}
            <div>
              <h3 className="text-2xl font-bold text-[#0a5f5f] mb-4 flex items-center gap-2">
                <Target size={28} />
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-[#0a5f5f] hover:text-white transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#0a5f5f] mb-4 flex items-center gap-2">
                <Award size={28} />
                Recent Awards
              </h3>
              <div className="space-y-3">
                {academicianData.awards.map((award) => (
                  <div key={award.id} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#0a5f5f] rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-[#1a1a1a]">{award.title}</p>
                      <p className="text-sm text-gray-600">
                        {award.organization} • {award.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;