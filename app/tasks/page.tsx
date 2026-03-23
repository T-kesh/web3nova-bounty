import TaskCard from "@/components/TaskCard";

export default function TasksPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans min-h-screen px-4 pb-24 max-w-4xl mx-auto w-full pt-12">
      <div className="w-full text-center mb-12 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Active <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2E7BD1] to-[#92B4E4]">Tasks</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Complete tasks to earn points, climb the leaderboard, and unlock exclusive rewards.
        </p>
      </div>

      <div className="w-full flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
        
        <TaskCard 
          title="Follow Web3Nova on X" 
          description="Stay updated with our latest announcements and ecosystem updates."
          points={500}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          }
        />

        <TaskCard 
          title="Join Web3Nova Telegram" 
          description="Become a part of our active community discussion."
          points={500}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.5 2 2 11.5l7 3.5m12.5-13-8.5 13-3.5-3.5M21.5 2 15 22l-6-7"/>
            </svg>
          }
        />

        <TaskCard 
          title="Subscribe on YouTube" 
          description="Watch our latest tutorials and deep dives."
          points={1000}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          }
        />

        <TaskCard 
          title="Follow on LinkedIn" 
          description="Connect with our professional network."
          points={500}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          }
          isCompleted={true}
        />

        <TaskCard 
          title="Invite 5 Friends" 
          description="Use your referral link to invite friends to the ecosystem."
          points={2500}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          }
        />

      </div>
    </div>
  );
}
