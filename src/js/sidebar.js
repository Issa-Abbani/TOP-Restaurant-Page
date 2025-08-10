export const sidebar = (function(){
  const menuBtn = document.querySelector('.mobile-dash-btn');
  const exitSideBtn = document.querySelector('.mobile-close-dash-btn');
  const sidebarUI = document.querySelector('.mobileSidebar');
  const main = document.querySelector('main');
  let isSidebarActive = false;

  const sidebarEvents = ()=>{
    console.log(menuBtn, exitSideBtn, sidebarUI);

    menuBtn.addEventListener("click", ()=>{
      if(!isSidebarActive){
        sidebarUI.classList.remove('inactive');
        sidebarUI.classList.add('active');
        main.classList.add('paused');
        isSidebarActive = true;
      }
    }); 

    exitSideBtn.addEventListener("click", ()=>{
        if(isSidebarActive){
        sidebarUI.classList.remove('active');
        sidebarUI.classList.add('inactive');
        main.classList.remove('paused');
        isSidebarActive = false;
      }
    })
  }

  return{
    sidebarEvents
  }

}
)();