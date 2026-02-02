
import React from 'react';
import { Program } from '../types';

interface Props {
  program: Program;
}

const ProgramCard: React.FC<Props> = ({ program }) => {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">
        {program.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {program.description}
      </p>
      <div className="pt-6 border-t border-slate-100 flex items-center text-blue-600 font-semibold text-sm cursor-pointer hover:text-blue-700">
        Learn More
        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default ProgramCard;
