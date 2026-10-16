// Enlaces oficiales y datos de contacto de Matte Ministry.
const SITE_CONFIG = {
  links: {
    spotify: "https://open.spotify.com/intl-es/artist/5BtmimkQNiAnfjx9RQz0LO?si=45pdeJYASO609SSPXM7oqw",
    youtube: "https://youtube.com/channel/UCx-jBdYrUHiopKMGx9vE3BQ?si=bcXUQjy5VpxSfa62",
    appleMusic: "https://music.apple.com/cr/artist/matte-ministry/1771880145",
    instagram: "https://www.instagram.com/matte_ministry?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==",
    songBetesda: "https://open.spotify.com/intl-es/track/5P6Ci6HnY225QTqKStaN58?si=21bcaceeefde4569",
    songVenga: "https://open.spotify.com/intl-es/track/10TSGsyCEvWg5pKSeOpNUV?si=b1b74f58723442d3",
    email: "mailto:matteministry@gmail.com"
  },
  contact: {
    emailDisplay: "matteministry@gmail.com"
  }
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = SITE_CONFIG.links[el.dataset.link];
  if (url) el.href = url;
});

document.querySelectorAll('[data-display="email"]').forEach((el) => {
  el.textContent = SITE_CONFIG.contact.emailDisplay;
});


// Aparición progresiva al desplazarse; respeta la preferencia de movimiento reducido.
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(".section-heading, .featured, .song-card, .platforms-section > div, .contact-copy, .footer");
  revealItems.forEach((item) => item.classList.add("reveal-on-scroll"));
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}
