import { generatePage } from "./pageLoad.js";

export function tabSwitching() {
  const navButtons = document.querySelectorAll('.nav-items li button');
  const main = document.querySelector('main');
  let currentButton;

  // set default tab
  main.className = 'homeTab';
  generatePage.loadHome();
  currentButton = navButtons[0];

  // attach click handlers
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      if(button.value === main.className) return;
      main.className = '';
      main.classList.add(button.value);

      if(button.value === 'homeTab') {
        generatePage.loadHome();
      } else if(button.value === 'menuTab') {
        generatePage.loadMenu();
      } else if(button.value === 'reviewTab') {
        generatePage.loadReviews();
      }
      currentButton = button;

      navButtons.forEach(btn => {
        btn.classList.toggle('active-tab', btn === currentButton);
      });

    });
  });
}
