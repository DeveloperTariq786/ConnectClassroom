import React from 'react';
import { ShieldCheck, MonitorPlay, Zap, Users } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <ShieldCheck className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Verified Institutes</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every center listed is physically verified to ensure safety and quality education for students.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <MonitorPlay className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hybrid Advantage</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The best of both worlds: Personalized offline attention + 24/7 online resource access.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <Zap className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Updates</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Never miss a class update. Get SMS and App notifications for schedule changes or tests.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 p-4 rounded-full mb-6">
              <Users className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Focused</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Built specifically to support local tuition centers and help them compete with ed-tech giants.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
