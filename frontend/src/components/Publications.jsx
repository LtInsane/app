import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Quote, ExternalLink } from 'lucide-react';
import academicianData from '../mock';

const Publications = () => {
  const { publications } = academicianData;
  const [filter, setFilter] = useState('all');

  const filteredPublications =
    filter === 'all'
      ? publications
      : publications.filter((pub) => pub.type === filter);

  const getTypeLabel = (type) => {
    const labels = {
      journal: 'Journal Article',
      conference: 'Conference Paper',
      book: 'Book',
    };
    return labels[type] || type;
  };

  return (
    <section id="publications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peer-reviewed publications in leading management and business journals
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className={filter === 'all' ? 'bg-[#0a5f5f] hover:bg-[#083d3d]' : ''}
          >
            All Publications
          </Button>
          <Button
            onClick={() => setFilter('journal')}
            variant={filter === 'journal' ? 'default' : 'outline'}
            className={filter === 'journal' ? 'bg-[#0a5f5f] hover:bg-[#083d3d]' : ''}
          >
            Journal Articles
          </Button>
          <Button
            onClick={() => setFilter('conference')}
            variant={filter === 'conference' ? 'default' : 'outline'}
            className={filter === 'conference' ? 'bg-[#0a5f5f] hover:bg-[#083d3d]' : ''}
          >
            Conference Papers
          </Button>
          <Button
            onClick={() => setFilter('book')}
            variant={filter === 'book' ? 'default' : 'outline'}
            className={filter === 'book' ? 'bg-[#0a5f5f] hover:bg-[#083d3d]' : ''}
          >
            Books
          </Button>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <Card
              key={pub.id}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-[#0a5f5f]"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <BookOpen className="text-[#0a5f5f] mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{pub.authors}</p>
                        
                        {pub.type === 'journal' && (
                          <p className="text-gray-700 font-medium">
                            <span className="italic">{pub.journal}</span>, {pub.year},{' '}
                            {pub.volume}, pp. {pub.pages}
                          </p>
                        )}
                        
                        {pub.type === 'conference' && (
                          <p className="text-gray-700 font-medium">
                            {pub.conference}, {pub.year}, {pub.location}
                          </p>
                        )}
                        
                        {pub.type === 'book' && (
                          <p className="text-gray-700 font-medium">
                            {pub.publisher}, {pub.year}
                            {pub.isbn && ` • ISBN: ${pub.isbn}`}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 items-center ml-9">
                      <span className="px-3 py-1 bg-[#0a5f5f]/10 text-[#0a5f5f] rounded-full text-sm font-medium">
                        {getTypeLabel(pub.type)}
                      </span>
                      {pub.citations && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {pub.citations} Citations
                        </span>
                      )}
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#0a5f5f] hover:text-[#083d3d] text-sm font-medium"
                        >
                          DOI <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-[#8b7355] font-bold text-lg md:text-right">
                    {pub.year}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CV Download */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-8 bg-gradient-to-br from-gray-50 to-white">
            <Quote className="text-[#0a5f5f] mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
              Download Complete CV
            </h3>
            <p className="text-gray-600 mb-6">
              Full curriculum vitae with complete publication list and research details
            </p>
            <Button className="bg-[#0a5f5f] hover:bg-[#083d3d] text-white px-8 py-6 text-lg">
              Download CV (PDF)
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;