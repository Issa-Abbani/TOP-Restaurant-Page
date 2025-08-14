import { generateHome } from "./generateHome.js";

export const generatePage = (function(){
  const main = document.querySelector('main');
  //generating the home tab
  const loadHome = ()=>{
    generateHome.loadMe();
  }

  const loadMenu = ()=>{
    main.innerHTML = '';
  }

  const loadReviews = ()=>{
    main.innerHTML = '';
  }
  return{loadHome, loadMenu, loadReviews};
})();