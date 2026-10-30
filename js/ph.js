/* Placeholder "images": tasteful UI wireframes drawn into every .ph frame,
   picked by caption keywords. Swap each frame for a real screenshot later. */
(function () {
  const ART = {
    web: `
      <rect class="wf" x="0" y="0" width="400" height="26"/>
      <circle class="wf2" cx="14" cy="13" r="4"/><circle class="wf2" cx="28" cy="13" r="4"/>
      <rect class="wf2" x="120" y="7" width="160" height="12" rx="6"/>
      <rect class="wf" x="0" y="26" width="92" height="224"/>
      <rect class="wf2" x="12" y="44" width="66" height="9" rx="4"/>
      <rect class="wf2" x="12" y="62" width="52" height="9" rx="4"/>
      <rect class="wf2" x="12" y="80" width="60" height="9" rx="4"/>
      <rect class="wa"  x="12" y="104" width="66" height="10" rx="5"/>
      <rect class="wf2" x="112" y="46" width="150" height="14" rx="6"/>
      <rect class="wf2" x="112" y="70" width="240" height="8" rx="4"/>
      <rect class="wf2" x="112" y="84" width="205" height="8" rx="4"/>
      <rect class="w"   x="112" y="106" width="126" height="80" rx="8"/>
      <rect class="w"   x="252" y="106" width="126" height="80" rx="8"/>
      <rect class="wf2" x="124" y="120" width="70" height="8" rx="4"/>
      <rect class="wf2" x="264" y="120" width="70" height="8" rx="4"/>
      <rect class="wa"  x="124" y="160" width="44" height="10" rx="5"/>
      <rect class="wf2" x="112" y="202" width="266" height="8" rx="4"/>
      <rect class="wf2" x="112" y="216" width="222" height="8" rx="4"/>`,
    mobile: `
      <rect class="w" x="150" y="16" width="100" height="234" rx="18"/>
      <rect class="wf2" x="182" y="26" width="36" height="6" rx="3"/>
      <rect class="wf2" x="162" y="44" width="76" height="10" rx="5"/>
      <rect class="wf" x="162" y="64" width="76" height="42" rx="8"/>
      <rect class="wa" x="170" y="92" width="30" height="7" rx="3.5"/>
      <rect class="wf" x="162" y="114" width="76" height="42" rx="8"/>
      <rect class="wf" x="162" y="164" width="76" height="42" rx="8"/>
      <circle class="wf2" cx="200" cy="236" r="7"/>
      <rect class="wf2" x="42" y="60" width="70" height="8" rx="4"/>
      <rect class="wf2" x="42" y="76" width="52" height="8" rx="4"/>
      <rect class="wf2" x="290" y="150" width="70" height="8" rx="4"/>
      <rect class="wf2" x="290" y="166" width="48" height="8" rx="4"/>`,
    chat: `
      <rect class="wf" x="24" y="28" width="180" height="44" rx="14"/>
      <rect class="wf2" x="40" y="42" width="130" height="7" rx="3.5"/>
      <rect class="wf2" x="40" y="55" width="90" height="7" rx="3.5"/>
      <rect class="wa" x="196" y="88" width="180" height="34" rx="14" opacity="0.18"/>
      <rect class="wa" x="212" y="100" width="120" height="8" rx="4"/>
      <rect class="wf" x="24" y="138" width="220" height="52" rx="14"/>
      <rect class="wf2" x="40" y="152" width="170" height="7" rx="3.5"/>
      <rect class="wf2" x="40" y="166" width="130" height="7" rx="3.5"/>
      <rect class="w" x="24" y="208" width="352" height="30" rx="15"/>
      <rect class="wf2" x="40" y="219" width="100" height="8" rx="4"/>
      <circle class="wa" cx="358" cy="223" r="10"/>`,
    chart: `
      <rect class="wf2" x="24" y="22" width="96" height="12" rx="6"/>
      <rect class="wf2" x="24" y="44" width="60" height="8" rx="4"/>
      <line class="w" x1="24" y1="210" x2="376" y2="210"/>
      <line class="w" x1="24" y1="70" x2="24" y2="210"/>
      <path class="wal" d="M24,186 L76,158 L128,170 L180,120 L232,132 L284,92 L336,104 L376,66"/>
      <rect class="wf2" x="70" y="150" width="10" height="60"/>
      <rect class="wf2" x="130" y="132" width="10" height="78"/>
      <rect class="wa" x="190" y="108" width="10" height="102" opacity="0.35"/>
      <rect class="wf2" x="250" y="120" width="10" height="90"/>
      <rect class="wf2" x="310" y="86" width="10" height="124"/>
      <rect class="wf2" x="296" y="22" width="80" height="24" rx="8"/>`,
    photo: `
      <rect class="wf" x="0" y="0" width="400" height="250"/>
      <circle class="wa" cx="316" cy="54" r="22" opacity="0.4"/>
      <path class="w" d="M-10,214 L86,120 L150,182 L216,110 L300,196 L410,150" fill="none"/>
      <path class="wf2" d="M-10,250 L86,140 L170,220 L240,150 L410,240 L410,250 Z"/>
      <circle class="wf2" cx="80" cy="60" r="3"/><circle class="wf2" cx="130" cy="42" r="2.4"/><circle class="wf2" cx="180" cy="66" r="2"/>`,
    brand: `
      <circle class="w" cx="130" cy="112" r="58"/>
      <circle class="wa" cx="130" cy="112" r="10"/>
      <rect class="wf2" x="222" y="72" width="140" height="16" rx="8"/>
      <rect class="wf2" x="222" y="100" width="104" height="10" rx="5"/>
      <rect class="wf2" x="222" y="118" width="120" height="10" rx="5"/>
      <rect class="wa" x="222" y="146" width="64" height="12" rx="6"/>
      <rect class="wf2" x="24" y="206" width="352" height="8" rx="4"/>
      <rect class="wf2" x="24" y="222" width="280" height="8" rx="4"/>`
  };

  function kind(t) {
    t = t.toLowerCase();
    if (/photo|portrait|ramen|road trip|beach|mountain|cinema|pool|gym/.test(t)) return "photo";
    if (/mobile|app \]|phone/.test(t)) return "mobile";
    if (/chat|prompt|natural-language|conversation/.test(t)) return "chat";
    if (/dashboard|trading ui|market|chart|scans|timeline|funnel|discovery|candle/.test(t)) return "chart";
    if (/brand|poster|token launch|airdrop|coin launch|ecosystem|frame \]/.test(t)) return "brand";
    return "web";
  }

  document.querySelectorAll(".ph").forEach(ph => {
    if (ph.querySelector(".ph-art")) return;
    const cap = ph.querySelector("span");
    const k = ph.dataset.ph || kind(cap ? cap.textContent : "");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "ph-art");
    svg.setAttribute("viewBox", "0 0 400 250");
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML = ART[k];
    ph.insertBefore(svg, ph.firstChild);
  });
})();
