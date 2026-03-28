'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TARGET_KEYWORDS, GBP_POST_TEMPLATES, COMPETITORS, GEOGRID_DATA } from '@/lib/keywords';

type Tab = 'overview' | 'keywords' | 'geogrid' | 'gbp-poster' | 'reports';

// GBP Post images mapping — fallback images by keyword category
const GBP_IMAGES: Record<string, string> = {
  'photobiomodulation lyon': '/admin/gbp/photobiomodulation.png',
  'ophtalmologue lyon': '/admin/gbp/ophtalmologue.png',
  'ophtalmologiste lyon': '/admin/gbp/ophtalmologue.png',
  'rdv ophtalmologue lyon': '/admin/gbp/ophtalmologue.png',
  'urgence ophtalmologique lyon': '/admin/gbp/ophtalmologue.png',
  'traitement dmla lyon': '/admin/gbp/dmla.png',
  'injection intravitréenne lyon': '/admin/gbp/injection.png',
  'rétinologue lyon': '/admin/gbp/retinologue.png',
  'rétinologue villeurbanne': '/admin/gbp/retinologue.png',
  'oct macula lyon': '/admin/gbp/oct.png',
  'fond oeil lyon': '/admin/gbp/oct.png',
  'spécialiste rétine lyon': '/admin/gbp/retinologue.png',
  'rétinopathie diabétique lyon': '/admin/gbp/dmla.png',
  'centre rétine lyon': '/admin/gbp/retinologue.png',
  'ophtalmologue lyon 2': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue lyon 3': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue lyon 5': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue lyon 6': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue lyon 7': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue lyon 8': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue lyon 9': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue brotteaux': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue bellecour': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue villeurbanne': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue caluire': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue oullins': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue bron': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue part-dieu': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue vénissieux': '/admin/gbp/ophtalmologue.png',
  'dmla sèche traitement': '/admin/gbp/dmla.png',
  'dmla lyon 6': '/admin/gbp/dmla.png',
  'dmla villeurbanne': '/admin/gbp/dmla.png',
};

