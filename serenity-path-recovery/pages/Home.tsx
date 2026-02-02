
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS, LOCATIONS, SEO_CONFIG } from '../constants';
import ProgramCard from '../components/ProgramCard';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <SEO {...SEO_CONFIG.home} />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              Confidential & Accredited Care
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              A Better Life Starts With <span className="text-blue-600">Recovery</span>.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Serenity Path Recovery offers nationally accredited, professional addiction treatment designed to help you reclaim your independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:1-800-555-0199"
                className="px-8 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center"
              >
                24/7 Confidential Helpline
              </a>
              <Link
                to="/insurance"
                className="px-8 py-5 bg-slate-100 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center"
              >
                Verify Insurance Online
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/seed/recovery/1200/1200" 
            alt="Compassionate recovery care" 
            className="w-full h-full object-cover rounded-bl-[120px]"
          />
        </div>
      </header>

      {/* Trust signals */}
      <section className="bg-slate-50 border-y border-slate-200 py-8" aria-label="Accreditations">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 opacity-60">
            <span className="font-bold text-slate-500">JOINT COMMISSION ACCREDITED</span>
            <span className="font-bold text-slate-500">LEGITSCRIPT CERTIFIED</span>
            <span className="font-bold text-slate-500">HIPAA COMPLIANT</span>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white" aria-labelledby="programs-title">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="programs-title" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Treatment Solutions</h2>
            <p className="text-lg text-slate-600">Specialized programs for every step of the recovery journey.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to take the first step?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="tel:1-800-555-0199" className="text-4xl font-extrabold">(800) 555-0199</a>
          <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold">Inquire Online</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
