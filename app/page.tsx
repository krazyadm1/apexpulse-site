import Link from "next/link";

function Icon({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 ${className}`}>
      <path d={d} />
    </svg>
  );
}

const FEATURES = [
  { title: "Live Match Overlay", desc: "Real-time kills, damage, squad kills, and teams remaining — right on your screen while you play.",
    icon: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7zm0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0" },
  { title: "Legend Analytics", desc: "Sortable rankings with portraits, pick rate, K/D, damage per match. Find your best legend.",
    icon: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" },
  { title: "Weapon Stats", desc: "Track every weapon's kills, knockdowns, and usage. Sortable by category with weapon icons.",
    icon: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6M10 12h4M10 16h4M8 12h.01M8 16h.01" },
  { title: "Ranked Progress", desc: "Current rank badge, session RP, weekly RP, and per-match RP sparkline chart.",
    icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { title: "Headshot Tracking", desc: "Body diagram showing headshot vs body shot distribution with a trend chart.",
    icon: "M12 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 14c-6.63 0-8 4-8 4v2h16v-2s-1.37-4-8-4z" },
  { title: "Map Rotations", desc: "Live countdown timers for BR, Ranked, and LTM maps. Server status and crafting rotation.",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" },
  { title: "Match History", desc: "Full match log with filters by mode. Placement, kills, damage, RP change per match.",
    icon: "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18" },
  { title: "Data Export", desc: "Export all your matches and stats as JSON. Your data, your control.",
    icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" },
  { title: "Dark & Light Theme", desc: "Instant toggle between dark and light mode. Your eyes, your choice.",
    icon: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-32 text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            The Apex Legends tracker<br />
            <span className="text-[#00E5FF]">that actually works.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Track matches, stats, weapons, legends, and ranked progress — all locally on your PC with a live in-game overlay. Free. Private. No accounts required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/download" className="bg-[#00E5FF] text-[#050B14] font-bold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-base">
              Download for Free
            </Link>
            <Link href="https://discord.gg/zcgMzRwJFv" target="_blank" className="border border-white/20 text-white/80 font-medium px-8 py-3.5 rounded-lg hover:bg-white/5 transition-colors text-base">
              Join Discord
            </Link>
          </div>
          <p className="mt-4 text-white/20 text-sm">Windows 10/11 &middot; Overwolf Required &middot; 100% Free</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything you need to improve.</h2>
        <p className="text-center text-white/40 mb-16 max-w-xl mx-auto">Built by a player, for players. No bloat, no subscriptions, no data harvesting.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card hover:border-[#00E5FF]/30 transition-colors">
              <div className="text-[#00E5FF] mb-3">
                <Icon d={f.icon} />
              </div>
              <h3 className="text-white font-semibold text-base mb-1.5">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy callout */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="glass-card text-center py-12 border-[#00E5FF]/20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Your data stays on your machine.</h2>
          <p className="text-white/40 max-w-xl mx-auto leading-relaxed">
            ApexPulse stores everything locally in a SQLite database. No servers, no telemetry, no analytics.
            The only external calls are to the Apex Legends API for stats and maps.
          </p>
          <Link href="/privacy" className="inline-block mt-6 text-[#00E5FF] text-sm hover:underline">Read our Privacy Policy &rarr;</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to track your games?</h2>
        <p className="text-white/40 mb-8">Download ApexPulse and start improving today.</p>
        <Link href="/download" className="bg-[#00E5FF] text-[#050B14] font-bold px-10 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg">
          Download for Free
        </Link>
      </section>
    </>
  );
}
