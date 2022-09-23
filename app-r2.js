const TRANSITION_DURATION = 200;
const LOCAL_STORAGE_KEY = 'theme';

const getTheme = () => localStorage.getItem(LOCAL_STORAGE_KEY);

const setTheme = theme => {
  localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  document.body.classList.toggle('dark', theme === 'dark');
};

const init = () => {
  setTheme(getTheme() ?? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTimeout(() => document.body.classList.remove('hide'), TRANSITION_DURATION);
};

const toggleTheme = () => setTheme(getTheme() === 'dark' ? 'light' : 'dark');

window.addEventListener('DOMContentLoaded', init);

document.querySelector('.toggle-button').addEventListener('click', toggleTheme);

//  [변경사항]
// - localStorage로부터 theme를 가져오는 getTheme 함수 생성
// - localStorage에 theme를 저장하고 이를 반영해서 재렌더링하는 setTheme 함수 생성
// - if문 대신 null 병합 연산자를 사용하여 코드 간소화
