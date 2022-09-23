const TRANSITION_DURATION = 200;
const LOCAL_STORAGE_KEY = 'theme';

const render = () => document.body.classList.toggle('dark', localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark');

const init = () => {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.getItem(LOCAL_STORAGE_KEY) === null)
    localStorage.setItem(LOCAL_STORAGE_KEY, isDarkTheme ? 'dark' : 'light');

  render();

  setTimeout(() => document.body.classList.remove('hide'), TRANSITION_DURATION);
};

const toggleTheme = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark' ? 'light' : 'dark');

  render();
};

window.addEventListener('DOMContentLoaded', init);

document.querySelector('.toggle-button').addEventListener('click', toggleTheme);

//  [변경사항]
// - 상수값을 TRANSITION_DURATION, LOCAL_STORAGE_KEY 변수로 분리
// - 의미를 명확히 하기 위해 local storage에 테마를 저장하는 key값을 dark-mode에서 theme로 변경
// - document.querySelector("body")를 docuement.body로 변경해서 DOM 탐색 시간을 줄임
// - render, init, toggleTheme 함수로 관련 코드를 묶어내어 eventListener 내부 콜백함수 부분 단순화
