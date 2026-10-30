(() => {
  "use strict";

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const smooth = t => t * t * (3 - 2 * t);

  /* ------------------------------------------------------------------
   * Stickers. x / y are percentages of the photo (900 × 1200).
   * era = which résumé entry slaps them on.
   * ------------------------------------------------------------------ */
  // a number always carries its own caption, so a sticker never needs the backstory
  const stat = (num, cap, style = "") => `<div class="st__body" style="${style}"><span class="st__num">${num}</span><span class="st__cap">${cap}</span></div>`;
  const STICKERS = [
    // 0 · College
    { era: 0, x: 27, y: 55, r: 7, cls: "st--photo", html: `<div class="st__body"><img src="assets/college/excel-kryptos.jpg" alt="" style="width:118px;height:148px;object-fit:cover"></div>` },
    { era: 0, x: 71, y: 37, r: 12, cls: "st--round", html: `<div class="st__body" style="width:104px;height:104px;background:#1f2a6b;color:#fbfaf6"><span style="font-size:11px;letter-spacing:.14em;font-weight:700;opacity:.8">CGPA</span><span style="font-size:38px;line-height:1">9.4</span></div>` },
    // 1 · Freelance
    { era: 1, x: 37, y: 61, r: -14, cls: "st--round", html: `<div class="st__body" style="width:92px;height:92px"><svg width="54" height="54" viewBox="0 0 40 40"><path d="M20 4 30 19 23.5 34h-7L10 19z" fill="#12141a"/><circle cx="20" cy="19" r="2.8" fill="#fbfaf6"/><path d="M20 4v12" stroke="#fbfaf6" stroke-width="1.5"/></svg></div>` },
    // 2 · Moxie fitness
    { era: 2, x: 48, y: 70, r: -4, cls: "st--round", html: `<div class="st__body" style="width:108px;height:108px;background:#111"><svg width="88" height="88" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="none" stroke="#fa114f" stroke-width="4.4" stroke-dasharray="80 95" stroke-linecap="round" transform="rotate(-90 20 20)"/><circle cx="20" cy="20" r="10" fill="none" stroke="#7ed321" stroke-width="4.4" stroke-dasharray="48 63" stroke-linecap="round" transform="rotate(-90 20 20)"/><circle cx="20" cy="20" r="5" fill="none" stroke="#1ec8e8" stroke-width="4" stroke-dasharray="26 32" stroke-linecap="round" transform="rotate(-90 20 20)"/></svg></div>` },
    { era: 2, x: 14, y: 78, r: -6, cls: "st--stat", html: stat("2.5×", "referral signups", "background:#d9f56b") },
    { era: 2, x: 84, y: 60, r: 18, html: `<div class="st__body" style="padding:12px 14px"><svg width="86" height="34" viewBox="0 0 86 34"><rect x="2" y="6" width="10" height="22" rx="3" fill="#12141a"/><rect x="13" y="2" width="12" height="30" rx="3" fill="#fa4f2b"/><rect x="25" y="14" width="36" height="6" rx="3" fill="#12141a"/><rect x="61" y="2" width="12" height="30" rx="3" fill="#fa4f2b"/><rect x="74" y="6" width="10" height="22" rx="3" fill="#12141a"/></svg></div>` },
    // 3 · Airstack
    { era: 3, x: 60, y: 80, r: 8, html: `<div class="st__body" style="font-size:30px;font-weight:700;color:#e535ab">{ query }</div>` },
    { era: 3, x: 72, y: 69, r: -10, cls: "st--round", html: `<div class="st__body" style="width:104px;height:104px"><svg width="70" height="70" viewBox="0 0 40 40"><g stroke="#12141a" stroke-width="2.2" stroke-linejoin="round"><path d="M7 27l13 6.5L33 27l-13-6.5z" fill="#c9cdf6"/><path d="M7 20l13 6.5L33 20l-13-6.5z" fill="#8f97ea"/><path d="M7 13l13 6.5L33 13 20 6.5z" fill="#3742c8"/></g></svg></div>` },
    // 4 · Moxie creator economy
    { era: 4, x: 43, y: 81, r: -9, cls: "st--photo", html: `<div class="st__body"><img src="assets/stickers/monster-a.png" alt="" style="width:110px;height:110px"></div>` },
    { era: 4, x: 87, y: 73, r: 11, cls: "st--photo", html: `<div class="st__body"><img src="assets/stickers/monster-b.png" alt="" style="width:100px;height:100px"></div>` },
    { era: 4, x: 66, y: 91, r: -5, cls: "st--stat", html: stat("10K+", "creator token launches", "background:#8a63d2;color:#fbfaf6") },
    // 5 · Senpi
    { era: 5, x: 81, y: 87, r: 6, cls: "st--cut", html: `<img src="assets/senpi/mascot-zen.png" alt="" style="width:190px">` },
    { era: 5, x: 13, y: 41, r: -7, cls: "st--cut", html: `<img src="assets/stickers/ninja-bull.png" alt="" style="width:150px">` },
    { era: 5, x: 49, y: 93, r: 9, cls: "st--cut", html: `<img src="assets/stickers/ninja-lock.png" alt="" style="width:92px">` },
    { era: 5, x: 88, y: 53, r: -8, cls: "st--stat", html: stat("$418M", "trading volume", "background:#12141a;color:#fbfaf6") },
    { era: 5, x: 29, y: 94, r: 6, cls: "st--stat", html: stat("1M+", "agent-executed trades", "background:#4c6ef5;color:#fbfaf6") },
  ];

  const stickerHost = $("#stickers");
  const stickerEls = STICKERS.map((s, i) => {
    const el = document.createElement("div");
    el.className = "st " + (s.cls || "");
    el.style.cssText = `--x:${s.x}%;--y:${s.y}%;--r:${s.r}deg;--d:${(i % 5) * 0.07}s`;
    el.innerHTML = s.html;
    el.dataset.era = s.era;
    stickerHost.appendChild(el);
    return el;
  });

  /* ------------------------------------------------------------------
   * Work cards
   * ------------------------------------------------------------------ */
  const ROLE = "Co-founder · Design lead";
  const CTA = "Read the full case study";
  const WORK = [
    {
      name: "Senpi",
      vis: {
        p: { img: "assets/senpi/web-landing.png" },
        e: { stat: "~1%", cap: "of sign-ups funded a wallet" },
        d: { img: "assets/senpi/detail-trust-wallet.png" },
        t: { img: "assets/senpi/meta-detail.png" },
        r: { stat: "11%", from: "~1%", cap: "signup-to-funded" },
      },
      q: "How do you make AI trustworthy when it controls money?",
      desc: "an AI-native trading platform for Hyperliquid perps. Describe a strategy in plain English and an agent runs it.",
      cover: "assets/senpi/live-scans.png", link: "senpi.html",
      decision: {
        p: "People were asked to trust an autonomous system with money before they could see how it behaved.",
        e: "~1% signup-to-funded, yet nearly everyone who funded went on to trade. Agent activity no one could see.",
        d: "Make the agent visible, explain its decisions, and keep consequential actions under the user's control.",
        t: "Transparency can become telemetry. Show the decisions that matter, not everything.",
        r: "Signup-to-funded rose from ~1% to 11% across the onboarding, funding and trust work.",
      },
      rows: [
        { t: "Trust is decided at the deposit screen", k: "Funding", img: "assets/senpi/fund-wallet.png",
          body: ["Funding used to be a QR code, an address and a row of network chips. Technically complete, and no help to a nervous person.",
                 "I rebuilt it around the questions people don't ask out loud: is my money safe, what can the agent do, who is behind this. Reassure at the moment of fear. Stay quiet everywhere else."] },
        { t: "View all scans, the agent made visible", k: "Visibility", img: "assets/senpi/live-scans.png",
          body: ["An agent makes hundreds of decisions that never become trades. Show only the trades and people see nothing happening.",
                 "The decision timeline shows what the agent considered, acted on and skipped, and why. Enough to understand it, without raw telemetry."] },
        { t: "Positions that explain themselves", k: "Understanding", img: "assets/senpi/meta-thesis.png",
          body: ["Every position carries its thesis, its evidence, the condition that would end it, and a conviction score.",
                 "A losing trade then reads as “the strategy believed X, and Y invalidated it”, not “the AI lost my money”. With an autonomous system, that difference is everything."] },
        { t: "Permissions by consequence, not by tool", k: "Control", img: "assets/senpi/allow-ux.png",
          body: ["The old model interrupted people on harmless actions and stayed silent on consequential ones.",
                 "Approvals now describe the outcome, not the tool: this is what the agent is about to do, proceed? Intervene where the consequence is."] },
      ],
      facts: ["1M+ agent-executed trades", "$418M volume", "~1% → 11% funded"],
    },
    {
      name: "Senpi",
      head: "In October 2026 Senpi dropped its trading fee to 0% and became a pure subscription business.",
      q: "What makes someone pay for an AI quant?",
      desc: "a pure subscription business after dropping its trading fee to 0%.",
      cover: "assets/senpi-fees/plans.webp", link: "subscriptions.html",
      vis: {
        p: { img: "assets/senpi-fees/banner.webp" },
        e: { stat: "37.6%", cap: "paid among users who funded a strategy in 3 days and came back", note: "against 3.3% of everyone new" },
        d: { img: "assets/senpi-fees/announce-modal.png" },
        t: { img: "assets/senpi-fees/plans.webp" },
        r: { stat: "46%", cap: "more users net positive over 90 days, re-priced at zero" },
      },
      decision: {
        p: "A fee on every trade made Senpi look like one more app, and the professionals who drive the volume avoid those.",
        e: "84% of non-market-maker volume carries no app fee. 3.3% of new users paid; 37.6% of those who funded a strategy and came back did.",
        d: "0% fees on paid plans, then a first week rebuilt around one path: pick a strategy, preview it, go live.",
        t: "We gave up the fee, about $3K a month. Accounts without a plan still pay 0.03%, so subscribing has a reason.",
        r: "Re-priced at zero, 46% more users would have ended the last 90 days net positive.",
      },
      rows: [
        { t: "Saying 0% once, loudly", k: "Launch", img: "assets/senpi-fees/announce-modal.png",
          body: ["One announcement where intent is high: 0%, then the comparison that makes it mean something, MetaMask, Phantom and Rabby.",
                 "The small print stays honest on the modal itself: trial trades carry a 0.03% fee. Everywhere else, one dismissible banner."] },
        { t: "Plans that sell capacity, not fee tiers", k: "Plans", img: "assets/senpi-fees/plans.webp",
          body: ["0% fees became a line on every plan, not the pitch. Plans climb on what the agent can do: credits, strategies at once, new strategies a month.",
                 "Usage sits one tap from the composer, so the next plan shows up as a need, not an ad."] },
        { t: "Cut what didn't lead to a strategy", k: "Onboarding", stat: "0%", statCap: "paid after opening with “Scan Senpi Signals” or “Fund my wallet”",
          body: ["The wallet step left onboarding: most wallets added at signup had no Hyperliquid trading to read.",
                 "Starters that led nowhere came off Get started, giving the stage to the one that works, “Help me choose a trading strategy”, and a video bar that leads to the same first strategy."] },
        { t: "Design the moments people pay", k: "Paywall", img: "assets/senpi-fees/detail-usage.png",
          body: ["People pay when the trial ends with money running, when credits run out, or at checkout.",
                 "Starter limits now point heavy users at the next plan, and paid-before-use buyers go straight into a guided first strategy."] },
      ],
      facts: ["0% Senpi fee on paid plans", "37.6% vs 3.3% paid", "46% more users net positive"],
    },
    {
      name: "Moxie",
      vis: {
        p: { img: "assets/moxie/cover.jpg" },
        e: { stat: "5–8", cap: "states in one Frames journey" },
        d: { img: "assets/moxie/detail-curve.png" },
        t: { img: "assets/moxie/detail-orders.png" },
        r: { stat: "10K+", cap: "creator token launches" },
      },
      q: "How do you make crypto understandable?",
      desc: "a platform to launch, discover and trade creator tokens, from Farcaster Frames to in-house to AI trading.",
      cover: "assets/moxie/cover.jpg", link: "moxie.html",
      decision: {
        p: "Supporting a creator meant first understanding wallets, tokens, liquidity and DEXs.",
        e: "Recurring questions about token mechanics, pricing and transaction states. Frames journeys 5–8 states long.",
        d: "Translate crypto mechanics into familiar actions and keep the complexity inside the product.",
        t: "Lead with clarity and the decision, not every technical detail.",
        r: "A constrained social experiment became a full product for discovering and trading onchain assets.",
      },
      rows: [
        { t: "Creator coins, launched inside Farcaster Frames", k: "10K+ launches", img: "assets/moxie/feed-cards.png",
          body: ["Frames put the product where discovery already happened: see a creator, view the token, buy and confirm without leaving the feed.",
                 "10,000+ launches and $5M+ onchain volume proved the idea, and exposed its limit: button-driven journeys with nowhere to hold context."] },
        { t: "The bonding curve, made touchable", k: "Translate", img: "assets/moxie/price-curve.png",
          body: ["Moving in-house came with one rule: don't teach crypto, translate it.",
                 "A bonding curve became “how does the price change?” Market cap became “how big is this economy?” Complexity was revealed progressively, not hidden."] },
        { t: "Trading as a decision, not a transaction builder", k: "5–8 → 1–3 states", img: "assets/moxie/open-orders.png",
          body: ["What am I buying, what am I paying, what will I get, what happens next. All on one screen.",
                 "Sequential button states collapsed into a few primary screens."] },
        { t: "Ask the market a question", k: "AI", img: "assets/moxie/ai-chat.png",
          body: ["“Why did this go up today?” “Buy $100 of this.” Search, inspect, configure, trade became ask, understand, act.",
                 "For anything consequential, people still saw what the agent understood, what it would cost and what they would get before it executed."] },
      ],
      facts: ["10,000+ creator token launches", "$5M+ onchain volume"],
    },
    {
      name: "Airstack",
      vis: {
        p: { img: "assets/airstack/explorer-landing.jpg" },
        e: { stat: "POC", cap: "built just to learn if the data fit" },
        d: { img: "assets/airstack/token-details.jpg" },
        t: { img: "assets/airstack/detail-builder.png" },
        r: { stat: "100+", cap: "startups adopted the APIs" },
      },
      q: "How do you make infrastructure tangible?",
      desc: "blockchain data APIs for developers: identities, tokens and activity across chains, queried through GraphQL.",
      cover: "assets/airstack/explorer-landing.jpg", link: "airstack.html",
      decision: {
        p: "Developers couldn't see the data's value without building a proof of concept first.",
        e: "Customer calls, support questions, and the same proof-of-concept pattern again and again.",
        d: "Let developers experience the data before asking them to integrate it.",
        t: "Explorer couldn't be a demo. Real data, production-ready queries.",
        r: "The path became docs, exploration, a working query, then integration.",
      },
      rows: [
        { t: "Explorer, the API you can see", k: "Experience first", img: "assets/airstack/explorer-landing.jpg",
          body: ["Developers were spending engineering time just to learn whether the data could solve their problem.",
                 "Explorer let them browse identities, tokens and activity across chains, with a production-ready query behind every view. Take the query, ship it."] },
        { t: "Studio, plain language in, GraphQL out", k: "Natural language", img: "assets/airstack/studio.png",
          body: ["Knowing what you want and expressing it in GraphQL are different problems.",
                 "Studio wrote the query from a sentence and kept the GraphQL visible and editable. AI removed the syntax barrier without becoming a black box."] },
        { t: "Community, has someone already solved this?", k: "Shared queries", img: "assets/airstack/community.jpg",
          body: ["Useful queries were being rewritten one developer at a time, out of sight.",
                 "We made Studio a place to publish queries, ask questions and improve each other's work. Individual fixes became shared knowledge."] },
      ],
      facts: ["100+ startups adopted the APIs", "Coinbase Wallet + leading apps"],
    },
  ];

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ------------------------------------------------------------------
   * Work: each project is told one beat at a time on a pinned stage.
   * Problem → Evidence → Decision → Trade-off → Result → What I designed,
   * one statement and one visual on screen at once.
   * ------------------------------------------------------------------ */
  const STEPS = [["p", "Problem"], ["e", "Evidence"], ["d", "Decision"], ["t", "Trade-off"], ["r", "Result"], ["w", "What I designed"]];
  const PER = STEPS.length;
  const TOTAL = 1 + WORK.length * PER;                 // intro + every project's beats
  const INTRO_T = "Four problems I couldn't stop thinking about.";
  const INTRO_B = "Different products, one habit: look past the feature request for the problem underneath. Over five years the problems got harder, from usable infrastructure to understandable markets to trustworthy autonomy, and what people will pay for it.";
  const stageEl = $("#workStage"), segEl = $("#workSeg"), staticEl = $("#worksStatic");
  const two = n => String(n).padStart(2, "0");

  const visHTML = (v, si) => v.stat
    ? `<figure class="vis vis--stat" data-s="${si}"><b data-stat="${esc(v.stat)}">${esc(v.stat)}</b><span>${esc(v.cap)}</span>${v.note ? `<small>${esc(v.note)}</small>` : v.from ? `<small>up from ${esc(v.from)}</small>` : ""}</figure>`
    : `<figure class="vis" data-s="${si}"><img src="${v.img}" alt="" decoding="async"></figure>`;
  const factsHTML = w => `<p class="wfacts"><b>${ROLE}</b>${w.facts.map(f => `<span>${esc(f)}</span>`).join("")}</p>`;
  const beatsHTML = (w, ci) => w.rows.map((r, ri) =>
    `<button class="wbeat" type="button" data-c="${ci}" data-r="${ri}"><span class="wbeat__k">${esc(r.k)}</span><span class="wbeat__t">${esc(r.t)}</span><span class="wbeat__go" aria-hidden="true">→</span></button>`).join("");

  stageEl.innerHTML = `
    <div class="ws-intro" data-k="0">
      <div>
        <h3 class="ws-intro__t">${INTRO_T}</h3>
        <p class="ws-intro__b">${INTRO_B}</p>
      </div>
      <ol class="ws-index">
        ${WORK.map((w, ci) => `<li><button type="button" data-go="${1 + ci * PER}"><span>${two(ci + 1)}</span><b>${esc(w.q)}</b><em>${esc(w.name)}</em></button></li>`).join("")}
      </ol>
    </div>
    ${WORK.map((w, ci) => `
    <article class="wp" data-p="${ci}">
      <header class="wp__head">
        <div class="wsw">
          <button class="wp__no wsw__btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Switch project"><span class="wsw__label">${two(ci + 1)}<span> / ${two(WORK.length)}</span> · ${esc(w.name)}</span><i class="wsw__chev" aria-hidden="true"></i></button>
          <ul class="wsw__menu" role="menu">
            ${WORK.map((o, oi) => `<li role="none"><button type="button" role="menuitem" data-go="${1 + oi * PER}" data-instant="1"${oi === ci ? ' aria-current="true"' : ""}><span>${two(oi + 1)}</span><b>${esc(o.name)}</b><em>${esc(o.q)}</em></button></li>`).join("")}
          </ul>
        </div>
        <h3 class="wp__q">${esc(w.q)}</h3>
        <p class="wp__desc">${w.head ? esc(w.head) : `${esc(w.name)} is ${esc(w.desc)}`}</p>
      </header>
      <ol class="wp__rail">
        ${STEPS.map(([, label], si) => `<li data-s="${si}"><button type="button" data-go="${1 + ci * PER + si}"><i></i>${label}</button></li>`).join("")}
      </ol>
      <div class="wp__say">
        ${STEPS.slice(0, 5).map(([key, label], si) => `<div class="say" data-s="${si}"><span class="say__k">${label}</span><p class="say__t">${esc(w.decision[key])}</p></div>`).join("")}
        <div class="say say--beats" data-s="5"><span class="say__k">What I designed</span><div class="wbeats">${beatsHTML(w, ci)}</div></div>
      </div>
      <div class="wp__vis">
        ${STEPS.slice(0, 5).map(([key], si) => visHTML(w.vis[key], si)).join("")}
        ${w.rows.map((r, ri) => r.img
          ? `<figure class="vis vis--beat" data-s="5" data-r="${ri}"><img src="${r.img}" alt="" decoding="async"></figure>`
          : `<figure class="vis vis--beat vis--stat" data-s="5" data-r="${ri}"><b>${esc(r.stat)}</b><span>${esc(r.statCap)}</span></figure>`).join("")}
      </div>
      <footer class="wp__foot">
        <a class="wcta" href="${w.link}">${CTA}<span aria-hidden="true">→</span></a>
        ${factsHTML(w)}
      </footer>
    </article>`).join("")}`;
  segEl.innerHTML = WORK.map(w => `<span title="${esc(w.name)}"><i></i></span>`).join("");

  // phone + reduced motion: the same story, stacked, revealed as it scrolls in
  staticEl.innerHTML = `
    <div class="wst-intro rvw"><h3 class="ws-intro__t">${INTRO_T}</h3><p class="ws-intro__b">${INTRO_B}</p></div>
    ${WORK.map((w, ci) => `
    <article class="wst">
      <header class="rvw"><p class="wp__no">${two(ci + 1)}<span> / ${two(WORK.length)}</span> · ${esc(w.name)}</p><h3 class="wp__q">${esc(w.q)}</h3><p class="wp__desc">${w.head ? esc(w.head) : `${esc(w.name)} is ${esc(w.desc)}`}</p></header>
      <ol class="wst__steps">
        ${STEPS.slice(0, 5).map(([key, label], si) => `<li class="rvw"><span class="say__k">${label}</span><p>${esc(w.decision[key])}</p>${si === 2 || si === 4 ? `<div class="wst__vis">${visHTML(w.vis[key], si)}</div>` : ""}</li>`).join("")}
      </ol>
      <div class="rvw"><span class="say__k">What I designed</span><div class="wbeats">${beatsHTML(w, ci)}</div></div>
      <footer class="wp__foot rvw"><a class="wcta" href="${w.link}">${CTA}<span aria-hidden="true">→</span></a>${factsHTML(w)}</footer>
    </article>`).join("")}`;
  if ("IntersectionObserver" in window) {
    const rio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); } }), { rootMargin: "0px 0px -12% 0px" });
    staticEl.querySelectorAll(".rvw").forEach(el => rio.observe(el));
  } else staticEl.querySelectorAll(".rvw").forEach(el => el.classList.add("in"));

  const projEls = [...stageEl.querySelectorAll(".wp")];
  const introEl = $(".ws-intro", stageEl);
  const segs = [...segEl.children];

  // count a stat up when its beat arrives ("11%" from 1, "10K+" from 0, "5–8" and "POC" just appear)
  function countUp(el) {
    const raw = el.dataset.stat, m = raw.match(/^(~?)(\d+)(.*)$/);
    if (!m || reduce) { el.textContent = raw; return; }
    const [, pre, num, post] = m, end = +num, t0 = performance.now(), dur = 900;
    const tick = t => {
      const k = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
      el.textContent = pre + v + post;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  let curK = -1;
  function setStep(k) {
    if (k === curK) return;
    curK = k;
    introEl.classList.toggle("is-on", k === 0);
    const ci = k === 0 ? -1 : Math.floor((k - 1) / PER), si = k === 0 ? -1 : (k - 1) % PER;
    closeSwitchers();
    projEls.forEach((el, i) => {
      const on = i === ci;
      el.classList.toggle("is-on", on);
      el.classList.toggle("is-end", on && si === PER - 1);
      if (!on) return;
      el.querySelectorAll(".wp__rail li").forEach(li => {
        const s = +li.dataset.s;
        li.classList.toggle("is-done", s < si);
        li.classList.toggle("is-now", s === si);
      });
      el.querySelectorAll(".say").forEach(sy => sy.classList.toggle("is-on", +sy.dataset.s === si));
      el.querySelectorAll(".vis").forEach(v => {
        const vs = +v.dataset.s;
        const show = vs === si && (vs < 5 || +v.dataset.r === 0);
        if (show && !v.classList.contains("is-on")) { const b = $("b[data-stat]", v); if (b) countUp(b); }
        v.classList.toggle("is-on", show);
      });
    });
    segs.forEach((sg, i) => sg.style.setProperty("--f", i < ci ? 1 : i === ci ? (si + 1) / PER : 0));
    worksHint.style.opacity = k >= TOTAL - 1 ? 0 : 1;
  }

  window.__work = { setStep, TOTAL };   // handy for previews: __work.setStep(3)

  // beats: hovering one swaps the visual to its screen
  stageEl.querySelectorAll(".wp").forEach(el => {
    el.querySelectorAll(".wbeat").forEach(btn => {
      const pick = () => el.querySelectorAll(".vis--beat").forEach(v => v.classList.toggle("is-on", v.dataset.r === btn.dataset.r));
      btn.addEventListener("mouseenter", pick);
      btn.addEventListener("focus", pick);
    });
  });
  // rail + index jump straight to a beat
  // project switcher: the "01 / 03 · Senpi" label opens a menu of all three
  const closeSwitchers = () => stageEl.querySelectorAll(".wsw.is-open").forEach(m => {
    m.classList.remove("is-open");
    $(".wsw__btn", m).setAttribute("aria-expanded", "false");
  });
  stageEl.addEventListener("click", e => {
    const sw = e.target.closest(".wsw__btn");
    if (sw) {
      const box = sw.parentElement, open = !box.classList.contains("is-open");
      closeSwitchers();
      box.classList.toggle("is-open", open);
      sw.setAttribute("aria-expanded", String(open));
      return;
    }
    const go = e.target.closest("[data-go]");
    if (!go) return;
    closeSwitchers();
    const k = +go.dataset.go;
    // switching projects jumps straight there; stepping within one glides
    scrollTo({ top: worksTop + ((k + .5) / TOTAL) * worksSpan, behavior: reduce || go.dataset.instant ? "auto" : "smooth" });
  });
  document.addEventListener("click", e => { if (!e.target.closest(".wsw")) closeSwitchers(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeSwitchers(); });

  /* ------------------------------------------------------------------
   * Drawer
   * ------------------------------------------------------------------ */
  const drawer = $("#drawer"), veil = $("#veil");
  let lastFocus = null;
  function openDrawer(ci, ri) {
    const w = WORK[ci];
    const r = w.rows[+ri];
    $("#drawerShot").innerHTML = r.img ? `<img src="${r.img}" alt="">` : "";
    $("#drawerKicker").textContent = `${w.name} · ${ROLE}`;
    $("#drawerTitle").textContent = r.t;
    $("#drawerBody").innerHTML = r.body.map(p => `<p>${esc(p)}</p>`).join("");
    const link = $("#drawerLink");
    link.href = w.link;
    link.textContent = CTA + " →";
    lastFocus = document.activeElement;
    veil.hidden = false;
    requestAnimationFrame(() => { veil.classList.add("is-open"); drawer.classList.add("is-open"); });
    drawer.setAttribute("aria-hidden", "false");
    $("#drawerClose").focus({ preventScroll: true });
  }
  function closeDrawer() {
    if (!drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open");
    veil.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    setTimeout(() => { veil.hidden = true; }, reduce ? 0 : 400);
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  $("#works").addEventListener("click", e => {
    const btn = e.target.closest(".wbeat");
    if (btn) openDrawer(+btn.dataset.c, btn.dataset.r);
  });
  veil.addEventListener("click", closeDrawer);
  // keep the page still behind the drawer without breaking the sticky gallery
  const hold = e => { if (drawer.classList.contains("is-open") && !drawer.contains(e.target)) e.preventDefault(); };
  addEventListener("wheel", hold, { passive: false });
  addEventListener("touchmove", hold, { passive: false });
  $("#drawerClose").addEventListener("click", closeDrawer);
  addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });

  /* ------------------------------------------------------------------
   * Camera: one shot list for the whole page.
   * z = photo height in viewport heights · f = focal point on the photo (0–1)
   * s = where that focal point sits on screen (0–1)
   * ------------------------------------------------------------------ */
  const stage = $("#stage"), scene = $("#scene");
  const scrim = $("#scrim"), solidify = $("#solidify"), chrome = $("#chrome"), glow = $("#heroGlow");
  const evo = $("#resume"), evoTrack = $("#evoTrack");
  const works = $("#works"), worksHint = $("#worksHint");
  const contact = $("#contact");

  const SHOTS = {
    hero:    { z: 3.4,  fx: .62, fy: .52, sx: .5,  sy: .42, blur: 30, dim: .9,   tint: 1,   scrim: 0 },
    // the photo is a bookend: blurred at the hero, sharp at Say hello. In between
    // (walk, Work) it holds still as one dark, soft backdrop
    walk:    { z: .98,  fx: .5,  fy: .55, sx: .32, sy: .5,  blur: 18, dim: .34, tint: .3,  scrim: 0 },
    works:   { z: .98,  fx: .5,  fy: .55, sx: .32, sy: .5,  blur: 18, dim: .34, tint: .3,  scrim: 0, solid: 1 },
    // after the gallery, focus pulls onto the full photo for Say hello
    contact: { z: .98,  fx: .5,  fy: .55, sx: .32, sy: .5,  blur: 0, dim: 1.04, tint: .12, scrim: .85 },
  };

  const KEYS = ["z", "fx", "fy", "sx", "sy", "blur", "dim", "tint", "scrim", "solid"];
  const DEFAULTS = { fx: .5, fy: .5, solid: 0 };

  let W = innerWidth, H = innerHeight, narrow = W < 760, stacked = false;
  let kf = [], worksTop = 0, worksSpan = 1, evoTop = 0, evoSpan = 1;

  const top = el => el.getBoundingClientRect().top + scrollY;

  function layout() {
    W = innerWidth; H = innerHeight; narrow = W < 760;
    stacked = narrow || reduce;
    works.classList.toggle("is-stacked", stacked);

    if (stacked) {
      works.style.height = "";
      curK = -1;
    } else {
      // half a screen of scroll per beat
      works.style.height = `${H + TOTAL * H * .5}px`;
    }
    worksTop = top(works);
    worksSpan = Math.max(1, works.offsetHeight - H);

    const S = SHOTS;
    evoTop = top(evoTrack);
    evoSpan = Math.max(1, evoTrack.offsetHeight - H);
    const zNarrow = .72;
    kf = [
      { y: 0, ...S.hero },
      { y: Math.max(H * .35, evoTop - H * .75), ...S.hero, blur: 14, tint: .8, scrim: .3 },
      // the backdrop fades to solid between Senpi and the second stop (Moxie), and stays solid into Work
      { y: evoTop, ...S.walk },
      { y: evoTop + evoSpan * .8 / (((window.__evo && window.__evo.N) || 5) - 1), ...S.walk, solid: 1 },
      { y: evoTop + evoSpan, ...S.walk, solid: 1 },
      { y: worksTop - H * .25, ...S.works },
      { y: worksTop + Math.min(worksSpan * .25, H * .7), ...S.works },
      { y: worksTop + worksSpan, ...S.works },
      { y: top(contact) - H * .1, ...S.contact },
    ].map(k => ({ ...DEFAULTS, ...k }))
     .map((k, i) => narrow ? { ...k, sx: .5, sy: i < 2 ? .42 : .48, z: i < 2 ? k.z : k.z * zNarrow } : k);
    for (let i = 1; i < kf.length; i++) if (kf[i].y <= kf[i - 1].y) kf[i].y = kf[i - 1].y + 1;
  }

  function target(y) {
    if (y <= kf[0].y) return kf[0];
    for (let i = 1; i < kf.length; i++) {
      if (y < kf[i].y) {
        const a = kf[i - 1], b = kf[i];
        const t = smooth(clamp((y - a.y) / (b.y - a.y)));
        const o = {};
        for (const k of KEYS) o[k] = lerp(a[k], b[k], t);
        return o;
      }
    }
    return kf[kf.length - 1];
  }

  const cam = {};
  let primed = false;
  function applyCamera(c) {
    const s = (c.z * H) / 1200;
    const tx = c.sx * W - c.fx * 900 * s;
    const ty = c.sy * H - c.fy * 1200 * s;
    stage.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(${s.toFixed(4)})`;
    scene.style.setProperty("--blur", `${c.blur.toFixed(2)}px`);
    scene.style.setProperty("--dim", c.dim.toFixed(3));
    scene.style.setProperty("--tint", c.tint.toFixed(3));
    scrim.style.opacity = c.scrim.toFixed(3);
    solidify.style.opacity = c.solid.toFixed(3);
  }

  /* stickers follow the walk: it starts at Senpi and walks back, so each stop
     adds an older era (stop → oldest era shown). Everything is on once past it. */
  const STOP_ERA = [5, 4, 3, 2, 0];
  let era = 99;
  function setEra(n) {
    if (n === era) return;
    era = n;
    stickerEls.forEach(el => {
      const on = +el.dataset.era >= n;
      el.classList.toggle("on", on);
      el.classList.toggle("off", !on);
    });
  }

  function onScroll() {
    const y = scrollY;
    // chrome + hero glow fade out over the first screen
    const heroT = clamp(y / (H * .55));
    chrome.style.opacity = (1 - heroT).toFixed(3);
    glow.style.opacity = (1 - heroT).toFixed(3);

    // stickers by walk stop
    const N = (window.__evo && window.__evo.N) || STOP_ERA.length;
    if (y < evoTop - H * .2) setEra(99);
    else if (y > evoTop + evoSpan) setEra(0);
    else setEra(STOP_ERA[clamp(Math.round(clamp((y - evoTop) / evoSpan) * (N - 1)), 0, N - 1)]);

    // works gallery
    if (!stacked) {
      const p = clamp((y - worksTop) / worksSpan);
      setStep(Math.min(TOTAL - 1, Math.floor(p * TOTAL)));
    }
  }

  function frame() {
    const t = target(scrollY);
    const k = reduce || !primed ? 1 : .1;
    let moving = false;
    for (const key of KEYS) {
      const v = cam[key] === undefined ? t[key] : lerp(cam[key], t[key], k);
      if (Math.abs(v - t[key]) > 0.0005) moving = true;
      cam[key] = v;
    }
    primed = true;
    applyCamera(cam);
    onScroll();
    raf = moving ? requestAnimationFrame(frame) : 0;
  }
  let raf = 0;
  const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

  addEventListener("scroll", kick, { passive: true });
  let rt;
  addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { layout(); kick(); }, 120); });
  addEventListener("load", () => { layout(); kick(); });

  layout();
  frame();

  // dev: ?y=<px> jumps to a scroll position (for previews)
  const qy = new URLSearchParams(location.search).get("y");
  if (qy) requestAnimationFrame(() => { scrollTo(0, +qy); primed = false; kick(); });
})();
