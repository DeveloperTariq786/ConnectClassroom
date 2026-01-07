import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User, LogOut, BookOpen } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link, useLocation, useNavigate } = ReactRouterDOM;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auth states (Simulation)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();

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
    
    // Click outside listener for profile menu
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (!isHome) {
      // Navigate to home with hash
      navigate(`/#${sectionId}`);
      return;
    }

    // If on home, scroll directly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    // For mobile, we might want to close the menu or keep it open to show the new state. 
    // Closing it is usually better UX so they see the result on the navbar (or stay in menu if simulated).
    // Let's keep mobile menu logic simple.
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
  };

  // Use scrolled style always if not on home page
  const navStyle = !isHome || isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  const textStyle = !isHome || isScrolled ? 'text-slate-900' : 'text-white';
  const linkStyle = !isHome || isScrolled ? 'text-slate-600' : 'text-slate-100';
  const buttonIconStyle = !isHome || isScrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10';
  // Specific style for the profile button to ensure it looks good on dark/light backgrounds
  const profileButtonStyle = !isHome || isScrolled 
    ? 'text-slate-700 bg-gray-100 hover:bg-gray-200' 
    : 'text-white bg-white/20 hover:bg-white/30';

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
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${linkStyle} bg-transparent border-0 cursor-pointer`}
            >
              How it Works
            </button>
            
            <div className="flex items-center space-x-4 ml-4">
              
              {isLoggedIn ? (
                <div className="relative" ref={profileMenuRef}>
                   <button 
                     onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                     className={`p-2 rounded-full transition-colors flex items-center justify-center ${profileButtonStyle}`}
                   >
                     <User size={20} />
                   </button>
                   
                   {/* Profile Dropdown */}
                   {isProfileMenuOpen && (
                     <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in-down origin-top-right ring-1 ring-black ring-opacity-5">
                       <div className="px-4 py-3 border-b border-gray-50 mb-1">
                         <p className="text-sm font-bold text-slate-900">Student User</p>
                         <p className="text-xs text-slate-500 truncate">student@classroomconnect.com</p>
                       </div>
                       <a href="#" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-gray-50 hover:text-primary-600 flex items-center transition-colors">
                         <BookOpen size={16} className="mr-3 text-slate-400" /> My Coaching
                       </a>
                       <button 
                         onClick={handleLogout}
                         className="block w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors"
                       >
                         <LogOut size={16} className="mr-3" /> Logout
                       </button>
                     </div>
                   )}
                </div>
              ) : (
                <button 
                  onClick={handleLogin}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${buttonIconStyle}`}
                >
                  Log in
                </button>
              )}
              
              <button 
                onClick={() => scrollToSection('partner-with-us')}
                className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
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
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-gray-50"
            >
              How it Works
            </button>
            
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              {isLoggedIn ? (
                 <>
                   <div className="px-3 py-3 flex items-center gap-3 bg-gray-50 rounded-lg mb-2">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Student User</p>
                        <p className="text-xs text-slate-500">student@classroomconnect.com</p>
                      </div>
                   </div>
                   <button className="w-full text-left px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-gray-50 flex items-center">
                      <BookOpen size={18} className="mr-3 text-slate-400" /> My Coaching
                   </button>
                   <button 
                     onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                     className="w-full text-left px-3 py-3 rounded-md text-base font-medium text-red-600 hover:bg-red-50 flex items-center"
                   >
                     <LogOut size={18} className="mr-3" /> Logout
                   </button>
                 </>
              ) : (
                <button 
                  onClick={() => { handleLogin(); setIsMobileMenuOpen(false); }}
                  className="w-full text-center py-3 text-slate-700 font-medium hover:bg-gray-50 rounded-lg border border-gray-200"
                >
                  Log in
                </button>
              )}
              
              <button 
                onClick={() => scrollToSection('partner-with-us')}
                className="w-full text-center py-3 bg-primary-600 text-white font-medium rounded-lg shadow-md"
              >
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