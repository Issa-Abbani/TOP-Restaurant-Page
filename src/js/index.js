// import '../styles/styles.css';
import { sidebar } from "./sidebar.js";
import { generatePage } from "./pageLoad.js";


function main(){
  sidebar.sidebarEvents();
  generatePage.generateHome();
}

main();

console.log('Hello world!');