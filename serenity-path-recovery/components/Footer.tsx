
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">SERENITY PATH</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering individuals and families on the journey to recovery through evidence-based care and clinical excellence.
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">24/7 Admissions Hotline</p>
              <a href="tel:1-800-555-0199" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                (800) 555-0199
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/programs" className="hover:text-blue-400">Medical Detox</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400">Residential Treatment</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400">Dual Diagnosis</Link></li>
              <li><Link to="/programs" className="hover:text-blue-400">Outpatient IOP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-blue-400">About Our Team</Link></li>
              <li><Link to="/locations" className="hover:text-blue-400">Our Facilities</Link></li>
              <li><Link to="/admissions" className="hover:text-blue-400">Admissions</Link></li>
              <li><Link to="/insurance" className="hover:text-blue-400">Verify Insurance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Accreditations</h4>
            <div className="flex flex-wrap gap-4 grayscale opacity-70">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-[8px] border border-white/20">HIPAA</div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-[8px] border border-white/20">JCAHO</div>
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-[8px] border border-white/20">CARF</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-[11px] leading-relaxed">
          <p className="mb-4">
            <strong className="text-slate-100">Crisis Disclaimer:</strong> Serenity Path Recovery is not an emergency psychiatric service. If you are experiencing a life-threatening emergency, please call 911 or visit your nearest emergency room immediately.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Serenity Path Recovery Centers. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white">Terms of Use</Link>
              <Link to="/compliance" className="hover:text-white">Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
