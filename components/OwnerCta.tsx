import React from 'react';

const OwnerCta: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white blur-3xl"></div>
             <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Run an Offline Tuition?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Bring your institute online without losing your offline identity. Manage students, share notes, and grow your presence in your city.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary-700 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200">
                Register Your Tuition
              </button>
              <button className="bg-primary-800/50 backdrop-blur-sm border border-primary-500 text-white font-medium text-lg px-8 py-4 rounded-xl hover:bg-primary-800 transition-all duration-200">
                Book a Demo
              </button>
            </div>
            <p className="mt-6 text-sm text-blue-200/80">
              Free to list. No hidden charges for basic profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerCta;
