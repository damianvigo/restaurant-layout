export default function hamburguerMenu(hamburgerBtn, panel, menuLink) {
  const d = document;
  const w = window;

  d.addEventListener('click', (e) => {
    if (
      e.target.matches(hamburgerBtn) ||
      e.target.matches(`${hamburgerBtn} *`)
    ) {
      d.querySelector(panel).classList.toggle('is-active');
      d.querySelector(hamburgerBtn).classList.toggle('is-active');
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove('is-active');
      d.querySelector(hamburgerBtn).classList.remove('is-active');
    }
  });

  w.addEventListener('DOMContentLoaded', (e) => {
    const $btnResponsive = d.querySelector(hamburgerBtn);

    const { innerWidth } = w;

    if (innerWidth < 993) {
      $btnResponsive.classList.remove('hidden');
    } else {
      $btnResponsive.classList.add('hidden');
    }
  });

  w.addEventListener('resize', (e) => {
    const $btnResponsive = d.querySelector(hamburgerBtn);
    const windowResize = w.innerWidth;

    if (windowResize < 993) {
      $btnResponsive.classList.remove('hidden');
    } else {
      $btnResponsive.classList.add('hidden');
    }
  });
}
