import { generateHome } from "./generateHome.js";
import { generateMenu } from "./generateMenu.js";

export const generatePage = (function(){
  const main = document.querySelector('main');
  //generating the home tab
  const loadHome = ()=>{
    generateHome.loadMe();
  }

  const loadMenu = ()=>{
    generateMenu.loadMe();
  }

  const loadReviews = ()=>{
    main.innerHTML = '';
  }
  return{loadHome, loadMenu, loadReviews};
})();