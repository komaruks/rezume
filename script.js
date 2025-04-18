const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем тему при загрузке страницы
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

// При клике переключаем тему и сохраняем в localStorage
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.querySelector('ul').classList.toggle('show');
});
