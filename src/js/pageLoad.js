import { generateHome } from "./generateHome.js";
import { generateMenu } from "./generateMenu.js";
import { generateReviews } from "./generateReviews.js";

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
    generateReviews.loadMe();
  }
  return{loadHome, loadMenu, loadReviews};
})();