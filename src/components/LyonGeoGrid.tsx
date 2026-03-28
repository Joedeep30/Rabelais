'use client';

import { useEffect, useRef, useState } from 'react';

// Real lat/lng coordinates for Lyon neighborhoods
interface GeoPoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
}

const LYON_GEO_POINTS: GeoPoint[] = [
  // Nord
  { id: 'caluire-o', label: 'Caluire Ouest', lat: 45.7920, lng: 4.8380 },
  { id: 'caluire', label: 'Caluire', lat: 45.7950, lng: 4.8500 },
  { id: 'rillieux', label: 'Rillieux', lat: 45.8120, lng: 4.8950 },
  // Croix-Rousse / Lyon 4
  { id: 'vaise', label: 'Vaise (L9)', lat: 45.7750, lng: 4.8050 },
  { id: 'croix-rousse', label: 'Croix-Rousse', lat: 45.7780, lng: 4.8320 },
  { id: 'lyon4-centre', label: 'Lyon 4', lat: 45.7740, lng: 4.8280 },
  { id: 'lyon6-nord', label: 'Lyon 6 N.', lat: 45.7700, lng: 4.8580 },
  { id: 'villeurbanne', label: 'Villeurbanne', lat: 45.7680, lng: 4.8800 },
  // Centre — Lyon 1, 2, 3
  { id: 'vieux-lyon', label: 'Vieux Lyon', lat: 45.7600, lng: 4.8260 },
  { id: 'presquile', label: 'Presqu\'île', lat: 45.7580, lng: 4.8340 },
  { id: 'rabelais', label: '📍 RABELAIS', lat: 45.7560, lng: 4.8370 }, // Centre Rabelais - Lyon 2
  { id: 'part-dieu', label: 'Part-Dieu', lat: 45.7610, lng: 4.8590 },
  { id: 'brotteaux', label: 'Brotteaux', lat: 45.7660, lng: 4.8550 },
  // Sud — Lyon 7, 8
  { id: 'lyon5', label: 'Lyon 5', lat: 45.7530, lng: 4.8100 },
  { id: 'confluences', label: 'Confluences', lat: 45.7440, lng: 4.8180 },
  { id: 'jean-mace', label: 'Jean Macé', lat: 45.7450, lng: 4.8420 },
  { id: 'lyon7-sud', label: 'Lyon 7 Sud', lat: 45.7380, lng: 4.8500 },
  // Banlieue Sud
  { id: 'oullins', label: 'Oullins', lat: 45.7150, lng: 4.8100 },
  { id: 'gerland', label: 'Gerland', lat: 45.7280, lng: 4.8340 },
  { id: 'venissieux', label: 'Vénissieux', lat: 45.7050, lng: 4.8700 },
];

interface MapGridData {
  keyword: string;
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

const getRankColor = (rank: number | null): string => {
  if (rank === null) return '#94a3b8'; // gray
  if (rank <= 3) return '#22c55e';     // green
  if (rank <= 5) return '#c2aa84';     // gold
  if (rank <= 10) return '#eab308';    // yellow
  return '#ef4444';                     // red
};

const getRankBg = (rank: number | null): string => {
  if (rank === null) return '#e2e8f0';
  if (rank <= 3) return '#dcfce7';
  if (rank <= 5) return '#fef3c7';
  if (rank <= 10) return '#fef9c3';
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

      // Inject Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      const map = L.map(mapRef.current!, {
        center: [45.758, 4.845],
        zoom: 13,
        zoomControl: true,
        attributionControl: false,
        scrollWheelZoom: true,
      });

      // White/light map tiles (CartoDB Positron — clean professional look)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        subdomains: 'abcd',
      }).addTo(map);

      // Add attribution in a small way
      L.control.attribution({ position: 'bottomright', prefix: '' })
        .addAttribution('© OpenStreetMap | CartoDB')
        .addTo(map);

      leafletMapRef.current = map;
      setMapLoaded(true);
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

    const L = require('leaflet');
    const map = leafletMapRef.current;
    const data = MAP_GRID_DATA[selectedKeyword];

    // Clear old markers and tooltips
    markersRef.current.forEach(m => m.remove());
    tooltipsRef.current.forEach(t => t.remove());
    markersRef.current = [];
    tooltipsRef.current = [];

    // Add markers for each point
    LYON_GEO_POINTS.forEach((point) => {
      const rank = data.rankings[point.id] ?? null;
      const isRabelais = point.id === 'rabelais';
      const color = getRankColor(rank);
      const bgColor = getRankBg(rank);

      // Create circle marker
      const marker = L.circleMarker([point.lat, point.lng], {
        radius: isRabelais ? 22 : 16,
        fillColor: bgColor,
        fillOpacity: 0.95,
        color: color,
        weight: isRabelais ? 3 : 2,
        opacity: 1,
      }).addTo(map);

      // Create custom tooltip showing rank
      const tooltipContent = `
        <div style="text-align:center;font-family:system-ui;padding:0;margin:0;min-width:32px;">
          <div style="font-size:${isRabelais ? '16' : '14'}px;font-weight:900;color:${color};line-height:1;">
            ${rank !== null ? '#' + rank : '—'}
          </div>
          <div style="font-size:9px;color:#64748b;margin-top:2px;white-space:nowrap;font-weight:${isRabelais ? '700' : '500'};letter-spacing:0.3px;">
            ${point.label.replace('📍 ', '')}
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

      // Pulsing ring for Rabelais
      if (isRabelais) {
        const ring = L.circleMarker([point.lat, point.lng], {
          radius: 28,
          fillColor: 'transparent',
          fillOpacity: 0,
          color: '#c2aa84',
          weight: 2,
          opacity: 0.5,
          dashArray: '6 4',
        }).addTo(map);
        markersRef.current.push(ring);
      }

      markersRef.current.push(marker);
      tooltipsRef.current.push(tooltip);
    });
  }, [selectedKeyword, mapLoaded]);

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
      <div className="bg-white/5 backdrop-blur border border-white/5 rounded-2xl p-4 overflow-hidden">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="text-xs uppercase tracking-widest text-[#c2aa84] font-bold">
            🗺️ GeoGrid Lyon — &quot;{MAP_GRID_DATA[selectedKeyword].keyword}&quot;
          </h3>
          <div className="flex gap-3">
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/50">
              <span className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} /> Top 3
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: '#c2aa84' }} /> 4-5
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: '#eab308' }} /> 6-10
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} /> 11+
            </span>
            <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-white/40">
              <span className="w-3 h-3 rounded-full" style={{ background: '#e2e8f0' }} /> N/A
            </span>
          </div>
        </div>

        {/* Leaflet Map */}
        <div
          ref={mapRef}
          className="w-full rounded-xl overflow-hidden"
          style={{ height: '520px' }}
        />

        <p className="text-white/20 text-[10px] mt-3 text-center px-2">
          📍 Chaque cercle = position Google Maps depuis ce point géographique. Utilisez la molette pour zoomer. Le cercle doré = Centre Rabelais (Lyon 2).
        </p>
      </div>

      {/* Inject Leaflet tooltip styles */}
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
