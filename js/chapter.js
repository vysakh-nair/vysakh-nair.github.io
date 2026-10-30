/* Chapter pages: section reveals, end-of-page flush, screenshot lightbox.
   Same behaviour as the v1 case studies, without the page shutter. */
(function () {
  "use strict";
  var html = document.documentElement;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var showAll = /[?&]all\b/.test(location.search);   // dev: ?all renders every section at once
  if (showAll) document.querySelectorAll(".rv").forEach(function (el) { el.classList.add("in"); });
  function startReveals() {
    if (showAll || reduce || !("IntersectionObserver" in window)) return;
    var sel = "main .case-section .wrap > *, main .case-end .wrap > *, main.resume > *, main.resume .resume-section > *";
    if (wasCovered) sel += ", main .case-hero .wrap > *";   // after the shutter, the hero rises in too
    var els = [];
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.classList.contains("rv")) return;
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
  var wasCovered = html.classList.contains("sh-covered");
  if (window.__shutterOpen || !wasCovered) startReveals();
  else document.addEventListener("shutter:open", startReveals, { once: true });

  /* anything already scrolled past (restored scroll position, fast jumps) or
     sitting at the very bottom of the page shows immediately */
  function flush() {
    var atEnd = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 60;
    document.querySelectorAll(".rv2:not(.in), .rv:not(.in)").forEach(function (el) {
      if (atEnd || el.getBoundingClientRect().top < window.innerHeight * .2) el.classList.add("in");
    });
  }
  window.addEventListener("scroll", flush, { passive: true });
  window.addEventListener("load", function () { setTimeout(flush, 60); });
  window.addEventListener("pageshow", flush);

  // the nav only gets its fade once content scrolls under it
  var nav = document.querySelector(".nav");
  function navState() { if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12); }
  window.addEventListener("scroll", navState, { passive: true });
  navState();

  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("aria-hidden", "true");
  lb.innerHTML = '<img alt=""><button class="lightbox__x" aria-label="Close">&times;</button>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector("img");
  function lbClose() { lb.classList.remove("on"); html.style.overflow = ""; }
  lb.addEventListener("click", lbClose);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lbClose(); });
  document.addEventListener("click", function (e) {
    var img = e.target.closest && e.target.closest("main .shot img, main .appshot img, main .phone img");
    if (!img) return;
    lbImg.src = img.getAttribute("data-full") || img.src;
    lb.classList.add("on");
    html.style.overflow = "hidden";
  });
})();
