export default function showMenu(menuLinks, showMenu) {
  const d = document;

  d.addEventListener('click', (e) => {
    if (e.target.matches(menuLinks) || e.target.matches(`${menuLinks} *`)) {
      d.querySelector(showMenu).classList.toggle('visible');
    } else {
      d.querySelector(showMenu).classList.remove('visible');
    }
  });
}
