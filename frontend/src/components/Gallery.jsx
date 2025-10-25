import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Users, MapPin, Calendar as CalendarIcon, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import academicianData from '../mock';

const Gallery = () => {
  const { gallery } = academicianData;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#0a5f5f] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b7355]/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Creative Header with Rotated Text */}
        <div className="mb-16 relative">
          {/* Large Background Text */}
          <div className="absolute -top-8 left-0 opacity-10 pointer-events-none">
            <h2
              className="text-[120px] md:text-[180px] font-bold text-white leading-none"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              GALLERY
            </h2>
          </div>
          
          <div className="relative z-10 pt-12">
            <div className="flex items-center gap-6 mb-6">
              <div className="h-1 w-20 bg-white"></div>
              <span className="text-white/80 font-bold tracking-widest uppercase text-sm">Moments</span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              MDPs & Workshops
            </h2>
            <p className="text-xl text-white/90 max-w-2xl">
              Capturing moments from executive programs, workshops, and training sessions around the globe
            </p>
          </div>
        </div>

        {/* Gallery Grid - Creative Asymmetric Layout */}
        <div className="grid md:grid-cols-12 gap-6">
          {gallery.map((item, index) => {
            // Create varied grid spans for visual interest
            const spans = [
              'md:col-span-8', // Large
              'md:col-span-4', // Small
              'md:col-span-5', // Medium
              'md:col-span-7', // Large
              'md:col-span-6', // Half
              'md:col-span-6', // Half
            ];
            const span = spans[index % spans.length];

            return (
              <div
                key={item.id}
                className={`${span} group cursor-pointer`}
                onClick={() => setSelectedImage(item)}
              >
                <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <CalendarIcon size={16} />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} />
                            <span>{item.participants} Participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Info Badge */}
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#0a5f5f]">
                      {item.date.split(' ')[1]}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              20+
            </div>
            <div className="text-white/80 text-lg">Executive Programs Conducted</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              500+
            </div>
            <div className="text-white/80 text-lg">Professionals Trained</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              6
            </div>
            <div className="text-white/80 text-lg">Major Projects Led</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedImage.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <p className="text-gray-700">{selectedImage.description}</p>
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CalendarIcon size={18} className="text-[#0a5f5f]" />
                    <span>{selectedImage.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} className="text-[#0a5f5f]" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={18} className="text-[#0a5f5f]" />
                    <span>{selectedImage.participants} Participants</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;