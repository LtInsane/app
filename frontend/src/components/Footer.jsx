import React from 'react';
import { Linkedin, Mail, Twitter, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#0a5f5f]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Dr. Naman Sharma
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Assistant Professor of General Management & Strategy (OB/HR & Entrepreneurship) at Indian Institute of Foreign Trade, Kolkata. Dedicated to advancing knowledge in organizational behavior, employee engagement, and inclusive work environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a
                  href="#teaching"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  Teaching
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#0a5f5f] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#0a5f5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#0a5f5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:namanshandilya@gmail.com"
                className="w-10 h-10 bg-gray-800 hover:bg-[#0a5f5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#0a5f5f] rounded-full flex items-center justify-center transition-colors"
                aria-label="Google Scholar"
              >
                <BookOpen size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Indian Institute of Foreign Trade
              <br />
              Kolkata Campus, Kolkata, India - 700103
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Dr. Naman Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
