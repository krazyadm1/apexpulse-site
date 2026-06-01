'use client';

import { useEffect } from 'react';

export default function DiscordCallback() {
  useEffect(() => {
    const params = window.location.search;
    window.location.href = `http://localhost:3847/auth/discord/callback${params}`;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#00E5FF] mb-2">Connecting to ApexPulse...</h1>
        <p className="text-white/40 text-sm">Redirecting to your app. If nothing happens, make sure ApexPulse is running.</p>
      </div>
    </div>
  );
}
