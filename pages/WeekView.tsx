
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { GRAMMAR_DATA } from '../data';

const DAY_COLORS: Record<string, string> = {
  Monday: 'bg-red-50 border-red-300 text-red-800',
  Tuesday: 'bg-orange-50 border-orange-300 text-orange-800',
  Wednesday: 'bg-emerald-50 border-emerald-300 text-emerald-800',
  Thursday: 'bg-purple-50 border-purple-300 text-purple-800',
  Friday: 'bg-pink-50 border-pink-300 text-pink-800'
};

export const WeekView: React.FC = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const week = GRAMMAR_DATA.weeks.find(w => w.week === parseInt(weekId || '0'));

  if (!week) return <Navigate to="/" />;

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Week {week.week} Menu</h2>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3 rounded-r-lg max-w-xl w-full">
          <p className="font-semibold text-indigo-800 text-sm">Focus: {week.focus}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((dayName) => {
          const dayData = week.days.find(d => d.day === dayName);
          const colorClass = DAY_COLORS[dayName] || 'bg-blue-50 border-blue-300 text-blue-800';
          
          return (
            <Link
              key={dayName}
              to={dayData ? `/week/${week.week}/day/${dayName.toLowerCase()}` : '#'}
              className={`
                flex flex-col items-center p-4 rounded-xl border-b-2 shadow-sm transition-all 
                ${dayData ? 'hover:scale-105 hover:shadow-md cursor-pointer' : 'opacity-50 cursor-not-allowed'}
                ${colorClass}
              `}
            >
              <span className="text-base font-bold mb-1">{dayName}</span>
              {dayData ? (
                <div className="bg-white/50 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase">
                  Ready
                </div>
              ) : (
                <div className="bg-gray-200/50 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-gray-500">
                  Soon
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
