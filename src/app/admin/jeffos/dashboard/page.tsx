'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TARGET_KEYWORDS, GBP_POST_TEMPLATES, COMPETITORS, GEOGRID_DATA } from '@/lib/keywords';

type Tab = 'overview' | 'keywords' | 'geogrid' | 'gbp-poster' | 'reports';

// GBP Post images mapping
const GBP_IMAGES: Record<string, string> = {
  'photobiomodulation lyon': '/admin/gbp/photobiomodulation.png',
  'ophtalmologue lyon': '/admin/gbp/ophtalmologue.png',
  'traitement dmla lyon': '/admin/gbp/dmla.png',
  'injection intravitréenne lyon': '/admin/gbp/injection.png',
  'rétinologue lyon': '/admin/gbp/retinologue.png',
  'oct macula lyon': '/admin/gbp/oct.png',
  'ophtalmologue lyon 6': '/admin/gbp/ophtalmologue.png',
  'ophtalmologue bellecour': '/admin/gbp/ophtalmologue.png',
  'dmla sèche traitement': '/admin/gbp/dmla.png',
};

/* ─── Lyon SVG Map GeoGrid ─── */
// Geographic points on the Lyon SVG map (x%, y%) — positioned on a real map layout
// These correspond to approximate locations of Lyon neighborhoods
interface MapPoint {
  id: string;
  label: string;
  x: number;   // % from left
  y: number;   // % from top
  gridRow: number;
  gridCol: number;
}

const LYON_MAP_POINTS: MapPoint[] = [
  // Row 0: Nord
  { id: 'caluire-o', label: 'Caluire O.', x: 38, y: 8, gridRow: 0, gridCol: 1 },
  { id: 'caluire', label: 'Caluire', x: 52, y: 6, gridRow: 0, gridCol: 2 },
  { id: 'rillieux', label: 'Rillieux', x: 66, y: 10, gridRow: 0, gridCol: 3 },
  // Row 1: Croix-Rousse / Lyon 4
  { id: 'vaise', label: 'Vaise (L9)', x: 25, y: 28, gridRow: 1, gridCol: 0 },
  { id: 'croix-rousse', label: 'Croix-Rousse', x: 42, y: 24, gridRow: 1, gridCol: 1 },
  { id: 'lyon4-centre', label: 'Lyon 4', x: 52, y: 30, gridRow: 1, gridCol: 2 },
  { id: 'lyon6-nord', label: 'Lyon 6 N.', x: 65, y: 26, gridRow: 1, gridCol: 3 },
  { id: 'villeurbanne', label: 'Villeurbanne', x: 78, y: 30, gridRow: 1, gridCol: 4 },
  // Row 2: Centre — Lyon 1, 2, 3
  { id: 'vieux-lyon', label: 'Vieux Lyon', x: 32, y: 44, gridRow: 2, gridCol: 0 },
  { id: 'presquile', label: 'Presqu\'île', x: 44, y: 42, gridRow: 2, gridCol: 1 },
  { id: 'rabelais', label: '📍 RABELAIS', x: 50, y: 50, gridRow: 2, gridCol: 2 },  // Centre Rabelais
  { id: 'part-dieu', label: 'Part-Dieu', x: 64, y: 44, gridRow: 2, gridCol: 3 },
  { id: 'brotteaux', label: 'Brotteaux', x: 74, y: 42, gridRow: 2, gridCol: 4 },
  // Row 3: Sud — Lyon 7, 8
  { id: 'lyon5', label: 'Lyon 5', x: 28, y: 60, gridRow: 3, gridCol: 0 },
  { id: 'confluences', label: 'Confluences', x: 40, y: 62, gridRow: 3, gridCol: 1 },
  { id: 'jean-mace', label: 'Jean Macé', x: 52, y: 64, gridRow: 3, gridCol: 2 },
  { id: 'lyon7-sud', label: 'Lyon 7 Sud', x: 62, y: 66, gridRow: 3, gridCol: 3 },
  // Row 4: Banlieue Sud
  { id: 'oullins', label: 'Oullins', x: 35, y: 80, gridRow: 4, gridCol: 1 },
  { id: 'gerland', label: 'Gerland', x: 50, y: 78, gridRow: 4, gridCol: 2 },
  { id: 'venissieux', label: 'Vénissieux', x: 65, y: 82, gridRow: 4, gridCol: 3 },
];

