'use client'

import { motion } from 'framer-motion'

/* Pre-compute trig — prevents SSR/client float mismatch */
const SUN_RAYS = Array.from({ length: 10 }, (_, i) => {
  const a = (i * 36 * Math.PI) / 180
  return {
    x1: +(332 + Math.cos(a) * 26).toFixed(3),
    y1: +(72 + Math.sin(a) * 26).toFixed(3),
    x2: +(332 + Math.cos(a) * 44).toFixed(3),
    y2: +(72 + Math.sin(a) * 44).toFixed(3),
  }
})

/* 4-col × 3-row solar cells (integer-only — SSR-safe) */
const PANEL_CELLS = Array.from({ length: 12 }, (_, k) => ({
  x: 6 + (k % 4) * 35,
  y: 6 + Math.floor(k / 4) * 27,
}))

/* Hex vertex dots for platform */
const HEX_VERTS: [number, number][] = [
  [280, 158], [420, 238], [420, 358], [280, 438], [140, 358], [140, 238],
]

export function HeroIllustration() {
  return (
    <div className="w-full flex items-center justify-center select-none">
      <svg
        viewBox="0 0 560 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-2xl"
        aria-hidden="true"
      >
        {/* ─── DEFS ─── */}
        <defs>
          <filter id="fBlue" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fYellow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="12" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fPurple" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fSoft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fCard" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#000" floodOpacity="0.5" />
          </filter>
          <filter id="fHalo" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="20" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fEdge" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Pipe gradients */}
          <linearGradient id="gPipeH" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#C8EEFF" />
            <stop offset="12%"  stopColor="#7DD3FC" />
            <stop offset="40%"  stopColor="#38BDF8" />
            <stop offset="70%"  stopColor="#0284C7" />
            <stop offset="88%"  stopColor="#024E7A" />
            <stop offset="100%" stopColor="#012840" />
          </linearGradient>
          <linearGradient id="gPipeV" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#C8EEFF" />
            <stop offset="12%"  stopColor="#7DD3FC" />
            <stop offset="40%"  stopColor="#38BDF8" />
            <stop offset="70%"  stopColor="#0284C7" />
            <stop offset="88%"  stopColor="#024E7A" />
            <stop offset="100%" stopColor="#012840" />
          </linearGradient>

          {/* Solar cell */}
          <linearGradient id="gCell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>

          {/* Server rack */}
          <linearGradient id="gRack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#18232F" />
            <stop offset="100%" stopColor="#0C1520" />
          </linearGradient>
          <linearGradient id="gUnit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1E2D42" />
            <stop offset="100%" stopColor="#141F30" />
          </linearGradient>

          {/* Hub */}
          <radialGradient id="gHub" cx="40%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#22D3EE" />
            <stop offset="60%"  stopColor="#0891B2" />
            <stop offset="100%" stopColor="#0E4F6A" />
          </radialGradient>

          {/* Sun */}
          <radialGradient id="gSun" cx="50%" cy="40%" r="60%">
            <stop offset="0%"   stopColor="#FFF9C4" />
            <stop offset="25%"  stopColor="#FBBF24" />
            <stop offset="65%"  stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="gAtmos" cx="50%" cy="55%" r="50%">
            <stop offset="0%"   stopColor="#0E2A4A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#060D14" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── ATMOSPHERE ── */}
        <ellipse cx="280" cy="270" rx="260" ry="220" fill="url(#gAtmos)" />
        <ellipse cx="130" cy="340" rx="130" ry="90"  fill="#38BDF8" fillOpacity="0.07" />
        <ellipse cx="430" cy="200" rx="120" ry="100" fill="#A78BFA" fillOpacity="0.07" />
        <ellipse cx="330" cy="80"  rx="110" ry="70"  fill="#FDE047" fillOpacity="0.07" />

        {/* ── BACKGROUND GRID (inside illustration) ── */}
        <g opacity="0.07">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
            <line key={`gh${i}`} x1="0" y1={i * 40} x2="560" y2={i * 40} stroke="white" strokeWidth="0.6" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => (
            <line key={`gv${i}`} x1={i * 40} y1="0" x2={i * 40} y2="500" stroke="white" strokeWidth="0.6" />
          ))}
        </g>

        {/* ═══════════════════════════════════════════
            PLATFORM — holographic wireframe hex
            (replaces the dark black-cube look)
        ═══════════════════════════════════════════ */}

        {/* Top face — barely visible fill, glass-like */}
        <polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="#38BDF8" fillOpacity="0.04"
        />
        {/* Second inner ring for depth */}
        <polygon
          points="280,192 388,252 388,342 280,402 172,342 172,252"
          fill="#38BDF8" fillOpacity="0.03"
        />

        {/* Side faces — very subtle, just enough to imply depth */}
        <polygon points="140,238 140,358 280,438 280,318" fill="#0A1E34" fillOpacity="0.35" />
        <polygon points="420,238 420,358 280,438 280,318" fill="#071828" fillOpacity="0.35" />

        {/* Glowing top-face edge */}
        <polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="none" stroke="#22D3EE" strokeWidth="1.5"
          filter="url(#fEdge)"
          strokeOpacity="0.7"
        />
        {/* Crisp edge on top */}
        <polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="none" stroke="#67E8F9" strokeWidth="0.8"
          strokeOpacity="0.5"
        />

        {/* Side edges */}
        <line x1="140" y1="238" x2="140" y2="358" stroke="#164E63" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="420" y1="238" x2="420" y2="358" stroke="#164E63" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="140" y1="358" x2="280" y2="438" stroke="#164E63" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="280" y1="438" x2="420" y2="358" stroke="#164E63" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="280" y1="318" x2="140" y2="238" stroke="#1E4A6E" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="280" y1="318" x2="420" y2="238" stroke="#1E4A6E" strokeWidth="0.5" strokeOpacity="0.3" />
        <line x1="280" y1="318" x2="280" y2="438" stroke="#1E4A6E" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Inner hex ring */}
        <polygon
          points="280,192 388,252 388,342 280,402 172,342 172,252"
          fill="none" stroke="#22D3EE" strokeWidth="0.6" strokeOpacity="0.2"
        />

        {/* Vertex nodes — glowing dots at each corner */}
        {HEX_VERTS.map(([vx, vy], i) => (
          <motion.circle
            key={i} cx={vx} cy={vy} r="4"
            fill="#22D3EE" filter="url(#fBlue)"
            animate={{ opacity: [0.5, 1, 0.5], r: [3, 5, 3] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Pulse glow on platform edge */}
        <motion.polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="none" stroke="#22D3EE" strokeWidth="2"
          strokeOpacity="0"
          animate={{ strokeOpacity: [0.04, 0.25, 0.04] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ═══════════════════════════════════════════
            PIPING MODULE
            Solid-layer shading (no gradient ref) so body is always visible.
            Render order: far-cap → body layers → near-cap
        ═══════════════════════════════════════════ */}

        {/* ── HORIZONTAL MAIN PIPE  cy=344  r=22 ── */}

        {/* Far (right) end-cap — behind body */}
        <ellipse cx="266" cy="344" rx="11" ry="22" fill="#012840" />

        {/* Body: stacked solid rects = cylindrical shading */}
        {/* base */}
        <rect x="78"  y="322" width="188" height="44" fill="#0284C7" />
        {/* mid-bright */}
        <rect x="78"  y="322" width="188" height="30" fill="#38BDF8" />
        {/* upper bright */}
        <rect x="78"  y="322" width="188" height="14" fill="#7DD3FC" />
        {/* specular top strip */}
        <rect x="78"  y="322" width="188" height="5"  fill="#C8EEFF" />
        {/* lower shadow */}
        <rect x="78"  y="354" width="188" height="12" fill="#0369A1" />
        {/* darkest bottom edge */}
        <rect x="78"  y="360" width="188" height="6"  fill="#013F63" />
        {/* subtle stroke outline */}
        <rect x="78"  y="322" width="188" height="44"
          fill="none" stroke="#0EA5E9" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Flange ring */}
        <ellipse cx="148" cy="344" rx="7" ry="22"
          fill="none" stroke="#38BDF8" strokeWidth="3" strokeOpacity="0.9" />

        {/* T-collar at junction */}
        <ellipse cx="190" cy="344" rx="26" ry="10"
          fill="#0EA5E9" fillOpacity="0.55" />
        <ellipse cx="190" cy="344" rx="26" ry="10"
          fill="none" stroke="#38BDF8" strokeWidth="2" strokeOpacity="1" />

        {/* Near (left) end-cap — in front of body */}
        <ellipse cx="78"  cy="344" rx="11"  ry="22" fill="#7DD3FC" />
        <ellipse cx="78"  cy="344" rx="6"   ry="13" fill="#012030" />

        {/* ── VERTICAL RISER PIPE  cx=190  r=16 ── */}

        {/* Far (bottom) end-cap — behind body */}
        <ellipse cx="190" cy="344" rx="16" ry="6.5" fill="#012840" />

        {/* Body: stacked solid rects left-to-right = cylindrical shading */}
        {/* base */}
        <rect x="174" y="266" width="32" height="78" fill="#0284C7" />
        {/* right-of-center darker */}
        <rect x="187" y="266" width="19" height="78" fill="#0369A1" />
        {/* rightmost shadow */}
        <rect x="198" y="266" width="8"  height="78" fill="#013F63" />
        {/* left bright zone */}
        <rect x="174" y="266" width="14" height="78" fill="#38BDF8" />
        {/* specular left strip */}
        <rect x="174" y="266" width="5"  height="78" fill="#BAE6FD" />

        {/* Near (top) end-cap — in front of body */}
        <ellipse cx="190" cy="266" rx="16" ry="6.5" fill="#7DD3FC" />
        <ellipse cx="190" cy="266" rx="10" ry="4"   fill="#012030" />

        {/* Valve body */}
        <rect x="175" y="296" width="30" height="30" rx="6"
          fill="#0B3350" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.8" />
        {/* Valve wheel */}
        <g filter="url(#fSoft)">
          <circle cx="190" cy="294" r="18"
            fill="none" stroke="#38BDF8" strokeWidth="3" />
          <line x1="190" y1="276" x2="190" y2="312"
            stroke="#38BDF8" strokeWidth="3" />
          <line x1="172" y1="294" x2="208" y2="294"
            stroke="#38BDF8" strokeWidth="3" />
          <circle cx="190" cy="294" r="6"
            fill="#38BDF8" fillOpacity="0.5" />
        </g>
        <motion.circle cx="190" cy="294" r="18"
          fill="none" stroke="#7DD3FC" strokeWidth="1.5"
          animate={{ r: [18, 32, 18], opacity: [0.55, 0, 0.55] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* Flow particles — horizontal */}
        {[0, 1, 2].map(i => (
          <motion.circle key={i} r="4" fill="#BAE6FD" filter="url(#fBlue)"
            animate={{ cx: [88, 260, 88], cy: [344, 344, 344], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: i * 0.66, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* Flow particles — vertical */}
        {[0, 1].map(i => (
          <motion.circle key={i} r="3" fill="#BAE6FD" filter="url(#fBlue)"
            animate={{ cx: [190, 190], cy: [274, 338, 274], opacity: [0, 0.9, 0] }}
            transition={{ duration: 1.6, delay: i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Pipe label */}
        <g filter="url(#fSoft)">
          <rect x="80" y="392" width="74" height="20" rx="10"
            fill="#0EA5E9" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="117" y="406" textAnchor="middle" fill="#7DD3FC"
            fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="1.5">PIPING</text>
        </g>

        {/* ═══════════════════════════════════════════
            SOLAR MODULE — kept as-is (user approved)
        ═══════════════════════════════════════════ */}

        {/* Mounting poles */}
        <rect x="172" y="180" width="7" height="54" rx="2.5" fill="#334155" />
        <rect x="224" y="170" width="7" height="48" rx="2.5" fill="#334155" />

        {/* Panel A */}
        <g transform="translate(102, 74) rotate(-14, 75, 48)">
          <rect width="150" height="94" rx="5" fill="#374151" stroke="#4B5563" strokeWidth="1.5" />
          <rect x="5" y="5" width="140" height="84" rx="3" fill="#1E3A8A" />
          {PANEL_CELLS.map(({ x, y }) => (
            <g key={`${x}-${y}`}>
              <rect x={x} y={y} width="33" height="25" rx="2" fill="url(#gCell)" stroke="#3B82F6" strokeWidth="0.5" strokeOpacity="0.45" />
              <line x1={x + 2} y1={y + 12} x2={x + 31} y2={y + 12} stroke="#60A5FA" strokeWidth="0.7" strokeOpacity="0.55" />
              {[4, 9, 14, 19, 24, 29].map(fx => (
                <line key={fx} x1={x + fx} y1={y + 2} x2={x + fx} y2={y + 23} stroke="#93C5FD" strokeWidth="0.3" strokeOpacity="0.3" />
              ))}
            </g>
          ))}
          <motion.rect width="150" height="94" rx="5" fill="white" fillOpacity="0"
            animate={{ fillOpacity: [0, 0.07, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* Panel B */}
        <g transform="translate(52, 100) rotate(-14, 75, 48)">
          <rect width="150" height="94" rx="5" fill="#2D3748" stroke="#374151" strokeWidth="1.5" opacity="0.85" />
          <rect x="5" y="5" width="140" height="84" rx="3" fill="#1a2f6e" />
          {PANEL_CELLS.map(({ x, y }) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="33" height="25" rx="2"
              fill="#1D3461" stroke="#2563EB" strokeWidth="0.4" strokeOpacity="0.35" opacity="0.8"
            />
          ))}
          <motion.rect width="150" height="94" rx="5" fill="white" fillOpacity="0"
            animate={{ fillOpacity: [0.06, 0, 0.06] }}
            transition={{ duration: 3.2, delay: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>

        {/* Sun */}
        <motion.circle cx="332" cy="72" r="28" fill="url(#gSun)" filter="url(#fHalo)"
          animate={{ r: [28, 32, 28] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="332" cy="72" r="17" fill="#FEF9C3" fillOpacity="0.65" />
        <circle cx="332" cy="72" r="9"  fill="white"   fillOpacity="0.9" />

        {SUN_RAYS.map((r, i) => (
          <motion.line key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round"
            filter="url(#fYellow)"
            animate={{ opacity: [0.3, 1, 0.3], strokeWidth: [1.5, 3, 1.5] }}
            transition={{ duration: 2.2, delay: i * 0.12, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        <motion.line x1="316" y1="88" x2="262" y2="124"
          stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"
          filter="url(#fYellow)" strokeDasharray="5 4"
          animate={{ strokeDashoffset: [0, -18], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
        />

        {/* Solar label */}
        <g filter="url(#fSoft)">
          <rect x="114" y="222" width="98" height="20" rx="10" fill="#F59E0B" fillOpacity="0.12" stroke="#FDE047" strokeWidth="0.8" strokeOpacity="0.45" />
          <text x="163" y="236" textAnchor="middle" fill="#FDE047" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="1.2">SOLAR ENERGY</text>
        </g>

        {/* ═══════════════════════════════════════════
            IT / SERVER MODULE — kept as-is (user approved)
        ═══════════════════════════════════════════ */}

        <rect x="366" y="124" width="130" height="178" rx="6" fill="url(#gRack)" stroke="#334155" strokeWidth="1.5" />
        <line x1="372" y1="124" x2="372" y2="302" stroke="#1E293B" strokeWidth="3" />
        <line x1="490" y1="124" x2="490" y2="302" stroke="#1E293B" strokeWidth="3" />

        {[0, 1, 2, 3, 4].map(u => {
          const uy = 132 + u * 32
          return (
            <g key={u}>
              <rect x="376" y={uy} width="108" height="26" rx="3" fill="url(#gUnit)" stroke="#263347" strokeWidth="0.8" />
              {[0, 1, 2, 3, 4].map(b => (
                <rect key={b} x={380 + b * 17} y={uy + 6} width="13" height="14" rx="2" fill="#0C1624" stroke="#2D3D52" strokeWidth="0.6" />
              ))}
              <motion.circle cx="469" cy={uy + 9} r="2.5" fill="#22C55E"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 0.9 + u * 0.18, delay: u * 0.12, repeat: Infinity }}
              />
              <motion.circle cx="476" cy={uy + 9} r="2.5" fill="#3B82F6"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.75, delay: u * 0.1 + 0.35, repeat: Infinity }}
              />
              <circle cx="483" cy={uy + 17} r="3.5" fill="#0C1624" stroke="#334155" strokeWidth="0.8" />
              <circle cx="483" cy={uy + 17} r="1.5" fill="#475569" />
              <rect x="486" y={uy + 8} width="7" height="5" rx="1" fill="#0EA5E9" fillOpacity="0.35" stroke="#0EA5E9" strokeWidth="0.4" strokeOpacity="0.5" />
            </g>
          )
        })}

        <rect x="376" y="296" width="108" height="8" rx="2" fill="#111827" stroke="#1F2937" strokeWidth="0.8" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map(p => (
          <circle key={p} cx={381 + p * 12} cy="300" r="3" fill="#0C1624" stroke="#0EA5E9" strokeWidth="0.6" strokeOpacity="0.55" />
        ))}
        <motion.rect x="366" y="124" width="130" height="178" rx="6"
          fill="#7B61FF" fillOpacity="0" filter="url(#fPurple)"
          animate={{ fillOpacity: [0.03, 0.11, 0.03] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <line x1="431" y1="124" x2="431" y2="94" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.7" />
        <motion.circle cx="431" cy="92" r="4" fill="#A78BFA" filter="url(#fPurple)"
          animate={{ r: [4, 7, 4], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {[1, 2, 3].map(i => (
          <motion.circle key={i} cx="431" cy="92" r={4}
            fill="none" stroke="#A78BFA" strokeWidth="1"
            animate={{ r: [4, 4 + i * 10], opacity: [0.7, 0] }}
            transition={{ duration: 1.6, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        <g filter="url(#fSoft)">
          <rect x="368" y="310" width="128" height="20" rx="10" fill="#7B61FF" fillOpacity="0.12" stroke="#A78BFA" strokeWidth="0.8" strokeOpacity="0.45" />
          <text x="432" y="324" textAnchor="middle" fill="#C4B5FD" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="1.2">IT SOLUTIONS</text>
        </g>

        {/* ═══════════════════════════════════════════
            CENTER HUB
        ═══════════════════════════════════════════ */}
        <motion.circle cx="280" cy="258" r="44"
          fill="none" stroke="#22D3EE" strokeWidth="1"
          animate={{ r: [44, 60, 44], opacity: [0.14, 0, 0.14] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        />
        <circle cx="280" cy="258" r="32" fill="#071828" stroke="#0EA5E9" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="280" cy="258" r="32" fill="url(#gHub)" fillOpacity="0.22" />
        <motion.circle cx="280" cy="258" r="22"
          fill="none" stroke="#22D3EE" strokeWidth="1"
          strokeDasharray="4 6" strokeOpacity="0.5"
          animate={{ rotate: 360 }}
          style={{ originX: '280px', originY: '258px' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <g filter="url(#fBlue)">
          <circle cx="280" cy="253" r="4" fill="white" fillOpacity="0.9" />
          <circle cx="271" cy="265" r="3" fill="#38BDF8" />
          <circle cx="289" cy="265" r="3" fill="#FDE047" />
          <line x1="280" y1="257" x2="271" y2="262" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="280" y1="257" x2="289" y2="262" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="271" y1="265" x2="289" y2="265" stroke="white" strokeWidth="1" strokeOpacity="0.35" />
        </g>

        {/* ═══════════════════════════════════════════
            DATA FLOWS
        ═══════════════════════════════════════════ */}
        <motion.path d="M 252 268 C 232 278 210 292 188 310"
          stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4" fill="none" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1].map(i => (
          <motion.circle key={i} r="3.5" fill="#38BDF8" filter="url(#fBlue)"
            animate={{ cx: [252, 188], cy: [268, 310], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <motion.path d="M 264 228 C 252 206 242 180 230 162"
          stroke="#FDE047" strokeWidth="1.2" strokeOpacity="0.4" fill="none" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1].map(i => (
          <motion.circle key={i} r="3.5" fill="#FDE047" filter="url(#fYellow)"
            animate={{ cx: [264, 230], cy: [228, 162], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7 + 0.35, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <motion.path d="M 308 248 C 330 236 350 226 366 218"
          stroke="#A78BFA" strokeWidth="1.2" strokeOpacity="0.4" fill="none" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1].map(i => (
          <motion.circle key={i} r="3.5" fill="#A78BFA" filter="url(#fPurple)"
            animate={{ cx: [308, 366], cy: [248, 218], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7 + 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* ═══════════════════════════════════════════
            FLOATING STAT CARDS
        ═══════════════════════════════════════════ */}
        <motion.g filter="url(#fCard)"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="36" y="246" width="90" height="50" rx="10" fill="#0A1E34" stroke="#1E4A6E" strokeWidth="1" />
          <rect x="46" y="256" width="20" height="20" rx="5" fill="#0EA5E9" fillOpacity="0.2" />
          <text x="56" y="270" textAnchor="middle" fill="#38BDF8" fontSize="11">💧</text>
          <text x="76" y="268" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">98%</text>
          <text x="76" y="284" fill="#64748B" fontSize="7.5" fontFamily="system-ui">Flow Rate</text>
        </motion.g>

        <motion.g filter="url(#fCard)"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 4.5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="360" y="46" width="98" height="50" rx="10" fill="#0A1E34" stroke="#2A1E08" strokeWidth="1" />
          <rect x="370" y="56" width="20" height="20" rx="5" fill="#F59E0B" fillOpacity="0.2" />
          <text x="380" y="70" textAnchor="middle" fill="#FDE047" fontSize="11">☀</text>
          <text x="402" y="68" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">4.2 kW</text>
          <text x="402" y="84" fill="#64748B" fontSize="7.5" fontFamily="system-ui">Solar Output</text>
        </motion.g>

        <motion.g filter="url(#fCard)"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="458" y="278" width="90" height="50" rx="10" fill="#0A1E34" stroke="#1E1060" strokeWidth="1" />
          <text x="466" y="296" fill="#A78BFA" fontSize="8" fontFamily="system-ui">■ System</text>
          <rect x="466" y="302" width="62" height="5" rx="2.5" fill="#0D0B24" />
          <motion.rect x="466" y="302" height="5" rx="2.5" fill="#7C3AED"
            animate={{ width: [0, 55, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="466" y="318" fill="#475569" fontSize="7" fontFamily="system-ui">99.9% uptime</text>
        </motion.g>

        {/* ── AMBIENT PARTICLES ── */}
        {[
          { cx: 348, cy: 134, c: '#FDE047', d: 0 },
          { cx: 150, cy: 194, c: '#38BDF8', d: 0.8 },
          { cx: 506, cy: 182, c: '#A78BFA', d: 1.4 },
          { cx: 84,  cy: 314, c: '#38BDF8', d: 0.4 },
          { cx: 518, cy: 328, c: '#A78BFA', d: 2 },
          { cx: 390, cy: 398, c: '#FDE047', d: 2.3 },
          { cx: 164, cy: 410, c: '#38BDF8', d: 1 },
          { cx: 286, cy: 454, c: '#A78BFA', d: 1.7 },
          { cx: 492, cy: 130, c: '#FDE047', d: 0.6 },
          { cx: 58,  cy: 198, c: '#A78BFA', d: 1.9 },
        ].map((p, i) => (
          <motion.circle key={i} cx={p.cx} cy={p.cy} r="2.5" fill={p.c}
            animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1.3, 0.4] }}
            transition={{ duration: 2.8, delay: p.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </div>
  )
}
