// Import images
import sushiImg from '../assets/images/sushi_logo_16by9.jpg';
import restoImg from '../assets/images/resto2_16by9.jpg';

// Import SVGs
import bakerySvg from '../assets/svg/bakery_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import cafeSvg from '../assets/svg/local_cafe_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import dinnerSvg from '../assets/svg/dinner_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import kebabSvg from '../assets/svg/kebab_dining_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import awardSvg from '../assets/svg/award_meal_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

export const generateHome = (() => {
  const main = document.querySelector('main');

  const loadMe = () => {
    main.innerHTML = '';

    // Generate sections & append them to main
    function generateSections() {
      const introHome = document.createElement('section');
      introHome.classList.add('home', 'intro-home');

      const midHome = document.createElement('section');
      midHome.classList.add('home', 'mid-home');

      const endHome = document.createElement('section');
      endHome.classList.add('end-home');

      main.append(introHome, midHome, endHome);
    }

    // Intro section content
    function introHomeContent() {
      const introHome = document.querySelector('section.home.intro-home');

      const img = document.createElement('img');
      img.src = sushiImg;
      img.alt = 'img not found';
      img.loading = 'lazy';

      const aside = document.createElement('aside');

      const h1 = document.createElement('h1');
      h1.textContent = 'A Place That Travels The World!';

      const p = document.createElement('p');
      p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odit consectetur hic ad repudiandae? Ex, natus odio fugiat voluptatum aliquid vero cumque, dicta quis, mollitia sapiente quae. Eos, officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla enim sed ipsa consequuntur esse autem iusto itaque repudiandae modi pariatur, laborum, inventore iste, minima architecto beatae numquam eius corporis sint.';

      introHome.append(img, aside);
      aside.append(h1, p);
    }

    // Mid section content
    function midHomeContent() {
      const midHome = document.querySelector('section.home.mid-home');

      const aside = document.createElement('aside');

      const h1 = document.createElement('h1');
      h1.textContent = 'Comfortable Dining Area!';

      const p = document.createElement('p');
      p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio odit consectetur hic ad repudiandae? Ex, natus odio fugiat voluptatum aliquid vero cumque, dicta quis, mollitia sapiente quae. Eos, officia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla enim sed ipsa consequuntur esse autem iusto itaque repudiandae modi pariatur, laborum, inventore iste, minima architecto beatae numquam eius corporis sint.';

      const img = document.createElement('img');
      img.src = restoImg;
      img.alt = 'img not found';
      img.loading = 'lazy';

      midHome.append(aside, img);
      aside.append(h1, p);
    }

    // End section content
    function endHomeContent() {
      const endHome = document.querySelector('section.end-home');
      const endHomeItems = [
        { src: bakerySvg, text: 'The Best Breakfast' },
        { src: cafeSvg, text: 'Relxing Café' },
        { src: dinnerSvg, text: 'Various Cuisines' },
        { src: kebabSvg, text: 'Traditional Arab Food' },
        { src: awardSvg, text: 'Award-Winning Food' }
      ];

      endHomeItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('i-cont');

        const svg = document.createElement('img');
        svg.src = item.src;
        svg.loading = 'lazy';
        svg.alt = 'not found';

        const span = document.createElement('span');
        span.textContent = item.text;

        endHome.append(div);
        div.append(svg, span);
      });
    }

    generateSections();
    introHomeContent();
    midHomeContent();
    endHomeContent();
  };

  return { loadMe };
})();
