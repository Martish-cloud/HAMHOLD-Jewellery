import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate photorealistic luxury jewellery SVGs with 100% transparent backgrounds
const products = [
  // 1. Rings (Women)
  {
    id: 'aurelia-solitaire-ring',
    type: 'solitaire-ring',
    metal: 'gold',
    gem: 'diamond',
    title: 'Aurelia Solitaire Diamond Ring'
  },
  {
    id: 'elysian-emerald-ring',
    type: 'emerald-ring',
    metal: 'gold',
    gem: 'emerald',
    title: 'Elysian Emerald Cut Solitaire'
  },
  {
    id: 'seraphina-eternity-band',
    type: 'eternity-band',
    metal: 'platinum',
    gem: 'diamond',
    title: 'Seraphina Diamond Eternity Band'
  },
  {
    id: 'lyra-halo-ring',
    type: 'halo-ring',
    metal: 'rose-gold',
    gem: 'champagne-diamond',
    title: 'Lyra Champagne Diamond Halo Ring'
  },
  {
    id: 'vesper-sapphire-ring',
    type: 'sapphire-ring',
    metal: 'white-gold',
    gem: 'sapphire',
    title: 'Vesper Royal Sapphire & Diamond Ring'
  },
  {
    id: 'solstice-fluted-band',
    type: 'gold-band',
    metal: 'gold',
    gem: 'none',
    title: 'Solstice Fluted 18K Gold Band'
  },

  // 2. Earrings
  {
    id: 'astra-drop-earrings',
    type: 'drop-earrings',
    metal: 'white-gold',
    gem: 'diamond',
    title: 'Astra Celestial Diamond Drop Earrings'
  },
  {
    id: 'celeste-pearl-drops',
    type: 'pearl-earrings',
    metal: 'gold',
    gem: 'pearl',
    title: 'Celeste South Sea Pearl & Diamond Drops'
  },
  {
    id: 'lumina-diamond-studs',
    type: 'stud-earrings',
    metal: 'platinum',
    gem: 'diamond',
    title: 'Lumina Brilliant Diamond Studs'
  },
  {
    id: 'zephyr-sculpted-hoops',
    type: 'gold-hoops',
    metal: 'gold',
    gem: 'none',
    title: 'Zephyr Sculpted 18K Gold Hoops'
  },
  {
    id: 'bellatrix-emerald-chandeliers',
    type: 'emerald-earrings',
    metal: 'gold',
    gem: 'emerald',
    title: 'Bellatrix Emerald Chandelier Earrings'
  },
  {
    id: 'mirage-diamond-climbers',
    type: 'ear-climbers',
    metal: 'rose-gold',
    gem: 'diamond',
    title: 'Mirage Diamond Climber Earrings'
  },

  // 3. Necklaces
  {
    id: 'harmonia-tennis-necklace',
    type: 'tennis-necklace',
    metal: 'platinum',
    gem: 'diamond',
    title: 'Harmonia Diamond Tennis Necklace'
  },
  {
    id: 'valentina-pearl-strand',
    type: 'pearl-necklace',
    metal: 'gold',
    gem: 'pearl',
    title: 'Valentina Cascading Pearl Strand'
  },
  {
    id: 'kismet-station-necklace',
    type: 'station-necklace',
    metal: 'gold',
    gem: 'diamond',
    title: 'Kismet Delicate Diamond Station Necklace'
  },
  {
    id: 'solaria-gold-collar',
    type: 'gold-collar',
    metal: 'gold',
    gem: 'none',
    title: 'Solaria Herringbone Fluid Gold Collar'
  },
  {
    id: 'elysium-pave-choker',
    type: 'pave-choker',
    metal: 'white-gold',
    gem: 'diamond',
    title: 'Elysium Pavé Chevron Choker'
  },

  // 4. Bracelets
  {
    id: 'nocturne-diamond-bracelet',
    type: 'tennis-bracelet',
    metal: 'white-gold',
    gem: 'diamond',
    title: 'Nocturne Pavé Diamond Tennis Bracelet'
  },
  {
    id: 'aureole-gold-bangle',
    type: 'twisted-bangle',
    metal: 'gold',
    gem: 'none',
    title: 'Aureole 18K Gold Twisted Bangle'
  },
  {
    id: 'serena-pearl-bracelet',
    type: 'pearl-bracelet',
    metal: 'gold',
    gem: 'pearl',
    title: 'Serena Pearl & Diamond Charm Bracelet'
  },
  {
    id: 'calypso-emerald-bracelet',
    type: 'emerald-bracelet',
    metal: 'gold',
    gem: 'emerald',
    title: 'Calypso Emerald & Diamond Tennis Bracelet'
  },
  {
    id: 'eclipse-noir-bangle',
    type: 'noir-bangle',
    metal: 'platinum',
    gem: 'black-diamond',
    title: 'Eclipse Noir Diamond Flexible Bangle'
  },

  // 5. Pendants
  {
    id: 'velora-emerald-pendant',
    type: 'emerald-pendant',
    metal: 'gold',
    gem: 'emerald',
    title: 'Velora Cushion-Cut Emerald Pendant'
  },
  {
    id: 'orion-diamond-pendant',
    type: 'solitaire-pendant',
    metal: 'white-gold',
    gem: 'diamond',
    title: 'Orion Solitaire Diamond Floating Pendant'
  },
  {
    id: 'selene-tahitian-pendant',
    type: 'tahitian-pendant',
    metal: 'white-gold',
    gem: 'tahitian-pearl',
    title: 'Selene Tahitian Black Pearl Pendant'
  },
  {
    id: 'astraea-constellation-locket',
    type: 'gold-locket',
    metal: 'gold',
    gem: 'diamond',
    title: 'Astraea Constellation Diamond Locket'
  },

  // 6. Bangles / Kada
  {
    id: 'maharani-pave-bangle',
    type: 'maharani-bangle',
    metal: 'gold',
    gem: 'diamond',
    title: 'Maharani Pavé Diamond Broad Bangle'
  },
  {
    id: 'samara-ribbed-bangle',
    type: 'ribbed-bangle',
    metal: 'gold',
    gem: 'none',
    title: 'Samara Ribbed 18K Gold Open Bangle'
  },
  {
    id: 'nirvana-polki-kada',
    type: 'polki-kada',
    metal: 'gold',
    gem: 'polki-emerald',
    title: 'Nirvana Emerald & Uncut Polki Open Kada'
  },

  // 7. Nose Rings / Pins
  {
    id: 'serein-diamond-nose-pin',
    type: 'floral-nose-pin',
    metal: 'gold',
    gem: 'diamond',
    title: 'Serein Diamond Floral Nose Pin'
  },
  {
    id: 'zara-diamond-nose-ring',
    type: 'crescent-nose-ring',
    metal: 'gold',
    gem: 'diamond',
    title: 'Zara Crescent Diamond Wire Nose Ring'
  },

  // 8. Men's Jewellery (For Him)
  {
    id: 'monarch-mens-kada',
    type: 'mens-kada',
    metal: 'gold',
    gem: 'diamond',
    title: 'Monarch Imperial Gold & Diamond Kada'
  },
  {
    id: 'elan-mens-cuff',
    type: 'mens-cuff',
    metal: 'platinum',
    gem: 'none',
    title: 'Élan Sculpted Platinum & Gold Cuff'
  },
  {
    id: 'sovereign-onyx-ring',
    type: 'signet-ring',
    metal: 'gold',
    gem: 'onyx',
    title: 'Sovereign Black Onyx & Diamond Signet Ring'
  },
  {
    id: 'atlas-cuban-chain',
    type: 'cuban-chain',
    metal: 'gold',
    gem: 'none',
    title: 'Atlas Heavy 18K Yellow Gold Cuban Chain'
  },
  {
    id: 'titan-platinum-band',
    type: 'mens-band',
    metal: 'platinum',
    gem: 'diamond',
    title: 'Titan Brushed Platinum & Diamond Band'
  },
  {
    id: 'vulcan-compass-pendant',
    type: 'compass-pendant',
    metal: 'gold',
    gem: 'obsidian',
    title: 'Vulcan Obsidian & Gold Compass Pendant'
  }
];

