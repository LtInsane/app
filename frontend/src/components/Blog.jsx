import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import academicianData from '../mock';

const Blog = () => {
  const { blogPosts } = academicianData;

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thought leadership on management, strategy, and organizational innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="h-2 bg-[#0a5f5f] group-hover:bg-[#8b7355] transition-colors"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0a5f5f]/10 text-[#0a5f5f] rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#0a5f5f] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-[#0a5f5f] hover:text-[#083d3d] group-hover:translate-x-1 transition-transform"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#0a5f5f] hover:bg-[#083d3d] text-white px-8 py-6 text-lg"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;