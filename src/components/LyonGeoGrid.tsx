'use client';

import { useEffect, useRef, useState } from 'react';

// Real lat/lng coordinates for a 7x7 GeoGrid centered on Centre Rabelais (45.756, 4.837)
// Grid spacing: ~0.008 lat/lng (~800m)
const CENTER_LAT = 45.756;
const CENTER_LNG = 4.837;
const GRID_SIZE = 7;
const SPACING = 0.008;

interface GridPoint {
  row: number;
  col: number;
  lat: number;
  lng: number;
  label: string;
}

// Generate the 7x7 grid centered on Rabelais
const generateGrid = (): GridPoint[] => {
  const points: GridPoint[] = [];
  const half = Math.floor(GRID_SIZE / 2);
  const labels = [
    // Row labels (N to S)
    ['Caluire O.', 'Caluire', 'Caluire E.', 'Rillieux O.', 'Rillieux', 'Rillieux E.', 'Décines O.'],
    ['Écully', 'Vaise (L9)', 'Croix-Rousse O.', 'Croix-Rousse', 'Lyon 4', 'Lyon 6 N.', 'Villeurbanne N.'],
    ['Tassin', 'Lyon 5 N.', 'Fourvière', 'Presqu\'île N.', 'Part-Dieu N.', 'Brotteaux', 'Villeurbanne'],
    ['Francheville', 'Lyon 5', 'Vieux Lyon', '📍 RABELAIS', 'Part-Dieu', 'Lyon 6', 'Villeurbanne S.'],
    ['Oullins N.', 'Lyon 5 S.', 'Confluences', 'Perrache', 'Jean Macé', 'Lyon 7 N.', 'Monplaisir'],
    ['Oullins', 'La Mulatière', 'Gerland O.', 'Gerland', 'Lyon 7 Sud', 'Lyon 8 N.', 'Lyon 8'],
    ['Pierre-Bénite', 'St-Genis', 'St-Fons O.', 'St-Fons', 'Vénissieux N.', 'Vénissieux', 'Vénissieux E.'],
  ];
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      points.push({
        row: r,
        col: c,
        lat: CENTER_LAT + (half - r) * SPACING,
        lng: CENTER_LNG + (c - half) * SPACING,
        label: labels[r]?.[c] || `${r},${c}`,
      });
    }
  }
  return points;
};

const GRID_POINTS = generateGrid();

// Keywords with full 7x7 grid data
// Each value is the Google Maps ranking from that geographic search point
interface GeoGridKeyword {
  keyword: string;
  grid: (number | null)[][]; // 7x7
}

