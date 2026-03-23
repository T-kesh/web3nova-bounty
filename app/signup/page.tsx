"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fake submission
    setIsSubmitted(true);
  };

  const referralLink = "https://web3nova.com/join?ref=alexnova";

  if (isSubmitted) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center font-sans min-h-screen px-4 py-20 w-full relative z-10">
        <div className="w-full max-w-md p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl animate-fade-in-up text-center">
          <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome to Nova!</h2>
          <p className="text-zinc-400 mb-8">You have successfully signed up.</p>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-sm font-semibold text-[#FFB800] uppercase tracking-widest mb-4">Your Referral Link</h3>
            <p className="text-xs text-white/50 mb-3">Invite friends and climb the referral leaderboard to earn huge points!</p>
            <div className="flex items-center gap-2 bg-black/50 p-2 rounded-xl border border-white/5">
              <input 
                type="text" 
                readOnly 
                value={referralLink} 
                className="bg-transparent text-white/80 text-sm outline-none px-2 w-full font-mono"
              />
              <button 
                onClick={() => navigator.clipboard.writeText(referralLink)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/tasks" className="px-8 py-3 bg-[#2E7BD1] hover:bg-[#2568b0] text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(46,123,209,0.4)]">
              Start Completing Tasks
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans min-h-screen px-4 py-24 w-full relative z-10">
      <div className="w-full max-w-lg p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl animate-fade-in-up">
        
        <div className="inline-flex items-center justify-center mb-8 gap-4 p-1 bg-white/5 rounded-full mx-auto border border-white/10">
          <button 
            onClick={() => setIsLogin(true)}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${isLogin ? 'bg-[#2E7BD1] text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${!isLogin ? 'bg-[#2E7BD1] text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
          >
            Sign Up
          </button>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Join the Bounty'}</h2>
          <p className="text-zinc-400">{isLogin ? 'Log in to your account to view your tasks and points.' : 'Create an account to start earning rewards.'}</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {!isLogin && (
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider pl-1">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
            </div>
          )}
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider pl-1">Email Address</label>
            <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider pl-1">Password</label>
            <input required type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
          </div>

          {!isLogin && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider pl-1">Verify Password</label>
                <input required type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
              </div>

              <div className="pt-4 border-t border-white/10 mt-2">
                <h3 className="text-sm font-semibold text-white mb-4">Link Your Socials (Optional)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="X (Twitter) Handle" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
                  <input type="text" placeholder="YouTube URL" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
                  <input type="text" placeholder="LinkedIn Profile" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
                  <input type="text" placeholder="Telegram Username" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
                  <input type="tel" placeholder="WhatsApp Number" className="w-full sm:col-span-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#2E7BD1] focus:bg-white/10 transition-colors" />
                </div>
              </div>
            </>
          )}

          <button 
            type="submit" 
            className="w-full bg-linear-to-r from-[#2E7BD1] to-[#2568b0] hover:from-[#358be8] hover:to-[#2b7ad0] text-white font-bold py-4 rounded-2xl mt-4 transition-all shadow-[0_0_20px_rgba(46,123,209,0.3)] hover:shadow-[0_0_30px_rgba(46,123,209,0.5)] transform hover:-translate-y-1"
          >
            {isLogin ? 'Login to Account' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
