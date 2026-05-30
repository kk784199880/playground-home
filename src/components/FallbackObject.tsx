import { type FC } from 'react';

type FallbackType = 'basketball' | 'chair' | 'watermelon' | 'controller';

interface Props { type: FallbackType; className?: string }

/* ═══════════════════════════════════════════════════════════
   BASKETBALL — volumetric 3D sphere
   ═══════════════════════════════════════════════════════════ */
const Basketball = () => (
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 8px 32px rgba(249,115,22,0.3))' }}>
    <defs>
      <radialGradient id="bbSphere" cx="0.35" cy="0.3" r="0.65">
        <stop offset="0%" stopColor="#fff7ed"/>
        <stop offset="8%" stopColor="#fed7aa"/>
        <stop offset="25%" stopColor="#fb923c"/>
        <stop offset="55%" stopColor="#ea580c"/>
        <stop offset="80%" stopColor="#c2410c"/>
        <stop offset="100%" stopColor="#7c2d12"/>
      </radialGradient>
      <radialGradient id="bbCore" cx="0.65" cy="0.75" r="0.4">
        <stop offset="0%" stopColor="#1a0a00" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#1a0a00" stopOpacity="0"/>
      </radialGradient>
    </defs>
    <ellipse cx="80" cy="148" rx="55" ry="8" fill="#000" opacity="0.18" />
    <ellipse cx="80" cy="146" rx="35" ry="4" fill="#000" opacity="0.1" />
    <circle cx="80" cy="78" r="60" fill="url(#bbSphere)" />
    <circle cx="80" cy="78" r="60" fill="url(#bbCore)" />
    <ellipse cx="55" cy="48" rx="16" ry="10" fill="white" opacity="0.25" transform="rotate(-20 55 48)" />
    <ellipse cx="52" cy="42" rx="6" ry="3.5" fill="white" opacity="0.35" transform="rotate(-15 52 42)" />
    <path d="M 25 115 A 60 60 0 0 0 50 136" stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="none" />
    <path d="M 80 18 Q 98 78 80 138" stroke="#1a0a00" strokeWidth="2.2" fill="none" opacity="0.22" />
    <path d="M 20 78 Q 80 60 140 78" stroke="#1a0a00" strokeWidth="2" fill="none" opacity="0.18" />
    {[ [95,55,1],[105,65,1.2],[100,80,1],[110,50,.8],[115,75,1],[90,95,1.1],[105,90,.9] ].map(([cx,cy,r],i) => (
      <circle key={i} cx={cx} cy={cy} r={r} fill="#1a0a00" opacity={0.04 + Math.random() * 0.03} />
    ))}
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   CHAIR — 3/4 perspective molded shell chair
   Turned ~45° right. Visible: backrest front + right side,
   seat top surface + front face + right side, staggered legs
   with clear front/back depth separation.
   Sculptural glossy purple plastic shell.
   ═══════════════════════════════════════════════════════════ */
