/* Page shutter: bars close over the old page, the name resolves, bars open on the new one.
   Each page's <head> adds .sh-covered before first paint so it starts hidden.
   Fires "shutter:open" on document once the bars have parted. */
(function () {
  "use strict";
  var html = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var covered = html.classList.contains("sh-covered");
  var fromNav = false;
  try { fromNav = sessionStorage.getItem("vn2_nav") === "1"; sessionStorage.removeItem("vn2_nav"); } catch (e) {}
  var navEntry = performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
  if (navEntry && navEntry.type === "back_forward") fromNav = true;

  var GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", NAME = "VYSAKH NAIR";
  var overlay = null, ruleEl = null, cells = [], start = 0, dismissed = false, wantOut = false;
  /* first visit plays the full resolve; page-to-page hops run a quicker cycle */
  var CYC = fromNav ? 2400 : 3000, HOLD = fromNav ? 2100 : 2700, LOCK0 = fromNav ? 260 : 500,
      STEPT = fromNav ? 70 : 90, MIN = fromNav ? 1000 : 1500;

  function announce() { window.__shutterOpen = true; document.dispatchEvent(new Event("shutter:open")); }

  function setCell(c, ch, on) { c.el.textContent = ch === " " ? " " : ch; c.el.classList.toggle("on", on); }

  function buildOverlay() {
    overlay = document.createElement("div");
    overlay.className = "loader";
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
    var t = (now - start) % CYC, locked = true;
    for (var i = 0; i < cells.length; i++) {
      var c = cells[i], at = LOCK0 + i * STEPT;
      if (t >= at && t < HOLD) setCell(c, c.b, true);
      else {
        locked = false;
        if (((now / 45) | 0) % 2 === 0) setCell(c, c.b === " " ? " " : GLYPHS[(Math.random() * 26) | 0], false);
        else c.el.classList.remove("on");
      }
    }
    if (ruleEl) ruleEl.style.width = locked ? "100%" : "0%";
    if (wantOut && locked) { openUp(); return; }
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
      announce();
    }, 620);
  }

  function requestOpen() {
    if (dismissed) return;
    if (reduce || !cells.length) { openUp(); return; }
    var elapsed = performance.now() - start;
    if (elapsed < MIN) { setTimeout(requestOpen, MIN - elapsed); return; }
    wantOut = true;   // open on the next fully resolved name
  }

  if (covered) {
    buildOverlay();
    start = performance.now();
    if (reduce) { cells.forEach(function (c) { setCell(c, c.b, true); }); if (ruleEl) ruleEl.style.width = "100%"; }
    else requestAnimationFrame(tick);
    if (document.readyState === "complete") requestOpen(); else window.addEventListener("load", requestOpen);
    setTimeout(openUp, 5000);   // hard cap: never trap the visitor
  } else {
    announce();
  }

  /* outgoing: close the bars on internal link clicks, then navigate */
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
    try { sessionStorage.setItem("vn2_nav", "1"); } catch (e) {}
    html.classList.add("sh-closing");
    setTimeout(function () { location.href = url.href; }, 520);
  });

  /* back/forward restore from bfcache: never stay covered */
  window.addEventListener("pageshow", function (e) {
    if (!e.persisted) return;
    dismissed = true;
    if (overlay) { overlay.remove(); overlay = null; }
    if (html.classList.contains("sh-closing") || html.classList.contains("sh-covered")) {
      html.classList.remove("sh-closing");
      html.classList.add("sh-covered");
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        html.classList.add("sh-opening");
        setTimeout(function () { html.classList.remove("sh-covered", "sh-opening"); }, 680);
      }); });
    } else {
      html.classList.remove("sh-covered", "sh-opening", "sh-closing");
    }
  });
})();
