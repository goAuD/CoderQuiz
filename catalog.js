// The build provides metadata only. Question banks load when a package is opened.
const CATALOG_I18N = {
  de: {
    eyebrow: "Deine Lernwerkstatt", title: "Gelerntes ausprobieren.",
    intro: "Wähle ein Quizpaket. Nach jeder Antwort findest du eine Erklärung und den passenden Lernstoff im CoderLAP.",
    lapHeading: "Aus dem CoderLAP",
    lapDescription: "Übungsfragen zu Programmieren, Informatik und Datenbanken.",
    localNote: "Deine Durchläufe bleiben je Quizpaket in diesem Browser gespeichert. Du kannst jederzeit zwischen Paketen wechseln.",
    open: "Paket öffnen", summary: (questions, topics) => `${questions} Fragen aus ${topics} CoderLAP-Themen · DE / HU`,
  },
  hu: {
    eyebrow: "A tanulóműhelyed", title: "Próbáld ki, amit tanultál.",
    intro: "Válassz egy kvízcsomagot. Minden válasz után magyarázatot és a kapcsolódó CoderLAP-tananyagot is megtalálod.",
    lapHeading: "A CoderLAP alapján",
    lapDescription: "Gyakorlókérdések programozásból, informatikából és adatbázisokból.",
    localNote: "A gyakorlásod csomagonként külön mentődik ebben a böngészőben. Bármikor válthatsz a csomagok között.",
    open: "Csomag megnyitása", summary: (questions, topics) => `${questions} kérdés ${topics} CoderLAP-témából · DE / HU`,
  },
};

function applyCatalogLanguage(lang, persist = false) {
  if (!Object.hasOwn(CATALOG_I18N, lang)) return;
  const copy = CATALOG_I18N[lang];
  document.documentElement.lang = lang;
  document.title = I18N[lang].catalogHome;
  if (persist) {
    try { localStorage.setItem("cq-lang", lang); }
    catch { document.getElementById("catalog-storage-notice").hidden = false; }
  }
  document.getElementById("catalog-storage-notice").textContent = I18N[lang].storageUnavailable;
  document.getElementById("logo-link").setAttribute("aria-label", I18N[lang].catalogHome);
  document.getElementById("back-to-top").setAttribute("aria-label", I18N[lang].backToTop);
  document.querySelectorAll("[data-catalog-i18n]").forEach(el => { el.textContent = copy[el.dataset.catalogI18n]; });
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = I18N[lang][el.dataset.i18n]; });
  document.querySelectorAll("[data-lap-link]").forEach(link => {
    link.href = `https://coderlap.com/${lang === "hu" ? "hu/" : ""}`;
  });
  document.querySelectorAll("[data-legal-link]").forEach(link => {
    link.href = `https://coderlap.com${lang === "hu" ? "/hu" : ""}/${link.dataset.legalLink}/`;
  });
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang);
  });
  document.querySelectorAll("[data-bank]").forEach(card => {
    const bank = CATALOG.find(item => item.id === card.dataset.bank);
    card.querySelector("h3").textContent = bank.ui[lang].moduleTitle;
    card.querySelector(".sr-only").textContent = `: ${bank.ui[lang].moduleTitle}`;
    card.querySelector(".bank-description").textContent = bank.ui[lang].subtitle;
    card.querySelector(".bank-meta").textContent = I18N[lang].moduleStats(bank.questionCount, bank.topicCount);
    card.querySelector(".bank-open-label").textContent = copy.open;
  });
  const topics = new Set(CATALOG.flatMap(bank => bank.topicIds));
  document.getElementById("catalog-summary").textContent = copy.summary(
    CATALOG.reduce((sum, bank) => sum + bank.questionCount, 0), topics.size,
  );
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = "de";
  try { const saved = localStorage.getItem("cq-lang"); if (Object.hasOwn(CATALOG_I18N, saved)) lang = saved; }
  catch { document.getElementById("catalog-storage-notice").hidden = false; }
  applyCatalogLanguage(lang);
  document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => applyCatalogLanguage(button.dataset.lang, true));
  });
  const top = document.getElementById("back-to-top");
  const update = () => { top.hidden = window.scrollY <= 400; };
  window.addEventListener("scroll", update, { passive: true });
  update();
  top.addEventListener("click", () => {
    document.getElementById("catalog-title").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  });
});