/* ─── Lyon Leaflet GeoGrid (dynamic import to avoid SSR issues) ─── */
import dynamic from 'next/dynamic';
const LyonGeoGrid = dynamic(() => import('@/components/LyonGeoGrid'), { ssr: false, loading: () => (
  <div className="flex items-center justify-center h-96 bg-white/5 rounded-2xl">
    <div className="text-white/30 text-sm animate-pulse">Chargement de la carte...</div>
  </div>
)});


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [autoMode, setAutoMode] = useState(false);
  const [sendingReport, setSendingReport] = useState(false);
  const [expandedKpi, setExpandedKpi] = useState<string | null>(null);
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
    { id: 'geogrid', label: 'GeoGrid', icon: '🗺️' },
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
        <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-medium rounded-t-lg transition-all whitespace-nowrap ${
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
          <div className="space-y-8">
            {/* KPI Cards — Click to expand keywords */}
            {(() => {
              // Build the filtered keyword lists for each KPI
              const kpiSections = [
                {
                  id: 'top3',
                  label: 'Top 3 Organique',
                  value: top3Count,
                  total: totalKeywords,
                  color: '#22c55e',
                  keywords: TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 3),
                },
                {
                  id: 'top10',
                  label: 'Top 10 Organique',
                  value: top10Count,
                  total: totalKeywords,
                  color: '#003399',
                  keywords: TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 10),
                },
                {
                  id: 'maps',
                  label: 'Top 3 Google Maps',
                  value: gmapTop3,
                  total: totalKeywords,
                  color: '#c2aa84',
                  keywords: TARGET_KEYWORDS.filter(k => k.gmapPosition !== null && k.gmapPosition <= 3),
                },
                {
                  id: 'improvement',
                  label: 'Amélioration Moy.',
                  value: `+${avgImprovement.toFixed(1)}`,
                  total: 'positions',
                  color: '#8b5cf6',
                  keywords: TARGET_KEYWORDS
                    .filter(k => k.previousPosition !== null && k.currentPosition !== null)
                    .sort((a, b) => (b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!)),
                },
              ];

              return (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {kpiSections.map((kpi) => (
                      <button
                        key={kpi.id}
                        onClick={() => setExpandedKpi(expandedKpi === kpi.id ? null : kpi.id)}
                        className={`text-left bg-white/5 backdrop-blur border rounded-2xl p-6 transition-all cursor-pointer ${
                          expandedKpi === kpi.id
                            ? 'border-[' + kpi.color + ']/40 ring-1 ring-[' + kpi.color + ']/20 bg-white/8'
                            : 'border-white/5 hover:border-white/10'
                        }`}
                        style={expandedKpi === kpi.id ? { borderColor: kpi.color + '40', boxShadow: `0 0 20px ${kpi.color}15` } : {}}
                      >
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
                        <p className="text-white/20 text-[9px] mt-2 text-center">
                          {expandedKpi === kpi.id ? '▲ Masquer' : '▼ Voir les mots-clés'}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Expanded keyword detail panel */}
                  {expandedKpi && (() => {
                    const section = kpiSections.find(s => s.id === expandedKpi)!;
                    const isImprovement = section.id === 'improvement';
                    const isMaps = section.id === 'maps';
                    return (
                      <div
                        className="bg-white/5 backdrop-blur border rounded-2xl p-6 animate-in fade-in slide-in-from-top-2 duration-300"
                        style={{ borderColor: section.color + '30' }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xs uppercase tracking-widest font-bold" style={{ color: section.color }}>
                            {section.label} — {section.keywords.length} mot{section.keywords.length > 1 ? 's' : ''}-clé{section.keywords.length > 1 ? 's' : ''}
                          </h3>
                          <button onClick={() => setExpandedKpi(null)} className="text-white/30 hover:text-white/60 text-xs">✕ Fermer</button>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="text-white/30 text-[10px] uppercase tracking-wider border-b border-white/5">
                                <th className="text-left py-2 px-3">Mot-clé</th>
                                <th className="text-left py-2 px-3">Page cible</th>
                                <th className="text-center py-2 px-3">Volume</th>
                                {isMaps ? (
                                  <th className="text-center py-2 px-3">Pos. Maps</th>
                                ) : (
                                  <th className="text-center py-2 px-3">Pos. Google</th>
                                )}
                                <th className="text-center py-2 px-3">Évolution</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.keywords.map((kw) => {
                                const gain = isMaps
                                  ? (kw.previousGmapPosition && kw.gmapPosition ? kw.previousGmapPosition - kw.gmapPosition : 0)
                                  : (kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0);
                                const currentPos = isMaps ? kw.gmapPosition : kw.currentPosition;
                                const previousPos = isMaps ? kw.previousGmapPosition : kw.previousPosition;
                                const posColor = currentPos && currentPos <= 3 ? '#22c55e' : currentPos && currentPos <= 10 ? '#c2aa84' : '#ef4444';
                                return (
                                  <tr key={kw.keyword} className="border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors">
                                    <td className="py-3 px-3">
                                      <p className="text-white/80 font-medium">{kw.keyword}</p>
                                      <p className="text-white/20 text-[10px] uppercase tracking-wider">{kw.category}</p>
                                    </td>
                                    <td className="py-3 px-3 text-white/30 text-xs">{kw.targetPage}</td>
                                    <td className="py-3 px-3 text-center text-white/40 text-xs">{kw.monthlyVolume.toLocaleString()}</td>
                                    <td className="py-3 px-3 text-center">
                                      <span className="font-bold text-lg" style={{ color: posColor }}>#{currentPos}</span>
                                    </td>
                                    <td className="py-3 px-3 text-center">
                                      {gain > 0 ? (
                                        <span className="bg-green-500/10 text-green-400 font-bold text-xs px-2 py-1 rounded-lg inline-flex items-center gap-1">
                                          ↑ {gain}
                                          {previousPos && <span className="text-white/30 font-normal ml-1">(de #{previousPos})</span>}
                                        </span>
                                      ) : gain < 0 ? (
                                        <span className="bg-red-500/10 text-red-400 font-bold text-xs px-2 py-1 rounded-lg">↓ {Math.abs(gain)}</span>
                                      ) : (
                                        <span className="text-white/20 text-xs">—</span>
                                      )}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        {section.keywords.length === 0 && (
                          <p className="text-white/20 text-sm text-center py-6">Aucun mot-clé dans cette catégorie.</p>
                        )}
                      </div>
                    );
                  })()}
                </div>
              );
            })()}

            {/* Top movers */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">🚀 Meilleures Progressions</h3>
              <div className="space-y-3">
                {TARGET_KEYWORDS
                  .filter(k => k.previousPosition && k.currentPosition)
                  .sort((a, b) => ((b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!)))
                  .slice(0, 5)
                  .map((kw) => {
                    const gain = kw.previousPosition! - kw.currentPosition!;
                    return (
                      <div key={kw.keyword} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3 hover:bg-white/[0.04] transition-all">
                        <div className="flex items-center gap-4">
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
              <div className="space-y-3">
                {COMPETITORS.map((comp) => (
                  <div key={comp.name} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-4">
                    <div>
                      <p className="text-white/70 text-sm font-medium">{comp.name}</p>
                      <p className="text-white/20 text-[10px]">{comp.url}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-white/50 text-sm">{comp.reviews} avis</p>
                        <p className="text-yellow-400 text-xs">★ {comp.rating}</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                        comp.threat === 'high' ? 'bg-red-500/10 text-red-400' :
                        comp.threat === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                        'bg-green-500/10 text-green-400'
                      }`}>
                        {comp.threat === 'high' ? '🔴 Élevée' : comp.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* KEYWORDS TAB */}
        {activeTab === 'keywords' && (
          <div>
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">Suivi des {totalKeywords} Mots-Clés Cibles</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      {['Mot-clé', 'Cat.', 'Vol/mois', 'Pos. Org.', 'Δ', 'Pos. GMAP', 'Δ', 'Concurrent #1'].map((h) => (
                        <th key={h} className="px-5 py-4 text-[10px] uppercase tracking-widest text-white/30 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TARGET_KEYWORDS.map((kw) => {
                      const orgGain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
                      const gmapGain = kw.previousGmapPosition && kw.gmapPosition ? kw.previousGmapPosition - kw.gmapPosition : 0;
                      return (
                        <tr key={kw.keyword} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
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

        {/* GEOGRID TAB */}
        {activeTab === 'geogrid' && <LyonGeoGrid />}

        {/* GBP POSTER TAB */}
        {activeTab === 'gbp-poster' && (() => {
          // Real history: 3 posts were published on March 27, 2026
          // Future posts are scheduled 3x/week (Mon/Wed/Fri) starting Mon March 30
          const TODAY = new Date(2026, 2, 28);
          const postDays = [1, 2, 3, 4, 5]; // Mon-Fri — AGGRESSIVE 5x/week until all keywords Top 3
          const allTemplates = GBP_POST_TEMPLATES;

          interface ScheduledPost {
            date: Date;
            keyword: string;
            text: string;
            cta: string;
            status: 'posted' | 'scheduled';
            image: string;
          }

          // The 3 real posts from yesterday (March 27)
          const scheduledPosts: ScheduledPost[] = [
            {
              date: new Date(2026, 2, 27),
              keyword: 'photobiomodulation lyon',
              text: 'Nouveau au Centre Rabelais : la Photobiomodulation (système Valeda) est désormais disponible pour traiter la DMLA sèche. 9 séances indolores de 5 minutes. Prenez RDV pour évaluer votre éligibilité.',
              cta: 'Prendre rendez-vous',
              status: 'posted',
              image: GBP_IMAGES['photobiomodulation lyon'] || '/admin/gbp/photobiomodulation.png',
            },
            {
              date: new Date(2026, 2, 27),
              keyword: 'traitement dmla lyon',
              text: 'Lignes déformées ? Consultez rapidement un rétinologue. Un examen OCT maculaire au Centre Rabelais permet de diagnostiquer la DMLA en quelques secondes, sans dilatation et sans douleur.',
              cta: 'En savoir plus',
              status: 'posted',
              image: GBP_IMAGES['traitement dmla lyon'] || '/admin/gbp/dmla.png',
            },
            {
              date: new Date(2026, 2, 27),
              keyword: 'injection intravitréenne lyon',
              text: 'Injections IVT anti-VEGF : un circuit court et sécurisé à Lyon. Diagnostic OCT + consultation rétinologue + injection le même jour, dans un environnement stérile dédié.',
              cta: 'Contacter le centre',
              status: 'posted',
              image: GBP_IMAGES['injection intravitréenne lyon'] || '/admin/gbp/injection.png',
            },
          ];

          // Generate future planned posts: Mon/Wed/Fri starting March 30
          let templateIdx = 0;
          const cursor = new Date(2026, 2, 30); // Mon March 30
          const endDate = new Date(2026, 4, 2); // May 2
          while (cursor <= endDate) {
            if (postDays.includes(cursor.getDay())) {
              const tpl = allTemplates[templateIdx % allTemplates.length];
              scheduledPosts.push({
                date: new Date(cursor),
                keyword: tpl.keyword,
                text: tpl.textTemplate,
                cta: tpl.callToAction,
                status: 'scheduled',
                image: GBP_IMAGES[tpl.keyword] || '/admin/gbp/ophtalmologue.png',
              });
              templateIdx++;
            }
            cursor.setDate(cursor.getDate() + 1);
          }

          // Counts
          const postedCount = scheduledPosts.filter(p => p.status === 'posted').length;
          const plannedCount = scheduledPosts.filter(p => p.status === 'scheduled').length;

          // Format date in French
          const fmtDate = (d: Date) => {
            const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
            const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
            return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
          };

          // For calendar: build March and April grids
          const buildMonthGrid = (year: number, month: number) => {
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            // In French calendar, week starts on Monday (1=Mon, 0=Sun→6)
            let startPad = (firstDay.getDay() + 6) % 7; // Mon=0, Tue=1, ...Sun=6
            const cells: { day: number | null; date: Date | null }[] = [];
            for (let i = 0; i < startPad; i++) cells.push({ day: null, date: null });
            for (let d = 1; d <= lastDay.getDate(); d++) {
              cells.push({ day: d, date: new Date(year, month, d) });
            }
            // Pad to complete last week
            while (cells.length % 7 !== 0) cells.push({ day: null, date: null });
            return cells;
          };

          const marchGrid = buildMonthGrid(2026, 2);
          const aprilGrid = buildMonthGrid(2026, 3);

          // Map of date string → post for quick lookup
          const postsByDate: Record<string, ScheduledPost> = {};
          scheduledPosts.forEach(p => {
            postsByDate[`${p.date.getFullYear()}-${p.date.getMonth()}-${p.date.getDate()}`] = p;
          });

          const getPostForDate = (d: Date | null) => {
            if (!d) return null;
            return postsByDate[`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`] || null;
          };

          const isToday = (d: Date | null) => {
            if (!d) return false;
            return d.getFullYear() === TODAY.getFullYear() && d.getMonth() === TODAY.getMonth() && d.getDate() === TODAY.getDate();
          };

          return (
          <div className="space-y-6">
            {/* Auto mode toggle + stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6 flex items-center justify-between col-span-2 md:col-span-1">
                <div>
                  <h3 className="text-sm font-bold text-white/80">Autopilot</h3>
                  <p className="text-white/30 text-[10px] mt-1">
                    {autoMode ? 'Auto 3x/sem' : 'Validation manuelle'}
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
              <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-6 text-center">
                <p className="text-green-400 text-2xl font-bold">{postedCount}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Posts Publiés</p>
              </div>
              <div className="bg-[#003399]/10 border border-[#003399]/20 rounded-2xl p-6 text-center">
                <p className="text-[#6699ff] text-2xl font-bold">{plannedCount}</p>
                <p className="text-white/30 text-[10px] uppercase tracking-wider mt-1">Posts Planifiés</p>
              </div>
            </div>

            {/* Calendar — Mars & Avril 2026 */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-6">📅 Calendrier de Publication</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* March */}
                {[
                  { label: 'Mars 2026', grid: marchGrid, month: 2 },
                  { label: 'Avril 2026', grid: aprilGrid, month: 3 },
                ].map((cal) => (
                  <div key={cal.label}>
                    <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-3 text-center">{cal.label}</p>
                    <div className="grid grid-cols-7 gap-1">
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                        <div key={`${cal.label}-hdr-${i}`} className="text-center text-[9px] uppercase tracking-wider text-white/20 py-1 font-bold">{d}</div>
                      ))}
                      {cal.grid.map((cell, i) => {
                        const post = getPostForDate(cell.date);
                        const today = isToday(cell.date);
                        return (
                          <div
                            key={`${cal.label}-${i}`}
                            className={`relative text-center py-2 rounded-lg text-[11px] transition-all ${
                              cell.day === null ? '' :
                              today ? 'bg-[#c2aa84]/20 text-[#c2aa84] font-bold border border-[#c2aa84]/30' :
                              post?.status === 'posted' ? 'bg-green-500/10 text-green-400 font-semibold' :
                              post?.status === 'scheduled' ? 'bg-[#003399]/15 text-[#6699ff] font-semibold' :
                              'text-white/15'
                            }`}
                            title={post ? `${post.keyword} — ${post.status === 'posted' ? 'Publié' : 'Planifié'}` : ''}
                          >
                            {cell.day || ''}
                            {post && (
                              <div className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                                post.status === 'posted' ? 'bg-green-400' : 'bg-[#6699ff]'
                              }`} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {/* Legend */}
                    <div className="flex justify-center gap-4 mt-3">
                      <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider text-white/30">
                        <span className="w-2 h-2 rounded-full bg-green-400" /> Publié
                      </span>
                      <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider text-white/30">
                        <span className="w-2 h-2 rounded-full bg-[#6699ff]" /> Planifié
                      </span>
                      <span className="flex items-center gap-1 text-[8px] uppercase tracking-wider text-white/30">
                        <span className="w-2 h-2 rounded-full bg-[#c2aa84]" /> Aujourd&apos;hui
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post list — upcoming first, then past */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-4">📮 File d&apos;attente des Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[...scheduledPosts]
                  .sort((a, b) => {
                    // Show planned first (nearest), then posted (most recent first)
                    if (a.status === 'scheduled' && b.status === 'posted') return -1;
                    if (a.status === 'posted' && b.status === 'scheduled') return 1;
                    if (a.status === 'scheduled') return a.date.getTime() - b.date.getTime();
                    return b.date.getTime() - a.date.getTime();
                  })
                  .slice(0, 6)
                  .map((post) => (
                  <div key={`${post.keyword}-${post.date.toISOString()}`} className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all group">
                    {/* Post image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={`GBP Post — ${post.keyword}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
                      {/* Status badge */}
                      <div className={`absolute top-3 left-3 text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border backdrop-blur-md ${
                        post.status === 'posted'
                          ? 'bg-green-500/20 text-green-400 border-green-500/30'
                          : 'bg-[#003399]/30 text-[#6699ff] border-[#003399]/40'
                      }`}>
                        {post.status === 'posted' ? '✓ Publié' : '⏳ Planifié'}
                      </div>
                      {/* Date badge */}
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/70 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 font-mono">
                        {fmtDate(post.date)}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-[#003399]/20 text-[#6699ff] text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                          {post.keyword}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">{post.text}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#c2aa84] text-[10px] uppercase tracking-wider">
                          {post.cta} →
                        </span>
                        <div className="flex gap-2">
                          {post.status === 'scheduled' && !autoMode && (
                            <button className="bg-green-500/10 text-green-400 hover:bg-green-500/20 text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg transition-all">
                              ✓ Publier
                            </button>
                          )}
                          {post.status === 'scheduled' && (
                            <button className="bg-white/5 text-white/40 hover:bg-white/10 text-[10px] uppercase tracking-wider font-bold px-4 py-2 rounded-lg transition-all">
                              Modifier
                            </button>
                          )}
                          {post.status === 'posted' && (
                            <span className="text-green-400/40 text-[10px] uppercase tracking-wider font-bold px-4 py-2">
                              ✓ Envoyé {fmtDate(post.date)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          );
        })()}

        {/* REPORTS TAB */}
        {activeTab === 'reports' && (() => {
          const now = new Date(2026, 2, 28);
          const dateStr = now.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
          const rTop3 = TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 3);
          const rTop10 = TARGET_KEYWORDS.filter(k => k.currentPosition !== null && k.currentPosition <= 10);
          const rGmapTop3 = TARGET_KEYWORDS.filter(k => k.gmapPosition !== null && k.gmapPosition <= 3);
          const rAvgGain = TARGET_KEYWORDS.reduce((sum, k) => {
            if (k.previousPosition && k.currentPosition) return sum + (k.previousPosition - k.currentPosition);
            return sum;
          }, 0) / TARGET_KEYWORDS.filter(k => k.previousPosition && k.currentPosition).length;
          const bestMovers = TARGET_KEYWORDS
            .filter(k => k.previousPosition && k.currentPosition)
            .sort((a, b) => (b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!));

          const openPdfPreview = () => {
            const win = window.open('', '_blank');
            if (!win) return;
            win.document.write(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Rapport SEO/GEO — Centre Rabelais — ${dateStr}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #1e293b; }
  .page { max-width: 800px; margin: 0 auto; padding: 0; }
  @media print { .page { max-width: 100%; } .no-print { display: none !important; } }
  .header { background: linear-gradient(135deg, #0a0f1c 0%, #001a44 50%, #002266 100%); padding: 50px 40px; text-align: center; }
  .header h1 { color: white; font-size: 28px; font-weight: 300; letter-spacing: 6px; text-transform: uppercase; }
  .header h1 span { color: #c2aa84; font-weight: 800; }
  .header .subtitle { color: rgba(255,255,255,0.35); font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-top: 8px; }
  .date-bar { background: linear-gradient(90deg, #c2aa84, #d4bc96); color: white; text-align: center; padding: 14px; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
  .section { padding: 32px 40px; }
  .section-title { font-size: 12px; color: #c2aa84; text-transform: uppercase; letter-spacing: 4px; font-weight: 800; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #f0f0f0; display: flex; align-items: center; gap: 8px; }
  .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 8px; }
  .kpi { text-align: center; padding: 24px 12px; border-radius: 16px; }
  .kpi.green { background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; }
  .kpi.gold { background: linear-gradient(135deg, #fefce8, #fef3c7); border: 1px solid #fde68a; }
  .kpi.blue { background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #93c5fd; }
  .kpi.purple { background: linear-gradient(135deg, #faf5ff, #f3e8ff); border: 1px solid #c4b5fd; }
  .kpi-value { font-size: 36px; font-weight: 900; line-height: 1; }
  .kpi.green .kpi-value { color: #16a34a; }
  .kpi.gold .kpi-value { color: #c2aa84; }
  .kpi.blue .kpi-value { color: #2563eb; }
  .kpi.purple .kpi-value { color: #7c3aed; }
  .kpi-label { font-size: 9px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-top: 6px; font-weight: 600; }
  table { width: 100%; border-collapse: collapse; }
  th { text-align: left; color: #94a3b8; font-size: 9px; text-transform: uppercase; letter-spacing: 1.5px; padding: 10px 12px; border-bottom: 2px solid #f0f0f0; font-weight: 700; }
  td { padding: 12px; border-bottom: 1px solid #f8f8f8; font-size: 13px; }
  tr:hover { background: #fafbfc; }
  .pos { font-weight: 900; font-size: 18px; }
  .pos.top3 { color: #16a34a; }
  .pos.top10 { color: #c2aa84; }
  .pos.other { color: #94a3b8; }
  .gain { background: #f0fdf4; color: #16a34a; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; display: inline-block; }
  .loss { background: #fef2f2; color: #dc2626; font-weight: 700; font-size: 11px; padding: 3px 8px; border-radius: 6px; display: inline-block; }
  .exec-summary { background: #f8fafc; border-left: 4px solid #c2aa84; padding: 20px 24px; border-radius: 0 12px 12px 0; margin: 16px 0; }
  .exec-summary h4 { font-size: 13px; font-weight: 800; color: #0a0f1c; margin-bottom: 8px; }
  .exec-summary p { font-size: 13px; color: #475569; line-height: 1.6; }
  .exec-summary ul { list-style: none; padding: 0; margin-top: 10px; }
  .exec-summary li { padding: 4px 0; font-size: 13px; color: #475569; }
  .exec-summary li::before { content: "✓ "; color: #16a34a; font-weight: 700; }
  .competitor-card { display: flex; justify-content: space-between; align-items: center; padding: 14px 16px; background: #f8fafc; border-radius: 10px; margin-bottom: 8px; }
  .threat-high { color: #dc2626; font-weight: 700; font-size: 11px; background: #fef2f2; padding: 3px 10px; border-radius: 6px; }
  .threat-medium { color: #d97706; font-weight: 700; font-size: 11px; background: #fffbeb; padding: 3px 10px; border-radius: 6px; }
  .threat-low { color: #16a34a; font-weight: 700; font-size: 11px; background: #f0fdf4; padding: 3px 10px; border-radius: 6px; }
  .footer { background: #0a0f1c; padding: 40px; text-align: center; }
  .footer p { color: rgba(255,255,255,0.3); font-size: 11px; margin: 3px 0; }
  .footer a { color: #c2aa84; text-decoration: none; }
  .print-btn { position: fixed; top: 20px; right: 20px; background: #003399; color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 13px; cursor: pointer; z-index: 100; box-shadow: 0 4px 12px rgba(0,51,153,0.3); }
  .print-btn:hover { background: #0044cc; }
</style></head><body>
<button class="print-btn no-print" onclick="window.print()">📄 Télécharger PDF</button>
<div class="page">
  <div class="header">
    <h1>Centre <span>Rabelais</span></h1>
    <div class="subtitle">Rapport SEO / GEO Hebdomadaire</div>
  </div>
  <div class="date-bar">${dateStr}</div>

  <div class="section">
    <div class="exec-summary">
      <h4>📋 Résumé Exécutif</h4>
      <p>Le Centre Ophtalmologique Rabelais poursuit une progression significative dans le référencement Google et Google Maps. Voici les résultats clés cette semaine :</p>
      <ul>
        <li><strong>${rTop3.length} mot${rTop3.length > 1 ? 's' : ''}-clé${rTop3.length > 1 ? 's' : ''}</strong> en Top 3 Google (${rTop3.map(k => '"' + k.keyword + '"').join(', ')})</li>
        <li><strong>${rTop10.length}</strong> mots-clés en première page Google (Top 10)</li>
        <li>Gain moyen de <strong>+${rAvgGain.toFixed(1)} positions</strong> par mot-clé</li>
        <li><strong>${rGmapTop3.length}</strong> mot${rGmapTop3.length > 1 ? 's' : ''}-clé${rGmapTop3.length > 1 ? 's' : ''} en Top 3 Google Maps</li>
      </ul>
    </div>
  </div>

  <div class="section" style="padding-top:0">
    <div class="kpi-grid">
      <div class="kpi green"><div class="kpi-value">${rTop3.length}</div><div class="kpi-label">Top 3 Google</div></div>
      <div class="kpi gold"><div class="kpi-value">${rTop10.length}</div><div class="kpi-label">Top 10 Google</div></div>
      <div class="kpi blue"><div class="kpi-value">${rGmapTop3.length}</div><div class="kpi-label">Top 3 Maps</div></div>
      <div class="kpi purple"><div class="kpi-value">+${rAvgGain.toFixed(0)}</div><div class="kpi-label">Gain Moyen</div></div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">🎯 Positionnement Google — Détail Complet</div>
    <table>
      <tr><th>Mot-clé</th><th>Catégorie</th><th>Volume</th><th>Position</th><th>Évolution</th><th>Maps</th></tr>
      ${TARGET_KEYWORDS.map(kw => {
        const gain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
        const posClass = kw.currentPosition && kw.currentPosition <= 3 ? 'top3' : kw.currentPosition && kw.currentPosition <= 10 ? 'top10' : 'other';
        const catLabels: Record<string, string> = { head: '🔵 Principal', service: '🟢 Service', geo: '📍 Local', 'long-tail': '🎯 Longue traîne' };
        return '<tr><td><strong>' + kw.keyword + '</strong><br/><span style="color:#94a3b8;font-size:10px">' + kw.targetPage + '</span></td><td style="font-size:11px">' + (catLabels[kw.category] || kw.category) + '</td><td style="text-align:center;color:#94a3b8">' + kw.monthlyVolume.toLocaleString() + '</td><td><span class="pos ' + posClass + '">#' + (kw.currentPosition || '—') + '</span></td><td>' + (gain > 0 ? '<span class="gain">↑ ' + gain + '</span>' : gain < 0 ? '<span class="loss">↓ ' + Math.abs(gain) + '</span>' : '—') + '</td><td><span class="pos ' + (kw.gmapPosition && kw.gmapPosition <= 3 ? 'top3' : kw.gmapPosition ? 'top10' : 'other') + '">' + (kw.gmapPosition ? '#' + kw.gmapPosition : '—') + '</span></td></tr>';
      }).join('')}
    </table>
  </div>

  <div class="section">
    <div class="section-title">📊 Progression des Mots-Clés — Gains de Positions</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      ${bestMovers.slice(0, 10).map(kw => {
        const gain = kw.previousPosition! - kw.currentPosition!;
        const pct = Math.min(gain * 8, 100);
        return '<div style="display:flex;align-items:center;gap:12px"><div style="width:200px;font-size:12px;font-weight:600;color:#1e293b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + kw.keyword + '</div><div style="flex:1;height:24px;background:#f1f5f9;border-radius:8px;overflow:hidden;position:relative"><div style="height:100%;width:' + pct + '%;background:linear-gradient(90deg,#22c55e,#16a34a);border-radius:8px;display:flex;align-items:center;justify-content:flex-end;padding-right:8px"><span style="color:white;font-size:10px;font-weight:800">+' + gain + '</span></div></div><div style="width:70px;text-align:center;font-size:12px;color:#94a3b8">#' + kw.previousPosition + ' → <strong style="color:#16a34a">#' + kw.currentPosition + '</strong></div></div>';
      }).join('')}
    </div>
  </div>

  <div class="section" style="page-break-before:always">
    <div class="section-title">🗺️ GeoGrid — Couverture Géographique Google Maps</div>
    <p style="color:#64748b;font-size:12px;margin-bottom:16px">Chaque grille montre la position du Centre Rabelais dans Google Maps depuis différents points géographiques autour de Lyon. Vert = Top 3, Or = Top 5, Jaune = Top 10, Orange = Top 15, Rouge = 16+.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
      ${GEOGRID_DATA.slice(0, 4).map(gd => {
        const getColor = (v: number | null) => {
          if (v === null) return { bg: '#f8fafc', text: '#cbd5e1', border: '#e2e8f0' };
          if (v <= 3) return { bg: '#dcfce7', text: '#16a34a', border: '#86efac' };
          if (v <= 5) return { bg: '#fef3c7', text: '#b8860b', border: '#fde68a' };
          if (v <= 10) return { bg: '#fefce8', text: '#ca8a04', border: '#fde68a' };
          if (v <= 15) return { bg: '#ffedd5', text: '#ea580c', border: '#fdba74' };
          return { bg: '#fef2f2', text: '#dc2626', border: '#fca5a5' };
        };
        const top3Count = gd.grid.flat().filter(v => v !== null && v <= 3).length;
        const totalPoints = gd.grid.flat().filter(v => v !== null).length;
        return '<div style="border:1px solid #e2e8f0;border-radius:12px;padding:16px;background:#fafbfc"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><p style="font-weight:800;font-size:13px;color:#0f172a">' + gd.keyword + '</p><span style="font-size:10px;background:#dcfce7;color:#16a34a;padding:2px 8px;border-radius:6px;font-weight:700">' + top3Count + '/' + totalPoints + ' Top 3</span></div><table style="width:100%;border-collapse:collapse">' + gd.grid.map(row => '<tr>' + row.map(cell => { const c = getColor(cell); return '<td style="width:36px;height:36px;text-align:center;font-weight:900;font-size:14px;background:' + c.bg + ';color:' + c.text + ';border:1px solid ' + c.border + ';border-radius:6px">' + (cell !== null ? cell : '·') + '</td>'; }).join('') + '</tr>').join('') + '</table></div>';
      }).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">⚔️ Veille Concurrentielle</div>
    ${COMPETITORS.map(c => '<div class="competitor-card"><div><strong style="font-size:14px">' + c.name + '</strong><br/><span style="color:#94a3b8;font-size:11px">' + c.url + ' — ⭐ ' + c.rating + ' (' + c.reviews + ' avis)</span></div><span class="threat-' + c.threat + '">' + (c.threat === 'high' ? '🔴 Menace élevée' : c.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible') + '</span></div>').join('')}
  </div>

  <div class="footer">
    <p><a href="https://centrerabelaislyon.fr">centrerabelaislyon.fr</a></p>
    <p style="margin-top:8px">Rapport généré automatiquement — Ne pas répondre à cet email</p>
    <p>© 2026 Centre Ophtalmologique Rabelais</p>
  </div>
</div></body></html>`);
            win.document.close();
          };

          return (
          <div className="space-y-6">
            {/* Header with actions */}
            <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white/90">Rapport SEO/GEO Hebdomadaire</h3>
                  <p className="text-white/30 text-sm mt-1">
                    Envoyé automatiquement chaque lundi à 9h00
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={openPdfPreview}
                    className="bg-white/10 hover:bg-white/15 text-white font-bold text-[11px] uppercase tracking-[2px] px-5 py-3 rounded-xl transition-all border border-white/10 hover:border-white/20"
                  >
                    📄 Aperçu PDF
                  </button>
                  <button
                    onClick={handleSendReport}
                    disabled={sendingReport}
                    className="bg-gradient-to-r from-[#003399] to-[#0044cc] hover:from-[#0044cc] hover:to-[#0055ff] disabled:opacity-50 text-white font-bold text-[11px] uppercase tracking-[2px] px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#003399]/20"
                  >
                    {sendingReport ? '⏳ Envoi...' : reportSent ? '✅ Envoyé !' : '📧 Envoyer Maintenant'}
                  </button>
                </div>
              </div>

              {/* Recipients */}
              <div className="space-y-3 mb-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Destinataires</p>
                {['jeffos101@gmail.com', 'ophrabelais@hotmail.fr'].map((email) => (
                  <div key={email} className="flex items-center gap-3 bg-white/[0.02] px-5 py-3 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-white/60 text-sm font-mono">{email}</span>
                  </div>
                ))}
              </div>

              {/* Executive Summary */}
              <div className="bg-[#c2aa84]/5 border border-[#c2aa84]/10 rounded-xl p-6 mb-8">
                <h4 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold mb-3">📋 Résumé Exécutif</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">✓ <strong className="text-white/80">{rTop3.length}</strong> mot{rTop3.length > 1 ? 's' : ''}-clé{rTop3.length > 1 ? 's' : ''} en <span className="text-green-400 font-bold">Top 3</span> Google</p>
                    <p className="text-white/60 text-sm">✓ <strong className="text-white/80">{rTop10.length}</strong> mots-clés en <span className="text-[#c2aa84] font-bold">première page</span></p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">✓ Gain moyen : <span className="text-purple-400 font-bold">+{rAvgGain.toFixed(1)} positions</span></p>
                    <p className="text-white/60 text-sm">✓ <strong className="text-white/80">{rGmapTop3.length}</strong> mot{rGmapTop3.length > 1 ? 's' : ''}-clé{rGmapTop3.length > 1 ? 's' : ''} en Top 3 Maps</p>
                  </div>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-green-500/5 rounded-xl border border-green-500/10">
                  <p className="text-green-400 text-3xl font-bold">{rTop3.length}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Top 3 Google</p>
                </div>
                <div className="text-center p-4 bg-[#c2aa84]/5 rounded-xl border border-[#c2aa84]/10">
                  <p className="text-[#c2aa84] text-3xl font-bold">{rTop10.length}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Top 10 Google</p>
                </div>
                <div className="text-center p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <p className="text-blue-400 text-3xl font-bold">{rGmapTop3.length}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Top 3 Maps</p>
                </div>
                <div className="text-center p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                  <p className="text-purple-400 text-3xl font-bold">+{rAvgGain.toFixed(0)}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">Gain Moyen</p>
                </div>
              </div>

              {/* Full keyword table */}
              <div className="mb-8">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">🎯 Positionnement Google — Détail complet</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-white/30 text-[9px] uppercase tracking-wider border-b border-white/5">
                        <th className="text-left py-2 px-3">Mot-clé</th>
                        <th className="text-center py-2 px-3">Vol.</th>
                        <th className="text-center py-2 px-3">Google</th>
                        <th className="text-center py-2 px-3">Évol.</th>
                        <th className="text-center py-2 px-3">Maps</th>
                        <th className="text-left py-2 px-3">Concurrent #1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TARGET_KEYWORDS.map((kw) => {
                        const gain = kw.previousPosition && kw.currentPosition ? kw.previousPosition - kw.currentPosition : 0;
                        return (
                          <tr key={kw.keyword} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                            <td className="py-3 px-3">
                              <p className="text-white/80 font-medium">{kw.keyword}</p>
                              <p className="text-white/20 text-[10px]">{kw.targetPage}</p>
                            </td>
                            <td className="py-3 px-3 text-center text-white/30 text-xs">{kw.monthlyVolume.toLocaleString()}</td>
                            <td className="py-3 px-3 text-center">
                              <span className={`font-bold text-lg ${kw.currentPosition && kw.currentPosition <= 3 ? 'text-green-400' : kw.currentPosition && kw.currentPosition <= 10 ? 'text-[#c2aa84]' : 'text-white/40'}`}>
                                #{kw.currentPosition || '—'}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-center">
                              {gain > 0 ? (
                                <span className="bg-green-500/10 text-green-400 font-bold text-xs px-2 py-1 rounded">↑{gain}</span>
                              ) : (
                                <span className="text-white/20 text-xs">—</span>
                              )}
                            </td>
                            <td className="py-3 px-3 text-center">
                              <span className={`font-bold ${kw.gmapPosition && kw.gmapPosition <= 3 ? 'text-green-400' : kw.gmapPosition ? 'text-[#c2aa84]' : 'text-white/20'}`}>
                                {kw.gmapPosition ? `#${kw.gmapPosition}` : '—'}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-white/30 text-xs">{kw.competitor1.name} {kw.competitor1.position ? `(#${kw.competitor1.position})` : ''}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Competitors */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-4">⚔️ Veille Concurrentielle</p>
                <div className="space-y-2">
                  {COMPETITORS.map((comp) => (
                    <div key={comp.name} className="flex items-center justify-between bg-white/[0.02] rounded-xl px-5 py-3">
                      <div>
                        <p className="text-white/70 text-sm font-medium">{comp.name}</p>
                        <p className="text-white/20 text-[10px]">{comp.url} — ⭐ {comp.rating} ({comp.reviews} avis)</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full ${
                        comp.threat === 'high' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                        comp.threat === 'medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        {comp.threat === 'high' ? '🔴 Élevée' : comp.threat === 'medium' ? '🟡 Modérée' : '🟢 Faible'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          );
        })()}
      </main>
    </div>
  );
}
