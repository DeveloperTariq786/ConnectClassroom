import React from 'react';
import { Star, MapPin, CheckCircle, Wifi, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_TUITIONS } from '../constants';

const FeaturedTuitions: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Offline Tuitions</h2>
            <p className="mt-2 text-slate-600">Top-rated institutes near you offering offline classes with digital support.</p>
          </div>
          <Link to="/find-tuitions" className="hidden md:flex items-center text-primary-600 font-semibold hover:text-primary-700 group">
            View all
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TUITIONS.map((tuition) => (
            <div key={tuition.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tuition.imageUrl} 
                  alt={tuition.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                  <span className="ml-1 text-xs font-bold text-slate-800">{tuition.rating}</span>
                  <span className="ml-1 text-xs text-slate-500">({tuition.reviewCount})</span>
                </div>
                {tuition.mode.includes("Home Access") && (
                   <div className="absolute bottom-3 left-3 bg-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg flex items-center">
                     <Wifi className="w-3 h-3 mr-1.5" />
                     Home Access Included
                   </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <Link to={`/tuitions/${tuition.id}`} className="text-lg font-bold text-slate-900 leading-tight group-hover:text-primary-600 transition-colors block">
                    {tuition.name}
                  </Link>
                  {tuition.isVerified && (
                    <div className="tooltip" title="Verified Institute">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    </div>
                  )}
                </div>

                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{tuition.location}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tuition.exams.slice(0, 3).map((exam) => (
                    <span key={exam} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium">
                      {exam}
                    </span>
                  ))}
                  {tuition.exams.length > 3 && (
                    <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium">
                      +{tuition.exams.length - 3}
                    </span>
                  )}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">
                   <div className="flex items-center text-slate-500 text-xs">
                      <Users className="w-3.5 h-3.5 mr-1" />
                      <span>Small Batches</span>
                   </div>
                   <Link to={`/tuitions/${tuition.id}`} className="text-primary-600 text-sm font-semibold hover:underline">
                     View Details
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/find-tuitions" className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View all tuitions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTuitions;