import '../styles/styles.css';
import { sidebar } from "./sidebar.js";
import { tabSwitching } from "./tabSwitch.js";

document.addEventListener('DOMContentLoaded', () => {
  sidebar.sidebarEvents();
  tabSwitching();
})