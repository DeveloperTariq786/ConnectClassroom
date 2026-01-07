import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the home page
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use scrolled style always if not on home page
  const navStyle = !isHome || isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  const textStyle = !isHome || isScrolled ? 'text-slate-900' : 'text-white';
  const linkStyle = !isHome || isScrolled ? 'text-slate-600' : 'text-slate-100';
  const buttonIconStyle = !isHome || isScrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className={`font-bold text-xl tracking-tight ${textStyle}`}>
                ClassroomConnect
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/find-tuitions" className={`text-sm font-medium hover:text-primary-500 transition-colors ${linkStyle}`}>Find Tuitions</Link>
            <a href="#" className={`text-sm font-medium hover:text-primary-500 transition-colors ${linkStyle}`}>How it Works</a>
            
            <div className="flex items-center space-x-4 ml-4">
              <button className={`p-2 rounded-full transition-colors ${buttonIconStyle}`}>
                <User size={20} />
              </button>
              <button className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${buttonIconStyle}`}>
                Log in
              </button>
              <button className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl">
                Partner with us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${textStyle}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-gray-100 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/find-tuitions" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Find Tuitions</Link>
            <a href="#" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-gray-50">How it Works</a>
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button className="w-full text-center py-3 text-slate-700 font-medium hover:bg-gray-50 rounded-lg">
                Log in
              </button>
              <button className="w-full text-center py-3 bg-primary-600 text-white font-medium rounded-lg shadow-md">
                Register Institute
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;