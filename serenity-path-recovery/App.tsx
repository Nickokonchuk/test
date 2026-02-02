
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

// Placeholder Pages (Defined here for brevity as functional components)
const About = () => (
  <div className="max-w-7xl mx-auto px-4 py-24">
    <h1 className="text-5xl font-bold mb-8">About Us</h1>
    <p className="text-xl text-slate-600 leading-relaxed mb-8">
      Serenity Path Recovery was founded with a singular vision: to provide a sanctuary where clinical excellence meets compassionate care.
      Our team of board-certified medical doctors, clinical psychologists, and addiction specialists work in harmony to create customized treatment plans for every individual.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
      <div className="p-8 bg-blue-50 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-slate-700 italic">"To provide the highest standard of evidence-based addiction treatment with radical empathy and unconditional positive regard."</p>
      </div>
      <div className="p-8 bg-slate-100 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Evidence-Based Approach</h3>
        <p className="text-slate-700">We utilize clinically proven modalities including CBT, DBT, and EMDR to address the root causes of addiction.</p>
      </div>
    </div>
  </div>
);

const Programs = () => (
  <div className="max-w-7xl mx-auto px-4 py-24 text-center">
     <h1 className="text-5xl font-bold mb-12">Comprehensive Care Continuum</h1>
     <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">From the first day of detox to the long-term journey of aftercare, we are by your side.</p>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {['Medical Detox', 'Residential Inpatient', 'Partial Hospitalization (PHP)', 'Intensive Outpatient (IOP)', 'Dual Diagnosis', 'Family Therapy'].map((p, i) => (
         <div key={i} className="p-10 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all">
           <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
             <span className="text-blue-600 font-bold">{i + 1}</span>
           </div>
           <h3 className="text-xl font-bold mb-4">{p}</h3>
           <p className="text-slate-500 text-sm">Specialized clinical protocols designed for long-term clinical outcomes.</p>
         </div>
       ))}
     </div>
  </div>
);

const Locations = () => (
  <div className="max-w-7xl mx-auto px-4 py-24">
    <h1 className="text-5xl font-bold mb-12">Our Healing Environments</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {['Los Angeles, CA', 'Miami, FL', 'Austin, TX', 'Phoenix, AZ'].map((city, i) => (
        <div key={i} className="relative group overflow-hidden rounded-3xl h-96 shadow-lg">
          <img src={`https://picsum.photos/seed/${city}/800/600`} alt={city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
            <h2 className="text-3xl font-bold text-white">{city}</h2>
            <p className="text-slate-300 mt-2">Accredited Clinical Facility</p>
            <button className="mt-6 w-max px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm">View Details</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Admissions = () => (
  <div className="max-w-4xl mx-auto px-4 py-24">
    <h1 className="text-5xl font-bold mb-8 text-center">The Path to Admissions</h1>
    <div className="space-y-12">
      {[
        { step: 1, title: 'Confidential Consultation', text: 'Speak with an admissions specialist who understands what you are going through.' },
        { step: 2, title: 'Insurance Verification', text: 'We work directly with your provider to maximize your coverage benefits.' },
        { step: 3, title: 'Clinical Assessment', text: 'A brief screening to ensure our program is the right clinical fit for your needs.' },
        { step: 4, title: 'Travel & Logistics', text: 'We help coordinate transportation and what to pack for your stay.' }
      ].map((item, i) => (
        <div key={i} className="flex items-start space-x-8">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-2xl shadow-lg">
            {item.step}
          </div>
          <div className="pt-2">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Insurance = () => (
  <div className="max-w-7xl mx-auto px-4 py-24">
    <div className="bg-slate-900 rounded-[40px] p-12 md:p-24 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">Hassle-Free Insurance Verification</h1>
      <p className="text-xl text-blue-200 text-center mb-16 max-w-2xl mx-auto">We accept most major PPO and HMO insurance plans to make treatment as accessible as possible.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {['Aetna', 'Cigna', 'BlueCross', 'UnitedHealth', 'Anthem', 'Humana', 'Beacon', 'Kaiser'].map((ins, i) => (
          <div key={i} className="bg-white/10 h-24 rounded-2xl flex items-center justify-center border border-white/10 text-xl font-bold italic text-white/50">
            {ins}
          </div>
        ))}
      </div>
      
      <div className="bg-white text-slate-900 p-10 rounded-3xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Verify Your Coverage</h3>
        <p className="text-slate-500 mb-8 text-sm italic">Verification is 100% confidential and does not commit you to treatment.</p>
        <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all">
          Start Verification Form
        </button>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
