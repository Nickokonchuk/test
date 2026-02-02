
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">Reach Out <span className="text-blue-600">Confidently</span>.</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Your journey to recovery is our priority. Contact us 24/7 for a confidential consultation or insurance verification.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">24/7 Admissions Hotline</h4>
                <a href="tel:1-800-555-0199" className="text-2xl font-bold text-blue-600 hover:underline">(800) 555-0199</a>
                <p className="text-sm text-slate-500 mt-2">Available for immediate assistance, 365 days a year.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email Our Clinical Team</h4>
                <p className="text-lg text-slate-700">admissions@serenitypath.com</p>
                <p className="text-sm text-slate-500 mt-2">We typically respond to emails within 1-2 business hours.</p>
              </div>
            </div>

            <div className="p-8 bg-amber-50 rounded-2xl border border-amber-200">
               <h4 className="font-bold text-amber-900 mb-4 flex items-center">
                 <span className="mr-2">⚠️</span>
                 Crisis Disclaimer
               </h4>
               <p className="text-sm text-amber-800 leading-relaxed">
                 If you are currently experiencing a psychiatric emergency or a life-threatening crisis, please call <strong>911</strong> or go to your nearest emergency room immediately. We are a treatment facility, not an emergency first-responder service.
               </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Received</h3>
              <p className="text-slate-600 mb-8">Thank you for reaching out. An admissions specialist will contact you shortly via your preferred method.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Confidential Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="(555) 000-0000" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Primary Concern</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white">
                    <option>Drug Addiction Treatment</option>
                    <option>Alcohol Rehabilitation</option>
                    <option>Mental Health / Dual Diagnosis</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                  <textarea className="w-full h-32 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you today?"></textarea>
                </div>

                <div className="flex items-start space-x-3 mb-4">
                  <input type="checkbox" required className="mt-1" id="privacy-agreement" />
                  <label htmlFor="privacy-agreement" className="text-xs text-slate-500 leading-relaxed">
                    By submitting this form, you agree to our <span className="text-blue-600 underline">Privacy Policy</span> and acknowledge that your information is handled with strict HIPAA-compliant confidentiality.
                  </label>
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50">
                  Submit Confidential Request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
