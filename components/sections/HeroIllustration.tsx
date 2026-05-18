'use client'

import { motion } from 'framer-motion'

const SUN_RAYS = Array.from({ length: 12 }, (_, i) => {
  const a = (i * 30 * Math.PI) / 180
  return {
    x1: +(270 + Math.cos(a) * 36).toFixed(3),
    y1: +(62 + Math.sin(a) * 36).toFixed(3),
    x2: +(270 + Math.cos(a) * 52).toFixed(3),
    y2: +(62 + Math.sin(a) * 52).toFixed(3),
  }
})

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
        <defs>
          {/* Glow filters */}
          <filter id="fBlue" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="9" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fYellow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="11" result="b" />
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
          <filter id="fHalo" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="20" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="fCard" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.4" />
          </filter>

          {/* Gradients */}
          <radialGradient id="gAtmos" cx="50%" cy="55%" r="50%">
            <stop offset="0%" stopColor="#0E2A4A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#060D14" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gSun" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF9C4" />
            <stop offset="25%" stopColor="#FBBF24" />
            <stop offset="65%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gBluePt" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gPurplePt" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="gYellowPt" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FDE047" stopOpacity="0" />
          </radialGradient>

          {/* Platform faces */}
          <linearGradient id="platTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F2640" />
            <stop offset="100%" stopColor="#0B1E33" />
          </linearGradient>
          <linearGradient id="platLeft" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#071525" />
            <stop offset="100%" stopColor="#091C30" />
          </linearGradient>
          <linearGradient id="platRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0A1828" />
            <stop offset="100%" stopColor="#071220" />
          </linearGradient>

          {/* Pipe */}
          <linearGradient id="gPipeTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="gPipeSide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#01558A" />
          </linearGradient>

          {/* Server */}
          <linearGradient id="gSrvTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#3B2FA0" />
          </linearGradient>
          <linearGradient id="gSrvL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E1A5E" />
            <stop offset="100%" stopColor="#251D72" />
          </linearGradient>
          <linearGradient id="gSrvR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1A164E" />
            <stop offset="100%" stopColor="#211960" />
          </linearGradient>

          {/* Solar panel face */}
          <linearGradient id="gPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1D3461" />
            <stop offset="100%" stopColor="#152748" />
          </linearGradient>

          {/* Hub */}
          <radialGradient id="gHub" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="60%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#0E4F6A" />
          </radialGradient>
        </defs>

        {/* ── ATMOSPHERE ── */}
        <ellipse cx="280" cy="270" rx="260" ry="220" fill="url(#gAtmos)" />

        {/* Colored aura spots — no grid lines, just light */}
        <ellipse cx="160" cy="320" rx="120" ry="80" fill="url(#gBluePt)" />
        <ellipse cx="430" cy="220" rx="110" ry="90" fill="url(#gPurplePt)" />
        <ellipse cx="270" cy="80" rx="100" ry="70" fill="url(#gYellowPt)" />

        {/* ── ISOMETRIC PLATFORM (clean, no grid) ── */}
        {/* Top hex face */}
        <polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="url(#platTop)"
        />
        {/* Edge highlight top */}
        <polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="none"
          stroke="#1E5080"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />
        {/* Subtle inner hex ring for depth */}
        <polygon
          points="280,190 390,250 390,340 280,400 170,340 170,250"
          fill="none"
          stroke="#1E4A6E"
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />
        {/* Left face */}
        <polygon points="140,238 140,358 280,438 280,318" fill="url(#platLeft)" />
        <line x1="140" y1="238" x2="140" y2="358" stroke="#0D2840" strokeWidth="1" strokeOpacity="0.8" />
        {/* Right face */}
        <polygon points="420,238 420,358 280,438 280,318" fill="url(#platRight)" />
        <line x1="420" y1="238" x2="420" y2="358" stroke="#0A1E30" strokeWidth="1" strokeOpacity="0.8" />
        {/* Bottom edge */}
        <line x1="140" y1="358" x2="280" y2="438" stroke="#0B1E2E" strokeWidth="1" strokeOpacity="0.6" />
        <line x1="280" y1="438" x2="420" y2="358" stroke="#0B1E2E" strokeWidth="1" strokeOpacity="0.6" />

        {/* Subtle glow rim on platform top */}
        <motion.polygon
          points="280,158 420,238 420,358 280,438 140,358 140,238"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeOpacity="0"
          animate={{ strokeOpacity: [0.05, 0.22, 0.05] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── PIPES MODULE ── bottom-left ── */}

        {/* Horizontal pipe — top face */}
        <polygon points="112,345 210,290 222,297 124,352" fill="url(#gPipeTop)" opacity="0.85" />
        {/* Horizontal pipe — front */}
        <polygon points="112,345 124,352 124,366 112,359" fill="url(#gPipeSide)" />
        <polygon points="124,352 222,297 222,311 124,366" fill="url(#gPipeSide)" opacity="0.8" />

        {/* Vertical riser pipe */}
        <polygon points="148,248 160,241 160,290 148,297" fill="url(#gPipeTop)" opacity="0.8" />
        <polygon points="148,248 160,241 172,248 160,255" fill="#7DD3FC" opacity="0.7" />
        <polygon points="160,255 172,248 172,297 160,304" fill="url(#gPipeSide)" opacity="0.7" />

        {/* Elbow connector */}
        <polygon points="148,290 172,277 222,307 198,320" fill="url(#gPipeTop)" opacity="0.75" />
        <polygon points="148,290 198,320 198,334 148,304" fill="url(#gPipeSide)" opacity="0.7" />

        {/* Valve */}
        <g filter="url(#fSoft)">
          <ellipse cx="155" cy="268" rx="13" ry="7" fill="none" stroke="#38BDF8" strokeWidth="2.5" />
          <line x1="142" y1="268" x2="168" y2="268" stroke="#38BDF8" strokeWidth="2" />
          <line x1="155" y1="261" x2="155" y2="275" stroke="#38BDF8" strokeWidth="2" />
        </g>
        <motion.ellipse
          cx="155" cy="268" rx="13" ry="7"
          fill="none" stroke="#7DD3FC" strokeWidth="1"
          animate={{ rx: [13, 22, 13], ry: [7, 12, 7], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />

        {/* Pipe flange rings */}
        {[[190, 312], [208, 302]].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="6" ry="3.5" fill="none" stroke="#38BDF8" strokeWidth="1.8" opacity="0.65" />
        ))}

        {/* Water flow particles */}
        {[0, 1, 2].map(i => (
          <motion.circle
            key={i}
            r="3.5"
            fill="#7DD3FC"
            filter="url(#fBlue)"
            animate={{
              cx: [118, 215, 118],
              cy: [348, 294, 348],
              opacity: [0, 0.9, 0],
            }}
            transition={{ duration: 1.8, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Pipe label */}
        <g filter="url(#fSoft)">
          <rect x="96" y="374" width="72" height="20" rx="10" fill="#0EA5E9" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x="132" y="388" textAnchor="middle" fill="#7DD3FC" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="1.5">PIPING</text>
        </g>

        {/* ── SOLAR MODULE ── top-left ── */}

        {/* Mast */}
        <polygon points="188,162 194,158 194,228 188,232" fill="#1A3A60" />
        <polygon points="194,158 200,162 200,232 194,228" fill="#112A48" />

        {/* Panel A — main */}
        <polygon points="144,142 230,96 248,106 162,152" fill="url(#gPanel)" stroke="#1E4A80" strokeWidth="0.8" />
        {/* Cell highlights — subtle, not full grid */}
        <line x1="178" y1="117" x2="170" y2="149" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="198" y1="107" x2="190" y2="146" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="218" y1="108" x2="210" y2="144" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="147" y1="130" x2="244" y2="113" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="148" y1="140" x2="244" y2="123" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.3" />
        {/* Shine */}
        <motion.polygon
          points="144,142 230,96 248,106 162,152"
          fill="white" fillOpacity="0"
          animate={{ fillOpacity: [0, 0.08, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Panel side */}
        <polygon points="144,142 162,152 162,162 144,152" fill="#0F2442" />

        {/* Panel B — offset */}
        <g transform="translate(52,14)">
          <polygon points="144,142 230,96 248,106 162,152" fill="url(#gPanel)" stroke="#1A3F6A" strokeWidth="0.8" opacity="0.85" />
          <line x1="178" y1="117" x2="170" y2="149" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.35" />
          <line x1="198" y1="107" x2="190" y2="146" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.35" />
          <line x1="218" y1="108" x2="210" y2="144" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.35" />
          <line x1="147" y1="130" x2="244" y2="113" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.25" />
          <line x1="148" y1="140" x2="244" y2="123" stroke="#2563EB" strokeWidth="0.7" strokeOpacity="0.25" />
          <motion.polygon
            points="144,142 230,96 248,106 162,152"
            fill="white" fillOpacity="0"
            animate={{ fillOpacity: [0.07, 0, 0.07] }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <polygon points="144,142 162,152 162,162 144,152" fill="#0F2442" opacity="0.8" />
        </g>

        {/* Sun */}
        <motion.circle
          cx="270" cy="62" r="30"
          fill="url(#gSun)"
          filter="url(#fHalo)"
          animate={{ r: [30, 34, 30] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="270" cy="62" r="18" fill="#FEF9C3" fillOpacity="0.7" />
        <circle cx="270" cy="62" r="10" fill="white" fillOpacity="0.9" />

        {/* Rays */}
        {SUN_RAYS.map((r, i) => (
          <motion.line
            key={i}
            x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
            stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round"
            filter="url(#fYellow)"
            animate={{ opacity: [0.3, 1, 0.3], strokeWidth: [1.5, 3, 1.5] }}
            transition={{ duration: 2.2, delay: i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Energy beam to panel */}
        <motion.line
          x1="257" y1="80" x2="218" y2="118"
          stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"
          filter="url(#fYellow)"
          strokeDasharray="5 4"
          animate={{ strokeDashoffset: [0, -18], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
        />

        {/* Solar label */}
        <g filter="url(#fSoft)">
          <rect x="124" y="194" width="96" height="20" rx="10" fill="#F59E0B" fillOpacity="0.12" stroke="#FDE047" strokeWidth="0.8" strokeOpacity="0.45" />
          <text x="172" y="208" textAnchor="middle" fill="#FDE047" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="1.2">SOLAR ENERGY</text>
        </g>

        {/* ── IT SERVER MODULE ── right ── */}

        {[0, 1, 2, 3].map(lvl => {
          const by = 200 - lvl * 40
          return (
            <g key={lvl}>
              {/* Top face */}
              <polygon
                points={`365,${by} 440,${by - 43} 468,${by - 27} 393,${by + 16}`}
                fill="url(#gSrvTop)"
                stroke="#6D28D9"
                strokeWidth="0.7"
                strokeOpacity="0.5"
              />
              {/* Left face */}
              <polygon
                points={`365,${by} 393,${by + 16} 393,${by + 36} 365,${by + 20}`}
                fill="url(#gSrvL)"
                stroke="#4C1D95"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              {/* Right face */}
              <polygon
                points={`393,${by + 16} 468,${by - 27} 468,${by - 7} 393,${by + 36}`}
                fill="url(#gSrvR)"
                stroke="#3B1583"
                strokeWidth="0.5"
                strokeOpacity="0.4"
              />
              {/* LEDs */}
              {[0, 1, 2, 3].map(j => (
                <motion.circle
                  key={j}
                  cx={376 + j * 7} cy={by + 4 + j * 1.5}
                  r="2.2"
                  fill={j % 3 === 0 ? '#A78BFA' : j % 3 === 1 ? '#38BDF8' : '#34D399'}
                  filter="url(#fPurple)"
                  animate={{ opacity: [1, 0.15, 1] }}
                  transition={{ duration: 0.9 + j * 0.25, delay: lvl * 0.18 + j * 0.09, repeat: Infinity }}
                />
              ))}
            </g>
          )
        })}

        {/* Server ambient glow */}
        <motion.ellipse
          cx="415" cy="210" rx="70" ry="35"
          fill="#7B61FF"
          filter="url(#fPurple)"
          animate={{ fillOpacity: [0.06, 0.18, 0.06] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Antenna */}
        <line x1="440" y1="68" x2="440" y2="36" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.7" />
        <motion.circle
          cx="440" cy="34" r="4"
          fill="#A78BFA" filter="url(#fPurple)"
          animate={{ r: [4, 7, 4], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        {[1, 2, 3].map(i => (
          <motion.circle
            key={i} cx="440" cy="34" r={4}
            fill="none" stroke="#A78BFA" strokeWidth="1"
            animate={{ r: [4, 4 + i * 10], opacity: [0.7, 0] }}
            transition={{ duration: 1.6, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* IT label */}
        <g filter="url(#fSoft)">
          <rect x="358" y="230" width="96" height="20" rx="10" fill="#7B61FF" fillOpacity="0.12" stroke="#A78BFA" strokeWidth="0.8" strokeOpacity="0.45" />
          <text x="406" y="244" textAnchor="middle" fill="#C4B5FD" fontSize="8.5" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="1.2">IT SOLUTIONS</text>
        </g>

        {/* ── CENTER HUB ── */}

        {/* Hub outer pulse */}
        <motion.circle
          cx="280" cy="248" r="44"
          fill="none" stroke="#22D3EE" strokeWidth="1"
          animate={{ r: [44, 58, 44], opacity: [0.15, 0, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
        />
        {/* Hub body */}
        <circle cx="280" cy="248" r="32" fill="#071828" stroke="#0EA5E9" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="280" cy="248" r="32" fill="url(#gHub)" fillOpacity="0.25" />

        {/* Spinning ring */}
        <motion.circle
          cx="280" cy="248" r="22"
          fill="none" stroke="#22D3EE" strokeWidth="1"
          strokeDasharray="4 6" strokeOpacity="0.5"
          animate={{ rotate: 360 }}
          style={{ originX: '280px', originY: '248px' }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Hub icon */}
        <g filter="url(#fBlue)">
          <circle cx="280" cy="243" r="4" fill="white" fillOpacity="0.9" />
          <circle cx="271" cy="255" r="3" fill="#38BDF8" />
          <circle cx="289" cy="255" r="3" fill="#FDE047" />
          <line x1="280" y1="247" x2="271" y2="252" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="280" y1="247" x2="289" y2="252" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="271" y1="255" x2="289" y2="255" stroke="white" strokeWidth="1" strokeOpacity="0.35" />
        </g>

        {/* ── ANIMATED DATA FLOWS (hub ↔ modules) ── */}

        {/* → Pipe */}
        <motion.path
          d="M 252 260 C 230 270 210 278 185 295"
          stroke="#38BDF8" strokeWidth="1.2" strokeOpacity="0.4"
          fill="none" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1].map(i => (
          <motion.circle key={i} r="3.5" fill="#38BDF8" filter="url(#fBlue)"
            animate={{ cx: [252, 185], cy: [260, 295], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* → Solar */}
        <motion.path
          d="M 265 220 C 252 195 240 168 228 148"
          stroke="#FDE047" strokeWidth="1.2" strokeOpacity="0.4"
          fill="none" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1].map(i => (
          <motion.circle key={i} r="3.5" fill="#FDE047" filter="url(#fYellow)"
            animate={{ cx: [265, 228], cy: [220, 148], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7 + 0.35, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* → IT */}
        <motion.path
          d="M 308 238 C 330 226 348 218 365 212"
          stroke="#A78BFA" strokeWidth="1.2" strokeOpacity="0.4"
          fill="none" strokeDasharray="5 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1].map(i => (
          <motion.circle key={i} r="3.5" fill="#A78BFA" filter="url(#fPurple)"
            animate={{ cx: [308, 365], cy: [238, 212], opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, delay: i * 0.7 + 0.7, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* ── FLOATING STAT CARDS ── */}

        {/* Flow Rate — left */}
        <motion.g
          filter="url(#fCard)"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="42" y="240" width="88" height="48" rx="10" fill="#0A1E34" stroke="#1E4A6E" strokeWidth="1" />
          <rect x="52" y="250" width="20" height="20" rx="5" fill="#0EA5E9" fillOpacity="0.2" />
          <text x="62" y="264" textAnchor="middle" fill="#38BDF8" fontSize="11">💧</text>
          <text x="82" y="260" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">98%</text>
          <text x="82" y="276" fill="#64748B" fontSize="7.5" fontFamily="system-ui">Flow Rate</text>
        </motion.g>

        {/* Solar Output — top right */}
        <motion.g
          filter="url(#fCard)"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 4.5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="360" y="50" width="96" height="48" rx="10" fill="#0A1E34" stroke="#2A1E08" strokeWidth="1" />
          <rect x="370" y="60" width="20" height="20" rx="5" fill="#F59E0B" fillOpacity="0.2" />
          <text x="380" y="74" textAnchor="middle" fill="#FDE047" fontSize="11">☀</text>
          <text x="402" y="70" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">4.2 kW</text>
          <text x="402" y="86" fill="#64748B" fontSize="7.5" fontFamily="system-ui">Solar Output</text>
        </motion.g>

        {/* System uptime — bottom right */}
        <motion.g
          filter="url(#fCard)"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="454" y="272" width="94" height="48" rx="10" fill="#0A1E34" stroke="#1E1060" strokeWidth="1" />
          <text x="464" y="290" fill="#A78BFA" fontSize="8" fontFamily="system-ui">■ System</text>
          <rect x="464" y="296" width="64" height="5" rx="2.5" fill="#160D40" />
          <motion.rect
            x="464" y="296" height="5" rx="2.5" fill="#7C3AED"
            animate={{ width: [0, 57, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <text x="464" y="312" fill="#475569" fontSize="7" fontFamily="system-ui">99.9% uptime</text>
        </motion.g>

        {/* ── AMBIENT PARTICLES ── */}
        {[
          { cx: 340, cy: 138, c: '#FDE047', d: 0 },
          { cx: 156, cy: 192, c: '#38BDF8', d: 0.8 },
          { cx: 490, cy: 182, c: '#A78BFA', d: 1.4 },
          { cx: 96, cy: 308, c: '#38BDF8', d: 0.4 },
          { cx: 512, cy: 316, c: '#A78BFA', d: 2 },
          { cx: 380, cy: 390, c: '#FDE047', d: 2.3 },
          { cx: 170, cy: 400, c: '#38BDF8', d: 1 },
          { cx: 290, cy: 445, c: '#A78BFA', d: 1.7 },
          { cx: 480, cy: 130, c: '#FDE047', d: 0.6 },
          { cx: 70, cy: 190, c: '#A78BFA', d: 1.9 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.cx} cy={p.cy} r="2.5"
            fill={p.c}
            animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1.3, 0.4] }}
            transition={{ duration: 2.8, delay: p.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
    </div>
  )
}