// Extended grid data — sparse, matching map points
interface MapGridData {
  keyword: string;
  // Map from point id to rank
  rankings: Record<string, number | null>;
}

const MAP_GRID_DATA: MapGridData[] = [
  {
    keyword: 'ophtalmologue lyon',
    rankings: {
      'caluire': null, 'rillieux': null, 'caluire-o': null,
      'vaise': null, 'croix-rousse': null, 'lyon4-centre': 15, 'lyon6-nord': 12, 'villeurbanne': null,
      'vieux-lyon': null, 'presquile': 14, 'rabelais': 8, 'part-dieu': 6, 'brotteaux': null,
      'lyon5': null, 'confluences': null, 'jean-mace': 10, 'lyon7-sud': 9,
      'oullins': null, 'gerland': null, 'venissieux': null,
    },
  },
  {
    keyword: 'traitement dmla lyon',
    rankings: {
      'caluire': null, 'rillieux': null, 'caluire-o': null,
      'vaise': null, 'croix-rousse': null, 'lyon4-centre': 12, 'lyon6-nord': 10, 'villeurbanne': null,
      'vieux-lyon': null, 'presquile': 11, 'rabelais': 5, 'part-dieu': 4, 'brotteaux': null,
      'lyon5': null, 'confluences': null, 'jean-mace': 8, 'lyon7-sud': 7,
      'oullins': null, 'gerland': null, 'venissieux': null,
    },
  },
  {
    keyword: 'photobiomodulation lyon',
    rankings: {
      'caluire': 8, 'rillieux': null, 'caluire-o': null,
      'vaise': null, 'croix-rousse': 6, 'lyon4-centre': 4, 'lyon6-nord': 3, 'villeurbanne': null,
      'vieux-lyon': null, 'presquile': 5, 'rabelais': 1, 'part-dieu': 2, 'brotteaux': 5,
      'lyon5': null, 'confluences': 7, 'jean-mace': 3, 'lyon7-sud': 4,
      'oullins': null, 'gerland': 9, 'venissieux': null,
    },
  },
];

