import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Users, BookMarked, Clock } from 'lucide-react';
import academicianData from '../mock';

const Teaching = () => {
  const { courses } = academicianData;

  return (
    <section id="teaching" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Teaching
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about educating the next generation of business leaders and strategic thinkers
          </p>
        </div>

        {/* Teaching Image */}
        <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69"
            alt="Teaching Environment"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-[#0a5f5f]"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-bold text-[#0a5f5f] mb-1">
                      {course.code}
                    </p>
                    <h3 className="text-2xl font-bold text-[#1a1a1a]">
                      {course.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-[#8b7355]/10 text-[#8b7355] rounded-full text-sm font-semibold">
                    {course.level}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={18} className="text-[#0a5f5f]" />
                    <span className="font-medium">{course.semester}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} className="text-[#0a5f5f]" />
                    <span className="font-medium">{course.students} Students</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-lg shadow-md">
          <div className="flex items-start gap-4 mb-6">
            <BookMarked className="text-[#0a5f5f] flex-shrink-0" size={40} />
            <div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                Teaching Philosophy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                My teaching approach combines rigorous academic theory with practical, real-world applications. I believe in creating an engaging learning environment that encourages critical thinking, collaborative problem-solving, and ethical decision-making.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through case studies, interactive discussions, and experiential learning projects, I aim to prepare students not just for their first job, but for lifelong success as adaptive, innovative leaders in an ever-changing business landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;