/* Page behaviour shared by every page: navigation state, reveals, and the case-study
   pieces (chart bars, contents list, quiet videos). Screens that open are in parts.js. */
(function () {
  "use strict";
  var root = document.documentElement;
  var D = document.getElementById("designed") || document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var still = reduce || root.classList.contains("all");
  function $$(s, c) { return Array.prototype.slice.call((c || D).querySelectorAll(s)); }

  /* navigation gets a surface once the page has moved */
  var nav = D.querySelector(".nav");
  function navState() { if (nav) nav.classList.toggle("is-solid", window.scrollY > 24); }
  navState();
  window.addEventListener("scroll", navState, { passive: true });

  /* reveals */
  var rv = $$(".rv");
  function showAll() { rv.forEach(function (el) { el.classList.add("in"); }); }
  if (still || !("IntersectionObserver" in window)) showAll();
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    rv.forEach(function (el) { io.observe(el); });
    window.addEventListener("beforeprint", showAll);
  }

  /* chart bars grow to their value when seen */
  var bars = $$(".funnel__bar");
  function fill(b) { b.style.width = b.getAttribute("data-w") || "0%"; }
  if (still || !("IntersectionObserver" in window)) bars.forEach(fill);
  else {
    var bo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { fill(e.target); bo.unobserve(e.target); } });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { bo.observe(b); });
  }

  /* contents list: mark the section being read */
  var toc = D.querySelector(".case-toc");
  if (toc) {
    var links = $$("a[href^='#']", toc);
    var secs = links.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
    var mark = function () {
      var line = window.innerHeight * 0.38, cur = -1;
      secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= line) cur = i; });
      links.forEach(function (a, i) { if (i === cur) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
    };
    mark();
    window.addEventListener("scroll", mark, { passive: true });
  }

  /* videos stay still for people who asked for less motion */
  $$("video").forEach(function (v) {
    if (reduce) { v.removeAttribute("autoplay"); v.pause(); v.controls = true; }
  });
})();
