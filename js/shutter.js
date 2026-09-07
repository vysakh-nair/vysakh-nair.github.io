/* Page shutter — bars close over the old page, the name-board plays, bars open on the new one.
   The <head> of every page adds .sh-covered before first paint so the incoming page starts hidden. */
(function () {
  "use strict";

  var html = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var covered = html.classList.contains("sh-covered");
  var fromNav = false;
  try { fromNav = sessionStorage.getItem("vn_nav") === "1"; sessionStorage.removeItem("vn_nav"); } catch (e) {}
  var navEntry = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  if (navEntry && navEntry.type === "back_forward") fromNav = true;   // back/forward gets the quick cycle

  var GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NAME = "VYSAKH NAIR";
  var overlay = null, ruleEl = null, cells = [];
  var start = 0, dismissed = false, wantOut = false;

  /* timing: scramble → name resolves; page-to-page hops run a quicker cycle */
  var CYC   = fromNav ? 2400 : 3000;
  var HOLD  = fromNav ? 2100 : 2700;
  var LOCK0 = fromNav ? 260  : 500;
  var STEPT = fromNav ? 70   : 90;
  var MIN   = fromNav ? 1000 : 1500;

  function setCell(c, ch, on) {
    c.el.textContent = ch === " " ? " " : ch;
    c.el.classList.toggle("on", on);
  }

  function buildOverlay() {
    overlay = document.createElement("div");
    overlay.className = "loader loader--sh";
    overlay.setAttribute("aria-hidden", "true");
    var n = document.createElement("div"); n.className = "loader__name";
    var r = document.createElement("div"); r.className = "loader__rule";
    ruleEl = document.createElement("span"); r.appendChild(ruleEl);
    for (var i = 0; i < NAME.length; i++) {
      var sp = document.createElement("span");
      sp.textContent = GLYPHS[(Math.random() * 26) | 0];
      n.appendChild(sp);
      cells.push({ el: sp, b: NAME[i] });
    }
    overlay.appendChild(n); overlay.appendChild(r);
    document.body.appendChild(overlay);
  }

  function tick(now) {
    if (dismissed) return;
    var t = (now - start) % CYC, nameLocked = true;
    for (var i = 0; i < cells.length; i++) {
      var c = cells[i], lockAt = LOCK0 + i * STEPT;
      if (t >= lockAt && t < HOLD) { setCell(c, c.b, true); }
      else {
        nameLocked = false;
        if (((now / 45) | 0) % 2 === 0) setCell(c, GLYPHS[(Math.random() * 26) | 0], false);
        else c.el.classList.remove("on");
      }
    }
    if (ruleEl) ruleEl.style.width = nameLocked ? "100%" : "0%";
    if (wantOut && nameLocked) { openUp(); return; }
    requestAnimationFrame(tick);
  }

  function openUp() {
    if (dismissed) return;
    dismissed = true;
    html.classList.add("sh-opening");
    if (overlay) overlay.classList.add("out");
    setTimeout(function () {
      html.classList.remove("sh-covered", "sh-opening");
      if (overlay) { overlay.remove(); overlay = null; }
      initReveals();   // sequence the page in only after the bars have parted
    }, 620);
  }

  function requestOpen() {
    if (dismissed) return;
    if (reduce || !cells.length) { openUp(); return; }
    var elapsed = performance.now() - start;
    if (elapsed < MIN) { setTimeout(requestOpen, MIN - elapsed); return; }
    wantOut = true;   // open at the next fully-resolved name
  }

  /* ---- section reveals: every content block rises in as it enters the viewport ---- */
  var revealsInited = false;
  function initReveals() {
    if (revealsInited) return;
    revealsInited = true;
    if (reduce || !("IntersectionObserver" in window)) return;
    var sels = [
      "main .hero .wrap > *",
      "main .section .wrap > *",
      "main .case-section .wrap > *",
      "main .case-hero .wrap > *",
      "main .case-end .wrap > *",
      "main.resume > *",
      "main.resume .resume-section > *"
    ];
    var els = [];
    document.querySelectorAll(sels.join(",")).forEach(function (el) {
      if (el.classList.contains("rv") || el.closest(".evo")) return;
      el.classList.add("rv2");
      els.push(el);
    });
    var batch = 0, lastT = 0;
    var io = new IntersectionObserver(function (entries) {
      var now = performance.now();
      if (now - lastT > 350) batch = 0;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.style.setProperty("--rvd", (Math.min(batch++, 6) * 130) + "ms");
        el.classList.add("in");
        lastT = now;
        setTimeout(function () { el.classList.remove("rv2", "in"); el.style.removeProperty("--rvd"); }, 1500);
        io.unobserve(el);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -12% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function preHide() {
    if (reduce) return;
    var sels = ["main .hero .wrap > *", "main .case-hero .wrap > *"];
    document.querySelectorAll(sels.join(",")).forEach(function (el) {
      if (!el.classList.contains("rv")) el.classList.add("rv2");
    });
  }

  if (covered) {
    preHide();
    buildOverlay();
    start = performance.now();
    if (reduce) {
      for (var j = 0; j < cells.length; j++) setCell(cells[j], cells[j].b, true);
      if (ruleEl) ruleEl.style.width = "100%";
    } else {
      requestAnimationFrame(tick);
    }
    if (document.readyState === "complete") requestOpen();
    else window.addEventListener("load", requestOpen);
    setTimeout(openUp, 5000);   // hard cap — never trap the visitor
  }

  if (!covered) initReveals();

  /* ---- outgoing: close the shutter on internal link clicks, then navigate ---- */
  document.addEventListener("click", function (ev) {
    if (reduce || ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
    var a = ev.target.closest && ev.target.closest("a");
    if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
    var href = a.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0) return;
    var url;
    try { url = new URL(a.href, location.href); } catch (e) { return; }
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.hash) return;   // same-page anchor
    ev.preventDefault();
    try { sessionStorage.setItem("vn_nav", "1"); } catch (e) {}
    html.classList.add("sh-closing");
    setTimeout(function () { location.href = url.href; }, 520);
  });

  /* back/forward restore from bfcache: never stay covered */
  window.addEventListener("pageshow", function (e) {
    if (!e.persisted) return;
    dismissed = true;
    document.querySelectorAll(".rv2").forEach(function (el) { el.classList.remove("rv2", "in"); });
    if (overlay) { overlay.remove(); overlay = null; }
    if (html.classList.contains("sh-closing") || html.classList.contains("sh-covered")) {
      // restored mid-shutter: play the opening animation instead of snapping
      html.classList.remove("sh-closing");
      html.classList.add("sh-covered");
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          html.classList.add("sh-opening");
          setTimeout(function () { html.classList.remove("sh-covered", "sh-opening"); }, 680);
        });
      });
    } else {
      html.classList.remove("sh-covered", "sh-opening", "sh-closing");
    }
  });
})();
