import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Download — ApexPulse" };

export default function Download() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Download ApexPulse</h1>
        <p className="text-white/40 text-lg">Free. No account required. No data collected.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Overwolf */}
        <div className="glass-card flex flex-col items-center text-center py-10">
          <div className="text-4xl mb-4">🐺</div>
          <h2 className="text-xl font-bold mb-2">Overwolf App Store</h2>
          <p className="text-white/40 text-sm mb-6">Recommended. Auto-updates, easy install.</p>
          <span className="bg-white/10 text-white/30 font-medium px-6 py-3 rounded-lg text-sm cursor-not-allowed">
            Coming Soon
          </span>
          <p className="text-white/20 text-xs mt-3">Pending Overwolf QA review</p>
        </div>

        {/* GitHub */}
        <div className="glass-card flex flex-col items-center text-center py-10 border-[#00E5FF]/20">
          <div className="text-4xl mb-4">⬇️</div>
          <h2 className="text-xl font-bold mb-2">Direct Download</h2>
          <p className="text-white/40 text-sm mb-6">Latest release from GitHub.</p>
          <Link
            href="https://github.com/krazyadm1/ApexPulse/releases/latest"
            target="_blank"
            className="bg-[#00E5FF] text-[#050B14] font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Download from GitHub
          </Link>
          <p className="text-white/20 text-xs mt-3">Windows 10/11 &middot; ~300MB installer</p>
        </div>
      </div>

      {/* Requirements */}
      <div className="glass-card mb-10">
        <h3 className="text-lg font-bold mb-4">System Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-white/40">OS:</span>
            <span className="text-white/80 ml-2">Windows 10/11</span>
          </div>
          <div>
            <span className="text-white/40">Runtime:</span>
            <span className="text-white/80 ml-2">Overwolf (installed automatically)</span>
          </div>
          <div>
            <span className="text-white/40">Game:</span>
            <span className="text-white/80 ml-2">Apex Legends (Steam/EA App)</span>
          </div>
          <div>
            <span className="text-white/40">Internet:</span>
            <span className="text-white/80 ml-2">Required for API stats and map rotation</span>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="glass-card">
        <h3 className="text-lg font-bold mb-4">Quick Start</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-white/60">
          <li>Download and run the installer</li>
          <li>Launch Apex Legends — ApexPulse starts automatically</li>
          <li>Press <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs text-white/80 font-mono">Shift+F1</kbd> to toggle the in-game overlay</li>
          <li>Check the Dashboard for your stats after your first match</li>
          <li>Optional: add your API key in Settings for profile stats and map rotation</li>
        </ol>
      </div>
    </div>
  );
}
