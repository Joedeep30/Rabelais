'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push('/admin/jeffos/dashboard');
      } else {
        setError('Accès refusé. Mot de passe incorrect.');
      }
    } catch {
      setError('Erreur de connexion au serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1c] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c2aa84]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#003399]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c2aa84]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#003399] to-[#001a66] flex items-center justify-center shadow-xl shadow-[#003399]/20 border border-[#003399]/30">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c2aa84" strokeWidth="1.5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7z" />
            </svg>
          </div>
          <h1 className="text-white text-2xl font-light tracking-[4px] uppercase">
            Centre <span className="font-bold text-[#c2aa84]">Rabelais</span>
          </h1>
          <p className="text-white/30 text-sm mt-2 tracking-widest uppercase">Administration</p>
        </div>

        {/* Login card */}
        <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="mb-6">
            <label className="block text-white/50 text-xs uppercase tracking-widest mb-3">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#c2aa84]/50 focus:ring-1 focus:ring-[#c2aa84]/30 transition-all text-sm"
              placeholder="••••••••••"
              autoFocus
            />
          </div>

          {error && (
            <div className="mb-4 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#003399] to-[#0044cc] hover:from-[#0044cc] hover:to-[#0055ff] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-[3px] py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#003399]/30 hover:shadow-[#003399]/50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Vérification...
              </span>
            ) : 'Connexion'}
          </button>
        </form>

        <p className="text-center text-white/10 text-xs mt-8 tracking-wider">
          © 2026 Centre Ophtalmologique Rabelais — Panel Privé
        </p>
      </div>
    </div>
  );
}
