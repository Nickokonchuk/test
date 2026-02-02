
import React, { useState } from 'react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO {...SEO_CONFIG.contact} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <header>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Reach Out <span className="text-blue-600">Confidently</span>.</h1>
          <p className="text-xl text-slate-600 mb-12">Confidential admissions support available 24 hours a day, 7 days a week.</p>
          <div className="space-y-8">
            <article className="flex items-start space-x-6">
              <span className="text-2xl w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">📞</span>
              <div>
                <h2 className="font-bold text-slate-900">Confidential Helpline</h2>
                <a href="tel:1-800-555-0199" className="text-2xl font-bold text-blue-600">(800) 555-0199</a>
              </div>
            </article>
            <div className="p-8 bg-amber-50 rounded-2xl border border-amber-200">
              <h2 className="font-bold text-amber-900 flex items-center mb-2">
                <span className="mr-2">⚠️</span> Medical Emergency
              </h2>
              <p className="text-sm text-amber-800">If you are in immediate danger, please call 911 or visit the ER.</p>
            </div>
          </div>
        </header>

        <article className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-bold mb-8">Inquiry Form</h2>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-300" placeholder="(555) 000-0000" />
            </div>
            <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg">Submit Request</button>
          </form>
          {submitted && <p className="mt-4 text-emerald-600 font-bold">Thank you. An admissions specialist will call you shortly.</p>}
        </article>
      </div>
    </section>
  );
};

export default Contact;