function LyonMapGeoGrid() {
  const [selectedKeyword, setSelectedKeyword] = useState(0);
  const data = MAP_GRID_DATA[selectedKeyword];

  const getRankColor = (rank: number | null): string => {
    if (rank === null) return 'rgba(255,255,255,0.05)';
    if (rank <= 3) return 'rgba(34,197,94,0.8)';   // green
    if (rank <= 5) return 'rgba(194,170,132,0.8)';  // gold
    if (rank <= 10) return 'rgba(234,179,8,0.6)';   // yellow
    return 'rgba(239,68,68,0.6)';                    // red
  };

  const getRankTextColor = (rank: number | null): string => {
    if (rank === null) return 'rgba(255,255,255,0.1)';
    if (rank <= 3) return '#22c55e';
    if (rank <= 5) return '#c2aa84';
    if (rank <= 10) return '#eab308';
    return '#ef4444';
  };

  return (
    <div className="space-y-6">
      {/* Keyword selector */}
      <div className="flex gap-2 flex-wrap">
        {MAP_GRID_DATA.map((g, i) => (
          <button
            key={g.keyword}
            onClick={() => setSelectedKeyword(i)}
            className={`px-4 py-2 rounded-xl text-xs uppercase tracking-wider font-bold transition-all ${
              selectedKeyword === i
                ? 'bg-[#003399]/30 text-[#6699ff] border border-[#003399]/40'
                : 'bg-white/5 text-white/30 hover:text-white/60 border border-white/5'
            }`}
          >
            {g.keyword}
          </button>
        ))}
      </div>

      {/* Map container */}
      <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">
            🗺️ Carte GeoGrid Lyon — &quot;{data.keyword}&quot;
          </h3>
          <div className="flex gap-3">
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/50">
              <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(34,197,94,0.8)' }} /> Top 3
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(194,170,132,0.8)' }} /> 4-5
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(234,179,8,0.6)' }} /> 6-10
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: 'rgba(239,68,68,0.6)' }} /> 11+
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full bg-white/5" /> N/A
            </span>
          </div>
        </div>

        {/* SVG Lyon Map */}
        <div className="relative w-full" style={{ paddingBottom: '65%' }}>
          <svg
            viewBox="0 0 1000 650"
            className="absolute inset-0 w-full h-full"
            style={{ filter: 'drop-shadow(0 4px 30px rgba(0,51,153,0.15))' }}
          >
            {/* Background */}
            <rect width="1000" height="650" rx="16" fill="#0d1425" />

            {/* Saône River */}
            <path
              d="M 380 0 C 370 80, 360 120, 355 180 C 350 220, 360 280, 370 320 C 375 350, 380 380, 400 440 C 415 480, 420 520, 430 580 C 440 620, 445 650, 445 650"
              fill="none"
              stroke="rgba(59,130,246,0.15)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M 380 0 C 370 80, 360 120, 355 180 C 350 220, 360 280, 370 320 C 375 350, 380 380, 400 440 C 415 480, 420 520, 430 580 C 440 620, 445 650, 445 650"
              fill="none"
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <text x="345" y="200" fill="rgba(59,130,246,0.2)" fontSize="10" fontStyle="italic">Saône</text>

            {/* Rhône River */}
            <path
              d="M 550 0 C 545 60, 530 100, 520 160 C 510 220, 505 260, 510 320 C 515 380, 520 420, 530 480 C 540 520, 555 560, 560 620 C 562 640, 565 650, 565 650"
              fill="none"
              stroke="rgba(59,130,246,0.15)"
              strokeWidth="22"
              strokeLinecap="round"
            />
            <path
              d="M 550 0 C 545 60, 530 100, 520 160 C 510 220, 505 260, 510 320 C 515 380, 520 420, 530 480 C 540 520, 555 560, 560 620 C 562 640, 565 650, 565 650"
              fill="none"
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <text x="490" y="200" fill="rgba(59,130,246,0.2)" fontSize="10" fontStyle="italic">Rhône</text>

            {/* Presqu'île shading (land between rivers) */}
            <path
              d="M 380 200 C 385 240, 390 280, 395 320 C 400 360, 410 400, 420 440 L 510 440 C 508 400, 505 360, 508 320 C 511 280, 520 240, 530 200 Z"
              fill="rgba(255,255,255,0.02)"
            />

            {/* District outlines (subtle) */}
            {/* Lyon 1 */}
            <ellipse cx="440" cy="180" rx="50" ry="40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            {/* Lyon 2 */}
            <ellipse cx="460" cy="290" rx="55" ry="55" fill="none" stroke="rgba(194,170,132,0.08)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Data points */}
            {LYON_MAP_POINTS.map((point) => {
              const rank = data.rankings[point.id] ?? null;
              const isRabelais = point.id === 'rabelais';
              const cx = point.x * 10;
              const cy = point.y * 6.5;

              return (
                <g key={point.id}>
                  {/* Pulse ring for Rabelais */}
                  {isRabelais && (
                    <>
                      <circle cx={cx} cy={cy} r="32" fill="none" stroke="rgba(194,170,132,0.3)" strokeWidth="1.5">
                        <animate attributeName="r" values="28;40;28" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={cx} cy={cy} r="28" fill="none" stroke="rgba(194,170,132,0.4)" strokeWidth="2" />
                    </>
                  )}

                  {/* Background glow */}
                  {rank !== null && (
                    <circle cx={cx} cy={cy} r="24" fill={getRankColor(rank)} opacity="0.15" />
                  )}

                  {/* Main circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="20"
                    fill={rank !== null ? getRankColor(rank) : 'rgba(255,255,255,0.03)'}
                    stroke={rank !== null ? getRankTextColor(rank) : 'rgba(255,255,255,0.06)'}
                    strokeWidth={isRabelais ? 2.5 : 1}
                    opacity={rank !== null ? 0.25 : 1}
                  />

                  {/* Rank text */}
                  <text
                    x={cx}
                    y={cy + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={getRankTextColor(rank)}
                    fontSize={isRabelais ? '16' : '14'}
                    fontWeight="bold"
                    fontFamily="system-ui"
                  >
                    {rank !== null ? `#${rank}` : '—'}
                  </text>

                  {/* Label */}
                  <text
                    x={cx}
                    y={cy + 34}
                    textAnchor="middle"
                    fill={isRabelais ? 'rgba(194,170,132,0.9)' : 'rgba(255,255,255,0.25)'}
                    fontSize={isRabelais ? '10' : '8'}
                    fontWeight={isRabelais ? 'bold' : 'normal'}
                    fontFamily="system-ui"
                    letterSpacing="0.5"
                  >
                    {point.label}
                  </text>
                </g>
              );
            })}

            {/* Map title */}
            <text x="920" y="30" textAnchor="end" fill="rgba(255,255,255,0.1)" fontSize="11" fontFamily="system-ui" letterSpacing="2">LYON MÉTROPOLE</text>
          </svg>
        </div>

        <p className="text-white/20 text-[10px] mt-3 text-center">
          📍 Chaque cercle = position Google Maps depuis ce point géographique. Le cercle doré au centre = Centre Rabelais (Lyon 2).
        </p>
      </div>
    </div>
  );
}

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
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Top 3 Organique', value: top3Count, total: totalKeywords, color: '#22c55e' },
                { label: 'Top 10 Organique', value: top10Count, total: totalKeywords, color: '#003399' },
                { label: 'Top 3 Google Maps', value: gmapTop3, total: totalKeywords, color: '#c2aa84' },
                { label: 'Amélioration Moy.', value: `+${avgImprovement.toFixed(1)}`, total: 'positions', color: '#8b5cf6' },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
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
        {activeTab === 'geogrid' && <LyonMapGeoGrid />}

        {/* GBP POSTER TAB */}
        {activeTab === 'gbp-poster' && (() => {
          // Build scheduled posts: 3x/week (Mon/Wed/Fri) cycling through templates
          // Today is 2026-03-28 (Saturday). Posts started ~3 weeks ago.
          const SCHEDULE_START = new Date(2026, 2, 9); // Mon March 9, 2026
          const TODAY = new Date(2026, 2, 28);
          const postDays = [1, 3, 5]; // Mon, Wed, Fri
          const allTemplates = GBP_POST_TEMPLATES;

          interface ScheduledPost {
            date: Date;
            keyword: string;
            text: string;
            cta: string;
            status: 'posted' | 'scheduled';
            image: string;
          }

          const scheduledPosts: ScheduledPost[] = [];
          let templateIdx = 0;
          const cursor = new Date(SCHEDULE_START);
          // Generate posts from start through 4 weeks into the future
          const endDate = new Date(2026, 3, 18); // April 18
          while (cursor <= endDate) {
            if (postDays.includes(cursor.getDay())) {
              const tpl = allTemplates[templateIdx % allTemplates.length];
              scheduledPosts.push({
                date: new Date(cursor),
                keyword: tpl.keyword,
                text: tpl.textTemplate,
                cta: tpl.callToAction,
                status: cursor < TODAY ? 'posted' : 'scheduled',
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
        {activeTab === 'reports' && (
          <div className="space-y-6">
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
                {['jeffos101@gmail.com', 'ophrabelais@hotmail.fr'].map((email) => (
                  <div key={email} className="flex items-center gap-3 bg-white/[0.02] px-5 py-3 rounded-xl">
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

                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Progressions notables</p>
                    {TARGET_KEYWORDS
                      .filter(k => k.previousPosition && k.currentPosition)
                      .sort((a, b) => ((b.previousPosition! - b.currentPosition!) - (a.previousPosition! - a.currentPosition!)))
                      .slice(0, 5)
                      .map((kw) => (
                        <div key={kw.keyword} className="flex items-center justify-between py-2 border-b border-white/[0.03]">
                          <span className="text-white/60 text-sm">{kw.keyword}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-white/30 text-xs">#{kw.previousPosition}</span>
                            <span className="text-white/30">→</span>
                            <span className={`font-bold ${kw.currentPosition! <= 3 ? 'text-green-400' : kw.currentPosition! <= 10 ? 'text-[#c2aa84]' : 'text-white/60'}`}>
                              #{kw.currentPosition}
                            </span>
                            <span className="text-green-400 text-xs">↑{kw.previousPosition! - kw.currentPosition!}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
