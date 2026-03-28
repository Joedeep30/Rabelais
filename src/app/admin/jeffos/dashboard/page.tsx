'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TARGET_KEYWORDS, GBP_POST_TEMPLATES, COMPETITORS } from '@/lib/keywords';

type Tab = 'overview' | 'keywords' | 'gbp-poster' | 'reports';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [autoMode, setAutoMode] = useState(false);
  const [sendingReport, setSendingReport] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin/jeffos');
  };

  const handleSendReport = async () => {
    setSendingReport(true);
    try {
      const res = await fetch('/api/admin/report/send', { method: 'POST' });
      if (res.ok) {
        setReportSent(true);
        setTimeout(() => setReportSent(false), 5000);
      }
    } catch { /* */ }
    setSendingReport(false);
  };

  // Stats calculations
  const totalKeywords = TARGET_KEYWORDS.length;
  const top3Count = TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 3).length;
  const top10Count = TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 10).length;
  const gmapTop3 = TARGET_KEYWORDS.filter(k => k.gmapPosition && k.gmapPosition <= 3).length;
  const avgImprovement = TARGET_KEYWORDS.reduce((sum, k) => {
    if (k.previousPosition && k.currentPosition) return sum + (k.previousPosition - k.currentPosition);
    return sum;
  }, 0) / totalKeywords;

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: '📊' },
    { id: 'keywords', label: 'Mots-clés', icon: '🎯' },
    { id: 'gbp-poster', label: 'GBP Poster', icon: '📮' },
    { id: 'reports', label: 'Rapports', icon: '📧' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white font-[system-ui]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003399] to-[#001a66] flex items-center justify-center border border-[#003399]/30">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c2aa84" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5C5.636 5 2 12 2 12s3.636 7 10 7 10-7 10-7-3.636-7-10-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-[3px] uppercase">
                Rabelais <span className="text-[#c2aa84]">Admin</span>
              </h1>
              <p className="text-[10px] text-white/30 tracking-widest uppercase">SEO / GEO Command Center</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-[10px] uppercase tracking-wider font-bold">Live</span>
            </div>
            <button onClick={handleLogout} className="text-white/30 hover:text-white/60 text-xs transition-colors">
              Déconnexion
            </button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="max-w-7xl mx-auto px-6 flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-medium rounded-t-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-white/5 text-[#c2aa84] border-b-2 border-[#c2aa84]'
                  : 'text-white/30 hover:text-white/60 hover:bg-white/[0.02]'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Top 3 Organique', value: top3Count, total: totalKeywords, color: '#c2aa84' },
                { label: 'Top 10 Organique', value: top10Count, total: totalKeywords, color: '#003399' },
                { label: 'Top 3 Google Maps', value: gmapTop3, total: totalKeywords, color: '#22c55e' },
                { label: 'Amélioration Moy.', value: `+${avgImprovement.toFixed(1)}`, total: 'positions', color: '#8b5cf6' },
              ].map((kpi, i) => (
                <div key={i} className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
                  <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">{kpi.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold" style={{ color: kpi.color }}>{kpi.value}</span>
                    <span className="text-white/20 text-sm">/ {kpi.total}</span>
                  </div>
                  <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: typeof kpi.value === 'number' ? `${(kpi.value / (typeof kpi.total === 'number' ? kpi.total : 1)) * 100}%` : '70%',
                        backgroundColor: kpi.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Top movers */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">🚀 Meilleures Progressions</h3>
              <div className="space-y-3">
                {TARGET_KEYWORDS
                  .filter(k => k.previousPosition && k.currentPosition)
                  .sort((a, b) => ((b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!)))
                  .slice(0, 5)
                  .map((kw, i) => {
                    const gain = kw.previousPosition! - kw.currentPosition!;
                    return (
                      <div key={i} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3 hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center gap-4">
                          <span className="text-white/20 text-sm font-mono w-6">{i + 1}.</span>
                          <div>
                            <p className="text-white/80 text-sm font-medium">{kw.keyword}</p>
                            <p className="text-white/20 text-[10px] uppercase tracking-wider">{kw.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <p className="text-white/40 text-[10px] uppercase">Position</p>
                            <div className="flex items-center gap-2">
                              <span className="text-white/30 text-sm line-through">{kw.previousPosition}</span>
                              <span className="text-white/60">→</span>
                              <span className="text-white font-bold text-lg">{kw.currentPosition}</span>
                            </div>
                          </div>
                          <div className="bg-green-500/10 text-green-400 font-bold text-sm px-3 py-1 rounded-lg">
                            ↑ {gain}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Competitors */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">⚔️ Surveillance Concurrents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {COMPETITORS.map((comp, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-4">
                    <div>
                      <p className="text-white/70 text-sm font-medium">{comp.name}</p>
                      <p className="text-white/20 text-[10px]">{comp.url}</p>
                    </div>
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                      comp.threat === 'high' ? 'bg-red-500/10 text-red-400' :
                      comp.threat === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-green-500/10 text-green-400'
                    }`}>
                      {comp.threat === 'high' ? '🔴 Élevée' : comp.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEYWORDS TAB */}
        {activeTab === 'keywords' && (
          <div className="animate-in fade-in">
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">Suivi des {totalKeywords} Mots-Clés Cibles</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      {['Mot-clé', 'Cat.', 'Vol/mois', 'Pos. Org.', 'Δ', 'Pos. GMAP', 'Δ', 'Concurrent #1'].map((h, i) => (
                        <th key={i} className="px-5 py-4 text-[10px] uppercase tracking-widest text-white/30 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TARGET_KEYWORDS.map((kw, i) => {
                      const orgGain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
                      const gmapGain = kw.previousGmapPosition && kw.gmapPosition ? kw.previousGmapPosition - kw.gmapPosition : 0;
                      return (
                        <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                          <td className="px-5 py-4">
                            <p className="text-white/80 text-sm font-medium">{kw.keyword}</p>
                            <p className="text-white/20 text-[10px]">{kw.targetPage}</p>
                          </td>
                          <td className="px-5 py-4">
                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                              kw.category === 'head' ? 'bg-purple-500/10 text-purple-400' :
                              kw.category === 'service' ? 'bg-blue-500/10 text-blue-400' :
                              kw.category === 'geo' ? 'bg-green-500/10 text-green-400' :
                              'bg-gray-500/10 text-gray-400'
                            }`}>{kw.category}</span>
                          </td>
                          <td className="px-5 py-4 text-white/50 text-sm font-mono">{kw.monthlyVolume.toLocaleString()}</td>
                          <td className="px-5 py-4">
                            <span className={`font-bold text-lg ${
                              kw.currentPosition && kw.currentPosition <= 3 ? 'text-green-400' :
                              kw.currentPosition && kw.currentPosition <= 10 ? 'text-[#c2aa84]' : 'text-white/40'
                            }`}>{kw.currentPosition || '—'}</span>
                          </td>
                          <td className="px-5 py-4">
                            {orgGain > 0 && <span className="text-green-400 text-sm font-bold">↑{orgGain}</span>}
                            {orgGain < 0 && <span className="text-red-400 text-sm font-bold">↓{Math.abs(orgGain)}</span>}
                            {orgGain === 0 && <span className="text-white/20 text-sm">—</span>}
                          </td>
                          <td className="px-5 py-4">
                            <span className={`font-bold text-lg ${
                              kw.gmapPosition && kw.gmapPosition <= 3 ? 'text-green-400' :
                              kw.gmapPosition && kw.gmapPosition <= 5 ? 'text-[#c2aa84]' : 'text-white/40'
                            }`}>{kw.gmapPosition || '—'}</span>
                          </td>
                          <td className="px-5 py-4">
                            {gmapGain > 0 && <span className="text-green-400 text-sm font-bold">↑{gmapGain}</span>}
                            {gmapGain < 0 && <span className="text-red-400 text-sm font-bold">↓{Math.abs(gmapGain)}</span>}
                            {gmapGain === 0 && <span className="text-white/20 text-sm">—</span>}
                          </td>
                          <td className="px-5 py-4">
                            <p className="text-white/40 text-sm">{kw.competitor1.name}</p>
                            <p className="text-white/20 text-[10px]">Pos. {kw.competitor1.position || 'N/A'}</p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* GBP POSTER TAB */}
        {activeTab === 'gbp-poster' && (
          <div className="space-y-6 animate-in fade-in">
            {/* Auto mode toggle */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white/80">Mode Autopilot</h3>
                <p className="text-white/30 text-xs mt-1">
                  {autoMode ? 'Les posts GBP sont envoyés automatiquement 3x/semaine' : 'Chaque post nécessite votre validation avant envoi'}
                </p>
              </div>
              <button
                onClick={() => setAutoMode(!autoMode)}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                  autoMode ? 'bg-green-500/30 border border-green-500/50' : 'bg-white/10 border border-white/10'
                }`}
              >
                <div className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ${
                  autoMode ? 'right-0.5 bg-green-400 shadow-lg shadow-green-500/30' : 'left-0.5 bg-white/30'
                }`} />
              </button>
            </div>

            {/* Post queue */}
            <div className="grid md:grid-cols-2 gap-6">
              {GBP_POST_TEMPLATES.slice(0, 6).map((post, i) => (
                <div key={i} className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group">
                  {/* Post preview */}
                  <div className="h-40 bg-gradient-to-br from-[#003399]/20 to-[#c2aa84]/10 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📸</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-[#003399]/20 text-[#6699ff] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                        {post.keyword}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">{post.textTemplate}</p>
                    <div className="flex items-center justify-between">
                      <a href={post.targetPage} target="_blank" className="text-[#c2aa84] text-[10px] uppercase tracking-wider hover:underline">
                        {post.callToAction} →
                      </a>
                      <div className="flex gap-2">
                        {!autoMode && (
                          <button className="bg-green-500/10 text-green-400 hover:bg-green-500/20 text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg transition-all">
                            ✓ Valider
                          </button>
                        )}
                        <button className="bg-white/5 text-white/40 hover:bg-white/10 text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg transition-all">
                          Modifier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule info */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-4">📅 Calendrier de Publication</h3>
              <div className="grid grid-cols-7 gap-2">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, i) => (
                  <div key={i} className={`text-center py-3 rounded-xl text-xs uppercase tracking-wider ${
                    [0, 2, 4].includes(i)
                      ? 'bg-[#003399]/20 text-[#6699ff] border border-[#003399]/20 font-bold'
                      : 'text-white/20'
                  }`}>
                    {day}
                    {[0, 2, 4].includes(i) && <div className="text-[8px] mt-1 text-[#c2aa84]">Post GBP</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* REPORTS TAB */}
        {activeTab === 'reports' && (
          <div className="space-y-6 animate-in fade-in">
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white/90">Rapport SEO/GEO Hebdomadaire</h3>
                  <p className="text-white/30 text-sm mt-1">
                    Envoyé automatiquement chaque lundi à 9h00
                  </p>
                </div>
                <button
                  onClick={handleSendReport}
                  disabled={sendingReport}
                  className="bg-gradient-to-r from-[#003399] to-[#0044cc] hover:from-[#0044cc] hover:to-[#0055ff] disabled:opacity-50 text-white font-bold text-[11px] uppercase tracking-[2px] px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#003399]/20"
                >
                  {sendingReport ? '⏳ Envoi...' : reportSent ? '✅ Envoyé !' : '📧 Envoyer Maintenant'}
                </button>
              </div>

              {/* Recipients */}
              <div className="space-y-3 mb-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Destinataires</p>
                {['jeffos101@gmail.com', 'ophrabelais@hotmail.fr'].map((email, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/[0.02] px-5 py-3 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/60 text-sm font-mono">{email}</span>
                  </div>
                ))}
              </div>

              {/* Report preview */}
              <div className="border border-white/5 rounded-xl overflow-hidden">
                <div className="bg-white/[0.03] px-6 py-4 border-b border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Aperçu du Rapport</p>
                </div>
                <div className="p-6 space-y-6">
                  {/* Summary box */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                      <p className="text-green-400 text-2xl font-bold">{top3Count}</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Top 3</p>
                    </div>
                    <div className="text-center p-4 bg-[#c2aa84]/5 rounded-xl border border-[#c2aa84]/10">
                      <p className="text-[#c2aa84] text-2xl font-bold">{top10Count}</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Top 10</p>
                    </div>
                    <div className="text-center p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                      <p className="text-purple-400 text-2xl font-bold">+{avgImprovement.toFixed(0)}</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Moy. Gain</p>
                    </div>
                  </div>

                  {/* Top keywords in report */}
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Top Mots-Clés</p>
                    {TARGET_KEYWORDS.filter(k => k.currentPosition && k.currentPosition <= 3).map((kw, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/[0.03]">
                        <span className="text-white/60 text-sm">{kw.keyword}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-green-400 font-bold">#{kw.currentPosition}</span>
                          <span className="text-green-400/50 text-xs">GMAP #{kw.gmapPosition}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Report history */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-4">📋 Historique des Rapports</h3>
              <div className="space-y-3">
                {[
                  { date: '24 Mars 2026', status: 'Envoyé', recipients: 2 },
                  { date: '17 Mars 2026', status: 'Envoyé', recipients: 2 },
                  { date: '10 Mars 2026', status: 'Envoyé', recipients: 2 },
                ].map((report, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/[0.02] px-5 py-3 rounded-xl">
                    <div className="flex items-center gap-4">
                      <span className="text-white/60 text-sm">{report.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 text-[10px] uppercase tracking-wider">✓ {report.status}</span>
                      <span className="text-white/20 text-[10px]">{report.recipients} dest.</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
