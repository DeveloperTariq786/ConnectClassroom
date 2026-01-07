import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { MapPin, Star, CheckCircle, Wifi, Users, BookOpen, User, Phone, Mail, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { FEATURED_TUITIONS } from '../constants';

const { useParams, Link } = ReactRouterDOM;

const TuitionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tuition = FEATURED_TUITIONS.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tuition) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Tuition Center Not Found</h2>
        <Link to="/find-tuitions" className="text-primary-600 hover:underline">
          Return to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-12">
      
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 flex items-center">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to="/find-tuitions" className="hover:text-primary-600">Find Tuitions</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-slate-900 font-medium truncate">{tuition.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-80 h-56 flex-shrink-0 rounded-xl overflow-hidden">
              <img 
                src={tuition.imageUrl} 
                alt={tuition.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                    {tuition.name}
                    {tuition.isVerified && <CheckCircle className="w-6 h-6 text-blue-500" fill="currentColor" color="white" />}
                  </h1>
                  <div className="flex items-center text-slate-500 mt-2">
                    <MapPin className="w-4 h-4 mr-1.5" />
                    <span className="text-lg">{tuition.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                   <div className="bg-primary-50 px-3 py-1.5 rounded-lg flex items-center gap-2">
                     <Star className="w-5 h-5 text-yellow-500 fill-current" />
                     <span className="text-xl font-bold text-slate-900">{tuition.rating}</span>
                     <span className="text-sm text-slate-500">({tuition.reviewCount} Reviews)</span>
                   </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                 {tuition.exams.map(exam => (
                   <span key={exam} className="px-3 py-1 bg-gray-100 text-slate-700 rounded-full text-sm font-medium border border-gray-200">
                     {exam}
                   </span>
                 ))}
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-700">
                  {tuition.mode.includes('Home') ? (
                    <span className="flex items-center text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full font-medium border border-indigo-100">
                      <Wifi size={16} className="mr-2" /> Hybrid Mode (Offline + Online)
                    </span>
                  ) : (
                    <span className="flex items-center text-slate-700 bg-slate-100 px-3 py-1 rounded-full font-medium">
                      <Users size={16} className="mr-2" /> Offline Only
                    </span>
                  )}
                </div>
                {tuition.isVerified && (
                  <div className="flex items-center text-green-700 bg-green-50 px-3 py-1 rounded-full font-medium border border-green-100">
                    <ShieldCheck size={16} className="mr-2" /> Verified Institute
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">About the Institute</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {tuition.description || "No description available for this institute yet."}
              </p>
              
              {tuition.highlights && tuition.highlights.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tuition.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 rounded-full bg-primary-500 mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Courses */}
            {tuition.courses && tuition.courses.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary-600" /> 
                  Courses Offered
                </h2>
                <div className="space-y-4">
                  {tuition.courses.map((course) => (
                    <div key={course.id} className="border border-gray-100 rounded-xl p-4 hover:border-primary-100 hover:bg-primary-50/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-slate-900">{course.name}</h3>
                        <span className="bg-gray-100 text-slate-600 text-xs px-2 py-1 rounded font-medium flex items-center">
                          <Clock size={12} className="mr-1" /> {course.duration}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">{course.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Faculty */}
            {tuition.faculty && tuition.faculty.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary-600" /> 
                  Our Faculty
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tuition.faculty.map((member) => (
                    <div key={member.id} className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        {member.imageUrl ? (
                          <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-full h-full p-3 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{member.name}</h4>
                        <p className="text-xs text-primary-600 font-medium uppercase">{member.subject}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{member.qualification}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Reviews */}
            {tuition.reviews && tuition.reviews.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-primary-600" /> 
                  Student Reviews
                </h2>
                <div className="space-y-6">
                  {tuition.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-slate-900">{review.user}</span>
                        <span className="text-xs text-slate-400">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar / Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 sticky top-24">
                 <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
                 {tuition.address && (
                   <div className="flex items-start text-sm text-slate-600 mb-3">
                      <MapPin size={16} className="mr-3 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span>{tuition.address}</span>
                   </div>
                 )}
                 <div className="flex items-center text-sm text-slate-600 mb-3">
                    <Phone size={16} className="mr-3 text-gray-400" />
                    <span>+91 98765 43210</span> 
                 </div>
                 <div className="flex items-center text-sm text-slate-600">
                    <Mail size={16} className="mr-3 text-gray-400" />
                    <span>enquiry@classroomconnect.com</span>
                 </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TuitionDetail;