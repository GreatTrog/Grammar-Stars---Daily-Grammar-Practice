
import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { GRAMMAR_DATA } from '../data';
import { Question } from '../types';

export const DayView: React.FC = () => {
  const { weekId, dayName } = useParams<{ weekId: string; dayName: string }>();
  const [showAnswers, setShowAnswers] = useState(false);

  const week = GRAMMAR_DATA.weeks.find(w => w.week === parseInt(weekId || '0'));
  const day = week?.days.find(d => d.day.toLowerCase() === dayName?.toLowerCase());

  if (!week || !day) return <Navigate to="/" />;

  const renderPrompt = (prompt: string) => {
    const splitIndex = prompt.indexOf(': ');
    
    if (splitIndex !== -1) {
      const instruction = prompt.substring(0, splitIndex + 1);
      const sentence = prompt.substring(splitIndex + 2);
      
      return (
        <div className="flex flex-col">
          <span className="text-blue-600 font-bold text-sm lg:text-base mb-1 block uppercase tracking-tight">
            {instruction}
          </span>
          <span className="text-gray-900 font-bold text-lg lg:text-xl leading-snug break-words">
            {sentence}
          </span>
        </div>
      );
    }
    
    return (
      <span className="text-gray-900 font-bold text-lg lg:text-xl leading-snug break-words">
        {prompt}
      </span>
    );
  };

  const renderQuestionContent = (q: Question) => {
    return (
      <div className="space-y-3 h-full flex flex-col justify-between">
        <div className="w-full">
          <div className="flex items-start gap-2 mb-1">
             <span className="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-md text-sm shrink-0 mt-0.5 shadow-sm">
               {q.id}
             </span>
             <div className="flex-grow">
               {renderPrompt(q.prompt)}
             </div>
          </div>
          
          {q.options && (
            <div className="mt-2 pl-0 md:pl-8 flex flex-wrap gap-2">
              {q.options.map((opt, i) => (
                <span key={i} className="bg-white border-2 border-dashed border-blue-100 px-3 py-1 rounded-lg text-sm font-bold shadow-sm text-blue-900">
                  {opt}
                </span>
              ))}
            </div>
          )}

          {q.table && (
            <div className="mt-2 pl-0 md:pl-8 overflow-x-auto w-full">
              <table className="min-w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-50">
                    {q.table.columns.map((col, i) => (
                      <th key={i} className="border-2 border-blue-50 p-1.5 text-left font-bold text-blue-800">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {q.table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className="border-2 border-blue-50 p-2 font-medium text-gray-800 break-words">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {q.pairs && (
             <div className="mt-2 pl-0 md:pl-8 grid grid-cols-2 gap-x-4 gap-y-2">
                {q.pairs.map((p, i) => (
                  <React.Fragment key={i}>
                    <span className="text-base font-bold text-gray-800 break-words">{p[0]}</span>
                    <span className="text-base text-gray-300 font-mono tracking-tighter">............</span>
                  </React.Fragment>
                ))}
             </div>
          )}
        </div>

        {showAnswers && (
          <div className="mt-4 pt-2 border-t-2 border-green-100 w-full">
            <div className="text-green-800 font-bold text-base bg-green-50 p-3 rounded-lg border-2 border-green-100 shadow-inner break-words">
              <span className="text-green-600 text-[10px] uppercase block mb-0.5 font-bold tracking-widest">Answer:</span>
              {Array.isArray(day.answers[q.id]) ? day.answers[q.id].join(", ") : String(day.answers[q.id])}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col animate-fade-in pb-10">
      {/* Header Info */}
      <div className="mb-4 flex flex-col md:flex-row justify-between items-center md:items-end gap-3">
        <div className="text-center md:text-left">
          <nav className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-1">
            Week {week.week} • {day.day}
          </nav>
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-none">Grammar Starter</h2>
        </div>
        <button 
          onClick={() => setShowAnswers(!showAnswers)}
          className={`
            px-6 py-2.5 rounded-xl font-bold text-lg lg:text-xl transition-all shadow-lg transform active:scale-95 border-b-4
            ${showAnswers ? 'bg-red-500 text-white border-red-700 hover:bg-red-600' : 'bg-green-600 text-white border-green-800 hover:bg-green-700'}
          `}
        >
          {showAnswers ? 'Hide' : 'Answers'}
        </button>
      </div>

      {/* Teaching Point Banner */}
      <div className="bg-yellow-50 border-4 border-yellow-400 p-4 rounded-2xl mb-6 text-yellow-950 shadow-md flex items-center gap-4">
        <span className="text-2xl shrink-0 drop-shadow-sm" role="img" aria-label="lightbulb">💡</span>
        <p className="font-bold text-base lg:text-lg leading-snug">{day.teaching_point}</p>
      </div>

      {/* Grid Layout - 2 columns, reduced gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        {day.questions.map((q) => (
          <div key={q.id} className="bg-white border-2 border-blue-50 rounded-2xl p-4 shadow-sm hover:border-blue-100 transition-all flex flex-col min-h-[160px]">
            {renderQuestionContent(q)}
          </div>
        ))}
        {day.questions.length === 5 && (
          <div className="hidden md:flex flex-col justify-center items-center bg-indigo-50/10 rounded-2xl border-2 border-dashed border-indigo-100 min-h-[160px]">
            <span className="text-4xl opacity-10">⭐</span>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-center">
         <Link to={`/week/${week.week}`} className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm border-2 border-indigo-50 shadow-sm hover:bg-indigo-50 transition-all">
           ← Week Menu
         </Link>
      </div>
    </div>
  );
};
