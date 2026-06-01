import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Use — ApexPulse" };

export default function Terms() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-20 text-white/80 leading-relaxed">
      <h1 className="text-3xl font-bold text-[#00E5FF] mb-2">Terms of Use</h1>
      <p className="text-white/30 text-sm mb-10">Last updated: May 27, 2026</p>

      <Section title="1. Acceptance of Terms">
        By installing or using ApexPulse (&ldquo;the App&rdquo;), you agree to these Terms of Use. If you do not agree, uninstall the App and discontinue use.
      </Section>

      <Section title="2. Description of the App">
        ApexPulse is a companion application for Apex Legends that tracks match statistics, displays a live in-game overlay, and provides map rotation and server status information. The App runs on the Overwolf Electron platform and uses the Overwolf Game Events Provider (GEP) to capture game data.
      </Section>

      <Section title="3. Eligibility">
        You must be at least 13 years of age to use the App. If you are under 18, you must have permission from a parent or legal guardian.
      </Section>

      <Section title="4. Permitted Use">
        <p>You may use the App for personal, non-commercial purposes to track your Apex Legends gameplay. You agree not to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Reverse-engineer, decompile, or modify the App</li>
          <li>Use the App to gain an unfair competitive advantage beyond its intended stat-tracking functionality</li>
          <li>Redistribute or resell the App</li>
          <li>Use the App in any way that violates Respawn Entertainment&apos;s or Electronic Arts&apos; terms of service for Apex Legends</li>
          <li>Use the App in any way that violates Overwolf&apos;s Community Guidelines</li>
        </ul>
      </Section>

      <Section title="5. Third-Party Services">
        <p>The App connects to the following third-party services:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Apex Legends Status API</strong> (apexlegendsapi.com) — to retrieve player statistics, map rotations, and server status.</li>
          <li><strong>Steam OpenID</strong> — for optional account linking. Subject to Valve&apos;s terms of service.</li>
          <li><strong>Discord OAuth</strong> — for optional account linking. Subject to Discord&apos;s terms of service.</li>
          <li><strong>Overwolf Platform</strong> — the App runs on Overwolf&apos;s Electron framework and uses its Game Events Provider.</li>
        </ul>
        <p className="mt-2">We are not responsible for the availability, accuracy, or conduct of these third-party services.</p>
      </Section>

      <Section title="6. Intellectual Property">
        ApexPulse is developed by ApexPulse. Apex Legends is a trademark of Respawn Entertainment and Electronic Arts. This App is not affiliated with, endorsed by, or sponsored by Respawn Entertainment, Electronic Arts, or Overwolf.
      </Section>

      <Section title="7. Disclaimer of Warranties">
        The App is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee that the App will be error-free, uninterrupted, or compatible with all systems or future versions of Apex Legends.
      </Section>

      <Section title="8. Limitation of Liability">
        To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.
      </Section>

      <Section title="9. Changes to These Terms">
        We may update these Terms at any time. Continued use after changes constitutes acceptance.
      </Section>

      <Section title="10. Termination">
        You may stop using the App at any time by uninstalling it. All locally stored data is removed when you uninstall or delete the data directory.
      </Section>

      <Section title="11. Contact">
        For questions, contact us via the <Link href="https://discord.gg/zcgMzRwJFv" className="text-[#00E5FF] hover:underline">ApexPulse Discord server</Link>.
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
