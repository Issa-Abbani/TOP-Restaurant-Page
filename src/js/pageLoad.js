export const generatePage = (function(){
  const main = document.querySelector('main');

  //generating the home tab
  const generateHome = ()=>{

    main.innerHTML = '';

    //generate sections & appends them to main
    function generateSections(){
    const introHome = document.createElement('section');
    introHome.classList.add('home', 'intro-home');

    const midHome = document.createElement('section');
    midHome.classList.add('home', 'mid-home');

    const endHome = document.createElement('section');
    endHome.classList.add('end-home');

    main.append(introHome, midHome, endHome);
    }

    //generate content for the first section
    function introHomeContent(){
      const introHome = document.querySelector('section.home.intro-home');

      //generate the image and assign it's attributes
      const img = document.createElement('img');
      img.src = 'assets/images/sushi_logo_16by9.jpg';
      img.alt = 'img not found';
      img.loading = 'lazy';

      //generate aside
      const aside = document.createElement('aside');

      //generate content inside aside
      const h1 = document.createElement('h1');
      h1.textContent = 'A Place That Travels The World!';

      const p = document.createElement('p');
      p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odit consectetur hic ad repudiandae? Ex, natus odio fugiat voluptatum aliquid vero cumque, dicta quis, mollitia sapiente quae. Eos, officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla enim sed ipsa consequuntur esse autem iusto itaque repudiandae modi pariatur, laborum, inventore iste, minima architecto beatae numquam eius corporis sint.';

      //appending the intro-home
      introHome.append(img, aside);
      aside.append(h1, p);
    }

    function midHomeContent(){
      const midHome = document.querySelector('section.home.mid-home');

      //generate aside
      const aside = document.createElement('aside');
      //generate aside content
      const h1 = document.createElement('h1');
      h1.textContent = 'Comfortable Dining Area!';
      
      const p = document.createElement('p');
      p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odit consectetur hic ad repudiandae? Ex, natus odio fugiat voluptatum aliquid vero cumque, dicta quis, mollitia sapiente quae. Eos, officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla enim sed ipsa consequuntur esse autem iusto itaque repudiandae modi pariatur, laborum, inventore iste, minima architecto beatae numquam eius corporis sint.';

      //generate image
      const img = document.createElement('img');
      img.src = 'assets/images/resto2_16by9.jpg';
      img.alt = 'img not found';
      img.loading = 'lazy';

      //append content to section
      midHome.append(aside, img);
      aside.append(h1, p);
    }

    function endHomeContent(){
      const endHome = document.querySelector('section.end-home');
      const endHomeItems = [
            {
              src: 'assets/svg/bakery_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
              text: 'The Best Breakfast'
            },
            {
              src: 'assets/svg/local_cafe_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
              text: 'Relxing Café'
            },
            {
              src: 'assets/svg/dinner_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
              text: 'Various Cuisines'
            },
            {
              src: 'assets/svg/kebab_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
              text: 'Traditional Arab Food'
            },
            {
              src: 'assets/svg/award_meal_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg',
              text: 'Award-Winning Food'
            }
          ];

      endHomeItems.forEach(item =>{
        //div container creation
        const div = document.createElement('div');
        div.classList.add('i-cont');
        //children of div creation
        const svg = document.createElement('img');
        svg.src = item.src;
        svg.loading = 'lazy';
        svg.alt = 'not found';
        
        const span = document.createElement('span');
        span.textContent = item.text;

        //append items
        endHome.append(div);
        div.append(svg, span);
      });
    }

    generateSections();
    introHomeContent();
    midHomeContent();
    endHomeContent();

  }//generateHome


  return{generateHome};
})();