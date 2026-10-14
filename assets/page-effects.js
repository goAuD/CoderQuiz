// Optional presentation only: the quiz and static catalogue work without this file.
(() => {
  const loading = document.getElementById("quiz-loading");
  if (loading) {
    const status = document.getElementById("quiz-loading-status");
    const content = document.getElementById("quiz-loading-content");
    const skeleton = document.getElementById("quiz-skeleton");
    const error = document.getElementById("quiz-load-error");
    let ready = false;
    let lang = "de";
    try { if (localStorage.getItem("cq-lang") === "hu") lang = "hu"; }
    catch { /* Loading feedback also works when storage is unavailable. */ }
    loading.querySelectorAll("[lang]").forEach(text => { text.hidden = text.lang !== lang; });

    // Show only for a real wait. Fast loads never flash a placeholder.
    const timer = setTimeout(() => { if (!ready) loading.hidden = false; }, 150);
    function showError() {
      if (ready) return;
      clearTimeout(timer);
      loading.hidden = false;
      status.hidden = true;
      skeleton.hidden = true;
      error.hidden = false;
      content.setAttribute("aria-busy", "false");
    }
    // Capture resource failures before the deferred quiz scripts execute.
    window.addEventListener("error", event => {
      if (event.target?.matches?.("script[data-quiz-resource]")) showError();
    }, true);
    // Also catch startup exceptions: the app reports readiness only after rendering.
    window.addEventListener("load", () => { if (!ready) showError(); }, { once: true });
    window.addEventListener("quiz:ready", () => {
      ready = true;
      clearTimeout(timer);
      content.setAttribute("aria-busy", "false");
      loading.hidden = true;
    }, { once: true });
    document.getElementById("quiz-reload").addEventListener("click", () => window.location.reload());
  }

  document.addEventListener("DOMContentLoaded", () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        // Like CoderLAP, content stays readable before the observer runs.
        if (!reducedMotion.matches) entry.target.classList.add("workshop-reveal");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0 });
    document.querySelectorAll(".catalog-intro, .catalog-section-heading, .bank-card, .catalog-local-note, .setup-intro, .setup-card, .quiz-card, .result-card")
      .forEach(section => observer.observe(section));
  });
})();
