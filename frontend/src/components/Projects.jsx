import React from 'react';
import { Card, CardContent } from './ui/card';
import { Briefcase, Calendar, DollarSign, CheckCircle, TrendingUp } from 'lucide-react';
import academicianData from '../mock';

const Projects = () => {
  const { projects } = academicianData;

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative diagonal background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#0a5f5f]/5 to-transparent transform skew-x-12 translate-x-32"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Creative Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-6">
            <div className="h-1 w-20 bg-[#0a5f5f]"></div>
            <span className="text-[#8b7355] font-bold tracking-widest uppercase text-sm">Portfolio</span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#1a1a1a] mb-4 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Research &<br />
            <span className="text-[#0a5f5f]">Consultancy Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Bridging academic research with real-world business challenges through impactful collaborations
          </p>
        </div>

        {/* Projects Grid with Alternating Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-stretch`}
            >
              {/* Project Card - Takes 2/3 width */}
              <Card className="flex-1 lg:w-2/3 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none shadow-lg">
                <CardContent className="p-8">
                  {/* Header with Type Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                          project.type === 'Research'
                            ? 'bg-[#0a5f5f] text-white'
                            : 'bg-[#8b7355] text-white'
                        }`}
                      >
                        {project.type}
                      </span>
                      <h3
                        className="text-3xl font-bold text-[#1a1a1a] mb-2"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'ongoing'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-start gap-3">
                      <Briefcase className="text-[#0a5f5f] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Client</p>
                        <p className="font-semibold text-gray-800 text-sm">{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="text-[#0a5f5f] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                        <p className="font-semibold text-gray-800 text-sm">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="text-[#0a5f5f] flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Budget</p>
                        <p className="font-semibold text-gray-800 text-sm">{project.budget}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Outcomes */}
                  <div>
                    <h4 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                      <TrendingUp size={20} className="text-[#0a5f5f]" />
                      Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-[#0a5f5f] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Vertical Accent Card - Takes 1/3 width */}
              <div
                className={`lg:w-1/3 rounded-lg p-8 flex flex-col justify-center items-start transform transition-all duration-500 hover:scale-105 ${
                  project.type === 'Research'
                    ? 'bg-gradient-to-br from-[#0a5f5f] to-[#083d3d]'
                    : 'bg-gradient-to-br from-[#8b7355] to-[#6d5a43]'
                }`}
              >
                <div className="text-white">
                  <p className="text-6xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {String(project.id).padStart(2, '0')}
                  </p>
                  <p className="text-xl font-semibold mb-4">{project.type} Project</p>
                  <div className="h-1 w-16 bg-white/50 mb-4"></div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {project.type === 'Research'
                      ? 'Contributing to academic knowledge and theoretical frameworks'
                      : 'Applying research insights to solve real-world business challenges'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-[#0a5f5f] to-[#8b7355] rounded-lg">
            <div className="bg-white px-8 py-4 rounded-md">
              <p className="text-lg font-semibold text-[#1a1a1a]">
                Interested in collaboration?{' '}
                <a href="#contact" className="text-[#0a5f5f] hover:text-[#083d3d] underline">
                  Let's discuss your project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;