import React from "react";

export interface LeaderboardEntry {
  rank: number;
  user: string;
  points: number;
  avatar?: string;
}

interface LeaderboardProps {
  title: string;
  data: LeaderboardEntry[];
  icon?: React.ReactNode;
  accentColor?: "blue" | "yellow";
}

export default function Leaderboard({ title, data, icon, accentColor = "blue" }: LeaderboardProps) {
  const isBlue = accentColor === "blue";
  const glowClass = isBlue ? "shadow-[0_0_30px_rgba(46,123,209,0.1)]" : "shadow-[0_0_30px_rgba(255,184,0,0.1)]";
  const iconBgClass = isBlue ? "bg-[#2E7BD1]/20 text-[#2E7BD1]" : "bg-[#FFB800]/20 text-[#FFB800]";

  return (
    <div className={`flex flex-col w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl overflow-hidden ${glowClass} relative group`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && <div className={`p-2.5 rounded-xl ${iconBgClass}`}>{icon}</div>}
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">{title}</h2>
        </div>
        <div className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-white/40 border border-white/5">
          Top {data.length}
        </div>
      </div>
      
      <div className="flex flex-col p-2 max-h-[400px] overflow-y-auto custom-scrollbar">
        {data.map((entry) => (
          <div 
            key={entry.user} 
            className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors group/item"
          >
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm transition-transform group-hover/item:scale-110
                ${entry.rank === 1 ? 'bg-linear-to-br from-[#FFB800] to-[#FF8A00] text-black shadow-[0_0_15px_rgba(255,184,0,0.4)]' : 
                  entry.rank === 2 ? 'bg-linear-to-br from-[#E2E8F0] to-[#94A3B8] text-black shadow-[0_0_15px_rgba(226,232,240,0.3)]' : 
                  entry.rank === 3 ? 'bg-linear-to-br from-[#D97706] to-[#92400E] text-white shadow-[0_0_15px_rgba(217,119,6,0.3)]' : 
                  'bg-white/5 border border-white/10 text-white/50'}`}
              >
                {entry.rank}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-tr from-white/10 to-transparent border border-white/10 flex items-center justify-center text-white/50 font-medium overflow-hidden relative">
                  {entry.avatar ? (
                    <img src={entry.avatar} alt={entry.user} className="w-full h-full object-cover" />
                  ) : (
                    entry.user.charAt(0).toUpperCase()
                  )}
                  <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                </div>
                <span className="font-semibold text-white/80 group-hover/item:text-white transition-colors">{entry.user}</span>
              </div>
            </div>
            <div className={`font-mono font-bold ${isBlue ? 'text-[#92B4E4]' : 'text-[#FFB800]'}`}>
              {entry.points.toLocaleString()} <span className="text-[10px] text-white/30 font-sans tracking-widest pl-0.5">PTS</span>
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <div className="p-8 text-center text-white/40 text-sm">
            No entries yet
          </div>
        )}
      </div>
    </div>
  );
}
