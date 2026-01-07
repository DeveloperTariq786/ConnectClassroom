import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, CheckCircle, Wifi, Users, ChevronDown, SlidersHorizontal } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
import { FEATURED_TUITIONS, CATEGORIES } from '../constants';

const { Link } = ReactRouterDOM;

const FindTuitions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [selectedExams, setSelectedExams] = useState<string[]>([]);
  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter Logic
  const filteredTuitions = FEATURED_TUITIONS.filter(tuition => {
    const matchesSearch = tuition.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          tuition.exams.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = tuition.location.toLowerCase().includes(locationTerm.toLowerCase());
    
    // Check if at least one selected exam matches, or no exams selected
    const matchesExamFilter = selectedExams.length === 0 || 
                              tuition.exams.some(exam => selectedExams.some(selected => exam.includes(selected) || selected.includes(exam)));

    const matchesMode = selectedMode === 'All' || 
                        (selectedMode === 'Offline' && tuition.mode === 'Offline') ||
                        (selectedMode === 'Hybrid' && tuition.mode.includes('Home Access'));

    return matchesSearch && matchesLocation && matchesExamFilter && matchesMode;
  });

  const toggleExamFilter = (exam: string) => {
    setSelectedExams(prev => 
      prev.includes(exam) ? prev.filter(e => e !== exam) : [...prev, exam]
    );
  };

  const FilterSidebar = () => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
          <Filter size={20} /> Filters
        </h3>
        <button 
          onClick={() => { setSelectedExams([]); setSelectedMode('All'); }}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Reset
        </button>
      </div>

      {/* Mode Filter */}
      <div className="mb-8">
        <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Class Mode</h4>
        <div className="space-y-2">
          {['All', 'Offline', 'Hybrid'].map((mode) => (
            <label key={mode} className="flex items-center cursor-pointer group">
              <input 
                type="radio" 
                name="mode" 
                checked={selectedMode === mode}
                onChange={() => setSelectedMode(mode)}
                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-2 text-slate-600 group-hover:text-slate-900 transition-colors">
                {mode === 'Hybrid' ? 'Offline + Home Access' : mode === 'All' ? 'Any Mode' : 'Offline Only'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Exam Categories */}
      <div>
        <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">Categories</h4>
        <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
          {CATEGORIES.map((cat) => (
            <label key={cat.id} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedExams.includes(cat.name)}
                onChange={() => toggleExamFilter(cat.name)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-slate-600 group-hover:text-slate-900 transition-colors text-sm">
                {cat.name}
              </span>
            </label>
          ))}
          {/* Add a few common exams not in main categories for filtering demo */}
          {['Physics', 'Mathematics', 'Chemistry', 'Biology'].map((subject) => (
            <label key={subject} className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                checked={selectedExams.includes(subject)}
                onChange={() => toggleExamFilter(subject)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-slate-600 group-hover:text-slate-900 transition-colors text-sm">
                {subject}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-[68px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-slate-900 mb-6 md:hidden">Find Tuitions</h1>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by exam, subject, or institute name" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            
            <div className="md:w-1/3 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Location (e.g. Delhi)" 
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-100 focus:border-primary-500 outline-none transition-all"
              />
            </div>

            <button 
              className="md:w-auto bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-sm active:transform active:scale-95"
            >
              Search
            </button>
          </div>

          <div className="md:hidden mt-4">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center justify-center w-full py-2 bg-white border border-gray-300 rounded-lg text-slate-700 font-medium"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Sidebar Filters - Mobile (Collapsible) */}
          {showMobileFilters && (
            <div className="md:hidden mb-6">
              <FilterSidebar />
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                {filteredTuitions.length} Results Found
              </h2>
              <div className="flex items-center text-sm text-slate-500">
                <span>Sort by:</span>
                <button className="ml-2 font-medium text-slate-900 flex items-center hover:text-primary-600">
                  Recommended <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredTuitions.length > 0 ? (
                filteredTuitions.map((tuition) => (
                  <div key={tuition.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <Link to={`/tuitions/${tuition.id}`} className="w-full md:w-64 h-48 md:h-auto flex-shrink-0 relative rounded-xl overflow-hidden group cursor-pointer">
                      <img 
                        src={tuition.imageUrl} 
                        alt={tuition.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center shadow-sm">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                        <span className="ml-1 text-xs font-bold text-slate-800">{tuition.rating}</span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/tuitions/${tuition.id}`} className="text-xl font-bold text-slate-900 hover:text-primary-600 cursor-pointer transition-colors flex items-center gap-2">
                            {tuition.name}
                            {tuition.isVerified && <CheckCircle className="w-5 h-5 text-blue-500" />}
                          </Link>
                          <div className="flex items-center text-slate-500 text-sm mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {tuition.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 my-4">
                        {tuition.exams.map((exam) => (
                          <span key={exam} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium border border-slate-200">
                            {exam}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
                         <div className="flex items-center gap-4 text-sm text-slate-600">
                            {tuition.mode.includes('Home') ? (
                              <span className="flex items-center text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded">
                                <Wifi size={14} className="mr-1.5" /> Hybrid
                              </span>
                            ) : (
                              <span className="flex items-center text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                                <Users size={14} className="mr-1.5" /> Offline
                              </span>
                            )}
                            <span className="text-slate-400">|</span>
                            <span>{tuition.reviewCount} Reviews</span>
                         </div>
                         
                         <Link to={`/tuitions/${tuition.id}`} className="text-primary-600 font-semibold text-sm hover:underline">
                           View Details
                         </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">No tuitions found</h3>
                  <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setLocationTerm(''); setSelectedExams([]); setSelectedMode('All');}}
                    className="mt-4 text-primary-600 font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTuitions;