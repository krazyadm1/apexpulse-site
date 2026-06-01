import type { Metadata } from "next";
import { Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const outfit = Outfit({ variable: "--font-heading", subsets: ["latin"], weight: ["400", "600", "700"] });
const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ApexPulse — The Apex Legends Tracker That Actually Works",
  description: "Free Overwolf app for Apex Legends. Track matches, stats, weapons, legends, ranked RP, and more with a live in-game overlay.",
  openGraph: {
    title: "ApexPulse — Apex Legends Tracker",
    description: "Track your Apex Legends matches, stats, and ranked progress with a live in-game overlay. Free on Overwolf.",
    type: "website",
    url: "https://apexpulse.gg",
  },
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050B14]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#00E5FF] font-bold text-base sm:text-lg tracking-tight">
          APEXPULSE
        </Link>
        <div className="flex items-center gap-3 sm:gap-6 text-sm">
          <Link href="/#features" className="hidden sm:block text-white/60 hover:text-white transition-colors">Features</Link>
          <Link href="/download" className="hidden sm:block text-white/60 hover:text-white transition-colors">Download</Link>
          <Link href="https://discord.gg/zcgMzRwJFv" target="_blank" className="text-white/60 hover:text-white transition-colors">Discord</Link>
          <Link href="/download" className="bg-[#00E5FF] text-[#050B14] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:opacity-90 transition-opacity text-xs sm:text-sm">
            Get ApexPulse
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-sm">
        <div>
          <h3 className="text-[#00E5FF] font-bold mb-3">ApexPulse</h3>
          <p className="text-white/40 leading-relaxed">The Apex Legends tracker that actually works. Free, local, private.</p>
        </div>
        <div>
          <h4 className="text-white/60 font-semibold mb-3">Product</h4>
          <div className="flex flex-col gap-2">
            <Link href="/download" className="text-white/40 hover:text-white transition-colors">Download</Link>
            <Link href="/#features" className="text-white/40 hover:text-white transition-colors">Features</Link>
            <Link href="https://github.com/krazyadm1/ApexPulse/releases" target="_blank" className="text-white/40 hover:text-white transition-colors">Changelog</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white/60 font-semibold mb-3">Community</h4>
          <div className="flex flex-col gap-2">
            <Link href="https://discord.gg/zcgMzRwJFv" target="_blank" className="text-white/40 hover:text-white transition-colors">Discord</Link>
            <Link href="https://github.com/krazyadm1/ApexPulse" target="_blank" className="text-white/40 hover:text-white transition-colors">GitHub</Link>
            <Link href="https://ko-fi.com/apexpulse" target="_blank" className="text-white/40 hover:text-white transition-colors">Support Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white/60 font-semibold mb-3">Legal</h4>
          <div className="flex flex-col gap-2">
            <Link href="/terms" className="text-white/40 hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/privacy" className="text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-white/20 text-xs">
        &copy; 2026 ApexPulse. Apex Legends is a trademark of Respawn Entertainment / Electronic Arts.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-14 sm:pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
