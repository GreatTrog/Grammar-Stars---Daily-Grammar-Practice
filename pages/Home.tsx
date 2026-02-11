
import React from 'react';
import { Link } from 'react-router-dom';
import { GRAMMAR_DATA } from '../data';

export const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Choose Your Week</h2>
        <p className="text-lg text-blue-700">6 weeks of daily 10-minute grammar boosts!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GRAMMAR_DATA.weeks.map((week) => (
          <Link 
            key={week.week}
            to={`/week/${week.week}`}
            className="group relative bg-white border-b-4 border-blue-400 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -top-3 -left-3 bg-yellow-400 text-yellow-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-white">
              {week.week}
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-indigo-600 transition-colors">
              Week {week.week}
            </h3>
            <p className="text-gray-600 italic text-sm">
              Focus: {week.focus || "Retrieval & Practice"}
            </p>
            <div className="mt-4 flex items-center text-blue-600 font-bold text-sm">
              <span>Enter Week</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
