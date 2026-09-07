/* ============================================================
   Vysakh — portfolio engine
   Pinned career evolution (globe + walking figure), product map,
   reveals, funnel, reduced-motion static fallback.
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- stage data ---------------- */

  const STAGES = [
    {
      year: "2019–21",
      role: "Where it started",
      sub: "Computer science + self-taught design",
      copy: "Computer science at MEC, Kochi — while teaching myself design. Led the design team for Excel, the college tech fest, and freelanced through the final years: the college website redesign and CoDri, a documentation platform for construction companies.",
      imgs: ["Excel branding — event poster", "CoDri wireframes / final UI"],
      metrics: []
    },
    {
      year: "2021",
      who: "UX Designer",
      role: "Moxie — Fitness",
      sub: "First product role — fitness platform",
      copy: "Joined Moxie, a fitness platform for solo fitness entrepreneurs — working inside a product team with PMs, engineers and five designers, shipping across web and mobile.",
      metrics: [
        { v: "2.5×", l: "referral sign-ups, first month" },
        { v: "+12%", l: "retention — gamification MVP" }
      ],
      imgs: ["Moxie — referral experience", "Goals / challenges / streaks UI"]
    },
    {
      year: "2022–23",
      who: "Co-founder & Product Designer",
      role: "Airstack",
      chapter: "airstack",
      sub: "Blockchain data APIs · Explorer · Studio",
      copy: "AI-powered APIs for blockchain data — where the company began, and the same company I design for today. The founder of Moxie invited me in as co-founder and founding product designer. I designed Explorer, a visual way to experience the data and take production-ready GraphQL straight into implementation, and Studio — plain language in, a real query out — which later grew a community layer where developers publish and discuss queries.",
      metrics: [
        { v: "100+", l: "startups adopted the APIs" },
        { v: "Coinbase Wallet", l: "among adopting apps" }
      ],
      imgs: ["assets/airstack/explorer-landing.jpg", "assets/airstack/studio.png"]
    },
    {
      year: "2023–25",
      who: "Co-founder & Product Designer",
      role: "Moxie — Creator Economy",
      chapter: "moxie",
      sub: "Creator coins → token launch → Base trading",
      copy: "The company pivoted into the creator economy: anyone could launch a creator coin on Base, first through Farcaster Frames, then on our own platform when Frames stopped scaling. We launched the Moxie token, and the product outgrew creator coins to become a broader trading platform for Base assets — increasingly assisted by AI.",
      metrics: [
        { v: "10,000+", l: "creator token launches" },
        { v: "$5M+", l: "onchain volume via Frames" },
        { v: "$25M", l: "token market cap" }
      ],
      imgs: ["assets/moxie/feed-cards.png", "assets/moxie/coins-table.jpg"]
    },
    {
      year: "2025–26",
      who: "Co-founder & Product Designer",
      role: "Senpi",
      chapter: "senpi",
      sub: "Autonomous AI trading on Hyperliquid",
      big: "What if the trader was an AI agent?",
      copy: "The product evolved again — from AI-assisted Base trading into autonomous Hyperliquid perpetuals trading. Describe a trading thesis in plain English; a dedicated AI agent builds, funds, runs and protects the strategy.",
      metrics: [
        { v: "1M+", l: "agent-executed trades" },
        { v: "$418M", l: "volume since relaunch" }
      ],
      imgs: ["assets/senpi/web-landing.png", "assets/senpi/app-home.png"]
    }
  ];

  const ORDER = STAGES.slice().reverse();   // walk backwards from the present
  const N = STAGES.length;
  const STEP = 40; // degrees between stops
  const VH_PER_STAGE = 150;

  /* ---------------- era artifacts (fine linework) ---------------- */
  /* Each drawn with its base at (0,0), growing upward (negative y). */

  // ---- landmark builders: every era is a signed building on the world ----
  const LM_HELPERS = {
    pad: (w) => `<ellipse class="lm-pad" cx="0" cy="4" rx="${w}" ry="14"/>`,
    sign: (text, roofY, w) => `
      <line class="lm-post" x1="${-w * 0.3}" y1="${roofY}" x2="${-w * 0.3}" y2="${roofY - 18}"/>
      <line class="lm-post" x1="${w * 0.3}" y1="${roofY}" x2="${w * 0.3}" y2="${roofY - 18}"/>
      <rect class="lm-board" x="${-w / 2}" y="${roofY - 52}" width="${w}" height="36" rx="8"/>
      <text class="lm-sign" x="0" y="${roofY - 28}" text-anchor="middle">${text}</text>`
  };

  const ARTIFACTS = (() => {
    const { pad, sign } = LM_HELPERS;
    return [
      // 0 · College — the drafting easel: posters, pencils, paper planes
      pad(104) + `
      <ellipse cx="4" cy="-3" rx="64" ry="10" fill="#191A1E" opacity="0.08"/>
      <line x1="-34" y1="-4" x2="6" y2="-148" stroke="#191A1E" stroke-width="3" stroke-linecap="round"/>
      <line x1="48" y1="-4" x2="16" y2="-148" stroke="#191A1E" stroke-width="3" stroke-linecap="round"/>
      <line x1="-22" y1="-48" x2="38" y2="-48" stroke="#191A1E" stroke-width="2.4"/>
      <g transform="rotate(-4 6 -104)">
        <rect class="lm lm-board" x="-50" y="-160" width="112" height="110" rx="6"/>
        <path d="M28,-148 h24 l-12,21 Z" fill="#DDD6C3" stroke="#191A1E" stroke-width="1.8"/>
        <circle cx="-16" cy="-120" r="16" class="f-acc"/>
        <rect x="-36" y="-90" width="66" height="7" rx="3.5" fill="#191A1E" opacity="0.75"/>
        <rect x="-36" y="-76" width="42" height="7" rx="3.5" fill="#191A1E" opacity="0.3"/>
      </g>
      <g transform="rotate(26 -58 -6)">
        <rect x="-62" y="-46" width="8" height="38" rx="2" fill="url(#coinGrad)" stroke="#191A1E" stroke-width="1.8"/>
        <path d="M-62,-8 h8 l-4,9 Z" fill="#191A1E"/>
      </g>
      <circle cx="66" cy="-8" r="6.5" fill="#EFEBDF" stroke="#191A1E" stroke-width="1.8"/>
      <circle cx="82" cy="-5" r="4.5" fill="#EFEBDF" stroke="#191A1E" stroke-width="1.6"/>
      <g transform="rotate(-8 -84 -142)">
        <path d="M-98,-146 l30,4 -22,10 -2,-8 Z" fill="#FFFFFF" stroke="#191A1E" stroke-width="1.8" stroke-linejoin="round"/>
      </g>
      <path d="M-64,-134 q18,10 36,6" fill="none" stroke="#191A1E" stroke-width="1.6" stroke-dasharray="4 5" opacity="0.4"/>
      <circle class="f-tint" cx="88" cy="-124" r="3"/>` + sign("EXCEL · MEC", -204, 128),
      // 1 · Moxie fitness — three activity rings closing; the dumbbell waits
      pad(96) + `
      <ellipse cx="0" cy="-3" rx="62" ry="10" fill="#191A1E" opacity="0.08"/>
      <circle cx="-8" cy="-80" r="52" fill="none" stroke="#F0E2D6" stroke-width="11"/>
      <circle cx="-8" cy="-80" r="38" fill="none" stroke="#E2E4F6" stroke-width="11"/>
      <circle cx="-8" cy="-80" r="24" fill="none" stroke="#F2E9D2" stroke-width="11"/>
      <path d="M-8,-132 A52 52 0 1 1 -60 -80" fill="none" stroke="url(#awnGrad)" stroke-width="11" stroke-linecap="round"/>
      <path d="M-8,-118 A38 38 0 1 1 -32.4 -50.9" fill="none" stroke="#3742C8" stroke-width="11" stroke-linecap="round"/>
      <path d="M-8,-104 A24 24 0 1 1 -23.4 -98.4" fill="none" stroke="url(#coinGrad)" stroke-width="11" stroke-linecap="round"/>
      <path d="M-13,-87 L-13,-73 L1,-80 Z" fill="#191A1E" stroke="#191A1E" stroke-width="3" stroke-linejoin="round"/>
      <g transform="rotate(-10 64 -14)">
        <rect x="36" y="-19" width="54" height="7" rx="3.5" fill="#191A1E"/>
        <rect x="28" y="-31" width="12" height="30" rx="5" fill="url(#domeGrad)" stroke="#191A1E" stroke-width="2"/>
        <rect x="86" y="-31" width="12" height="30" rx="5" fill="url(#domeGrad)" stroke="#191A1E" stroke-width="2"/>
      </g>
      <circle class="f-tint" cx="-76" cy="-150" r="3"/>` + sign("MOXIE", -178, 108),
      // 2 · Airstack — the stack, in the air: query in, data out
      pad(110) + `
      <ellipse cx="0" cy="-4" rx="62" ry="10" fill="#191A1E" opacity="0.09"/>
      <path class="f-acc-line" d="M0,-12 V-214" style="stroke-width:2;opacity:.3"/>
      <g transform="rotate(-3 0 -52)">
        <rect x="-80" y="-80" width="160" height="52" rx="10" fill="url(#wallGrad)" stroke="#191A1E" stroke-width="2.2"/>
        <circle class="f-acc" cx="-58" cy="-58" r="5"/>
        <rect x="-42" y="-64" width="72" height="8" rx="4" fill="#A9B0F0"/>
        <rect x="-42" y="-48" width="46" height="8" rx="4" fill="#191A1E" opacity="0.18"/>
        <circle cx="60" cy="-54" r="7" fill="none" stroke="#191A1E" stroke-width="2" opacity="0.4"/>
      </g>
      <circle class="f-acc" cx="0" cy="-94" r="4"/>
      <g transform="rotate(3 0 -122)">
        <rect x="-64" y="-148" width="128" height="46" rx="9" fill="url(#glassGrad)" stroke="#8F97E8" stroke-width="2"/>
        <circle cx="-44" cy="-128" r="5.5" fill="#FFFFFF" stroke="#8F97E8" stroke-width="2"/>
        <rect x="-30" y="-133" width="58" height="8" rx="4" fill="#FFFFFF" opacity="0.9"/>
        <rect x="-30" y="-119" width="36" height="7" rx="3.5" fill="#191A1E" opacity="0.22"/>
      </g>
      <circle class="f-acc" cx="0" cy="-160" r="4"/>
      <g transform="rotate(-2 0 -188)">
        <rect x="-48" y="-212" width="96" height="40" rx="8" fill="#FFFFFF" stroke="#191A1E" stroke-width="2.2"/>
        <path class="f-acc-line" d="M-34,-186 l14,-12 12,7 16,-14" style="stroke-width:2.4"/>
        <circle class="f-acc" cx="10" cy="-205" r="3.5"/>
      </g>
      <path d="M52,-4 v-18 h20 v18 Z" fill="#EFEBDF" stroke="#191A1E" stroke-width="2" stroke-linejoin="round"/>
      <path d="M52,-22 l7,-6 h20 l-7,6 Z" fill="#DDD6C3" stroke="#191A1E" stroke-width="2" stroke-linejoin="round"/>
      <circle class="f-tint" cx="-88" cy="-176" r="3.5"/>` + sign("AIRSTACK", -254, 138),
      // 3 · Moxie — creator tokens, fanned like collector cards
      pad(104) + `
      <g transform="rotate(-11 -66 -80)">
        <rect class="lm lm-wall" x="-104" y="-118" width="76" height="76" rx="10"/>
        <clipPath id="mxA"><rect x="-98" y="-112" width="64" height="64" rx="7"/></clipPath>
        <image href="assets/moxie/tile-1.png" x="-98" y="-112" width="64" height="64" clip-path="url(#mxA)"/>
      </g>
      <g transform="rotate(11 66 -78)">
        <rect class="lm lm-wall" x="28" y="-114" width="72" height="72" rx="10"/>
        <clipPath id="mxB"><rect x="34" y="-108" width="60" height="60" rx="7"/></clipPath>
        <image href="assets/moxie/tile-3.png" x="34" y="-108" width="60" height="60" clip-path="url(#mxB)"/>
      </g>
      <g transform="rotate(-1 0 -90)">
        <rect class="lm lm-wall" x="-42" y="-134" width="84" height="84" rx="11"/>
        <clipPath id="mxC"><rect x="-36" y="-128" width="72" height="72" rx="8"/></clipPath>
        <image href="assets/moxie/tile-2.png" x="-36" y="-128" width="72" height="72" clip-path="url(#mxC)"/>
      </g>
      <circle class="lm-coin" cx="-92" cy="-38" r="13"/>
      <circle class="lm-coin-ring" cx="-92" cy="-38" r="8"/>
      <circle class="f-acc" cx="-84" cy="-146" r="4"/>
      <path class="f-acc-line" d="M74,-150 l6,-6 M80,-138 h9" style="stroke-width:2.4"/>
      <circle class="f-tint" cx="96" cy="-120" r="3.5"/>` + sign("MOXIE", -184, 118),
      // 4 · Senpi — the master woven into the infinity loop (Hyperliquid nod)
      pad(100) + `
      <defs>
        <linearGradient id="infGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#B9BEF2"/>
          <stop offset="0.55" stop-color="#3742C8"/>
          <stop offset="1" stop-color="#6A74E8"/>
        </linearGradient>
      </defs>
      <ellipse cx="-6" cy="-2" rx="48" ry="9" fill="#191A1E" opacity="0.10"/>
      <path d="M0,-46 C38,-88 104,-88 104,-46 C104,-4 38,-4 0,-46 C-38,-88 -104,-88 -104,-46 C-104,-4 -38,-4 0,-46"
        fill="none" stroke="#3742C8" stroke-width="18" stroke-linecap="round" opacity="0.10"/>
      <path d="M0,-46 C38,-88 104,-88 104,-46 C104,-4 38,-4 0,-46 C-38,-88 -104,-88 -104,-46 C-104,-4 -38,-4 0,-46"
        fill="none" stroke="url(#infGrad)" stroke-width="9" stroke-linecap="round"/>
      <image href="assets/senpi/mascot-zen.png" x="-64" y="-87" width="110" height="87" preserveAspectRatio="xMidYMid meet"/>
      <circle cx="52" cy="-77.5" r="7" fill="#3742C8" stroke="#FAF9F5" stroke-width="2.5"/>
      <path class="f-acc-line" d="M-128,-118 l8,-10 8,6 11,-13" style="stroke-width:2.4"/>
      <circle class="f-tint" cx="126" cy="-118" r="3.5"/>
      <circle class="f-ink" cx="-118" cy="-46" r="2.6"/>` + sign("SENPI", -168, 104)
    ];
  })();

  /* ---------------- helpers ---------------- */

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const devParams = new URLSearchParams(location.search);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches || (devParams.has("dev") && devParams.has("static"));

  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

  /* ---------------- render stage panels ---------------- */

  const panelsEl = $("#evoPanels");
  const evoSection = $("#evolution");
  const track = $("#evoTrack");

  function lineageHTML(active) {
    const chain = [["senpi", "Senpi", "2025–26"], ["moxie", "Moxie", "2023–25"], ["airstack", "Airstack", "2022–23"]];
    return `<p class="evo__lineage">${chain.map(([k, n, y]) =>
      `<span class="ln"><b class="${k === active ? "on" : ""}">${n}</b><small>${y}</small></span>`).join(`<i>←</i>`)}</p>`;
  }

  function panelHTML(st) {
    return `
      <span class="evo__year">${esc(st.chapter ? "2022 – Present" : st.year)}${st.who ? `<em class="evo__who"> · ${esc(st.who)}</em>` : ""}</span>
      <h3 class="evo__role">${esc(st.role)}</h3>
      ${st.chapter ? lineageHTML(st.chapter) : ""}
      ${st.big ? `<p class="evo__big">${esc(st.big)}</p>` : ""}
      <p class="evo__copy">${st.copy}</p>
      ${st.metrics && st.metrics.length ? `<div class="evo__metrics">${st.metrics.map(m =>
        `<div class="evo__metric">${esc(m.v)}<small>${esc(m.l)}</small></div>`).join("")}</div>` : ""}
      ${st.imgs && st.imgs.length ? `<div class="evo__imgs">${st.imgs.map(i =>
        i.startsWith("assets/")
          ? (/app-(?!home)|old-/.test(i)
              ? `<div class="appshot appshot--mini"><img src="${i}" alt="" loading="lazy"></div>`
              : /deposit|funded|fund-wallet|app-home/.test(i)
                ? `<div class="shot shot--mini-tall"><img src="${i}" alt="" loading="lazy"></div>`
                : `<div class="shot shot--mini"><img src="${i}" alt="" loading="lazy"></div>`)
          : `<div class="ph"><span>[ IMAGE — ${esc(i)} ]</span></div>`).join("")}</div>` : ""}
    `;
  }

  if (panelsEl) {
    ORDER.forEach((st, i) => {
      const d = document.createElement("article");
      d.className = "evo__panel" + (i === 0 ? " active" : "");
      d.innerHTML = panelHTML(st);
      panelsEl.appendChild(d);
    });
  }

  /* static fallback content (reduced motion) */
  const staticEl = $("#evoStatic");
  if (staticEl) {
    staticEl.innerHTML =
      `<div class="section-head" style="padding-top:64px"><p class="kicker">The evolution · today → 2019</p>
       <h2>Seven years. Four products. Three evolutions — walked backwards.</h2></div>` +
      ORDER.map(st => `
        <div class="evo-static__item">
          <span class="evo__year">${esc(st.year)}</span>
          <div>
            <h3 class="evo__role" style="font-size:26px">${esc(st.role)}</h3>
            ${st.who ? `<p class="evo__org">${esc(st.who)}</p>` : ""}
            ${st.chapter ? lineageHTML(st.chapter) : ""}
            <p class="evo__copy">${st.copy}</p>
            ${st.metrics && st.metrics.length ? `<div class="evo__metrics">${st.metrics.map(m =>
              `<div class="evo__metric">${esc(m.v)}<small>${esc(m.l)}</small></div>`).join("")}</div>` : ""}
          </div>
        </div>`).join("");
  }

  /* ---------------- globe artifacts ---------------- */

  // halftone dot field — the globe's surface texture, orbiting with the world
  const dotField = $("#dotField");
  if (dotField) {
    const ns = "http://www.w3.org/2000/svg";
    let i = 0;
    for (let r = 56; r <= 420; r += 56) {
      const n = Math.max(10, Math.round((2 * Math.PI * r) / 54));
      for (let k = 0; k < n; k++) {
        const a = (k / n) * Math.PI * 2 + r * 0.7;
        const dot = document.createElementNS(ns, "circle");
        dot.setAttribute("cx", (r * Math.cos(a)).toFixed(1));
        dot.setAttribute("cy", (r * Math.sin(a)).toFixed(1));
        const acc = i % 19 === 0;
        dot.setAttribute("r", acc ? 3 : 2.4);
        dot.setAttribute("fill", acc ? "var(--accent)" : "var(--ink)");
        dot.setAttribute("opacity", acc ? "0.22" : "0.09");
        dotField.appendChild(dot);
        i++;
      }
    }
  }

  const artGroups = [];
  const artLayer = $("#artifacts");
  const drift = $("#drift");
  let trailArc = null, trailHead = null, trailPt = null;
  if (artLayer) {
    // the walked trail: grows from the Senpi anchor to wherever the walker is now
    (function () {
      const ns = "http://www.w3.org/2000/svg";
      trailPt = (deg) => {
        const r = 414, a = deg * Math.PI / 180;
        return [(r * Math.sin(a)).toFixed(1), (-r * Math.cos(a)).toFixed(1)];
      };
      trailArc = document.createElementNS(ns, "path");
      trailArc.setAttribute("style", "fill:none;stroke:var(--accent);stroke-width:3;stroke-opacity:.4;stroke-linecap:round");
      artLayer.appendChild(trailArc);
      const [sx, sy] = trailPt(9);
      const start = document.createElementNS(ns, "circle");
      start.setAttribute("cx", sx); start.setAttribute("cy", sy); start.setAttribute("r", "5");
      start.setAttribute("style", "fill:var(--accent);opacity:.55");
      artLayer.appendChild(start);
      trailHead = document.createElementNS(ns, "circle");
      trailHead.setAttribute("r", "5");
      trailHead.setAttribute("style", "fill:var(--accent);opacity:.55");
      artLayer.appendChild(trailHead);
    })();
    ORDER.forEach((st, i) => {
      const theta = i * STEP + 8;
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("transform", `rotate(${theta})`);
      const inner = document.createElementNS("http://www.w3.org/2000/svg", "g");
      inner.setAttribute("transform", "translate(0,-430) scale(0.8)");
      inner.innerHTML =
        `<line class="globe-line" x1="-14" y1="0" x2="14" y2="0" style="stroke-opacity:.45"/>` +
        `<text class="art-label" x="0" y="42" text-anchor="middle">${st.year}</text>` +
        ARTIFACTS[N - 1 - i];
      g.appendChild(inner);
      artLayer.appendChild(g);
      artGroups.push({ g, theta });

      // waypoint marks between eras — small sparks floating over the surface
      if (i < N - 1) {
        const w = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const wTheta = theta + STEP / 2;
        w.setAttribute("transform", `rotate(${wTheta})`);
        const marks = [
          `<rect class="f-acc-soft" x="-5" y="-460" width="10" height="10" rx="3" transform="rotate(45 0 -455)"/>`,
          `<circle class="f-tint" cx="-6" cy="-456" r="4"/><circle class="f-acc" cx="7" cy="-464" r="2.6"/>`,
          `<circle class="f-tint" cx="0" cy="-450" r="2.6"/><circle class="f-tint" cx="0" cy="-462" r="2.6"/><circle class="f-acc" cx="0" cy="-474" r="2.6"/>`
        ];
        w.innerHTML = `<line class="globe-line" x1="-8" y1="-430" x2="8" y2="-430" style="stroke-opacity:.3"/>` + marks[i % marks.length];
        artLayer.appendChild(w);
        artGroups.push({ g: w, theta: wTheta, dim: 0.8 });
      }
    });
  }

  /* ---------------- scroll engine ---------------- */

  const globeRot = $("#globeRot");
  const railDot = $("#railDot");
  const railYear = $("#railYear");
  const hint = $("#evoHint");
  const charSvg = $(".evo__char svg");
  const legL = $("#legL"), legR = $("#legR"), armL = $("#armL"), armR = $("#armR");
  const panels = $$(".evo__panel");

  let currentStage = 0;
  let ticking = false;
  let loc = "Top";   // current-location label — declared before the first frame() runs
  if (railYear) railYear.textContent = ORDER[0].year;

  function setStage(i) {
    if (i === currentStage) return;
    panels[currentStage] && panels[currentStage].classList.remove("active");
    panels[i] && panels[i].classList.add("active");
    currentStage = i;
    if (railYear) railYear.textContent = ORDER[i].year;
    updateLoc();
  }

  function pose(phase) {
    const a = 26 * Math.sin(phase);
    if (legL) legL.setAttribute("transform", `rotate(${a} 20 38)`);
    if (legR) legR.setAttribute("transform", `rotate(${-a} 20 38)`);
    if (armL) armL.setAttribute("transform", `rotate(${-a * 0.6} 20 21)`);
    if (armR) armR.setAttribute("transform", `rotate(${a * 0.6} 20 21)`);
    if (charSvg) charSvg.style.transform = `translateY(${-1.6 * Math.abs(Math.sin(phase))}px) scaleX(-1)`;   // faces the present, backs into the past
  }

  let FROZEN = null;   // ?dev&freeze pins renderP at one stage; resync listeners must respect it

  function frame() {
    ticking = false;
    if (FROZEN != null) { renderP(FROZEN); return; }
    const rect = track.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    renderP(clamp(-rect.top / total, 0, 1));
  }

  function renderP(p) {
    const seg = p * (N - 1);
    const units = Math.min(seg, N - 1);                  // linear — globe turns continuously with scroll

    const rot = -units * STEP;   // anticlockwise as you scroll down, present → past
    if (globeRot) globeRot.setAttribute("transform", `rotate(${rot})`);

    if (trailArc) {
      const aEnd = 9 + units * STEP;
      const [x1, y1] = trailPt(9), [x2, y2] = trailPt(aEnd);
      trailArc.setAttribute("d", aEnd > 9.6 ? `M${x1},${y1} A414,414 0 0 1 ${x2},${y2}` : "");
      trailHead.setAttribute("cx", x2); trailHead.setAttribute("cy", y2);
    }

    // artifact fade by angular distance from top
    for (const a of artGroups) {
      let eff = ((a.theta + rot) % 360 + 360) % 360;
      const dist = Math.min(eff, 360 - eff);
      const alpha = clamp(1 - (dist - 24) / 30, 0, 1);
      a.g.style.opacity = (alpha * (a.dim || 1)).toFixed(3);
    }

    setStage(clamp(Math.round(seg), 0, N - 1));
    pose(seg * Math.PI * 5.6);                           // stride follows raw scroll — no freeze during dwell

    if (drift) drift.setAttribute("transform", `translate(${(-46 * p).toFixed(1)}, ${(26 * p).toFixed(1)})`);
    if (railDot) railDot.style.top = (p * 100) + "%";
    if (hint) hint.style.opacity = p > 0.015 ? "0" : "1";
  }

  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  }

  if (reduceMotion || !track) {
    if (evoSection) evoSection.classList.add("evo--static");
  } else {
    track.style.height = (N * VH_PER_STAGE) + "vh";
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) frame(); });
    window.addEventListener("pageshow", () => frame());
    frame();
  }

  function scrollToStage(i) {
    if (reduceMotion) {
      staticEl && staticEl.scrollIntoView({ block: "start" });
      return;
    }
    const total = track.offsetHeight - window.innerHeight;
    const y = track.getBoundingClientRect().top + window.scrollY + (i / (N - 1)) * total;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  /* ---------------- current location ---------------- */

  function updateLoc() {
    const el = $("#mapLoc");
    if (!el) return;
    el.textContent = loc === "The evolution" ? `The evolution — ${ORDER[currentStage].year}` : loc;
  }
  const locIO = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { loc = e.target.dataset.loc; updateLoc(); }
    }
  }, { rootMargin: "-45% 0px -45% 0px" });
  $$("[data-loc]").forEach(el => locIO.observe(el));

  /* ---------------- product map ---------------- */

  const map = $("#map");
  const openBtns = [$("#mapOpen"), $("#footMap")].filter(Boolean);
  const closeBtn = $("#mapClose");

  // build the evolution lens from stage data
  const lensEvo = $("#lensEvolution");
  if (lensEvo) {
    lensEvo.innerHTML = ORDER.map((st, i) => `
      <button class="map-node" data-goto-stage="${i}">
        <span class="map-node__tag">${esc(st.year)}</span>
        <span class="map-node__name">${esc(st.role)}<small>${esc(st.sub)}</small></span>
        <span class="map-node__go">→</span>
      </button>`).join("");
  }

  function openMap() {
    updateLoc();
    // mark current stage in evolution lens
    $$(".map-node", lensEvo).forEach((n, i) => n.classList.toggle("here", loc === "The evolution" && i === currentStage));
    map.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn && closeBtn.focus();
  }
  function closeMap() {
    map.classList.remove("open");
    document.body.style.overflow = "";
  }

  openBtns.forEach(b => b.addEventListener("click", (e) => { e.preventDefault(); openMap(); }));
  closeBtn && closeBtn.addEventListener("click", closeMap);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && map.classList.contains("open")) closeMap(); });

  // lens tabs
  $$(".map__tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".map__tab").forEach(t => t.classList.toggle("active", t === tab));
      $$(".map__lens").forEach(l => l.classList.toggle("active", l.dataset.lens === tab.dataset.lens));
    });
  });

  // node actions
  document.addEventListener("click", (e) => {
    const stageBtn = e.target.closest("[data-goto-stage]");
    if (stageBtn) { closeMap(); scrollToStage(parseInt(stageBtn.dataset.gotoStage, 10)); return; }
    const selBtn = e.target.closest("[data-goto-sel]");
    if (selBtn) {
      closeMap();
      const t = $(selBtn.dataset.gotoSel);
      t && t.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  });

  // dev preview: ?stage=N renders that stage pinned at the top of the page
  const params = new URLSearchParams(location.search);
  const DEV = params.has("dev");   // capture/debug modes only work with &dev
  if (DEV && params.has("flow")) {
    const h = $(".hero"); if (h) h.style.display = "none";
    if (evoSection) evoSection.style.display = "none";
  }
  if (DEV && params.has("hide")) {
    params.get("hide").split(",").forEach(id => { const el = document.getElementById(id); if (el) el.style.display = "none"; });
  }
  if (DEV && (params.has("all") || params.has("flow"))) {
    document.querySelectorAll(".rv").forEach(el => el.classList.add("in"));
    document.querySelectorAll(".funnel__bar").forEach(b => { b.style.transition = "none"; b.style.width = b.dataset.w; });
  }
  if (params.has("stage") && track && !reduceMotion) {
    const devP = clamp(parseFloat(params.get("stage")) / (N - 1), 0, 1);
    if (DEV && params.has("freeze")) {
      // capture mode: pin one stage at the top of the page (hides the hero)
      const hero = $(".hero");
      if (hero) hero.style.display = "none";
      document.querySelectorAll(".rv").forEach(el => el.classList.add("in"));
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      FROZEN = devP;
      renderP(devP);
      window.addEventListener("load", () => setTimeout(() => renderP(devP), 60));
    } else {
      // live jump: scroll the real page to that stage, everything stays interactive
      const jump = () => {
        const total = track.offsetHeight - window.innerHeight;
        const y = track.getBoundingClientRect().top + window.scrollY + devP * total;
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, y);
        document.documentElement.style.scrollBehavior = "";
        frame();
      };
      jump();
      window.addEventListener("load", () => setTimeout(jump, 50));
    }
  }

  // arriving from a case page's EXPLORE button
  if (new URLSearchParams(location.search).has("map")) openMap();

  /* ---------------- reveals ---------------- */

  // replay the active panel's load-in when the evolution section first scrolls into view
  if (evoSection && !reduceMotion && "IntersectionObserver" in window) {
    const evoIO = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (!e.isIntersecting) return;
        const p = $$(".evo__panel")[currentStage];
        if (p) { p.classList.remove("active"); void p.offsetWidth; p.classList.add("active"); }
        evoIO.unobserve(e.target);
      });
    }, { threshold: 0.35 });
    evoIO.observe($(".evo__stick") || evoSection);
  }

  const rvIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rvIO.unobserve(e.target); } });
  }, { threshold: 0.3, rootMargin: "0px 0px -12% 0px" });
  $$(".rv").forEach(el => rvIO.observe(el));

  /* ---------------- funnel bars ---------------- */

  const funnel = $("#funnel");
  if (funnel) {
    const fIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          $$(".funnel__bar", funnel).forEach(b => { b.style.width = b.dataset.w; });
          fIO.disconnect();
        }
      });
    }, { threshold: 0.4 });
    fIO.observe(funnel);
  }
})();
