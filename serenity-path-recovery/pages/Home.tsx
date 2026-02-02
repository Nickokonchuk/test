
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS, LOCATIONS } from '../constants';
import ProgramCard from '../components/ProgramCard';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              Compassionate Care for Real Recovery
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Healing Begins with a <span className="text-blue-600">Single Step</span>.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Accredited, professional, and patient-centered addiction treatment designed to help you reclaim your life in a safe and supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:1-800-555-0199"
                className="px-8 py-5 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 flex items-center justify-center"
              >
                Call for Confidential Consultation
              </a>
              <Link
                to="/insurance"
                className="px-8 py-5 bg-slate-100 text-slate-900 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center"
              >
                Verify Your Insurance
              </Link>
            </div>
            <div className="mt-12 flex items-center space-x-8">
               <div className="flex -space-x-3 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/doctor1/100/100" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/doctor2/100/100" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/doctor3/100/100" alt="" />
              </div>
              <p className="text-sm text-slate-500 font-medium italic">
                Guided by our board-certified clinical team.
              </p>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/40 to-transparent z-10"></div>
          <img 
            src="https://picsum.photos/seed/recovery/1200/1200" 
            alt="Recovery background" 
            className="w-full h-full object-cover rounded-bl-[120px]"
          />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-slate-400 text-sm">JOINT COMMISSION ACCREDITED</span>
            <span className="font-bold text-slate-400 text-sm">LEGITScript CERTIFIED</span>
            <span className="font-bold text-slate-400 text-sm">HIPAA COMPLIANT</span>
            <span className="font-bold text-slate-400 text-sm">NAATP MEMBER</span>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Evidence-Based Treatment Programs</h2>
            <p className="text-lg text-slate-600">
              We offer a full continuum of care, from medically supervised detox to residential treatment and outpatient support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/programs" className="text-blue-600 font-bold hover:underline inline-flex items-center text-lg">
              View All Treatment Options
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Treatment with Dignity & Respect.</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Addiction is a chronic disease, not a moral failure. Our clinical philosophy focuses on healing the whole person—mind, body, and spirit—using evidence-based therapies and compassionate support.
            </p>
            <ul className="space-y-4 mb-10">
              {['24/7 Medical Supervision', 'Individual & Group Therapy', 'Comprehensive Aftercare Planning', 'Family Support Systems'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-100 font-medium">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all inline-block">
              Learn About Our Philosophy
            </Link>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-blue-600/20 rounded-3xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/nature1/800/800" 
                alt="Calming nature" 
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20">
                  <p className="text-2xl font-light italic mb-6">"Serenity Path gave me my daughter back. They treated her like a human being, not just a patient."</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-400">— Sarah M., Family Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Facilities</h2>
              <p className="text-lg text-slate-600">
                With locations across the United States, we provide peaceful settings designed for reflection and recovery.
              </p>
            </div>
            <Link to="/locations" className="px-6 py-3 border-2 border-slate-300 rounded-xl font-bold text-slate-700 hover:bg-white transition-all">
              View All Locations
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LOCATIONS.slice(0, 2).map((loc, i) => (
              <div key={i} className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={loc.image} 
                    alt={loc.city} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{loc.city}, {loc.state}</h3>
                  <p className="text-slate-500 mb-6">{loc.address}</p>
                  <a href={`tel:${loc.phone}`} className="text-blue-600 font-bold text-lg hover:underline">
                    {loc.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">We are available to help 24 hours a day, 7 days a week.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <a href="tel:1-800-555-0199" className="text-4xl md:text-5xl font-extrabold text-white">
              (800) 555-0199
            </a>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <Link to="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-slate-100 transition-all">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