const Chair = () => (
  <svg viewBox="0 0 200 210" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 10px 32px rgba(168,85,247,0.30))' }}>
    <defs>
      <linearGradient id="chShellFront" x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#f5f0ff"/>
        <stop offset="20%" stopColor="#e0cfff"/>
        <stop offset="55%" stopColor="#c084fc"/>
        <stop offset="85%" stopColor="#9333ea"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
      <linearGradient id="chShellSide" x1="0" y1="0" x2="1" y2="0.2">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="50%" stopColor="#7c3aed"/>
        <stop offset="100%" stopColor="#4c1d95"/>
      </linearGradient>
      <linearGradient id="chSeatTop" x1="0" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#faf5ff"/>
        <stop offset="35%" stopColor="#e9d5ff"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
      <linearGradient id="chSeatFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d8b4fe"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
      <linearGradient id="chSeatSide" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#581c87"/>
      </linearGradient>
      <radialGradient id="chSeatDip" cx="0.45" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#6b21a8" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#6b21a8" stopOpacity="0"/>
      </radialGradient>
    </defs>

    {/* ground shadow — offset to match 3/4 perspective */}
    <ellipse cx="90" cy="203" rx="60" ry="6" fill="#000" opacity="0.14" />

    {/* ═══ BACK LEGS — deeper, smaller, behind seat ═══ */}
    {/* back-left leg (visible behind seat left) */}
    <polygon points="49,115 54,115 52,190 47,190" fill="#3b0764" opacity="0.5" />
    {/* back-right leg (mostly hidden behind front-right, smaller = further) */}
    <polygon points="112,113 116,113 114,186 110,186" fill="#2e1065" opacity="0.4" />

    {/* ═══ BACKREST SHELL — curved molded form ═══ */}
    {/* Backrest RIGHT SIDE face — the visible side plane proving 3/4 view */}
    <path d="
      M 106 22
      Q 120 28 118 44
      Q 114 62 112 78
      Q 110 92 106 104
      L 98 104
      Q 102 92 104 78
      Q 106 62 108 44
      Q 108 28 98 22
      Z
    " fill="url(#chShellSide)" />

    {/* Backrest FRONT face — the main visible surface, curved shell */}
    <path d="
      M 24 26
      Q 28 6 60 6
      Q 82 6 98 16
      Q 108 22 110 40
      Q 112 60 110 76
      Q 108 90 106 100
      Q 104 108 100 108
      L 28 106
      Q 22 100 26 86
      Q 30 70 28 54
      Q 26 40 24 26
      Z
    " fill="url(#chShellFront)" />

    {/* Backrest TOP RIM — glossy highlight curve */}
    <path d="M 24 26 Q 28 6 60 6 Q 82 6 98 16 Q 108 22 110 40"
      stroke="#faf5ff" strokeWidth="2.2" fill="none" />
    {/* Secondary rim highlight */}
    <path d="M 26 28 Q 30 10 60 10 Q 80 10 94 18"
      stroke="white" strokeWidth="0.8" fill="none" opacity="0.2" />

    {/* Backrest inner shadow — cupped recess */}
    <path d="
      M 34 36 Q 38 20 60 18 Q 78 18 90 26
      Q 96 32 98 44 Q 100 60 98 74
      Q 96 86 94 94 L 38 92
      Q 36 84 38 72 Q 40 58 38 46
      Q 36 38 34 36 Z
    " fill="url(#chShellFront)" opacity="0.4" />

    {/* ═══ SEAT — trapezoidal top surface with thickness ═══ */}
    {/* Seat TOP SURFACE — foreshortened trapezoid showing perspective */}
    <path d="
      M 22 104 Q 68 90 106 102 Q 118 108 114 118
      Q 68 108 18 116 Z
    " fill="url(#chSeatTop)" />
    {/* Seat dip shadow */}
    <ellipse cx="66" cy="108" rx="30" ry="8" fill="url(#chSeatDip)" />

    {/* Seat FRONT FACE — shows thickness */}
    <path d="
      M 18 116 Q 68 116 114 118
      L 114 130 Q 68 128 18 128 Z
    " fill="url(#chSeatFront)" />

    {/* Seat RIGHT SIDE FACE — narrow depth indicator */}
    <path d="
      M 114 118 L 114 130 L 120 126 L 120 114 Z
    " fill="url(#chSeatSide)" opacity="0.7" />

    {/* Seat front bottom edge shadow */}
    <path d="M 18 128 Q 68 128 114 130"
      stroke="#6b21a8" strokeWidth="1.5" fill="none" opacity="0.3" />

    {/* ═══ FRONT LEGS — foreground, closest to viewer ═══ */}
    {/* front-left leg (closest — widest, most detailed) */}
    <polygon points="30,122 38,122 36,198 28,198" fill="#a855f7" />
    <polygon points="30,122 38,122 36,198 28,198" fill="white" opacity="0.05" />
    {/* front-right leg (slightly behind front-left, narrower) */}
    <polygon points="108,120 114,120 112,194 106,194" fill="#7c3aed" />
    <polygon points="108,120 114,120 112,194 106,194" fill="white" opacity="0.03" />

    {/* Leg specular highlights */}
    <rect x="32" y="144" width="2.5" height="28" rx="1" fill="white" opacity="0.07" />
    <rect x="109" y="142" width="2" height="26" rx="1" fill="white" opacity="0.05" />

    {/* ═══ SPECULAR HIGHLIGHTS ═══ */}
    {/* Upper backrest shine */}
    <path d="M 36 28 Q 48 14 66 14 Q 78 14 86 20"
      stroke="white" strokeWidth="2.5" fill="none" opacity="0.12" strokeLinecap="round" />
    {/* Seat top edge shine */}
    <path d="M 26 106 Q 56 94 86 100"
      stroke="white" strokeWidth="1.5" fill="none" opacity="0.09" strokeLinecap="round" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   WATERMELON — round full oval slice with 3D thickness
   ═══════════════════════════════════════════════════════════ */
const Watermelon = () => (
  <svg viewBox="0 0 250 170" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 6px 24px rgba(34,197,94,0.3))' }}>
    <defs>
      <linearGradient id="wmFleshG" x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0%" stopColor="#f87171"/>
        <stop offset="30%" stopColor="#ef4444"/>
        <stop offset="100%" stopColor="#b91c1c"/>
      </linearGradient>
      <linearGradient id="wmRindG" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#22c55e"/>
        <stop offset="50%" stopColor="#16a34a"/>
        <stop offset="100%" stopColor="#14532d"/>
      </linearGradient>
    </defs>

    <ellipse cx="125" cy="158" rx="90" ry="7" fill="#000" opacity="0.12" />

    <path d="M 30 80 Q 30 25 125 20 Q 220 25 220 80"
      stroke="url(#wmRindG)" strokeWidth="22" fill="none" strokeLinecap="round" />

    <path d="M 32 82 Q 32 32 125 28 Q 218 32 218 82"
      stroke="#f0fdf4" strokeWidth="6" fill="none" opacity="0.5" strokeLinecap="round" />

    <path d="M 35 86 Q 35 36 125 32 Q 215 36 215 86 Q 215 130 125 125 Q 35 130 35 86 Z"
      fill="url(#wmFleshG)" />
    <ellipse cx="125" cy="75" rx="60" ry="30" fill="#ef4444" opacity="0.45" />
    <ellipse cx="110" cy="65" rx="35" ry="16" fill="#f87171" opacity="0.35" />

    {[
      [80,72,8],[140,62,-12],[170,78,15],[100,90,-18],
      [155,88,8],[60,65,-5],[190,65,-10],[120,105,5]
    ].map(([cx,cy,rot],i) => (
      <ellipse key={i} cx={cx} cy={cy} rx="2.5" ry="4.5" fill="#1a0a00"
        transform={`rotate(${rot} ${cx} ${cy})`} opacity="0.82" />
    ))}

    <ellipse cx="95" cy="50" rx="40" ry="6" fill="white" opacity="0.1" transform="rotate(-5 95 50)" />
    <ellipse cx="85" cy="46" rx="18" ry="3" fill="white" opacity="0.08" />

    <path d="M 35 120 Q 125 138 215 120 L 210 128 Q 125 146 40 128 Z"
      fill="#16a34a" opacity="0.45" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════
   GAME CONTROLLER — proper dual-grip gamepad, 3/4 perspective
   Wide horizontal body with pronounced downward-extending
   grips. Dual analog sticks, cross d-pad, colored ABXY
   diamond buttons. Shoulder buttons + triggers on top edge.
   Glossy indigo body. UNMISTAKABLY a gamepad, not a console.
   ═══════════════════════════════════════════════════════════ */
const GameController = () => (
  <svg viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ filter: 'drop-shadow(0 8px 30px rgba(99,102,241,0.35))' }}>
    <defs>
      <linearGradient id="gcBodyFront" x1="0.1" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#eef2ff"/>
        <stop offset="18%" stopColor="#c7d2fe"/>
        <stop offset="48%" stopColor="#818cf8"/>
        <stop offset="78%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#3730a3"/>
      </linearGradient>
      <linearGradient id="gcBodySide" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="40%" stopColor="#4338ca"/>
        <stop offset="100%" stopColor="#1e1b4b"/>
      </linearGradient>
      <linearGradient id="gcTopEdge" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ddd6fe"/>
        <stop offset="100%" stopColor="#a5b4fc"/>
      </linearGradient>
      <linearGradient id="gcGripL" x1="0" y1="0" x2="0.3" y2="1">
        <stop offset="0%" stopColor="#818cf8"/>
        <stop offset="50%" stopColor="#4f46e5"/>
        <stop offset="100%" stopColor="#312e81"/>
      </linearGradient>
      <linearGradient id="gcGripR" x1="0.2" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="50%" stopColor="#4338ca"/>
        <stop offset="100%" stopColor="#2e1065"/>
      </linearGradient>
      <radialGradient id="gcStickBase" cx="0.4" cy="0.35" r="0.6">
        <stop offset="0%" stopColor="#312e81"/>
        <stop offset="100%" stopColor="#0f0f23"/>
      </radialGradient>
    </defs>

    {/* ground shadow — wide elliptical */}
    <ellipse cx="150" cy="184" rx="112" ry="6" fill="#000" opacity="0.12" />

    {/* ═══════════════════════════════════════════════════════
       RIGHT SIDE FACE — body thickness in 3/4 view
       ═══════════════════════════════════════════════════════ */}
    {/* main body right side */}
    <path d="M 206 36 L 216 30 L 216 104 L 206 110 Z" fill="url(#gcBodySide)" opacity="0.75" />
    {/* right grip right side — follows the curved grip */}
    <path d="
      M 216 104
      Q 222 110 226 128
      Q 230 148 224 160
      L 214 162 L 206 142
      L 206 110 Z
    " fill="url(#gcBodySide)" opacity="0.5" />

    {/* ═══════════════════════════════════════════════════════
       TOP EDGE — thin illuminated rim
       ═══════════════════════════════════════════════════════ */}
    <polygon points="30,26 206,36 216,30 40,20" fill="url(#gcTopEdge)" />
    <polygon points="36,24 204,34 212,28 46,18" fill="white" opacity="0.1" />

    {/* ═══════════════════════════════════════════════════════
       SHOULDER BUTTONS + TRIGGERS
       ═══════════════════════════════════════════════════════ */}
    {/* Left bumper */}
    <polygon points="50,22 68,25 72,29 54,26" fill="#c7d2fe" opacity="0.5" />
    <polygon points="52,18 66,21 68,25 50,22" fill="#e0e7ff" opacity="0.35" />
    {/* Right bumper */}
    <polygon points="80,26 98,29 100,33 82,30" fill="#c7d2fe" opacity="0.5" />
    <polygon points="82,22 96,25 98,29 80,26" fill="#e0e7ff" opacity="0.35" />

    {/* ═══════════════════════════════════════════════════════
       FRONT FACE — main body
       ═══════════════════════════════════════════════════════ */}
    {/* central body panel */}
    <path d="M 28 28 L 206 36 L 206 110 L 28 102 Z" fill="url(#gcBodyFront)" />

    {/* ── LEFT GRIP — prominent downward curve ── */}
    <path d="
      M 28 102
      Q 18 114 22 136
      Q 28 160 50 164
      Q 56 164 58 150
      L 58 128
      L 56 110
      Z
    " fill="url(#gcGripL)" />

    {/* ── RIGHT GRIP — prominent downward curve ── */}
    <path d="
      M 184 102
      Q 186 116 192 138
      Q 198 162 220 158
      Q 228 156 226 136
      L 216 118
      L 206 110
      Z
    " fill="url(#gcGripR)" />

    {/* ═══════════════════════════════════════════════════════
       LEFT SIDE — subtle depth
       ═══════════════════════════════════════════════════════ */}
    <polygon points="28,28 28,102 20,96 20,24" fill="#1e1b4b" opacity="0.18" />

    {/* ═══════════════════════════════════════════════════════
       FRONT HIGHLIGHT — subtle sheen
       ═══════════════════════════════════════════════════════ */}
    <path d="M 32 32 L 202 40 L 202 58 L 32 50 Z" fill="white" opacity="0.06" />

    {/* ═══════════════════════════════════════════════════════
       GRIP INNER SHADOWS — depth where grips meet body
       ═══════════════════════════════════════════════════════ */}
    <path d="M 28 102 Q 32 108 56 110" stroke="#1e1b4b" strokeWidth="2" fill="none" opacity="0.25" />
    <path d="M 184 102 Q 188 108 206 110" stroke="#1e1b4b" strokeWidth="2" fill="none" opacity="0.2" />

    {/* ═══════════════════════════════════════════════════════
       CENTER — guide / home button
       ═══════════════════════════════════════════════════════ */}
    <ellipse cx="116" cy="66" rx="17" ry="13" fill="#1e1b4b" opacity="0.4" />
    <ellipse cx="116" cy="64" rx="13" ry="9.5" fill="#312e81" opacity="0.3" />
    <ellipse cx="115" cy="62" rx="5" ry="3" fill="white" opacity="0.04" />

    {/* ═══════════════════════════════════════════════════════
       LEFT ANALOG STICK — prominent 3D thumbstick
       ═══════════════════════════════════════════════════════ */}
    <ellipse cx="62" cy="70" rx="15" ry="15" fill="#1e1b4b" />
    <ellipse cx="62" cy="60" rx="10" ry="7.5" fill="url(#gcStickBase)" />
    <ellipse cx="62" cy="55" rx="12.5" ry="6.5" fill="#818cf8" opacity="0.38" />
    <ellipse cx="61" cy="53" rx="4.5" ry="2.5" fill="white" opacity="0.08" />

    {/* ═══════════════════════════════════════════════════════
       RIGHT ANALOG STICK — prominent 3D thumbstick
       ═══════════════════════════════════════════════════════ */}
    <ellipse cx="172" cy="70" rx="15" ry="15" fill="#1e1b4b" />
    <ellipse cx="172" cy="60" rx="10" ry="7.5" fill="url(#gcStickBase)" />
    <ellipse cx="172" cy="55" rx="12.5" ry="6.5" fill="#818cf8" opacity="0.38" />
    <ellipse cx="171" cy="53" rx="4.5" ry="2.5" fill="white" opacity="0.08" />

    {/* ═══════════════════════════════════════════════════════
       D-PAD — cross shape, left side below stick
       ═══════════════════════════════════════════════════════ */}
    <rect x="32" y="52" width="22" height="7.5" rx="3" fill="#1e1b4b" />
    <rect x="42" y="38" width="7.5" height="22" rx="3" fill="#1e1b4b" />
    {/* center indent */}
    <circle cx="45.5" cy="49" r="3" fill="#312e81" opacity="0.25" />

    {/* ═══════════════════════════════════════════════════════
       FACE BUTTONS — A/B/X/Y diamond, 3D depth
       ═══════════════════════════════════════════════════════ */}
    {/* A — green (bottom of diamond) */}
    <circle cx="196" cy="82" r="8" fill="#166534" opacity="0.5" />
    <circle cx="196" cy="80" r="7.5" fill="#22c55e" opacity="0.8" />
    <circle cx="195" cy="78" r="3" fill="white" opacity="0.13" />
    {/* B — red (right of diamond) */}
    <circle cx="212" cy="72" r="8" fill="#991b1b" opacity="0.5" />
    <circle cx="212" cy="70" r="7.5" fill="#ef4444" opacity="0.8" />
    <circle cx="211" cy="68" r="3" fill="white" opacity="0.13" />
    {/* X — blue (left of diamond) */}
    <circle cx="180" cy="72" r="8" fill="#1e3a5f" opacity="0.5" />
    <circle cx="180" cy="70" r="7.5" fill="#3b82f6" opacity="0.8" />
    <circle cx="179" cy="68" r="3" fill="white" opacity="0.13" />
    {/* Y — yellow (top of diamond) */}
    <circle cx="196" cy="58" r="8" fill="#854d0e" opacity="0.5" />
    <circle cx="196" cy="56" r="7.5" fill="#eab308" opacity="0.8" />
    <circle cx="195" cy="54" r="3" fill="white" opacity="0.13" />

    {/* ═══════════════════════════════════════════════════════
       BOTTOM EDGE SHADOW
       ═══════════════════════════════════════════════════════ */}
    <rect x="30" y="108" width="174" height="2" rx="1" fill="#1e1b4b" opacity="0.1" />
  </svg>
);

const FallbackObject: FC<Props> = ({ type, className }) => (
  <div className={`w-full h-full ${className || ''}`}>
    {type === 'basketball' && <Basketball />}
    {type === 'chair' && <Chair />}
    {type === 'watermelon' && <Watermelon />}
    {type === 'controller' && <GameController />}
  </div>
);

export default FallbackObject;
