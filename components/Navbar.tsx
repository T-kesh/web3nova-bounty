import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 animate-fade-in-up">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" />
      <div className="relative flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-[#2E7BD1] to-[#FFB800] animate-pulse-slow shadow-[0_0_20px_rgba(46,123,209,0.5)] group-hover:scale-110 transition-transform" />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">Web3Nova Bounty</span>
        </Link>
      </div>
      <nav className="relative hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link href="/" className="hover:text-white hover:text-shadow-[0_0_10px_white] transition-all">Home</Link>
        <Link href="/tasks" className="hover:text-white hover:text-shadow-[0_0_10px_white] transition-all">Tasks</Link>
      </nav>
      <div className="relative flex items-center gap-4">
        <Link 
          href="/signup" 
          className="px-6 py-2.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-full transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          Sign Up / Login
        </Link>
      </div>
    </header>
  );
}
