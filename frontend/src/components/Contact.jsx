import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import academicianData from '../mock';

const Contact = () => {
  const { profile } = academicianData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will respond within 24-48 hours.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I welcome inquiries from prospective students, research collaborators, and industry partners
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-l-4 border-l-[#0a5f5f]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-[#0a5f5f] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Email</h3>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-gray-600 hover:text-[#0a5f5f] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#0a5f5f]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#0a5f5f] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Phone</h3>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-gray-600 hover:text-[#0a5f5f] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#0a5f5f]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#0a5f5f] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-1">Office</h3>
                    <p className="text-gray-600">{profile.office}</p>
                    <p className="text-gray-600">{profile.institution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#1a1a1a] mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday: 2:00 PM - 4:00 PM</p>
                  <p>Wednesday: 2:00 PM - 4:00 PM</p>
                  <p className="text-sm italic mt-3">
                    Or by appointment - please email to schedule
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1a1a1a] mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full min-h-[150px]"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0a5f5f] hover:bg-[#083d3d] text-white py-6 text-lg"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;