"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00", isClient: false });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Current time in Lagos
      const nowStr = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
      const nowLagos = new Date(nowStr);

      // 3 is Wednesday (0=Sun, 1=Mon, 2=Tue, 3=Wed)
      const daysUntilWednesday = (3 + 7 - nowLagos.getDay()) % 7;
      
      const targetLagos = new Date(nowLagos);
      targetLagos.setDate(nowLagos.getDate() + (daysUntilWednesday === 0 ? 7 : daysUntilWednesday));
      targetLagos.setHours(0, 0, 0, 0);

      const difference = targetLagos.getTime() - nowLagos.getTime();
      return difference;
    };

    const updateTimer = () => {
      const difference = calculateTimeLeft();

      if (difference <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00", isClient: true });
        return true; // indicates we should clear interval
      }

      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      const hours = String(totalHours).padStart(2, "0");
      const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, "0");

      setTimeLeft({ hours, minutes, seconds, isClient: true });
      return false;
    };

    // Initial call immediately so it doesn't wait 1 second
    const isDone = updateTimer();
    let interval: NodeJS.Timeout;
    
    if (!isDone) {
      interval = setInterval(() => {
        if (updateTimer()) {
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  if (!timeLeft.isClient) return <div className="h-[150px] w-[300px] opacity-0" />;

  return (
    <div className="flex flex-col items-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-b from-[#2E7BD1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
        <h3 className="text-xs font-bold tracking-[0.2em] text-[#92B4E4] uppercase">Starts Wednesday</h3>
      </div>

      <div className="flex items-center gap-4 text-4xl md:text-5xl font-bold tabular-nums tracking-tight">
        <div className="flex flex-col items-center">
          <div className="w-20 md:w-24 h-24 md:h-28 flex items-center justify-center bg-black/40 border border-white/5 rounded-2xl shadow-inner backdrop-blur-md">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">{timeLeft.hours}</span>
          </div>
          <span className="text-[10px] text-white/40 mt-3 font-medium tracking-widest">HOURS</span>
        </div>
        
        <div className="flex flex-col justify-start h-24 md:h-28 pt-4">
          <span className="text-white/20 text-3xl animate-pulse">:</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-20 md:w-24 h-24 md:h-28 flex items-center justify-center bg-black/40 border border-white/5 rounded-2xl shadow-inner backdrop-blur-md">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/50">{timeLeft.minutes}</span>
          </div>
          <span className="text-[10px] text-white/40 mt-3 font-medium tracking-widest">MINUTES</span>
        </div>
        
        <div className="flex flex-col justify-start h-24 md:h-28 pt-4">
          <span className="text-white/20 text-3xl animate-pulse">:</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-20 md:w-24 h-24 md:h-28 flex items-center justify-center bg-black/40 border border-white/5 rounded-2xl shadow-inner backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-white/5" />
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-[#2E7BD1]">{timeLeft.seconds}</span>
          </div>
          <span className="text-[10px] text-white/40 mt-3 font-medium tracking-widest">SECONDS</span>
        </div>
      </div>
    </div>
  );
}