function getGradients(metal) {
  if (metal === 'gold') {
    return `
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF5D6" />
        <stop offset="25%" stop-color="#E5C77A" />
        <stop offset="50%" stop-color="#C59B3F" />
        <stop offset="75%" stop-color="#F2DE9C" />
        <stop offset="100%" stop-color="#936D21" />
      </linearGradient>
      <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#FFF0BE" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#6F5015" stop-opacity="0.8" />
      </linearGradient>
    `;
  } else if (metal === 'rose-gold') {
    return `
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFE7E2" />
        <stop offset="25%" stop-color="#E8A89B" />
        <stop offset="50%" stop-color="#C97566" />
        <stop offset="75%" stop-color="#F7C9C0" />
        <stop offset="100%" stop-color="#9A4F41" />
      </linearGradient>
      <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.85" />
        <stop offset="50%" stop-color="#FFD6CF" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#7C3B2F" stop-opacity="0.8" />
      </linearGradient>
    `;
  } else if (metal === 'white-gold' || metal === 'platinum') {
    return `
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="25%" stop-color="#DCE2E6" />
        <stop offset="50%" stop-color="#A5ACB2" />
        <stop offset="75%" stop-color="#EDF1F5" />
        <stop offset="100%" stop-color="#6B7278" />
      </linearGradient>
      <linearGradient id="metalHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
        <stop offset="50%" stop-color="#E1E6EB" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#4F565C" stop-opacity="0.8" />
      </linearGradient>
    `;
  }
}

function getGemFilters() {
  return `
    <radialGradient id="diamondShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="30%" stop-color="#EBF5FB" />
      <stop offset="60%" stop-color="#D4E6F1" />
      <stop offset="85%" stop-color="#A9CCE3" />
      <stop offset="100%" stop-color="#5DADE2" />
    </radialGradient>
    <radialGradient id="emeraldShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#A3E4D7" />
      <stop offset="35%" stop-color="#1ABC9C" />
      <stop offset="70%" stop-color="#0E6251" />
      <stop offset="100%" stop-color="#073B30" />
    </radialGradient>
    <radialGradient id="sapphireShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#A9CCE3" />
      <stop offset="35%" stop-color="#2471A3" />
      <stop offset="70%" stop-color="#154360" />
      <stop offset="100%" stop-color="#0A2233" />
    </radialGradient>
    <radialGradient id="pearlShine" cx="35%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="40%" stop-color="#F7F5F0" />
      <stop offset="75%" stop-color="#E4DDD3" />
      <stop offset="90%" stop-color="#C2B7A7" />
      <stop offset="100%" stop-color="#8E8271" />
    </radialGradient>
    <radialGradient id="tahitianPearl" cx="35%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#C7CCD1" />
      <stop offset="35%" stop-color="#4A525A" />
      <stop offset="70%" stop-color="#202428" />
      <stop offset="100%" stop-color="#0F1113" />
    </radialGradient>
    <radialGradient id="onyxShine" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#4B4E53" />
      <stop offset="45%" stop-color="#1C1D1F" />
      <stop offset="100%" stop-color="#080809" />
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="subtleContactShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feColorMatrix type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"/>
    </filter>
  `;
}

