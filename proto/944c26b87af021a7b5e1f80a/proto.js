/* Clickable prototype engine. Reads window.PROTO (states.js): one exported design frame per state,
   pressable regions that move between states, Back / Start over, keyboard, scaling.
   A state taller than the canvas scrolls inside it. */
(function () {
  "use strict";
  var P = window.PROTO, stage = document.getElementById("stage"), canvas = document.getElementById("canvas");
  var scroller = document.getElementById("scroll"), page = document.getElementById("page");
  var shot = page.querySelector("img.shot"), hots = document.getElementById("hots");
  var say = document.getElementById("say"), backBtn = document.getElementById("back"), resetBtn = document.getElementById("reset");
  var history = [], current = null, pos = {};
  var BAR = 44;
  canvas.style.width = P.w + "px"; canvas.style.height = P.h + "px";
  // inside a page the frame around the prototype carries Back and Start over
  var embed = /[?&]embed=1(&|$)/.test(location.search);
  if (embed) { document.documentElement.classList.add("embed"); BAR = 0; }

  function fit() {
    var s = Math.min(window.innerWidth / P.w, (window.innerHeight - BAR) / P.h);
    if (!isFinite(s) || s <= 0) s = 1;
    canvas.style.transform = "scale(" + s + ")";
    stage.style.width = Math.round(P.w * s) + "px"; stage.style.height = (Math.round(P.h * s) + BAR) + "px";
  }
  window.addEventListener("resize", fit); fit();
  try { window.parent.postMessage({ type: "proto-size", name: P.name, width: P.w, height: P.h }, "*"); } catch (e) {}

  Object.keys(P.states).forEach(function (k) { var i = new Image(); i.src = P.states[k].img; });

  function show(id, push, restore) {
    var st = P.states[id]; if (!st) return;
    if (current) pos[current] = scroller.scrollTop;
    if (push && current) history.push(current);
    current = id;
    page.style.height = (st.h || P.h) + "px";
    shot.src = st.img; shot.alt = st.alt || "";
    hots.innerHTML = "";
    (st.hots || []).forEach(function (h) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "hot" + (h.next ? " next" : "");
      b.style.left = h.x + "px"; b.style.top = h.y + "px"; b.style.width = h.w + "px"; b.style.height = h.h + "px";
      if (h.r != null) b.style.borderRadius = h.r + "px";
      b.setAttribute("aria-label", h.label);
      b.addEventListener("click", function (e) { e.stopPropagation(); canvas.classList.add("used"); show(h.to, true); });
      hots.appendChild(b);
    });
    scroller.scrollTop = restore ? (pos[id] || 0) : 0;
    say.textContent = st.say || "";
    backBtn.disabled = history.length === 0;
    resetBtn.disabled = id === P.start && history.length === 0;
    try { window.parent.postMessage({ type: "proto-state", name: P.name, state: id, say: st.say || "", embed: embed, canBack: !backBtn.disabled, canReset: !resetBtn.disabled }, "*"); } catch (e) {}
  }
  function back() { if (!history.length) return; var id = history.pop(); show(id, false, true); }
  function reset() { history = []; pos = {}; current = null; canvas.classList.remove("used"); show(P.start, false); }

  backBtn.addEventListener("click", function (e) { e.stopPropagation(); back(); });
  resetBtn.addEventListener("click", function (e) { e.stopPropagation(); reset(); });
  // pressing a part of the screen that is not live shows what is
  canvas.addEventListener("click", function () { canvas.classList.add("hint"); setTimeout(function () { canvas.classList.remove("hint"); }, 700); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && history.length) { e.preventDefault(); back(); }
  });
  window.addEventListener("message", function (e) {
    var d = e.data || {};
    if (d.type === "proto-back") back(); else if (d.type === "proto-reset") reset();
  });
  show(P.start, false);
})();
