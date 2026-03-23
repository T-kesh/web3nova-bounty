import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  points: number;
  icon: React.ReactNode;
  isCompleted?: boolean;
}

export default function TaskCard({ title, description, points, icon, isCompleted = false }: TaskCardProps) {
  return (
    <div className={`relative p-6 rounded-3xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-300
      ${isCompleted 
        ? 'bg-white/5 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] opacity-70' 
        : 'bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 hover:bg-white/15 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
      }`}
    >
      <div className="flex items-center gap-5">
        <div className={`p-4 rounded-2xl shrink-0 transition-transform ${isCompleted ? 'bg-green-500/10 text-green-400' : 'bg-white/10 text-white shadow-inner hover:scale-110'}`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className={`text-xl font-bold ${isCompleted ? 'text-white/70' : 'text-white'}`}>{title}</h3>
          <p className="text-white/50 text-sm mt-1">{description}</p>
        </div>
      </div>
      
      <div className="flex flex-row items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-4 sm:mt-0">
        <div className="flex flex-col items-start sm:items-end">
          <span className="text-[#FFB800] font-mono font-bold text-2xl">+{points}</span>
          <span className="text-[10px] text-white/40 tracking-widest font-semibold uppercase">Points</span>
        </div>
        <button 
          className={`px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap transition-all
            ${isCompleted 
              ? 'bg-transparent border border-green-500/50 text-green-400 cursor-not-allowed' 
              : 'bg-linear-to-r from-[#2E7BD1] to-[#2568b0] text-white hover:shadow-[0_0_20px_rgba(46,123,209,0.5)] hover:scale-105'
            }`}
          disabled={isCompleted}
        >
          {isCompleted ? 'Completed ✓' : 'Do Task'}
        </button>
      </div>
    </div>
  );
}
