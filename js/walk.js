/* The career walk. One scroll handler writes two things on <html>: --walk (0 to 4, how far back
   the visitor has walked) and data-walk-stage (the nearest stop). All the motion is CSS that reads
   those, so the design side and the reasoning side can never fall out of step. */
(function () {
  "use strict";
  var root = document.documentElement;
  var D = document.getElementById("designed") || document;
  var track = D.querySelector(".walk");
  if (!track) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var jumps = Array.prototype.slice.call(track.querySelectorAll(".walk__jump"));
  var STOPS = 5, stage = -1, ticking = false;

  function on() { return window.innerWidth >= 1000 && !reduce && !root.classList.contains("all"); }
  function span() { return track.offsetHeight - window.innerHeight; }
  function frame() {
    ticking = false;
    if (!root.classList.contains("walk-on")) return;
    var p = Math.max(0, Math.min(1, -track.getBoundingClientRect().top / Math.max(1, span()))) * (STOPS - 1);
    // linger at each stop and ease through the turn between them
    var whole = Math.floor(p), f = p - whole; f = f * f * f * (f * (f * 6 - 15) + 10); p = Math.min(STOPS - 1, whole + f);
    root.style.setProperty("--walk", p.toFixed(3));
    sunPath(p);
    var s = Math.round(p);
    // boards stand only while a stop is at the crest
    var at = Math.abs(p - s) < 0.06 ? String(s) : "";
    if (root.getAttribute("data-walk-at") !== at) { if (at) root.setAttribute("data-walk-at", at); else root.removeAttribute("data-walk-at"); }
    if (s === stage) return;
    stage = s;
    root.setAttribute("data-walk-stage", s);
    jumps.forEach(function (b, i) { if (i === s) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current"); });
  }
  /* Turning back the clock: the sun runs backwards across the sky, right to left. On the right it
     rides the band above the billboards and climbs to its highest beside the walker; then it sets
     there and slides away along the horizon under the words, so it never crosses them. */
  var sunEl = track.querySelector(".walk__sun"), pin = track.querySelector(".walk__pin"), topRow = track.querySelector(".walk__top"), G = null;
  function measure() {
    if (!sunEl || !pin) return;
    var W = pin.clientWidth, H = pin.clientHeight, r = sunEl.offsetWidth / 2;
    G = { W: W, r: r, hz: H * 0.62, R: Math.max(700, Math.min(1300, W * 0.66)), band: (topRow ? topRow.offsetTop + topRow.offsetHeight : 160) + 14 + r, xc: W / 2 - 84 + 24 + r };
  }
  function ss(u) { u = Math.max(0, Math.min(1, u)); return u * u * (3 - 2 * u); }
  function sunPath(p) {
    if (!G) measure();
    if (!G) return;
    var x, y, low = function (at) { var d = Math.min(G.R - 1, Math.abs(at - G.W / 2)); return G.hz + (G.R - Math.sqrt(G.R * G.R - d * d)) + 0.05 * G.r; };   // half-set on the curve of the world
    if (p <= 2) { var u = p / 2; x = 0.84 * G.W + (G.xc - 0.84 * G.W) * u; y = G.band + 0.9 * G.r * (1 - Math.sin(u * Math.PI / 2)); }
    else if (p <= 3) { var v = p - 2; x = G.xc + (0.33 * G.W - G.xc) * ss((v - 0.45) / 0.55); y = G.band + (low(x) - G.band) * ss(v / 0.55); }
    else { var w = p - 3; x = (0.33 - 0.18 * w) * G.W; y = low(x) + 0.15 * G.r * w; }
    root.style.setProperty("--sun-x", x.toFixed(1) + "px"); root.style.setProperty("--sun-y", y.toFixed(1) + "px");
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  function mode() {
    var want = on();
    if (want !== root.classList.contains("walk-on")) root.classList.toggle("walk-on", want);
    G = null;
    if (!want) { root.removeAttribute("data-walk-stage"); root.removeAttribute("data-walk-at"); root.style.removeProperty("--walk"); root.style.removeProperty("--sun-x"); root.style.removeProperty("--sun-y"); stage = -1; }
    frame();
  }
  function go(i) {
    i = Math.max(0, Math.min(STOPS - 1, i));
    var top = track.getBoundingClientRect().top + window.scrollY + span() * (i / (STOPS - 1));
    window.scrollTo({ top: Math.round(top), behavior: "smooth" });
  }
  jumps.forEach(function (b, i) {
    b.addEventListener("click", function () { go(i); });
    b.addEventListener("keydown", function (e) {
      var d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      var n = Math.max(0, Math.min(STOPS - 1, i + d));
      jumps[n].focus(); go(n);
    });
  });
  mode();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", mode);
  window.addEventListener("pageshow", mode);
})();
