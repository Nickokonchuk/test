import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import SEO from './components/SEO';
import { SEO_CONFIG } from './constants';

const About = () => (
  <section className="max-w-7xl mx-auto px-4 py-24">
    <SEO {...SEO_CONFIG.about} />
    <h1 className="text-5xl font-bold mb-8">About Serenity Path Recovery</h1>
    <p className="text-xl text-slate-600 leading-relaxed mb-8">
      Serenity Path Recovery was founded with a singular vision: to provide a sanctuary where clinical excellence meets compassionate care.
      Our team of board-certified medical doctors, clinical psychologists, and addiction specialists work in harmony.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
      <article className="p-8 bg-blue-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-slate-700 italic">"To provide the highest standard of evidence-based addiction treatment with radical empathy."</p>
      </article>
      <article className="p-8 bg-slate-100 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Evidence-Based Approach</h2>
        <p className="text-slate-700">We utilize clinically proven modalities including CBT, DBT, and EMDR to address the root causes of addiction.</p>
      </article>
    </div>
  </section>
);

const Programs = () => (
  <section className="max-w-7xl mx-auto px-4 py-24 text-center">
    <SEO {...SEO_CONFIG.programs} />
    <h1 className="text-5xl font-bold mb-12">Comprehensive Care Continuum</h1>
    <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto">From medical detox to long-term aftercare, we provide clinical excellence at every stage.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {['Medical Detox', 'Residential Inpatient', 'Partial Hospitalization (PHP)', 'Intensive Outpatient (IOP)', 'Dual Diagnosis', 'Family Therapy'].map((p, i) => (
        <article key={i} className="p-10 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-blue-600 font-bold">{i + 1}</span>
          </div>
          <h2 className="text-xl font-bold mb-4">{p}</h2>
          <p className="text-slate-500 text-sm">Specialized clinical protocols designed for long-term clinical outcomes.</p>
        </article>
      ))}
    </div>
  </section>
);

const Locations = () => (
  <section className="max-w-7xl mx-auto px-4 py-24">
    <SEO {...SEO_CONFIG.locations} />
    <h1 className="text-5xl font-bold mb-12">Our Treatment Facilities</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {['Los Angeles, CA', 'Miami, FL', 'Austin, TX', 'Phoenix, AZ'].map((city, i) => (
        <article key={i} className="relative group overflow-hidden rounded-3xl h-96 shadow-lg">
          <img src={`https://picsum.photos/seed/${city}/800/600`} alt={`${city} facility`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-8">
            <h2 className="text-3xl font-bold text-white">{city}</h2>
            <p className="text-slate-300 mt-2">Accredited Clinical Center</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const Insurance = () => (
  <section className="max-w-7xl mx-auto px-4 py-24">
    <SEO {...SEO_CONFIG.insurance} />
    <div className="bg-slate-900 rounded-[40px] p-12 md:p-24 text-white">
      <h1 className="text-5xl font-bold mb-8 text-center">Rehab Insurance Verification</h1>
      <p className="text-xl text-blue-200 text-center mb-16 max-w-2xl mx-auto">Verify your PPO or HMO insurance benefits for residential addiction treatment securely.</p>
      <div className="bg-white text-slate-900 p-10 rounded-3xl max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Start Verification</h2>
        <button className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg">Verify Coverage Now</button>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/locations" element={<Locations />} />
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