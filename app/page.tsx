import Link from "next/link";

const FEATURES = [
  { title: "Live Match Overlay", desc: "Real-time kills, damage, squad kills, and teams remaining — right on your screen while you play.", icon: "🎯" },
  { title: "Legend Analytics", desc: "Sortable rankings with portraits, pick rate, K/D, damage per match. Find your best legend.", icon: "🏆" },
  { title: "Weapon Stats", desc: "Track every weapon's kills, knockdowns, and usage. Sortable by category with weapon icons.", icon: "🔫" },
  { title: "Ranked Progress", desc: "Current rank badge, session RP, weekly RP, and per-match RP sparkline chart.", icon: "📈" },
  { title: "Headshot Tracking", desc: "Body diagram showing headshot vs body shot distribution with a trend chart.", icon: "💀" },
  { title: "Map Rotations", desc: "Live countdown timers for BR, Ranked, and LTM maps. Server status and crafting rotation.", icon: "🗺️" },
  { title: "Match History", desc: "Full match log with filters by mode. Placement, kills, damage, RP change per match.", icon: "📊" },
  { title: "Data Export", desc: "Export all your matches and stats as JSON. Your data, your control.", icon: "💾" },
  { title: "Dark & Light Theme", desc: "Instant toggle between dark and light mode. Your eyes, your choice.", icon: "🎨" },
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
              <div className="text-2xl mb-3">{f.icon}</div>
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
