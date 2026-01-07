import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-bold text-xl text-slate-900">ClassroomConnect</span>
            </div>
            <p className="text-slate-500 text-sm">
              Empowering local education. Connecting students with the best offline coaching centers in their neighborhood.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600">Find Tuitions</a></li>
              <li><a href="#" className="hover:text-primary-600">Browse Exams</a></li>
              <li><a href="#" className="hover:text-primary-600">Student Login</a></li>
              <li><a href="#" className="hover:text-primary-600">Institute Login</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-primary-600">About Us</a></li>
              <li><a href="#" className="hover:text-primary-600">Careers</a></li>
              <li><a href="#" className="hover:text-primary-600">Blog</a></li>
              <li><a href="#" className="hover:text-primary-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Get in Touch</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-400 hover:text-primary-600 hover:shadow-md transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-400 hover:text-primary-600 hover:shadow-md transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-400 hover:text-primary-600 hover:shadow-md transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-slate-400 hover:text-primary-600 hover:shadow-md transition-all">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Mail size={16} />
              <span>support@classroomconnect.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© 2024 ClassroomConnect Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-slate-900">Terms</a>
             <a href="#" className="hover:text-slate-900">Privacy</a>
             <a href="#" className="hover:text-slate-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
