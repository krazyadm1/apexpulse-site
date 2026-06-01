import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy — ApexPulse" };

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 text-white/80 leading-relaxed">
      <h1 className="text-3xl font-bold text-[#00E5FF] mb-2">Privacy Policy</h1>
      <p className="text-white/30 text-sm mb-10">Last updated: May 27, 2026</p>

      <Section title="1. Overview">
        <p>ApexPulse (&ldquo;the App&rdquo;) is a desktop companion for Apex Legends. <strong className="text-white/80">All your data stays on your computer. We do not operate servers, and we do not collect, transmit, or sell your personal data.</strong></p>
      </Section>

      <Section title="2. Data We Collect">
        <p>The App collects and stores the following data <strong className="text-white/80">locally on your device</strong>:</p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-xs border border-white/10 rounded">
            <thead><tr className="bg-white/5 text-white/60">
              <th className="text-left p-2 border-b border-white/10">Data</th>
              <th className="text-left p-2 border-b border-white/10">Source</th>
              <th className="text-left p-2 border-b border-white/10">Storage</th>
            </tr></thead>
            <tbody className="text-white/40">
              <Row data="Match statistics (kills, damage, placement, weapons, legends)" source="Overwolf GEP" storage="Local SQLite DB" />
              <Row data="Session history" source="Calculated by App" storage="Local SQLite DB" />
              <Row data="EA/Origin username" source="Manual entry or GEP auto-detect" storage="Local SQLite DB" />
              <Row data="Steam account info" source="Steam OpenID (optional)" storage="Local SQLite DB" />
              <Row data="Discord account info" source="Discord OAuth (optional)" storage="Local SQLite DB" />
              <Row data="API key" source="Entered by you" storage="Local settings file" />
              <Row data="App settings" source="Configured by you" storage="localStorage" />
              <Row data="Heirloom pack count" source="Auto-detected or manual" storage="localStorage" />
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="3. Data We Do NOT Collect">
        <ul className="list-disc pl-6 space-y-1">
          <li>We do not collect analytics or telemetry</li>
          <li>We do not track browsing or app usage behavior</li>
          <li>We do not collect IP addresses, hardware IDs, or device fingerprints</li>
          <li>We do not store data on remote servers</li>
          <li>We do not sell, share, or transfer your data to any third party</li>
        </ul>
      </Section>

      <Section title="4. Third-Party Services">
        <p><strong className="text-white/60">Apex Legends Status API</strong> — player stats, map rotations, server status. Subject to its own privacy policy.</p>
        <p className="mt-2"><strong className="text-white/60">Steam OpenID / Discord OAuth</strong> — optional login. Data returned is stored locally only.</p>
        <p className="mt-2"><strong className="text-white/60">Overwolf Platform</strong> — may collect its own telemetry subject to <Link href="https://www.overwolf.com/legal/privacy/" className="text-[#00E5FF] hover:underline">Overwolf&apos;s Privacy Policy</Link>.</p>
        <p className="mt-2"><strong className="text-white/60">Google Fonts</strong> — Inter and JetBrains Mono loaded from fonts.googleapis.com.</p>
      </Section>

      <Section title="5. Screen Capture">
        The App uses screen capture to detect Apex Pack openings for the heirloom tracker. Frames are processed locally and never stored, transmitted, or recorded.
      </Section>

      <Section title="6. Lobby Intel">
        During matches, the App may look up publicly available stats for players in your lobby via the Apex API. This data is held in memory only and not stored permanently.
      </Section>

      <Section title="7. Data Storage and Retention">
        <p>All data is stored in your OS user data directory. Data is retained until you uninstall or delete the data directory.</p>
      </Section>

      <Section title="8. Your Rights">
        <ul className="list-disc pl-6 space-y-1">
          <li><strong className="text-white/60">Access:</strong> Your data is in local files you can inspect</li>
          <li><strong className="text-white/60">Deletion:</strong> Uninstall or delete the data directory</li>
          <li><strong className="text-white/60">Export:</strong> JSON export in Settings</li>
          <li><strong className="text-white/60">Portability:</strong> Copy the data directory to another machine</li>
        </ul>
      </Section>

      <Section title="9. Children&apos;s Privacy">
        The App is not intended for children under 13. Since all data is local, we have no mechanism to identify or remove such data remotely.
      </Section>

      <Section title="10. Changes">
        We may update this policy at any time. Check this page for the latest version.
      </Section>

      <Section title="11. Contact">
        Questions? Reach us on the <Link href="https://discord.gg/zcgMzRwJFv" className="text-[#00E5FF] hover:underline">ApexPulse Discord server</Link>.
      </Section>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-[#00E5FF] mb-2">{title}</h2>
      <div className="text-white/60 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

function Row({ data, source, storage }: { data: string; source: string; storage: string }) {
  return (
    <tr className="border-b border-white/5">
      <td className="p-2">{data}</td>
      <td className="p-2">{source}</td>
      <td className="p-2">{storage}</td>
    </tr>
  );
}
