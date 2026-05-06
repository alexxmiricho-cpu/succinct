'use client';

import React, { useEffect, useRef } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; decay: number;
  size: number; col: string;
}

interface GeoFeature {
  type: string;
  id?: number;
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

interface GeoFeatureCollection {
  type: string;
  features: GeoFeature[];
}

interface TopoJSON {
  type: string;
  objects: {
    countries: {
      type: string;
      geometries: Array<{ type: string; id: number; arcs: unknown }>;
    };
  };
  arcs: number[][][];
  transform?: { scale: [number, number]; translate: [number, number] };
}

interface GlobeAnimationProps {
  className?: string;
}

// ── Cities of interest ────────────────────────────────────────────────────
const CITIES = [
  { n: 'Nairobi',       lng: 36.820, lat: -1.286, major: true  },
  { n: 'Cairo',         lng: 31.240, lat: 30.060, major: false },
  { n: 'Lagos',         lng:  3.390, lat:  6.450, major: false },
  { n: 'Johannesburg',  lng: 28.040, lat:-26.200, major: false },
  { n: 'Addis Ababa',   lng: 38.740, lat:  9.020, major: false },
  { n: 'Dar es Salaam', lng: 39.270, lat: -6.800, major: false },
  { n: 'Kampala',       lng: 32.580, lat:  0.320, major: false },
  { n: 'Mombasa',       lng: 39.670, lat: -4.050, major: false },
];

// ISO-3166-1 numeric IDs for African countries (used to filter TopoJSON)
const AFRICA_IDS = new Set([
  12,24,204,72,854,108,120,140,148,174,178,180,384,266,288,324,
  624,404,426,430,434,450,454,466,478,504,516,562,566,646,686,694,
  706,710,716,728,736,748,768,800,818,834,894,788,174,266,
]);

const KENYA_ID = 404;

// ── Animation phase config ────────────────────────────────────────────────
const PHASES = [
  { dur: 2800, tLng: 20,   tLat:  5.0,  tZ: 1.0 },  // world spin
  { dur: 3200, tLng: 22,   tLat: -5.0,  tZ: 2.4 },  // zoom to Africa
  { dur: 3500, tLng: 37.5, tLat: -0.5,  tZ: 6.2 },  // zoom to Kenya
  { dur: 1e9,  tLng: 37.5, tLat: -0.5,  tZ: 6.2 },  // interactive
];

// ── TopoJSON client (minimal, no external dep) ────────────────────────────
// Decodes arc delta-encoding and assembles polygon rings.
function topoFeatures(topo: TopoJSON): GeoFeatureCollection {
  const scale  = topo.transform?.scale     ?? [1, 1];
  const translate = topo.transform?.translate ?? [0, 0];

  function decodeArc(arcIdx: number): number[][] {
    const raw = arcIdx < 0 ? [...topo.arcs[~arcIdx]].reverse() : topo.arcs[arcIdx];
    let x = 0, y = 0;
    return raw.map(([dx, dy]) => {
      x += dx; y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
    });
  }

  function arcRing(arcs: number[]): number[][] {
    return (arcs as number[]).flatMap((a, i) => {
      const pts = decodeArc(a);
      return i === 0 ? pts : pts.slice(1);
    });
  }

  const features: GeoFeature[] = topo.objects.countries.geometries.map((geom) => {
    let geometry: GeoFeature['geometry'];

    if (geom.type === 'Polygon') {
      geometry = {
        type: 'Polygon',
        coordinates: (geom.arcs as number[][]).map(arcRing),
      };
    } else {
      // MultiPolygon
      geometry = {
        type: 'MultiPolygon',
        coordinates: (geom.arcs as number[][][]).map((poly) => poly.map(arcRing)),
      };
    }

    return { type: 'Feature', id: geom.id, geometry };
  });

  return { type: 'FeatureCollection', features };
}

// ── Component ─────────────────────────────────────────────────────────────
export default function GlobeAnimation({ className = '' }: GlobeAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // All mutable animation state lives here so it never triggers re-renders.
  const stateRef = useRef({
    mounted: false,
    rafId: 0,
    cLng: 20, cLat: 5, zoom: 1,
    phase: 0, phaseStartT: 0,
    scanY: 0,
    particles: [] as Particle[],
    mouseX: 260, mouseY: 260,
    countries: null as GeoFeatureCollection | null,
    kenya:     null as GeoFeature | null,
  });

  // ── Load world-atlas TopoJSON once ────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const topo = (await res.json()) as TopoJSON;
        const fc   = topoFeatures(topo);
        const s    = stateRef.current;
        s.countries = fc;
        s.kenya     = fc.features.find((f) => f.id === KENYA_ID) ?? null;
      } catch (e) {
        console.warn('GlobeAnimation: failed to load world-atlas TopoJSON', e);
      }
    })();
  }, []);

  // ── Mouse / touch parallax ────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      stateRef.current.mouseX = e.clientX - r.left;
      stateRef.current.mouseY = e.clientY - r.top;
    };
    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      stateRef.current.mouseX = e.touches[0].clientX - r.left;
      stateRef.current.mouseY = e.touches[0].clientY - r.top;
    };
    window.addEventListener('mousemove', onMove,  { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
    };
  }, []);

  // ── Main render loop ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const s  = stateRef.current;
    s.mounted = true;

    // ── Helpers ──────────────────────────────────────────────────────
    const lerp      = (a: number, b: number, t: number) => a + (b - a) * t;
    const lerpAngle = (a: number, b: number, t: number) => {
      let d = b - a;
      while (d >  180) d -= 360;
      while (d < -180) d += 360;
      return a + d * t;
    };

    const baseR = () => Math.min(W, H) * 0.38 * s.zoom;

    const project = (lng: number, lat: number): [number, number] | null => {
      const R   = baseR();
      const lr  = (lng - s.cLng) * Math.PI / 180;
      const laR = lat   * Math.PI / 180;
      const cR  = s.cLat * Math.PI / 180;
      const cosC =
        Math.sin(cR) * Math.sin(laR) +
        Math.cos(cR) * Math.cos(laR) * Math.cos(lr);
      if (cosC <= 0) return null;
      return [
        R * Math.cos(laR) * Math.sin(lr),
        R * (Math.cos(cR) * Math.sin(laR) - Math.sin(cR) * Math.cos(laR) * Math.cos(lr)),
      ];
    };

    const drawRing = (coords: number[][]): boolean => {
      ctx.beginPath();
      let moved = false;
      let lastVis = false;
      for (const [lng, lat] of coords) {
        const p = project(lng, lat);
        if (!p) { lastVis = false; continue; }
        if (!lastVis) { ctx.moveTo(cx + p[0], cy - p[1]); moved = true; }
        else           ctx.lineTo(cx + p[0], cy - p[1]);
        lastVis = true;
      }
      if (moved) ctx.closePath();
      return moved;
    };

    const drawFeature = (
      feature: GeoFeature,
      fill: string | null,
      stroke: string | null,
      lw: number,
      alpha = 1,
    ) => {
      const geo = feature.geometry;
      if (!geo) return;
      const polys =
        geo.type === 'Polygon'
          ? [geo.coordinates as number[][][]]
          : (geo.coordinates as number[][][][]);

      ctx.globalAlpha = alpha;
      for (const poly of polys) {
        if (!poly[0]) continue;
        const moved = drawRing(poly[0]);
        if (!moved) continue;
        if (fill)   { ctx.fillStyle   = fill;   ctx.fill();            }
        if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
      }
      ctx.globalAlpha = 1;
    };

    const spawnParticle = () => {
      const p = project(36.82, -1.286);
      if (!p) return;
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 22 + 4;
      s.particles.push({
        x: cx + p[0] + Math.cos(a) * r,
        y: cy - p[1] + Math.sin(a) * r,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.25,
        life: 1,
        decay: 0.012 + Math.random() * 0.012,
        size: Math.random() * 1.8 + 0.4,
        col: Math.random() > 0.5 ? '#00f0c8' : '#40ffdc',
      });
    };

    // ── Frame ─────────────────────────────────────────────────────────
    const draw = (ts: number) => {
      if (!s.mounted) return;
      if (!s.phaseStartT) s.phaseStartT = ts;

      const ph = PHASES[Math.min(s.phase, PHASES.length - 1)];

      // Auto-rotate during world phase
      if (s.phase === 0) PHASES[0].tLng += 0.10;

      // Phase advance
      if (s.phase < PHASES.length - 1 && ts - s.phaseStartT > ph.dur) {
        s.phase++;
        s.phaseStartT = ts;
      }

      const curPh = PHASES[Math.min(s.phase, PHASES.length - 1)];
      const sp    = s.phase === 3 ? 0.045 : 0.02;
      s.cLng = lerpAngle(s.cLng, curPh.tLng, sp);
      s.cLat = lerp(s.cLat, curPh.tLat, sp);
      s.zoom = lerp(s.zoom, curPh.tZ,   sp);

      // Mouse parallax in interactive phase
      if (s.phase === 3) {
        const mx = (s.mouseX - cx) / cx;
        const my = (s.mouseY - cy) / cy;
        s.cLng = lerp(s.cLng, 37.5 + mx * 7, 0.05);
        s.cLat = lerp(s.cLat, -0.5 - my * 5,  0.05);
      }

      const R = baseR();
      ctx.clearRect(0, 0, W, H);

      // ── Stars ───────────────────────────────────────────────────────
      for (let i = 0; i < 200; i++) {
        const sx = (Math.sin(i * 127.1 + 3) * 0.5 + 0.5) * W;
        const sy = (Math.sin(i * 311.7 + 5) * 0.5 + 0.5) * H;
        const bri = Math.sin(ts * 0.0008 + i) * 0.3 + 0.7;
        ctx.globalAlpha = bri * (Math.sin(i * 7.3) * 0.4 + 0.5) * 0.8;
        ctx.fillStyle = '#c8e8f8';
        ctx.fillRect(sx, sy, 0.8, 0.8);
      }
      ctx.globalAlpha = 1;

      // ── Atmosphere halo ─────────────────────────────────────────────
      const atmo = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.3);
      atmo.addColorStop(0,   'rgba(0,210,180,0.15)');
      atmo.addColorStop(0.6, 'rgba(0,100,200,0.04)');
      atmo.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = atmo; ctx.fill();

      // ── Ocean sphere ────────────────────────────────────────────────
      const og = ctx.createRadialGradient(cx - R * 0.28, cy - R * 0.28, R * 0.04, cx, cy, R);
      og.addColorStop(0,    '#0d2f50');
      og.addColorStop(0.55, '#071c33');
      og.addColorStop(1,    '#030f1e');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = og; ctx.fill();

      // ── Clip all drawing to the globe circle ────────────────────────
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();

      // Latitude / longitude grid
      ctx.strokeStyle = 'rgba(0,200,170,0.055)';
      ctx.lineWidth = 0.5;
      for (let lat = -80; lat <= 80; lat += 20) {
        ctx.beginPath(); let f = true;
        for (let lng = -180; lng <= 180; lng += 2) {
          const p = project(lng, lat);
          if (!p) { f = true; continue; }
          if (f) { ctx.moveTo(cx + p[0], cy - p[1]); f = false; }
          else     ctx.lineTo(cx + p[0], cy - p[1]);
        }
        ctx.stroke();
      }
      for (let lng = -180; lng <= 180; lng += 20) {
        ctx.beginPath(); let f = true;
        for (let lat2 = -90; lat2 <= 90; lat2 += 2) {
          const p = project(lng, lat2);
          if (!p) { f = true; continue; }
          if (f) { ctx.moveTo(cx + p[0], cy - p[1]); f = false; }
          else     ctx.lineTo(cx + p[0], cy - p[1]);
        }
        ctx.stroke();
      }

      // ── Countries ───────────────────────────────────────────────────
      const contAlpha  = Math.max(0, Math.min(1, (2.6 - s.zoom) / 1.6));
      const afAlpha    = Math.max(0, Math.min(1, (s.zoom - 1.1) / 1.4));
      const kenyaAlpha = Math.max(0, Math.min(1, (s.zoom - 2.8) / 2.2));

      if (s.countries) {
        for (const feature of s.countries.features) {
          if (feature.id === KENYA_ID) continue; // drawn separately
          const inAfrica = AFRICA_IDS.has(feature.id ?? -1);

          if (inAfrica && afAlpha > 0) {
            drawFeature(feature, '#0b3528', 'rgba(0,210,170,0.4)', 0.7, afAlpha);
          } else if (!inAfrica && contAlpha > 0) {
            drawFeature(feature, '#0d3a25', 'rgba(0,190,150,0.25)', 0.5, contAlpha);
          }
        }

        // Kenya — glowing highlight
        if (s.kenya && kenyaAlpha > 0) {
          ctx.save();
          ctx.shadowColor = 'rgba(0,230,190,0.6)';
          ctx.shadowBlur  = 20 * kenyaAlpha;
          drawFeature(s.kenya, 'rgba(0,200,165,0.28)', 'rgba(0,240,200,0.95)', 1.6, kenyaAlpha);
          ctx.restore();

          // Animated dashed border
          ctx.save();
          ctx.setLineDash([7, 4]);
          ctx.lineDashOffset = -ts * 0.045;
          drawFeature(s.kenya, null, 'rgba(120,255,220,0.7)', 1.1, kenyaAlpha);
          ctx.setLineDash([]);
          ctx.restore();
        }
      }

      // ── Scanline sweep ──────────────────────────────────────────────
      s.scanY = (s.scanY + 0.45) % (R * 2);
      const sl = cy - R + s.scanY;
      if (sl > cy - R && sl < cy + R) {
        const sg = ctx.createLinearGradient(cx - R, sl, cx + R, sl);
        sg.addColorStop(0,   'rgba(0,220,175,0)');
        sg.addColorStop(0.5, 'rgba(0,220,175,0.13)');
        sg.addColorStop(1,   'rgba(0,220,175,0)');
        ctx.fillStyle = sg;
        ctx.fillRect(cx - R, sl - 1, R * 2, 2);
      }

      // ── Specular highlight ──────────────────────────────────────────
      const spec = ctx.createRadialGradient(
        cx - R * 0.38, cy - R * 0.38, 0,
        cx - R * 0.38, cy - R * 0.38, R * 0.62,
      );
      spec.addColorStop(0, 'rgba(255,255,255,0.09)');
      spec.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = spec; ctx.fill();

      ctx.restore(); // end globe clip

      // ── Rim glow (outside clip) ─────────────────────────────────────
      const rim = ctx.createRadialGradient(cx, cy, R * 0.87, cx, cy, R);
      rim.addColorStop(0, 'rgba(0,0,0,0)');
      rim.addColorStop(1, 'rgba(0,210,175,0.24)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rim; ctx.fill();

      // ── Cities ──────────────────────────────────────────────────────
      const cityA   = Math.max(0, Math.min(1, (s.zoom - 2.0) / 1.5));
      const kA2     = Math.max(0, Math.min(1, (s.zoom - 2.8) / 2.2));

      for (const city of CITIES) {
        const p = project(city.lng, city.lat);
        if (!p) continue;
        const px = cx + p[0];
        const py = cy - p[1];
        if (Math.sqrt(p[0] ** 2 + p[1] ** 2) > R * 0.99) continue;

        if (city.major && kA2 > 0.2) {
          // Nairobi ping rings
          for (let r = 1; r <= 4; r++) {
            const rp = (ts * 0.00095 + r * 0.28) % 1;
            ctx.beginPath();
            ctx.arc(px, py, rp * 32 * s.zoom * 0.17, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0,240,195,${(1 - rp) * 0.55 * kA2})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
          // Core glow dot
          const dg = ctx.createRadialGradient(px, py, 0, px, py, 6);
          dg.addColorStop(0,    '#ffffff');
          dg.addColorStop(0.35, '#00f0c8');
          dg.addColorStop(1,    'rgba(0,240,200,0)');
          ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fillStyle = dg; ctx.fill();

          // Labels
          if (s.zoom > 3.8) {
            ctx.font      = '600 11px monospace';
            ctx.fillStyle = 'rgba(210,255,245,0.95)';
            ctx.textAlign = 'center';
            ctx.fillText('NAIROBI', px, py - 13);
            ctx.font      = '400 9px monospace';
            ctx.fillStyle = 'rgba(0,215,175,0.75)';
            ctx.fillText('1.286°S  36.820°E', px, py - 23);
          }
        } else if (cityA > 0) {
          ctx.beginPath();
          ctx.arc(px, py, city.major ? 2.5 : 1.4, 0, Math.PI * 2);
          ctx.fillStyle  = city.major ? '#00f0c8' : 'rgba(0,195,158,0.65)';
          ctx.globalAlpha = cityA;
          ctx.fill();
          ctx.globalAlpha = 1;

          if (s.zoom > 4.8 && !city.major) {
            ctx.font      = '400 9px monospace';
            ctx.fillStyle = `rgba(0,200,160,${cityA * 0.85})`;
            ctx.textAlign = 'center';
            ctx.fillText(city.n, px, py - 7);
          }
        }
      }

      // ── Nairobi particles ────────────────────────────────────────────
      if (s.zoom > 4.2 && kA2 > 0.5 && Math.random() < 0.22) {
        spawnParticle();
      }
      s.particles = s.particles.filter((p) => p.life > 0);
      for (const p of s.particles) {
        p.x += p.vx; p.y += p.vy; p.life -= p.decay;
        ctx.globalAlpha = p.life * 0.75;
        ctx.fillStyle   = p.col;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;

      // ── HUD overlay ──────────────────────────────────────────────────
      if (s.phase >= 2) {
        const ha = Math.min(1, (s.zoom - 2) / 2) * 0.72;
        ctx.globalAlpha = ha;
        ctx.font      = '9px monospace';
        ctx.fillStyle = '#00deb8';
        ctx.textAlign = 'left';
        const lines = [
          `LON ${s.cLng.toFixed(2)}°  LAT ${s.cLat.toFixed(2)}°`,
          `ZOOM ${s.zoom.toFixed(2)}x`,
          'NAIROBI  36.82°E  1.29°S',
        ];
        lines.forEach((l, i) => ctx.fillText(l, 16, H - 12 - i * 13));
        ctx.strokeStyle = 'rgba(0,210,175,0.38)';
        ctx.lineWidth   = 0.8;
        ctx.strokeRect(10, H - 12 - lines.length * 13 - 5, 162, lines.length * 13 + 10);
        ctx.globalAlpha = 1;
      }

      s.rafId = requestAnimationFrame(draw);
    };

    s.rafId = requestAnimationFrame(draw);

    return () => {
      s.mounted = false;
      cancelAnimationFrame(s.rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={520}
      height={520}
      className={className}
      aria-label="Animated globe zooming into Nairobi, Kenya"
      role="img"
      style={{
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
        background: 'transparent',
      }}
    />
  );
}