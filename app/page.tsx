import Countdown from "@/components/Countdown";
import Leaderboard from "@/components/Leaderboard";

const referralData = [
  { rank: 1, user: "AlexNova", points: 15000 },
  { rank: 2, user: "SarahWeb3", points: 12400 },
  { rank: 3, user: "CryptoJohn", points: 10200 },
  { rank: 4, user: "EmmaChain", points: 8900 },
  { rank: 5, user: "TokenMike", points: 7500 },
];

const taskData = [
  { rank: 1, user: "DevGuru", points: 25000 },
  { rank: 2, user: "AliceWalker", points: 21400 },
  { rank: 3, user: "BobBuilder", points: 19800 },
  { rank: 4, user: "CharlieHash", points: 15200 },
  { rank: 5, user: "DianaBlock", points: 14100 },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans min-h-screen px-4 pb-24 max-w-7xl mx-auto w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-16 pb-12 text-center z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-white/70">Bounty Program Active</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
          Web3Nova <span className="bg-clip-text text-transparent bg-linear-to-r from-[#2E7BD1] to-[#FFB800]">Bounty</span>
        </h1>
        <p 
          className="max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400 animate-fade-in-up mb-12" 
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          Complete tasks, invite friends, and climb the leaderboard to earn exclusive rewards in the Web3Nova ecosystem.
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}>
          <Countdown />
        </div>
      </section>

      {/* Leaderboards Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 justify-center items-start mt-8 animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>
        
        <div className="w-full md:w-1/2 flex justify-end">
          <Leaderboard 
            title="Referral Leaderboard" 
            data={referralData} 
            accentColor="blue"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            }
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-start">
          <Leaderboard 
            title="Tasks Leaderboard" 
            data={taskData} 
            accentColor="yellow"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
              </svg>
            }
          />
        </div>

      </section>
    </div>
  );
}
