/* Interaction that lives inside the screens: the teardown control, regions tied to the notes beside
   them, clickable prototypes in fixed frames, and a plain enlarge for ordinary screenshots.
   Nothing here changes the size of the page. */
(function () {
  "use strict";
  var root = document.documentElement;
  var D = document.getElementById("designed") || document;
  function $$(s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); }

  /* ---------- teardown: arrives as the screenshot, lifts its parts once when well inside the window ----------
     The state is one class on <html>. After the first lift the button puts the parts back and lifts them again. */
  $$(".fig--stack[data-stack]").forEach(function (fig) {
    var btn = fig.querySelector(".stack__toggle"), box = fig.querySelector(".stack"), auto = true;
    if (!btn) return;
    function set(open) { root.classList.toggle("td-open", open); btn.setAttribute("aria-pressed", open ? "true" : "false"); }
    btn.addEventListener("click", function () { auto = false; set(!root.classList.contains("td-open")); });
    var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches, wide = window.matchMedia("(min-width: 1100px)");
    if (calm || !box || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      // well inside: most of the figure showing, or most of the window filled by it on a short screen
      if (!auto || !wide.matches || (es[0].intersectionRatio < 0.7 && es[0].intersectionRect.height < window.innerHeight * 0.66)) return;
      auto = false; io.disconnect();
      setTimeout(function () { set(true); }, 420);
    }, { threshold: [0.4, 0.5, 0.6, 0.7] });
    io.observe(box);
  });

  /* ---------- a region and its note light up together ----------
     Pointing at either one (or tabbing to it) lights its partner; a press keeps the pair lit, for touch. */
  $$("[data-play]").forEach(function (box) {
    var notes = $$("ol.notes > li[data-for]", box), parts = $$("[data-part]", box);
    function keyOf(el) { return el.getAttribute("data-part") || el.getAttribute("data-for"); }
    function show(key) {
      var same = box.getAttribute("data-on") === key;
      box.setAttribute("data-on", same ? "" : key);
      parts.forEach(function (p) { p.classList.toggle("is-on", !same && keyOf(p) === key); if (p.classList.contains("hot")) p.setAttribute("aria-pressed", !same && keyOf(p) === key ? "true" : "false"); });
      notes.forEach(function (li) { li.classList.toggle("is-on", !same && keyOf(li) === key); });
    }
    function peek(key, on) {
      parts.forEach(function (p) { p.classList.toggle("is-peek", on && keyOf(p) === key); });
      notes.forEach(function (li) { li.classList.toggle("is-peek", on && keyOf(li) === key); });
    }
    parts.concat(notes).forEach(function (el) {
      var key = keyOf(el);
      el.addEventListener("mouseenter", function () { peek(key, true); });
      el.addEventListener("mouseleave", function () { peek(key, false); });
      el.addEventListener("focus", function () { peek(key, true); });
      el.addEventListener("blur", function () { peek(key, false); });
      el.addEventListener("click", function () { show(key); });
    });
    parts.forEach(function (p) { if (p.classList.contains("hot")) p.setAttribute("aria-pressed", "false"); });
    notes.forEach(function (li) {
      li.tabIndex = 0; li.setAttribute("role", "button");
      li.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(keyOf(li)); } });
    });
  });

  /* ---------- clickable prototypes ----------
     The frame already holds a still of the opening screen, linked to the prototype's own page.
     Where the screen is wide enough for it, the live prototype is laid over the still. The frame's
     own Back and Start over drive it, once the prototype says it listens. */
  /* A prototype whose screen scrolls would catch the page's scroll as the reader passes over it.
     Until the reader presses inside it, the wheel moves the page; after that it scrolls the prototype. */
  function guard(f) {
    f.addEventListener("load", function () {
      try {
        var d = f.contentDocument, armed = false;
        d.addEventListener("pointerdown", function () { armed = true; }, true);
        d.documentElement.addEventListener("mouseleave", function () { armed = false; });
        d.addEventListener("wheel", function (e) { if (armed) return; e.preventDefault(); window.scrollBy(0, e.deltaY); }, { passive: false, capture: true });
      } catch (err) {}
    });
  }
  var protos = $$(".proto[data-proto]").map(function (p) {
    var frame = p.querySelector(".proto__frame"), still = p.querySelector(".proto__still");
    var o = { p: p, f: null, back: p.querySelector(".proto__back"), reset: p.querySelector(".proto__reset"), skip: p.querySelector(".proto__skip") };
    var mq = window.matchMedia("(min-width: " + (parseInt(p.getAttribute("data-min"), 10) || 0) + "px)");
    function sync() {
      if (mq.matches && !o.f) {
        var f = document.createElement("iframe");
        f.title = p.getAttribute("data-title") || "Clickable prototype";
        f.loading = "lazy";
        f.src = still.getAttribute("href") + "?embed=1";
        frame.appendChild(f);
        o.f = f;
        if (frame.hasAttribute("data-guard")) guard(f);
        still.tabIndex = -1; still.setAttribute("aria-hidden", "true");
      } else if (!mq.matches && o.f) {
        frame.removeChild(o.f); o.f = null;
        p.classList.remove("is-live");
        still.removeAttribute("tabindex"); still.removeAttribute("aria-hidden");
      }
    }
    function send(type) { if (o.f && o.f.contentWindow) o.f.contentWindow.postMessage({ type: type }, "*"); }
    if (o.back) o.back.addEventListener("click", function () { send("proto-back"); });
    if (o.reset) o.reset.addEventListener("click", function () { send("proto-reset"); });
    if (o.skip) o.skip.addEventListener("click", function () { send("proto-skip"); });
    if (mq.addEventListener) mq.addEventListener("change", sync); else if (mq.addListener) mq.addListener(sync);
    sync();
    return o;
  });
  if (protos.length) {
    window.addEventListener("message", function (e) {
      var d = e.data || {};
      if (d.type !== "proto-state" || !d.embed) return;
      protos.forEach(function (o) {
        if (!o.f || e.source !== o.f.contentWindow) return;
        o.p.classList.add("is-live");
        if (o.back) o.back.disabled = !d.canBack;
        if (o.reset) o.reset.disabled = !d.canReset;
        o.p.classList.toggle("can-skip", !!d.canSkip);
        if (o.skip && d.skipLabel) o.skip.textContent = d.skipLabel;
      });
    });
  }

  /* ---------- the pile of prints: pick one up and move it (a transform only) ---------- */
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  $$(".pile").forEach(function (pile) {
    if (calm) return;
    var wide = window.matchMedia("(min-width: 760px)"), top = 1;
    function live() { pile.classList.toggle("pile--live", wide.matches); if (!wide.matches) $$(".print", pile).forEach(function (p) { p.style.removeProperty("--dx"); p.style.removeProperty("--dy"); }); }
    if (wide.addEventListener) wide.addEventListener("change", live); live();
    $$(".print", pile).forEach(function (p) {
      var x = 0, y = 0, sx = 0, sy = 0, held = false;
      function put() { p.style.setProperty("--dx", x.toFixed(1) + "px"); p.style.setProperty("--dy", y.toFixed(1) + "px"); }
      function clampTo() { var r = pile.getBoundingClientRect(), w = p.offsetWidth, h = p.offsetHeight, l = p.offsetLeft, t = p.offsetTop;
        x = Math.max(-l - w * .3, Math.min(r.width - l - w * .7, x)); y = Math.max(-t - h * .25, Math.min(r.height - t - h * .7, y)); }
      p.tabIndex = 0;
      p.addEventListener("pointerdown", function (e) { if (!wide.matches || (e.button && e.button !== 0)) return; held = true; sx = e.clientX - x; sy = e.clientY - y; p.style.zIndex = ++top; p.classList.add("is-held"); try { p.setPointerCapture(e.pointerId); } catch (err) {} e.preventDefault(); });
      p.addEventListener("pointermove", function (e) { if (!held) return; x = e.clientX - sx; y = e.clientY - sy; clampTo(); put(); });
      var drop = function () { held = false; p.classList.remove("is-held"); };
      p.addEventListener("pointerup", drop); p.addEventListener("pointercancel", drop);
      p.addEventListener("keydown", function (e) { if (!wide.matches) return; var k = { ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] }[e.key]; if (!k) return; e.preventDefault(); x += k[0]; y += k[1]; p.style.zIndex = ++top; clampTo(); put(); });
    });
  });

  /* ---------- app or web: two prototypes share one box; the switch picks which is live ----------
     The other one is loaded on first use and keeps its place while hidden. The box never changes size. */
  $$(".proto--dual").forEach(function (root) {
    var sides = {}, cur = root.getAttribute("data-on") || "app";
    var radios = $$("[role='radio']", root), back = root.querySelector(".proto__back"), reset = root.querySelector(".proto__reset");
    var skip = root.querySelector(".proto__skip");
    var narrow = window.matchMedia("(max-width: 759px)");
    $$(".dual__side", root).forEach(function (el) {
      sides[el.getAttribute("data-side")] = { el: el, holder: el.querySelector(".dual__phone") || el, still: el.querySelector(".proto__still"), f: null, live: false, canBack: false, canReset: false, canSkip: false, skipLabel: "",
        mq: window.matchMedia("(min-width: " + (parseInt(el.getAttribute("data-min"), 10) || 0) + "px)") };
    });
    function mount(k) {
      var s = sides[k];
      if (!s || s.f || !s.mq.matches) return;
      var f = document.createElement("iframe");
      f.title = s.el.getAttribute("data-title") || "Clickable prototype"; f.loading = "lazy";
      f.src = s.still.getAttribute("href") + "?embed=1";
      s.holder.appendChild(f); s.f = f;
      if (s.el.hasAttribute("data-guard")) guard(f);
      s.still.tabIndex = -1; s.still.setAttribute("aria-hidden", "true");
    }
    function paint() {
      var s = sides[cur];
      root.classList.toggle("is-live", !!(s && s.live));
      if (back) back.disabled = !(s && s.canBack);
      if (reset) reset.disabled = !(s && s.canReset);
      root.classList.toggle("can-skip", !!(s && s.canSkip));
      if (skip && s && s.skipLabel) skip.textContent = s.skipLabel;
    }
    function show(k) {
      if (!sides[k]) return;
      cur = k; root.setAttribute("data-on", k);
      radios.forEach(function (r) { var on = r.getAttribute("data-side") === k; r.setAttribute("aria-checked", on ? "true" : "false"); r.tabIndex = on ? 0 : -1; });
      mount(k); paint();
    }
    radios.forEach(function (r, i) {
      r.addEventListener("click", function () { show(r.getAttribute("data-side")); });
      r.addEventListener("keydown", function (e) {
        var d = (e.key === "ArrowRight" || e.key === "ArrowDown") ? 1 : (e.key === "ArrowLeft" || e.key === "ArrowUp") ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = radios[(i + d + radios.length) % radios.length];
        show(n.getAttribute("data-side")); n.focus();
      });
    });
    function send(type) { var s = sides[cur]; if (s && s.f && s.f.contentWindow) s.f.contentWindow.postMessage({ type: type }, "*"); }
    if (back) back.addEventListener("click", function () { send("proto-back"); });
    if (reset) reset.addEventListener("click", function () { send("proto-reset"); });
    if (skip) skip.addEventListener("click", function () { send("proto-skip"); });
    window.addEventListener("message", function (e) {
      var d = e.data || {};
      if (d.type !== "proto-state" || !d.embed) return;
      Object.keys(sides).forEach(function (k) {
        var s = sides[k];
        if (!s.f || e.source !== s.f.contentWindow) return;
        s.live = true; s.canBack = !!d.canBack; s.canReset = !!d.canReset; s.canSkip = !!d.canSkip; s.skipLabel = d.skipLabel || "";
        if (k === cur) paint();
      });
    });
    var fit = function () { if (narrow.matches && cur !== "app") show("app"); else mount(cur); };
    if (narrow.addEventListener) narrow.addEventListener("change", fit);
    show(narrow.matches ? "app" : cur);
  });

  /* ---------- light or dark: both stills are in the page; the switch shows one ---------- */
  $$(".lt").forEach(function (fig) {
    var radios = $$(".lt__top [role='radio']", fig);
    function set(t) {
      fig.setAttribute("data-on", t);
      radios.forEach(function (r) { var on = r.getAttribute("data-theme") === t; r.setAttribute("aria-checked", on ? "true" : "false"); r.tabIndex = on ? 0 : -1; });
    }
    radios.forEach(function (r, i) {
      r.addEventListener("click", function () { set(r.getAttribute("data-theme")); });
      r.addEventListener("keydown", function (e) {
        var d = (e.key === "ArrowRight" || e.key === "ArrowDown") ? 1 : (e.key === "ArrowLeft" || e.key === "ArrowUp") ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = radios[(i + d + radios.length) % radios.length];
        set(n.getAttribute("data-theme")); n.focus();
      });
    });
  });

  /* ---------- a plain enlarge for ordinary screenshots ---------- */
  var shots = $$(".shot img, .ph img, .phone img, .appshot img, .kind__shot img, .plate__shot img").filter(function (img) {
    return !img.closest(".shot--photo") && !img.closest("a") && !img.closest("[hidden]");
  });
  if (shots.length) {
    var box = document.createElement("div");
    box.className = "lightbox"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Enlarged screenshot");
    box.hidden = true;
    box.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close">×</button><img alt="">';
    document.body.appendChild(box);
    var big = box.querySelector("img"), closeBtn = box.querySelector("button"), last = null;
    var open = function (src, alt, from) {
      last = from; big.src = src; big.alt = alt || "";
      box.hidden = false; root.classList.add("has-lightbox"); closeBtn.focus();
    };
    var close = function () {
      if (box.hidden) return;
      box.hidden = true; root.classList.remove("has-lightbox"); big.removeAttribute("src");
      if (last) last.focus();
    };
    shots.forEach(function (img) {
      img.tabIndex = 0; img.setAttribute("role", "button");
      img.setAttribute("aria-label", "Enlarge: " + (img.alt || "screenshot"));
      img.classList.add("zoomable");
      img.addEventListener("click", function () { open(img.currentSrc || img.src, img.alt, img); });
      img.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img.currentSrc || img.src, img.alt, img); } });
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "Tab") { e.preventDefault(); closeBtn.focus(); }
    });
  }
})();