function renderJewelleryShape(item) {
  const { type } = item;

  switch (type) {
    case 'solitaire-ring':
      return `
        <!-- Floating Shadow -->
        <ellipse cx="250" cy="420" rx="140" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <!-- Ring Band -->
        <g transform="translate(0, 20)">
          <!-- Outer Band Circle -->
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalGrad)" stroke-width="26"/>
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalHighlight)" stroke-width="6" opacity="0.75"/>
          <!-- Inner Band Hollow -->
          <ellipse cx="250" cy="270" rx="104" ry="86" fill="none" stroke="#2A200B" stroke-width="4" opacity="0.6"/>
          <!-- Crown & Prongs Setting -->
          <path d="M 230 160 L 220 120 L 235 122 L 242 155 Z" fill="url(#metalGrad)" />
          <path d="M 270 160 L 280 120 L 265 122 L 258 155 Z" fill="url(#metalGrad)" />
          <path d="M 215 130 L 285 130 L 275 145 L 225 145 Z" fill="url(#metalGrad)" opacity="0.9"/>
          <!-- Brilliant Cut Solitaire Diamond -->
          <!-- Pavilion & Girdle -->
          <polygon points="250,75 285,115 250,148 215,115" fill="url(#diamondShine)"/>
          <!-- Table & Crown Facets -->
          <polygon points="235,90 265,90 280,115 220,115" fill="#FFFFFF" opacity="0.9"/>
          <polygon points="250,75 265,90 235,90" fill="#FFFFFF" opacity="0.95"/>
          <polygon points="265,90 285,115 280,115" fill="#CDE4F7" opacity="0.8"/>
          <polygon points="235,90 215,115 220,115" fill="#CDE4F7" opacity="0.8"/>
          <polygon points="250,148 240,115 260,115" fill="#A4D1F2" opacity="0.85"/>
          <polygon points="250,148 220,115 240,115" fill="#FFFFFF" opacity="0.75"/>
          <polygon points="250,148 260,115 280,115" fill="#88BFE8" opacity="0.8"/>
          <!-- Brilliant Sparkle Flares -->
          <line x1="250" y1="65" x2="250" y2="85" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <line x1="240" y1="75" x2="260" y2="75" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          <circle cx="250" cy="75" r="3" fill="#FFFFFF" filter="url(#softGlow)"/>
        </g>
      `;

    case 'emerald-ring':
      return `
        <ellipse cx="250" cy="420" rx="140" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <!-- Gold Band -->
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalGrad)" stroke-width="28"/>
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalHighlight)" stroke-width="6"/>
          <!-- Pavé Shoulder Diamonds -->
          ${[200, 215, 285, 300].map(cx => `<circle cx="${cx}" cy="175" r="4.5" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>`).join('')}
          <!-- Collet Bezel Setting -->
          <rect x="205" y="70" width="90" height="110" rx="8" fill="url(#metalGrad)"/>
          <rect x="210" y="75" width="80" height="100" rx="6" fill="#05261F"/>
          <!-- Emerald Cut Gemstone -->
          <polygon points="215,80 285,80 280,165 220,165" fill="url(#emeraldShine)"/>
          <polygon points="225,92 275,92 270,153 230,153" fill="#1ABC9C" opacity="0.85"/>
          <polygon points="232,100 268,100 265,145 235,145" fill="#A3E4D7" opacity="0.6"/>
          <!-- Table reflection facet -->
          <polygon points="230,95 245,95 240,150 227,150" fill="#FFFFFF" opacity="0.4"/>
          <!-- Prongs on 4 corners -->
          <circle cx="212" cy="77" r="5" fill="url(#metalGrad)"/>
          <circle cx="288" cy="77" r="5" fill="url(#metalGrad)"/>
          <circle cx="212" cy="173" r="5" fill="url(#metalGrad)"/>
          <circle cx="288" cy="173" r="5" fill="url(#metalGrad)"/>
        </g>
      `;

    case 'eternity-band':
      return `
        <ellipse cx="250" cy="410" rx="135" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 15)">
          <ellipse cx="250" cy="250" rx="130" ry="105" fill="none" stroke="url(#metalGrad)" stroke-width="32"/>
          <ellipse cx="250" cy="250" rx="130" ry="105" fill="none" stroke="#20252A" stroke-width="4" opacity="0.4"/>
          <!-- Continuous Set Diamonds along ellipse -->
          ${Array.from({ length: 22 }).map((_, i) => {
            const angle = (i / 22) * Math.PI * 2;
            const x = 250 + Math.cos(angle) * 130;
            const y = 250 + Math.sin(angle) * 105;
            return `
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7.5" fill="url(#diamondShine)" stroke="#FFFFFF" stroke-width="0.8"/>
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#FFFFFF" opacity="0.8"/>
            `;
          }).join('')}
        </g>
      `;

    case 'halo-ring':
      return `
        <ellipse cx="250" cy="420" rx="130" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalGrad)" stroke-width="24"/>
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalHighlight)" stroke-width="5"/>
          <!-- Halo Platform -->
          <ellipse cx="250" cy="120" rx="55" ry="42" fill="url(#metalGrad)"/>
          <!-- Halo Micro-Diamonds -->
          ${Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const x = 250 + Math.cos(angle) * 46;
            const y = 120 + Math.sin(angle) * 34;
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.2" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>`;
          }).join('')}
          <!-- Center Champagne Solitaire Cushion -->
          <ellipse cx="250" cy="120" rx="32" ry="24" fill="#C59B3F"/>
          <polygon points="230,110 270,110 262,130 238,130" fill="#FFF5D6" opacity="0.9"/>
          <polygon points="250,102 268,118 250,135 232,118" fill="#F2DE9C" opacity="0.85"/>
          <circle cx="242" cy="114" r="2.5" fill="#FFFFFF"/>
        </g>
      `;

    case 'sapphire-ring':
      return `
        <ellipse cx="250" cy="420" rx="135" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <ellipse cx="250" cy="270" rx="130" ry="110" fill="none" stroke="url(#metalGrad)" stroke-width="26"/>
          <!-- Side Pear Cut Diamonds -->
          <polygon points="190,125 215,105 215,145" fill="url(#diamondShine)" stroke="#FFFFFF" stroke-width="0.8"/>
          <polygon points="310,125 285,105 285,145" fill="url(#diamondShine)" stroke="#FFFFFF" stroke-width="0.8"/>
          <!-- Center Oval Royal Sapphire -->
          <ellipse cx="250" cy="125" rx="46" ry="38" fill="url(#sapphireShine)"/>
          <ellipse cx="250" cy="125" rx="36" ry="28" fill="#2471A3" opacity="0.7"/>
          <polygon points="232,112 268,112 262,138 238,138" fill="#A9CCE3" opacity="0.6"/>
          <polygon points="250,105 264,125 250,145 236,125" fill="#FFFFFF" opacity="0.4"/>
          <!-- 4 Gold Prongs -->
          <circle cx="218" cy="100" r="4.5" fill="url(#metalGrad)"/>
          <circle cx="282" cy="100" r="4.5" fill="url(#metalGrad)"/>
          <circle cx="218" cy="150" r="4.5" fill="url(#metalGrad)"/>
          <circle cx="282" cy="150" r="4.5" fill="url(#metalGrad)"/>
        </g>
      `;

    case 'gold-band':
      return `
        <ellipse cx="250" cy="410" rx="140" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <ellipse cx="250" cy="250" rx="135" ry="110" fill="none" stroke="url(#metalGrad)" stroke-width="36"/>
          <ellipse cx="250" cy="250" rx="135" ry="110" fill="none" stroke="url(#metalHighlight)" stroke-width="8"/>
          <!-- Fluted Architectural Grooves -->
          ${Array.from({ length: 28 }).map((_, i) => {
            const angle = (i / 28) * Math.PI * 2;
            const x1 = 250 + Math.cos(angle) * 118;
            const y1 = 250 + Math.sin(angle) * 93;
            const x2 = 250 + Math.cos(angle) * 152;
            const y2 = 250 + Math.sin(angle) * 127;
            return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#6F5015" stroke-width="2.5" opacity="0.8"/>`;
          }).join('')}
        </g>
      `;

    case 'drop-earrings':
      return `
        <ellipse cx="170" cy="440" rx="55" ry="12" fill="#000000" opacity="0.35" filter="url(#subtleContactShadow)"/>
        <ellipse cx="330" cy="440" rx="55" ry="12" fill="#000000" opacity="0.35" filter="url(#subtleContactShadow)"/>
        ${[170, 330].map(offset => `
          <g transform="translate(${offset - 250}, 0)">
            <!-- Ear Stud -->
            <circle cx="250" cy="80" r="9" fill="url(#diamondShine)" stroke="#FFF" stroke-width="1"/>
            <!-- Articulated Links with Pavé -->
            <line x1="250" y1="89" x2="250" y2="160" stroke="url(#metalGrad)" stroke-width="4"/>
            ${[110, 135, 160].map(y => `<circle cx="250" cy="${y}" r="5" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.8"/>`).join('')}
            <!-- Geometric Motif -->
            <polygon points="250,175 268,205 250,235 232,205" fill="url(#metalGrad)"/>
            <polygon points="250,185 260,205 250,225 240,205" fill="url(#diamondShine)"/>
            <!-- Lower Articulated Strand -->
            <line x1="250" y1="235" x2="250" y2="280" stroke="url(#metalGrad)" stroke-width="3"/>
            <!-- Pear Cut Diamond Drop -->
            <path d="M 250 280 C 230 320 220 350 220 375 C 220 395 233 410 250 410 C 267 410 280 395 280 375 C 280 350 270 320 250 280 Z" fill="url(#diamondShine)" stroke="#FFFFFF" stroke-width="1.2"/>
            <polygon points="250,305 268,365 250,395 232,365" fill="#FFFFFF" opacity="0.6"/>
            <circle cx="245" cy="340" r="3" fill="#FFFFFF" filter="url(#softGlow)"/>
          </g>
        `).join('')}
      `;

    case 'pearl-earrings':
      return `
        <ellipse cx="170" cy="430" rx="60" ry="14" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <ellipse cx="330" cy="430" rx="60" ry="14" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        ${[170, 330].map(offset => `
          <g transform="translate(${offset - 250}, 0)">
            <!-- Diamond Floral Cluster Stud -->
            <circle cx="250" cy="85" r="7" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.8"/>
            ${Array.from({ length: 6 }).map((_, i) => {
              const a = (i / 6) * Math.PI * 2;
              return `<circle cx="${(250 + Math.cos(a) * 12).toFixed(1)}" cy="${(85 + Math.sin(a) * 12).toFixed(1)}" r="4.5" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>`;
            }).join('')}
            <!-- Gold Cap & Link -->
            <line x1="250" y1="102" x2="250" y2="170" stroke="url(#metalGrad)" stroke-width="3"/>
            <circle cx="250" cy="135" r="4.5" fill="url(#diamondShine)"/>
            <path d="M 232 185 C 235 170 265 170 268 185 Z" fill="url(#metalGrad)"/>
            <!-- South Sea Luminous Pearl -->
            <ellipse cx="250" cy="275" rx="55" ry="62" fill="url(#pearlShine)"/>
            <ellipse cx="236" cy="245" rx="14" ry="18" fill="#FFFFFF" opacity="0.75" filter="url(#softGlow)"/>
          </g>
        `).join('')}
      `;

    case 'stud-earrings':
      return `
        <ellipse cx="180" cy="320" rx="70" ry="16" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <ellipse cx="320" cy="320" rx="70" ry="16" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        ${[180, 320].map(offset => `
          <g transform="translate(${offset - 250}, 0)">
            <!-- Platinum 6-Prong Basket -->
            ${Array.from({ length: 6 }).map((_, i) => {
              const a = (i / 6) * Math.PI * 2;
              return `<circle cx="${(250 + Math.cos(a) * 58).toFixed(1)}" cy="${(220 + Math.sin(a) * 58).toFixed(1)}" r="6" fill="url(#metalGrad)"/>`;
            }).join('')}
            <!-- Giant Solitaire Diamond -->
            <polygon points="250,165 298,220 250,275 202,220" fill="url(#diamondShine)"/>
            <polygon points="228,188 272,188 288,220 212,220" fill="#FFFFFF" opacity="0.9"/>
            <polygon points="250,165 272,188 228,188" fill="#FFFFFF" opacity="0.95"/>
            <polygon points="250,275 235,220 265,220" fill="#88BFE8" opacity="0.85"/>
            <circle cx="242" cy="195" r="4" fill="#FFFFFF" filter="url(#softGlow)"/>
          </g>
        `).join('')}
      `;

    case 'gold-hoops':
      return `
        <ellipse cx="180" cy="420" rx="65" ry="14" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <ellipse cx="320" cy="420" rx="65" ry="14" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        ${[180, 320].map(offset => `
          <g transform="translate(${offset - 250}, 0)">
            <ellipse cx="250" cy="250" rx="65" ry="95" fill="none" stroke="url(#metalGrad)" stroke-width="22"/>
            <ellipse cx="250" cy="250" rx="65" ry="95" fill="none" stroke="url(#metalHighlight)" stroke-width="5"/>
            <!-- Post closure -->
            <rect x="240" y="152" width="20" height="6" fill="url(#metalGrad)"/>
          </g>
        `).join('')}
      `;

    case 'emerald-earrings':
      return `
        <ellipse cx="170" cy="440" rx="55" ry="12" fill="#000000" opacity="0.35" filter="url(#subtleContactShadow)"/>
        <ellipse cx="330" cy="440" rx="55" ry="12" fill="#000000" opacity="0.35" filter="url(#subtleContactShadow)"/>
        ${[170, 330].map(offset => `
          <g transform="translate(${offset - 250}, 0)">
            <circle cx="250" cy="80" r="9" fill="url(#emeraldShine)" stroke="url(#metalGrad)" stroke-width="2"/>
            <rect x="235" y="110" width="30" height="40" rx="4" fill="url(#diamondShine)"/>
            <rect x="220" y="180" width="60" height="80" rx="6" fill="url(#metalGrad)"/>
            <rect x="225" y="185" width="50" height="70" rx="4" fill="url(#emeraldShine)"/>
            <polygon points="250,280 280,380 250,420 220,380" fill="url(#emeraldShine)"/>
            <polygon points="250,300 270,375 250,405 230,375" fill="#A3E4D7" opacity="0.6"/>
          </g>
        `).join('')}
      `;

    case 'ear-climbers':
      return `
        <ellipse cx="250" cy="420" rx="90" ry="14" fill="#000000" opacity="0.35" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 0)">
          <!-- Cascading Diamond Stars & Leaves -->
          ${[
            { cx: 210, cy: 360, r: 12 },
            { cx: 225, cy: 305, r: 14 },
            { cx: 245, cy: 245, r: 16 },
            { cx: 270, cy: 185, r: 18 },
            { cx: 295, cy: 125, r: 20 },
            { cx: 315, cy: 75, r: 14 },
          ].map((pt, idx) => `
            <line x1="${pt.cx}" y1="${pt.cy}" x2="${pt.cx - 15}" y2="${pt.cy + 25}" stroke="url(#metalGrad)" stroke-width="3"/>
            <polygon points="${pt.cx},${pt.cy - pt.r} ${pt.cx + pt.r},${pt.cy} ${pt.cx},${pt.cy + pt.r} ${pt.cx - pt.r},${pt.cy}" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.8"/>
            <circle cx="${pt.cx - 2}" cy="${pt.cy - 2}" r="3" fill="#FFFFFF"/>
          `).join('')}
        </g>
      `;

    case 'tennis-necklace':
      return `
        <ellipse cx="250" cy="430" rx="170" ry="20" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 10)">
          <!-- Flowing Platinum Collar Arc -->
          <path d="M 80 120 C 80 340 420 340 420 120" fill="none" stroke="url(#metalGrad)" stroke-width="12"/>
          <!-- 48 Brilliant Pavé Diamonds Along Strand -->
          ${Array.from({ length: 36 }).map((_, i) => {
            const t = i / 35;
            // Quadratic Bezier approximation
            const x = Math.pow(1 - t, 2) * 80 + 2 * (1 - t) * t * 250 + Math.pow(t, 2) * 420;
            const y = Math.pow(1 - t, 2) * 120 + 2 * (1 - t) * t * 380 + Math.pow(t, 2) * 120;
            const r = 4.8 + Math.sin(t * Math.PI) * 2.5; // graduated toward center
            return `
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="url(#diamondShine)" stroke="#FFFFFF" stroke-width="0.8"/>
              <circle cx="${(x - 1).toFixed(1)}" cy="${(y - 1).toFixed(1)}" r="1.5" fill="#FFFFFF"/>
            `;
          }).join('')}
        </g>
      `;

    case 'pearl-necklace':
      return `
        <ellipse cx="250" cy="430" rx="170" ry="20" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 10)">
          <path d="M 90 130 C 90 350 410 350 410 130" fill="none" stroke="#6F5015" stroke-width="2"/>
          ${Array.from({ length: 28 }).map((_, i) => {
            const t = i / 27;
            const x = Math.pow(1 - t, 2) * 90 + 2 * (1 - t) * t * 250 + Math.pow(t, 2) * 410;
            const y = Math.pow(1 - t, 2) * 130 + 2 * (1 - t) * t * 370 + Math.pow(t, 2) * 130;
            const r = 8 + Math.sin(t * Math.PI) * 5.5; // Graduated pearls up to 13.5mm
            return `
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" fill="url(#pearlShine)"/>
              <ellipse cx="${(x - r*0.25).toFixed(1)}" cy="${(y - r*0.25).toFixed(1)}" rx="${(r*0.25).toFixed(1)}" ry="${(r*0.35).toFixed(1)}" fill="#FFFFFF" opacity="0.7"/>
            `;
          }).join('')}
          <!-- Gold Clasp -->
          <circle cx="250" cy="370" r="14" fill="url(#metalGrad)" stroke="#FFF" stroke-width="0.8"/>
          <circle cx="250" cy="370" r="6" fill="url(#diamondShine)"/>
        </g>
      `;

    case 'station-necklace':
      return `
        <ellipse cx="250" cy="430" rx="160" ry="18" fill="#000000" opacity="0.35" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 10)">
          <path d="M 100 130 C 100 340 400 340 400 130" fill="none" stroke="url(#metalGrad)" stroke-width="3"/>
          ${[0.1, 0.25, 0.4, 0.5, 0.6, 0.75, 0.9].map(t => {
            const x = Math.pow(1 - t, 2) * 100 + 2 * (1 - t) * t * 250 + Math.pow(t, 2) * 400;
            const y = Math.pow(1 - t, 2) * 130 + 2 * (1 - t) * t * 360 + Math.pow(t, 2) * 130;
            return `
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="8.5" fill="url(#metalGrad)"/>
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="#FFFFFF"/>
            `;
          }).join('')}
        </g>
      `;

    case 'gold-collar':
      return `
        <ellipse cx="250" cy="430" rx="170" ry="20" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 10)">
          <path d="M 90 140 C 90 350 410 350 410 140" fill="none" stroke="url(#metalGrad)" stroke-width="24"/>
          <path d="M 90 140 C 90 350 410 350 410 140" fill="none" stroke="url(#metalHighlight)" stroke-width="6"/>
          <!-- Chevron Herringbone weave segments -->
          ${Array.from({ length: 32 }).map((_, i) => {
            const t = i / 31;
            const x = Math.pow(1 - t, 2) * 90 + 2 * (1 - t) * t * 250 + Math.pow(t, 2) * 410;
            const y = Math.pow(1 - t, 2) * 140 + 2 * (1 - t) * t * 350 + Math.pow(t, 2) * 140;
            return `<line x1="${(x - 6).toFixed(1)}" y1="${(y - 8).toFixed(1)}" x2="${(x + 6).toFixed(1)}" y2="${(y + 8).toFixed(1)}" stroke="#6F5015" stroke-width="2" opacity="0.6"/>`;
          }).join('')}
        </g>
      `;

    case 'pave-choker':
      return `
        <ellipse cx="250" cy="430" rx="170" ry="20" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 10)">
          <path d="M 90 140 C 90 350 410 350 410 140" fill="none" stroke="url(#metalGrad)" stroke-width="16"/>
          <!-- Chevron point in center -->
          <polygon points="230,285 270,285 250,335" fill="url(#metalGrad)"/>
          <polygon points="236,290 264,290 250,325" fill="url(#diamondShine)"/>
          ${Array.from({ length: 30 }).map((_, i) => {
            const t = i / 29;
            const x = Math.pow(1 - t, 2) * 95 + 2 * (1 - t) * t * 250 + Math.pow(t, 2) * 405;
            const y = Math.pow(1 - t, 2) * 140 + 2 * (1 - t) * t * 315 + Math.pow(t, 2) * 140;
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.2" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>`;
          }).join('')}
        </g>
      `;

    case 'tennis-bracelet':
    case 'emerald-bracelet':
    case 'noir-bangle':
      const isEmerald = type === 'emerald-bracelet';
      const isNoir = type === 'noir-bangle';
      return `
        <ellipse cx="250" cy="380" rx="150" ry="20" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 30)">
          <ellipse cx="250" cy="220" rx="145" ry="90" fill="none" stroke="url(#metalGrad)" stroke-width="16"/>
          <ellipse cx="250" cy="220" rx="145" ry="90" fill="none" stroke="url(#metalHighlight)" stroke-width="3"/>
          ${Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            const x = 250 + Math.cos(a) * 145;
            const y = 220 + Math.sin(a) * 90;
            const fillGem = isEmerald ? (i % 2 === 0 ? 'url(#emeraldShine)' : 'url(#diamondShine)') : isNoir ? 'url(#onyxShine)' : 'url(#diamondShine)';
            return `
              <rect x="${(x - 5).toFixed(1)}" y="${(y - 5).toFixed(1)}" width="10" height="10" rx="2" fill="${fillGem}" stroke="#FFFFFF" stroke-width="0.6"/>
            `;
          }).join('')}
        </g>
      `;

    case 'twisted-bangle':
    case 'ribbed-bangle':
      return `
        <ellipse cx="250" cy="380" rx="150" ry="20" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 30)">
          <ellipse cx="250" cy="220" rx="145" ry="90" fill="none" stroke="url(#metalGrad)" stroke-width="26"/>
          <ellipse cx="250" cy="220" rx="145" ry="90" fill="none" stroke="url(#metalHighlight)" stroke-width="6"/>
          ${Array.from({ length: 30 }).map((_, i) => {
            const a = (i / 30) * Math.PI * 2;
            const x = 250 + Math.cos(a) * 145;
            const y = 220 + Math.sin(a) * 90;
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4" fill="url(#metalHighlight)" opacity="0.75"/>`;
          }).join('')}
        </g>
      `;

    case 'pearl-bracelet':
      return `
        <ellipse cx="250" cy="380" rx="140" ry="18" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 30)">
          <ellipse cx="250" cy="220" rx="140" ry="85" fill="none" stroke="url(#metalGrad)" stroke-width="4"/>
          ${Array.from({ length: 18 }).map((_, i) => {
            const a = (i / 18) * Math.PI * 2;
            const x = 250 + Math.cos(a) * 140;
            const y = 220 + Math.sin(a) * 85;
            return `
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" fill="url(#pearlShine)"/>
              <ellipse cx="${(x - 2.5).toFixed(1)}" cy="${(y - 2.5).toFixed(1)}" rx="3" ry="4" fill="#FFF" opacity="0.8"/>
            `;
          }).join('')}
        </g>
      `;

    case 'emerald-pendant':
    case 'solitaire-pendant':
    case 'tahitian-pendant':
    case 'gold-locket':
    case 'compass-pendant':
      const isPendantEmerald = type === 'emerald-pendant';
      const isPendantTahitian = type === 'tahitian-pendant';
      const isLocket = type === 'gold-locket';
      const isCompass = type === 'compass-pendant';
      return `
        <ellipse cx="250" cy="420" rx="120" ry="16" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <!-- Fine Chain Link -->
        <path d="M 120 40 L 250 180 L 380 40" fill="none" stroke="url(#metalGrad)" stroke-width="3"/>
        <!-- Bail Ring -->
        <ellipse cx="250" cy="180" rx="10" ry="14" fill="none" stroke="url(#metalGrad)" stroke-width="4"/>
        <g transform="translate(0, 20)">
          ${isPendantEmerald ? `
            <rect x="200" y="190" width="100" height="130" rx="10" fill="url(#metalGrad)"/>
            <rect x="208" y="198" width="84" height="114" rx="8" fill="url(#emeraldShine)"/>
            <polygon points="220,210 280,210 270,300 230,300" fill="#A3E4D7" opacity="0.6"/>
            <!-- Halo Diamonds -->
            ${Array.from({ length: 18 }).map((_, i) => {
              const a = (i / 18) * Math.PI * 2;
              return `<circle cx="${(250 + Math.cos(a) * 58).toFixed(1)}" cy="${(255 + Math.sin(a) * 72).toFixed(1)}" r="4.2" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>`;
            }).join('')}
          ` : isPendantTahitian ? `
            <ellipse cx="250" cy="270" rx="55" ry="60" fill="url(#tahitianPearl)"/>
            <ellipse cx="235" cy="245" rx="14" ry="18" fill="#FFFFFF" opacity="0.6" filter="url(#softGlow)"/>
            <path d="M 235 210 C 238 198 262 198 265 210 Z" fill="url(#metalGrad)"/>
            <circle cx="250" cy="198" r="5" fill="url(#diamondShine)"/>
          ` : isLocket ? `
            <ellipse cx="250" cy="270" rx="58" ry="68" fill="url(#metalGrad)"/>
            <ellipse cx="250" cy="270" rx="58" ry="68" fill="none" stroke="url(#metalHighlight)" stroke-width="4"/>
            <!-- Starburst engraving -->
            <polygon points="250,230 256,260 286,260 262,276 272,306 250,288 228,306 238,276 214,260 244,260" fill="#FFF" opacity="0.85"/>
            <circle cx="250" cy="270" r="5" fill="url(#diamondShine)"/>
          ` : isCompass ? `
            <circle cx="250" cy="270" r="65" fill="url(#onyxShine)" stroke="url(#metalGrad)" stroke-width="12"/>
            <circle cx="250" cy="270" r="65" fill="none" stroke="url(#metalHighlight)" stroke-width="3"/>
            <!-- 8-Point Compass Star -->
            <polygon points="250,220 258,260 298,260 266,275 278,315 250,290 222,315 234,275 202,260 242,260" fill="url(#metalGrad)"/>
            <circle cx="250" cy="270" r="4" fill="url(#diamondShine)"/>
          ` : `
            <polygon points="250,190 300,250 250,320 200,250" fill="url(#diamondShine)"/>
            <polygon points="225,215 275,215 290,250 210,250" fill="#FFFFFF" opacity="0.9"/>
            <polygon points="250,190 275,215 225,215" fill="#FFFFFF" opacity="0.95"/>
            <circle cx="240" cy="225" r="4" fill="#FFFFFF" filter="url(#softGlow)"/>
          `}
        </g>
      `;

    case 'maharani-bangle':
    case 'polki-kada':
      return `
        <ellipse cx="250" cy="400" rx="155" ry="22" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <!-- Royal Broad Kada Band -->
          <ellipse cx="250" cy="230" rx="145" ry="95" fill="none" stroke="url(#metalGrad)" stroke-width="48"/>
          <ellipse cx="250" cy="230" rx="145" ry="95" fill="none" stroke="url(#metalHighlight)" stroke-width="6"/>
          <!-- Rows of Pavé Diamonds / Polki -->
          ${Array.from({ length: 28 }).map((_, i) => {
            const a = (i / 28) * Math.PI * 2;
            const x = 250 + Math.cos(a) * 145;
            const y = 230 + Math.sin(a) * 95;
            return `
              <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="url(#diamondShine)" stroke="#FFFFFF" stroke-width="0.8"/>
              <circle cx="${(x + Math.sin(a)*12).toFixed(1)}" cy="${(y - Math.cos(a)*8).toFixed(1)}" r="3.5" fill="url(#emeraldShine)"/>
            `;
          }).join('')}
        </g>
      `;

    case 'floral-nose-pin':
    case 'crescent-nose-ring':
      const isFloral = type === 'floral-nose-pin';
      return `
        <ellipse cx="250" cy="380" rx="90" ry="16" fill="#000000" opacity="0.4" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 30)">
          ${isFloral ? `
            <!-- Gold Stem & Prongs -->
            <circle cx="250" cy="200" r="14" fill="url(#diamondShine)" stroke="url(#metalGrad)" stroke-width="3"/>
            ${Array.from({ length: 7 }).map((_, i) => {
              const a = (i / 7) * Math.PI * 2;
              const x = 250 + Math.cos(a) * 28;
              const y = 200 + Math.sin(a) * 28;
              return `
                <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" fill="url(#diamondShine)" stroke="url(#metalGrad)" stroke-width="2"/>
                <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="#FFFFFF"/>
              `;
            }).join('')}
            <circle cx="250" cy="200" r="4" fill="#FFFFFF"/>
          ` : `
            <!-- Crescent Wire Hoop -->
            <path d="M 190 220 A 60 60 0 1 1 310 220" fill="none" stroke="url(#metalGrad)" stroke-width="8"/>
            <path d="M 190 220 A 60 60 0 1 1 310 220" fill="none" stroke="url(#metalHighlight)" stroke-width="2"/>
            <!-- Diamonds along bottom arc -->
            ${Array.from({ length: 9 }).map((_, i) => {
              const a = Math.PI * 0.15 + (i / 8) * Math.PI * 0.7;
              const x = 250 + Math.cos(a) * 60;
              const y = 220 + Math.sin(a) * 60;
              return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.8"/>`;
            }).join('')}
          `}
        </g>
      `;

    case 'mens-kada':
      return `
        <ellipse cx="250" cy="400" rx="160" ry="24" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <!-- Solid Heavy Kada -->
          <ellipse cx="250" cy="230" rx="145" ry="100" fill="none" stroke="url(#metalGrad)" stroke-width="44"/>
          <ellipse cx="250" cy="230" rx="145" ry="100" fill="none" stroke="url(#metalHighlight)" stroke-width="8"/>
          <!-- Central Channel with Flush-Set Baguette Diamonds -->
          ${Array.from({ length: 16 }).map((_, i) => {
            const a = Math.PI * 0.2 + (i / 15) * Math.PI * 0.6;
            const x = 250 + Math.cos(a) * 145;
            const y = 230 + Math.sin(a) * 100;
            return `<rect x="${(x - 5).toFixed(1)}" y="${(y - 8).toFixed(1)}" width="10" height="16" rx="2" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.5"/>`;
          }).join('')}
        </g>
      `;

    case 'mens-cuff':
      return `
        <ellipse cx="250" cy="390" rx="150" ry="22" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 25)">
          <!-- Open Cuff with Beveled Edges -->
          <path d="M 120 180 C 100 320 400 320 380 180" fill="none" stroke="url(#metalGrad)" stroke-width="36" stroke-linecap="round"/>
          <path d="M 120 180 C 100 320 400 320 380 180" fill="none" stroke="url(#metalHighlight)" stroke-width="8" stroke-linecap="round"/>
          <!-- Central Linear Groove -->
          <path d="M 125 185 C 105 320 395 320 375 185" fill="none" stroke="#2B3238" stroke-width="4" stroke-linecap="round"/>
        </g>
      `;

    case 'signet-ring':
      return `
        <ellipse cx="250" cy="420" rx="135" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <!-- Heavy Men's Ring Shank -->
          <ellipse cx="250" cy="270" rx="125" ry="105" fill="none" stroke="url(#metalGrad)" stroke-width="38"/>
          <ellipse cx="250" cy="270" rx="125" ry="105" fill="none" stroke="url(#metalHighlight)" stroke-width="8"/>
          <!-- Signet Platform -->
          <rect x="180" y="70" width="140" height="110" rx="12" fill="url(#metalGrad)"/>
          <!-- Black Onyx Inset Cushion -->
          <rect x="192" y="80" width="116" height="90" rx="8" fill="url(#onyxShine)"/>
          <!-- Center Flush Star Diamond -->
          <polygon points="250,110 254,122 266,122 256,129 260,141 250,134 240,141 244,129 234,122 246,122" fill="#FFF"/>
          <circle cx="250" cy="125" r="3.5" fill="url(#diamondShine)"/>
        </g>
      `;

    case 'cuban-chain':
      return `
        <ellipse cx="250" cy="430" rx="160" ry="20" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 10)">
          <!-- Heavy Interlocking Cuban Links -->
          ${Array.from({ length: 18 }).map((_, i) => {
            const t = i / 17;
            const x = Math.pow(1 - t, 2) * 90 + 2 * (1 - t) * t * 250 + Math.pow(t, 2) * 410;
            const y = Math.pow(1 - t, 2) * 140 + 2 * (1 - t) * t * 360 + Math.pow(t, 2) * 140;
            return `
              <ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="18" ry="14" fill="none" stroke="url(#metalGrad)" stroke-width="12" transform="rotate(${((t - 0.5) * 60).toFixed(1)}, ${x.toFixed(1)}, ${y.toFixed(1)})"/>
              <ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="18" ry="14" fill="none" stroke="url(#metalHighlight)" stroke-width="3" transform="rotate(${((t - 0.5) * 60).toFixed(1)}, ${x.toFixed(1)}, ${y.toFixed(1)})"/>
            `;
          }).join('')}
        </g>
      `;

    case 'mens-band':
      return `
        <ellipse cx="250" cy="410" rx="140" ry="18" fill="#000000" opacity="0.45" filter="url(#subtleContactShadow)"/>
        <g transform="translate(0, 20)">
          <ellipse cx="250" cy="250" rx="135" ry="105" fill="none" stroke="url(#metalGrad)" stroke-width="42"/>
          <ellipse cx="250" cy="250" rx="135" ry="105" fill="none" stroke="url(#metalHighlight)" stroke-width="8"/>
          <!-- Brushed texture + Flush Single Princess Diamond -->
          <rect x="238" y="125" width="24" height="24" fill="url(#diamondShine)" stroke="#FFF" stroke-width="0.8"/>
          <polygon points="238,125 262,125 250,149" fill="#FFF" opacity="0.75"/>
        </g>
      `;

    default:
      return `<circle cx="250" cy="250" r="100" fill="url(#metalGrad)"/>`;
  }
}

products.forEach(item => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    ${getGradients(item.metal)}
    ${getGemFilters()}
  </defs>
  <!-- 100% Transparent Background - Floating Fine Jewellery -->
  ${renderJewelleryShape(item)}
</svg>`;

  fs.writeFileSync(path.join(outDir, `${item.id}.svg`), svg);
  console.log(`Generated transparent jewellery SVG: ${item.id}.svg`);
});
