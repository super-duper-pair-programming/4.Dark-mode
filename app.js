if (localStorage.getItem('dark-mode') === null)
  localStorage.setItem('dark-mode', !!window.matchMedia('(prefers-color-scheme: dark)').matches);

const $body = document.querySelector('body');
const $toggleButton = document.querySelector('.toggle-button');
const transition = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration');

$body.classList.toggle('dark', localStorage.getItem('dark-mode') === 'true');

setTimeout(() => $body.classList.remove('hide'), transition * 1000);

$toggleButton.addEventListener('click', () => {
  localStorage.setItem('dark-mode', localStorage.getItem('dark-mode') === 'true' ? 'false' : 'true');
  $body.classList.toggle('dark');
});
