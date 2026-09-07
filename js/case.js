(function () {
  const q = new URLSearchParams(location.search);
  if (q.has("dev") && q.has("all")) {
    document.querySelectorAll(".rv").forEach(el => el.classList.add("in"));
    document.querySelectorAll(".funnel__bar").forEach(b => { b.style.transition = "none"; b.style.width = b.dataset.w; });
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.3, rootMargin: "0px 0px -12% 0px" });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));
  document.querySelectorAll(".funnel").forEach(f => {
    const fio = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) {
        f.querySelectorAll(".funnel__bar").forEach(b => b.style.width = b.dataset.w);
        fio.disconnect();
      }});
    }, { threshold: 0.4 });
    fio.observe(f);
  });
})();
