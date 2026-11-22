/* ============================================================
   The line.
   Every page has two sides: the design, and the reasoning behind it.
   The second side is the same page with the lights off (words stay, pictures
   become a sentence about what they show) and, for each piece of work, the
   decision record: problem, evidence, decision, trade-off, result.
   A vertical line divides the two. Drag it.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var designed = document.getElementById("designed");
  var supported = designed && window.CSS && CSS.supports && CSS.supports("clip-path", "inset(0 10px 0 0)") && "inert" in HTMLElement.prototype;

  function bail() { root.classList.remove("intro"); root.classList.add("no-seam"); }
  if (!supported) { bail(); return; }
  if (window.__seamFailsafe) clearTimeout(window.__seamFailsafe);

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = root.clientWidth;
  var EDGE = readEdge();
  var seam = 0;
  var manual = false;      // the visitor has taken the line; stop moving it for them
  var tween = null;
  var raw, ctl, knob;
  var rest = null;         // where the line waits on the first screen of the home page

  function readEdge() { return parseFloat(getComputedStyle(root).getPropertyValue("--edge")) || 20; }
  function max() { return W - EDGE; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  function set(x) {
    seam = clamp(x, 0, max());
    root.style.setProperty("--seam", seam.toFixed(1) + "px");
    var parked = seam >= max() - 0.5, allRaw = seam <= 0.5;
    root.classList.toggle("is-parked", parked);
    root.classList.toggle("is-raw", allRaw);
    root.classList.toggle("is-rest", rest != null && W >= 1000 && Math.abs(seam - rest * W) < 8 && !root.classList.contains("intro"));
    if (knob) {
      var pct = Math.round((seam / max()) * 100);
      knob.setAttribute("aria-valuenow", pct);
      knob.setAttribute("aria-valuetext", allRaw ? "All reasoning" : parked ? "All design" : pct + "% design, " + (100 - pct) + "% reasoning");
    }
  }

  function animate(to, ms, done) {
    if (tween) cancelAnimationFrame(tween);
    if (reduce || ms <= 0) { set(to); if (done) done(); return; }
    var from = seam, t0 = performance.now();
    (function step(now) {
      var p = clamp((now - t0) / ms, 0, 1);
      var e = p < 0.5 ? 8 * p * p * p * p : 1 - Math.pow(-2 * p + 2, 4) / 2;   // ease in-out quart
      set(from + (to - from) * e);
      if (p < 1) tween = requestAnimationFrame(step); else { tween = null; if (done) done(); }
    })(t0);
  }

  /* Where the line belongs when nobody is holding it. On the home page it waits
     part-way across the first screen, then moves to the edge as the page scrolls. */
  function auto() {
    if (rest == null || W < 1000) return max();
    var p = clamp(window.scrollY / (window.innerHeight * 0.5), 0, 1);
    p = p * p * (3 - 2 * p);
    return rest * W + (max() - rest * W) * p;
  }
  function sync() { if (!manual && !tween && !root.classList.contains("intro")) set(auto()); }

  /* ---------- the second side ---------- */
  function build() {
    raw = designed.cloneNode(true);
    raw.id = "raw";
    raw.className = designed.className.replace("layer--d", "layer--r");
    raw.setAttribute("aria-hidden", "true");
    raw.inert = true;
    var i, n, el, list = raw.querySelectorAll("[id]");
    for (i = 0; i < list.length; i++) list[i].removeAttribute("id");
    list = raw.querySelectorAll("video");
    for (i = 0; i < list.length; i++) { list[i].removeAttribute("autoplay"); list[i].preload = "metadata"; }
    list = raw.querySelectorAll("script");
    for (i = 0; i < list.length; i++) list[i].remove();
    // a prototype runs once, on the design side; its twin keeps the frame and nothing else
    list = raw.querySelectorAll("iframe");
    for (i = 0; i < list.length; i++) { list[i].removeAttribute("src"); list[i].hidden = true; }

    // Elements that hold text of their own: large ones keep their letterforms as outlines.
    var hosts = [], w = document.createTreeWalker(raw, NodeFilter.SHOW_ELEMENT);
    while ((el = w.nextNode())) {
      if (el.closest("svg") || el.closest("[data-rw]") || el.closest("template")) continue;
      for (n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.nodeValue.trim()) { el.setAttribute("data-rw", ""); hosts.push(el); break; }
    }

    // A picture becomes one sentence: what it shows.
    var frames = [];
    list = raw.querySelectorAll("img[alt]");
    for (i = 0; i < list.length; i++) {
      var alt = list[i].getAttribute("alt").trim(), box = list[i].parentNode;
      if (!alt || !box || box.querySelector(".rw-alt")) continue;
      var note = document.createElement("span");
      note.className = "rw-alt";
      note.textContent = alt;
      box.appendChild(note);
      frames.push(box);
    }

    // Decision records, written in the page and shown only on this side.
    // On a wide screen the record takes the place of the screenshot, drawn as a path from problem
    // to result; the words beside it stay where they were. On a narrow one it covers the whole block.
    list = raw.querySelectorAll("template.brief");
    for (i = 0; i < list.length; i++) {
      var holder = list[i].parentNode, brief = document.createElement("div");
      var boxSel = list[i].getAttribute("data-box"), box2 = boxSel ? holder.querySelector(boxSel) : null;
      brief.className = list[i].className + (box2 ? " brief--cover" : "");
      brief.appendChild(list[i].content.cloneNode(true));
      holder.appendChild(brief);
      list[i].remove();
      frames.push(holder);
      if (!box2) continue;
      var rows = brief.querySelectorAll("dl > div"), inBox = document.createElement("div");
      if (rows.length === 5) {
        var keys = ["p", "e", "d", "t", "r"], S = '<svg aria-hidden="true" class="', html =
          S + 'path__tangle" viewBox="0 0 88 64"><path d="M3,35 C8,8 30,3 38,20 C45,40 15,53 15,31 C16,9 50,8 53,29 C56,51 26,59 27,37 C29,15 63,14 65,33 C67,49 49,52 51,39 C53,27 72,31 88,32"/><path d="M10,30 C18,13 36,12 40,27 C43,41 24,46 22,33"/></svg>' +
          S + 'path__wave" viewBox="0 0 100 64" preserveAspectRatio="none"><path d="M0,32 C4,9 9,5 15,31 S24,57 31,33 S41,10 47,31 S56,49 63,33 S72,22 79,31 S91,36 100,32"/></svg>' +
          S + 'path__line" viewBox="0 0 100 12" preserveAspectRatio="none"><path d="M0,6 C12,4.4 20,7.6 33,5.6 S52,7.4 66,5.4 S88,7 100,6"/></svg>' +
          S + 'path__head" viewBox="0 0 18 18"><path d="M2,2 C7,5 11,7 15.5,9"/><path d="M15.5,9 C10,11.5 6,14 3,16.5"/></svg>' +
          S + 'path__fork" viewBox="0 0 60 26"><path class="dash" d="M0,2 C16,1 27,16 43,18"/><path d="M47,12 L57,23"/><path d="M56,12 L47,22"/><path d="M48.5,13 L55.5,21.5"/></svg>';
        var lead = S + 'path__lead" viewBox="0 0 8 100" preserveAspectRatio="none"><path d="M4,0 C2.4,22 5.8,48 3.5,70 S4.8,92 4,100"/></svg>';
        var node = S + 'path__node" viewBox="0 0 16 16"><path d="M8,2 C12,1.6 14.5,5 14,8.5 C13.6,12.5 10,14.6 6.8,13.8 C3,12.9 1.2,9 2.4,5.6 C3.2,3.4 5.6,1.9 9.4,2.5"/></svg>';
        var under = S + 'path__under" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M1,6 C18,2 34,8 52,4 S82,7 99,3"/><path d="M6,9 C28,6 50,9.4 70,7"/></svg>';
        var ring = S + 'path__ring" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M9,23 C5,9 38,2 66,5 C93,8 99,22 85,31 C66,41 21,38 9,27 C4,21 11,10 31,6"/></svg>';
        for (var r = 0; r < 5; r++) {
          html += '<div class="path__b path__b--' + keys[r] + (r % 2 ? " down" : " up") + '">' + lead + (r ? node : "") +
            '<b>' + (r === 4 ? ring : "") + rows[r].querySelector("dt").innerHTML + "</b><p>" + rows[r].querySelector("dd").innerHTML + "</p>" + (r === 0 ? under : "") + "</div>";
        }
        inBox.className = "brief brief--box brief--path";
        inBox.innerHTML = html;
      } else {
        inBox.className = "brief brief--box brief--list";
        inBox.appendChild(brief.querySelector("dl").cloneNode(true));
      }
      box2.appendChild(inBox);
      frames.push(box2);
    }

    var legend = document.createElement("p");
    legend.className = "rw-legend";
    legend.textContent = "The reasoning behind the design.";
    raw.appendChild(legend);
    designed.parentNode.insertBefore(raw, designed.nextSibling);

    // One read pass, then one write pass.
    var big = [], stat = [];
    for (i = 0; i < hosts.length; i++) big.push(parseFloat(getComputedStyle(hosts[i]).fontSize) >= 38);
    for (i = 0; i < frames.length; i++) stat.push(getComputedStyle(frames[i]).position === "static");
    for (i = 0; i < hosts.length; i++) if (big[i]) hosts[i].classList.add("rw-big");
    for (i = 0; i < frames.length; i++) if (stat[i]) frames[i].classList.add("rw-rel");
  }

  /* The second side only needs a picture's size, never the picture. Once the real one has loaded,
     its twin gets an empty frame of the same dimensions, so the two sides cannot drift apart. */
  function hold(d, twin) {
    var sync = function () {
      if (!d.naturalWidth) return;
      twin.removeAttribute("srcset");
      twin.loading = "eager";
      twin.src = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="' + d.naturalWidth + '" height="' + d.naturalHeight + '"/>');
    };
    if (d.complete && d.naturalWidth) sync(); else d.addEventListener("load", sync, { once: true });
  }
  function media() {
    var dm = designed.querySelectorAll("img"), rm = raw.querySelectorAll("img");
    for (var i = 0; i < dm.length; i++) if (rm[i]) hold(dm[i], rm[i]);
  }

  /* ---------- the control ---------- */
  function control() {
    ctl = document.createElement("div");
    ctl.className = "seam";
    ctl.innerHTML =
      '<span class="seam__line"></span>' +
      '<span class="seam__tag seam__tag--d" aria-hidden="true">design</span>' +
      '<span class="seam__tag seam__tag--r" aria-hidden="true">reasoning</span>' +
      '<button class="seam__knob" type="button" role="slider" aria-orientation="horizontal" aria-valuemin="0" aria-valuemax="100" ' +
      'aria-label="Design or reasoning. Move left to see the reasoning behind this page.">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 7 5 12l4.5 5M14.5 7 19 12l-4.5 5"/></svg></button>' +
      '<span class="seam__side" aria-hidden="true">why</span>' +
      '<span class="seam__hint" aria-hidden="true">Drag me to see the reasoning.</span>';
    body.appendChild(ctl);
    knob = ctl.querySelector(".seam__knob");

    var dragging = false, moved = false, startX = 0;
    ctl.addEventListener("pointerdown", function (e) {
      if (e.button && e.button !== 0) return;
      dragging = true; moved = false; startX = e.clientX;
      if (tween) { cancelAnimationFrame(tween); tween = null; }
      root.classList.remove("intro");
      try { ctl.setPointerCapture(e.pointerId); } catch (err) {}
      root.classList.add("is-dragging");
      e.preventDefault();
    });
    ctl.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      if (Math.abs(e.clientX - startX) > 3) moved = true;
      if (!moved) return;
      manual = true;
      set(e.clientX);
    });
    function end() {
      if (!dragging) return;
      dragging = false;
      root.classList.remove("is-dragging");
      if (!moved) { toggle(); return; }
      used();
      if (seam > max() - 36) { manual = false; animate(auto(), 260); }
      else if (seam < 28) animate(0, 200);
    }
    ctl.addEventListener("pointerup", end);
    ctl.addEventListener("pointercancel", end);

    knob.addEventListener("keydown", function (e) {
      var step = W * 0.06, k = e.key;
      if (k === "ArrowLeft") { manual = true; animate(seam - step, 120); }
      else if (k === "ArrowRight") { animate(seam + step, 120, function () { if (seam >= max() - 1) manual = false; }); }
      else if (k === "Home") { manual = true; animate(0, 500); }
      else if (k === "End") { manual = false; animate(auto(), 500); }
      else if (k === "Enter" || k === " ") toggle();
      else return;
      used();
      e.preventDefault();
    });
  }

  function used() {
    root.classList.add("seam-used");
    try { localStorage.setItem("seamUsed", "1"); } catch (e) {}
  }

  function toggle() {
    used();
    if (seam <= max() * 0.5) { manual = false; animate(auto(), 800); }
    else { manual = true; animate(0, 800); }
  }

  /* ---------- start ---------- */
  var restEl = designed.querySelector("[data-seam-rest]");
  if (restEl) rest = parseFloat(restEl.getAttribute("data-seam-rest")) || null;
  try { if (localStorage.getItem("seamUsed")) root.classList.add("seam-used"); } catch (e) {}

  var intro = root.classList.contains("intro") && !reduce;
  if (!intro) root.classList.remove("intro");

  build();
  media();
  control();
  set(intro ? 0 : auto());
  root.classList.add("seam-on");

  if (intro) {
    setTimeout(function () {
      animate(auto(), 1350, function () {
        root.classList.remove("intro");
        try { sessionStorage.setItem("seamIntro", "1"); } catch (e) {}
        sync();
      });
    }, 900);
  }

  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", function () {
    W = root.clientWidth; EDGE = readEdge();
    if (manual) set(seam); else if (!tween) set(auto());
  });
  window.addEventListener("pageshow", sync);

  window.Seam = { toggle: toggle, to: function (x, ms) { manual = true; animate(x, ms == null ? 600 : ms); }, get: function () { return seam; } };
})();
