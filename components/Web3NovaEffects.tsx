"use client";

import React, { useState, useEffect } from "react";

export default function Web3NovaEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Continuous bubble generation
  useEffect(() => {
    const interval = setInterval(() => {
      const newBubble = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10,
        duration: Math.random() * 3 + 2,
      };
      setBubbles((prev) => [...prev, newBubble]);
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, (newBubble.duration + 1) * 1000);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black text-white">
      {/* ─── BACKGROUND LAYER ─── */}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46, 123, 209, 0.08) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(46, 123, 209, 0.08) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial depth overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(10, 10, 10, 0.6) 100%)",
        }}
      />

      {/* Animated top & bottom accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#2E7BD1] to-transparent animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-full h-1 bg-linear-to-r from-transparent via-[#FFB800] to-transparent animate-pulse-slow" />


      {/* ─── GLOSSY ORBS ─── */}

      {/* Left orb — Primary Blue */}
      <div
        className="absolute -left-[15%] md:-left-[10%] top-[10%] md:top-[15%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full animate-float-1"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(46, 123, 209, 0.4), rgba(46, 123, 209, 0.25), rgba(46, 123, 209, 0.15), transparent)",
          backdropFilter: "blur(80px)",
          border: "2px solid rgba(46, 123, 209, 0.25)",
          boxShadow:
            "0 30px 120px rgba(46, 123, 209, 0.35), inset 0 0 100px rgba(46, 123, 209, 0.2)",
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      >
        <div
          className="absolute top-[15%] left-[20%] w-[200px] md:w-[250px] h-[200px] md:h-[250px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Top-right orb — Sky Blue */}
      <div
        className="absolute -right-[15%] md:right-[5%] top-[5%] md:top-[10%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-full animate-float-2"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(146, 180, 228, 0.35), rgba(146, 180, 228, 0.22), rgba(146, 180, 228, 0.15), transparent)",
          backdropFilter: "blur(70px)",
          border: "2px solid rgba(146, 180, 228, 0.25)",
          boxShadow:
            "0 30px 130px rgba(146, 180, 228, 0.3), inset 0 0 100px rgba(146, 180, 228, 0.15)",
          transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
        }}
      >
        <div
          className="absolute top-[10%] left-[25%] w-[150px] md:w-[180px] h-[150px] md:h-[180px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.18), transparent)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Bottom-right orb — Sun Yellow */}
      <div
        className="absolute -right-[10%] md:right-[8%] bottom-[5%] md:bottom-[15%] w-[320px] md:w-[380px] h-[320px] md:h-[380px] rounded-full animate-float-3"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255, 184, 0, 0.45), rgba(255, 184, 0, 0.3), rgba(255, 184, 0, 0.18), transparent)",
          backdropFilter: "blur(60px)",
          border: "2px solid rgba(255, 184, 0, 0.3)",
          boxShadow:
            "0 30px 120px rgba(255, 184, 0, 0.4), inset 0 0 90px rgba(255, 184, 0, 0.2)",
          transform: `translate(${mousePosition.x * 0.04}px, ${-mousePosition.y * 0.04}px)`,
        }}
      >
        <div
          className="absolute top-[12%] left-[18%] w-[120px] md:w-[140px] h-[120px] md:h-[140px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.25), transparent)",
            filter: "blur(30px)",
          }}
        />
      </div>


      {/* ─── FLOATING PARTICLES ─── */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#2E7BD1] rounded-full animate-float-particle-1 blur-sm" />
      <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-[#FFB800] rounded-full animate-float-particle-2 blur-sm" />
      <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-[#92B4E4] rounded-full animate-float-particle-3 blur-sm" />
      <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-[#2E7BD1] rounded-full animate-float-particle-1 blur-sm" />


      {/* ─── BUBBLES ─── */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(46, 123, 209, 0.3), rgba(146, 180, 228, 0.2), transparent)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 8px 32px rgba(46, 123, 209, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.1)",
            animation: `bubble-float ${bubble.duration}s ease-out forwards`,
            zIndex: 5,
          }}
        >
          <div
            className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)",
              filter: "blur(5px)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
