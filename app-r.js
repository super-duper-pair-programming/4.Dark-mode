const $body = document.querySelector('body');
let currentTheme = localStorage.getItem('theme');

const render = () => {
  $body.classList.toggle('dark', currentTheme === 'dark');
};

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === null)
    localStorage.setItem('theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  render();

  const transition = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration');
  setTimeout(() => $body.classList.remove('hide'), transition * 1000);
});

document.querySelector('.toggle-button').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
  render();
});