const GEOGRID_KEYWORDS: GeoGridKeyword[] = [
  {
    keyword: 'ophtalmologue lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, 18,   15,   13,   12,   null],
      [null, null, 16,   14,   9,    11,   null],
      [null, null, 15,   8,    6,    10,   null],
      [null, null, null, 13,   10,   9,    null],
      [null, null, null, null, 12,   null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'traitement dmla lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, 15,   12,   10,   null, null],
      [null, null, 13,   11,   6,    9,    null],
      [null, null, 12,   5,    4,    8,    null],
      [null, null, null, 10,   8,    7,    null],
      [null, null, null, null, 10,   null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'photobiomodulation lyon',
    grid: [
      [null, null, null, 10,   9,    null, null],
      [null, null, 8,    6,    4,    6,    null],
      [null, 9,   6,    5,    3,    5,    8],
      [null, 8,   5,    1,    2,    3,    7],
      [null, null, 7,    5,    3,    4,    null],
      [null, null, 9,    7,    5,    null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'injection intravitréenne lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, 12,   10,   null, null],
      [null, null, 11,   9,    7,    10,   null],
      [null, null, 10,   7,    5,    8,    null],
      [null, null, null, 9,    7,    8,    null],
      [null, null, null, null, 10,   null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'rétinologue lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, 10,   8,    null, null],
      [null, null, 8,    7,    5,    7,    null],
      [null, null, 7,    5,    3,    6,    null],
      [null, null, null, 8,    5,    6,    null],
      [null, null, null, null, 8,    null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'oct macula lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, 11,   9,    null, null],
      [null, null, 10,   8,    6,    8,    null],
      [null, null, 9,    6,    4,    7,    null],
      [null, null, null, 8,    6,    7,    null],
      [null, null, null, null, 9,    null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'ophtalmologue lyon 6',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, 12,   10,   null],
      [null, null, null, 12,   8,    7,    10],
      [null, null, null, 10,   6,    5,    9],
      [null, null, null, 12,   8,    7,    null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'ophtalmologue brotteaux',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, 10,   8,    null],
      [null, null, null, 11,   7,    5,    9],
      [null, null, null, 9,    6,    4,    8],
      [null, null, null, null, 8,    7,    null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'ophtalmologiste lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, 20,   17,   15,   14,   null],
      [null, null, 18,   15,   11,   13,   null],
      [null, null, 17,   10,   8,    12,   null],
      [null, null, null, 14,   11,   10,   null],
      [null, null, null, null, 14,   null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'spécialiste rétine lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, 9,    7,    null, null],
      [null, null, 8,    6,    4,    7,    null],
      [null, null, 7,    4,    2,    5,    null],
      [null, null, null, 7,    4,    6,    null],
      [null, null, null, null, 7,    null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'fond oeil lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, 14,   12,   null, null],
      [null, null, 12,   10,   8,    11,   null],
      [null, null, 11,   8,    6,    9,    null],
      [null, null, null, 10,   8,    9,    null],
      [null, null, null, null, 12,   null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'rétinopathie diabétique lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, 10,   8,    null, null],
      [null, null, 9,    7,    5,    8,    null],
      [null, null, 8,    5,    3,    6,    null],
      [null, null, null, 8,    5,    7,    null],
      [null, null, null, null, 9,    null, null],
      [null, null, null, null, null, null, null],
    ],
  },
  {
    keyword: 'centre rétine lyon',
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, 18,   15,   null, null],
      [null, null, null, 14,   12,   17,   null],
      [null, null, null, null, 16,   null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],
  },
];
const getRankColor = (rank: number | null): string => {
  if (rank === null) return '#e2e8f0';
  if (rank <= 3) return '#22c55e';
  if (rank <= 5) return '#c2aa84';
  if (rank <= 10) return '#eab308';
  if (rank <= 15) return '#f97316';
  return '#ef4444';
};

const getRankBg = (rank: number | null): string => {
  if (rank === null) return '#f1f5f9';
  if (rank <= 3) return '#dcfce7';
  if (rank <= 5) return '#fef3c7';
  if (rank <= 10) return '#fef9c3';
  if (rank <= 15) return '#ffedd5';
  return '#fecaca';
};

export default function LyonGeoGrid() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.CircleMarker[]>([]);
  const tooltipsRef = useRef<L.Tooltip[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapRef.current || leafletMapRef.current) return;

    const initMap = async () => {
      const L = (await import('leaflet')).default;

      // Inject Leaflet CSS and wait for it to load
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.crossOrigin = '';
        document.head.appendChild(link);
        // Wait for CSS to actually load before initializing the map
        await new Promise<void>((resolve) => {
          link.onload = () => resolve();
          link.onerror = () => resolve(); // proceed anyway
          setTimeout(resolve, 2000); // fallback timeout
        });
      }

      // Extra safety: wait a tick for CSS to apply
      await new Promise(r => setTimeout(r, 100));

      if (!mapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [CENTER_LAT, CENTER_LNG],
        zoom: 13,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
      });

      // White/light map tiles (CartoDB Positron)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        subdomains: 'abcd',
      }).addTo(map);

      L.control.attribution({ position: 'bottomright', prefix: '' })
        .addAttribution('© OpenStreetMap | CartoDB')
        .addTo(map);

      leafletMapRef.current = map;

      // Force resize after a short delay to fix container sizing issues
      setTimeout(() => {
        map.invalidateSize();
        setMapLoaded(true);
      }, 300);
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  // Update markers when keyword changes
  useEffect(() => {
    if (!leafletMapRef.current || !mapLoaded) return;

    const updateMarkers = async () => {
      const L = (await import('leaflet')).default;
      const map = leafletMapRef.current!;
      const data = GEOGRID_KEYWORDS[selectedKeyword];

      // Clear old markers and tooltips
      markersRef.current.forEach(m => m.remove());
      tooltipsRef.current.forEach(t => t.remove());
      markersRef.current = [];
      tooltipsRef.current = [];

      // Add markers for each grid point
      GRID_POINTS.forEach((point) => {
        const rank = data.grid[point.row]?.[point.col] ?? null;
        const isCenter = point.row === 3 && point.col === 3;
        const color = getRankColor(rank);
        const bgColor = getRankBg(rank);
        const hasRank = rank !== null;

        // Circle marker
        const marker = L.circleMarker([point.lat, point.lng], {
          radius: isCenter ? 20 : hasRank ? 16 : 10,
          fillColor: bgColor,
          fillOpacity: hasRank ? 0.95 : 0.4,
          color: color,
          weight: isCenter ? 3 : hasRank ? 2 : 1,
          opacity: hasRank ? 1 : 0.3,
        }).addTo(map);

        // Tooltip with rank number
        const tooltipContent = `
          <div style="text-align:center;font-family:system-ui;min-width:${isCenter ? '28' : '22'}px;">
            <div style="font-size:${isCenter ? '14' : '12'}px;font-weight:900;color:${color};line-height:1;">
              ${hasRank ? rank : '—'}
            </div>
          </div>
        `;

        const tooltip = L.tooltip({
          permanent: true,
          direction: 'center',
          className: 'geogrid-label',
          offset: [0, 0],
        })
          .setLatLng([point.lat, point.lng])
          .setContent(tooltipContent)
          .addTo(map);

        // Pulsing ring for Rabelais center
        if (isCenter) {
          const ring = L.circleMarker([point.lat, point.lng], {
            radius: 26,
            fillColor: 'transparent',
            fillOpacity: 0,
            color: '#c2aa84',
            weight: 2,
            opacity: 0.5,
            dashArray: '6 4',
          }).addTo(map);
          markersRef.current.push(ring);
        }

        // Add hover tooltip with location name
        marker.bindTooltip(
          `<div style="font-family:system-ui;font-size:11px;"><strong>${point.label}</strong>${hasRank ? `<br/>Position: <span style="color:${color};font-weight:bold">#${rank}</span>` : '<br/><span style="color:#94a3b8">Non classé</span>'}</div>`,
          { direction: 'top', offset: [0, -20], className: 'geogrid-hover' }
        );

        markersRef.current.push(marker);
        tooltipsRef.current.push(tooltip);
      });
    };

    updateMarkers();
  }, [selectedKeyword, mapLoaded]);

  const currentData = GEOGRID_KEYWORDS[selectedKeyword];
  // Calculate stats for current keyword
  const allRanks = currentData.grid.flat().filter((r): r is number => r !== null);
  const avgRank = allRanks.length ? (allRanks.reduce((a, b) => a + b, 0) / allRanks.length).toFixed(1) : '—';
  const top3Count = allRanks.filter(r => r <= 3).length;
  const top10Count = allRanks.filter(r => r <= 10).length;
  const totalPoints = allRanks.length;

  return (
    <div className="space-y-6">
      {/* Keyword selector - scrollable pills */}
      <div className="flex gap-2 flex-wrap">
        {GEOGRID_KEYWORDS.map((g, i) => (
          <button
            key={g.keyword}
            onClick={() => setSelectedKeyword(i)}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-bold transition-all ${
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
      <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-3 px-2">
          <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">
            🗺️ GeoGrid Lyon — &quot;{currentData.keyword}&quot;
          </h3>
          <div className="flex gap-3">
            {[
              { label: '1-3', color: '#22c55e', bg: '#dcfce7' },
              { label: '4-5', color: '#c2aa84', bg: '#fef3c7' },
              { label: '6-10', color: '#eab308', bg: '#fef9c3' },
              { label: '11-15', color: '#f97316', bg: '#ffedd5' },
              { label: '16+', color: '#ef4444', bg: '#fecaca' },
              { label: 'N/A', color: '#94a3b8', bg: '#f1f5f9' },
            ].map(l => (
              <span key={l.label} className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-white/40">
                <span className="w-3 h-3 rounded-full" style={{ background: l.bg, border: `2px solid ${l.color}` }} /> {l.label}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex gap-4 mb-3 px-2">
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1.5">
            <span className="text-green-400 text-sm font-bold">{top3Count}</span>
            <span className="text-white/30 text-[9px] ml-1">Top 3</span>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1.5">
            <span className="text-yellow-400 text-sm font-bold">{top10Count}</span>
            <span className="text-white/30 text-[9px] ml-1">Top 10</span>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-1.5">
            <span className="text-blue-400 text-sm font-bold">{avgRank}</span>
            <span className="text-white/30 text-[9px] ml-1">Moy.</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
            <span className="text-white/60 text-sm font-bold">{totalPoints}</span>
            <span className="text-white/30 text-[9px] ml-1">/ {GRID_SIZE * GRID_SIZE} pts</span>
          </div>
        </div>

        {/* Leaflet Map */}
        <div className="relative">
          <div
            ref={mapRef}
            className="w-full rounded-xl overflow-hidden"
            style={{ height: '520px', minHeight: '520px', position: 'relative', zIndex: 1 }}
          />
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/5 rounded-xl" style={{ zIndex: 2 }}>
              <div className="text-center">
                <div className="w-8 h-8 border-2 border-[#c2aa84] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p className="text-white/40 text-xs">Chargement de la carte...</p>
              </div>
            </div>
          )}
        </div>

        <p className="text-white/20 text-[10px] mt-3 text-center px-2">
          📍 Grille 7×7 centrée sur le Centre Rabelais (Lyon 2). Chaque cercle = position Google Maps depuis ce point. Survolez pour voir le nom du quartier. Molette pour zoomer.
        </p>
      </div>

      <style jsx global>{`
        .geogrid-label {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .geogrid-label::before {
          display: none !important;
        }
        .geogrid-hover {
          background: #1e293b !important;
          border: 1px solid #334155 !important;
          color: white !important;
          border-radius: 8px !important;
          padding: 6px 10px !important;
          font-size: 11px !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        }
        .geogrid-hover::before {
          border-top-color: #334155 !important;
        }
        .leaflet-control-zoom a {
          background: #1e293b !important;
          color: #c2aa84 !important;
          border-color: #334155 !important;
        }
        .leaflet-control-zoom a:hover {
          background: #334155 !important;
        }
      `}</style>
    </div>
  );
}
