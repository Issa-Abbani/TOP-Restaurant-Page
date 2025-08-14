// import '../styles/styles.css';
import { sidebar } from "./sidebar.js";
import { generateHome } from "./generateHome.js";
import { generatePage } from "./pageLoad.js";


function main(){
  sidebar.sidebarEvents();
  generatePage.loadHome();
}

main();

console.log('Hello world!');