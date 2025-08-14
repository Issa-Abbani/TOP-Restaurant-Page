import shishaImg from '../assets/images/shisha_logo_16by9.jpg';
import coffeeImg from '../assets/images/coffee_16by9.jpg';
import breakfastImg from '../assets/images/breakfast_16by9.jpg';
import burgerImg from '../assets/images/burger_16by9.jpg';
import mashawiImg from '../assets/images/mashewe_16by9.jpg';
import pastaImg from '../assets/images/pasta_logo_16by9.jpg';
import pizzaImg from '../assets/images/pizza_logo_16by9.jpg';
import sushiImg from '../assets/images/sushi_eating_16by9.jpg';

export const generateMenu = (() => {
  const main = document.querySelector('main');

  const loadMe = () => {
    main.innerHTML = '';

    // Generate menu container
    function generateMenuContainer() {
      const menuCont = document.createElement('div');
      menuCont.classList.add('menu-container');
      main.append(menuCont);
    }

    // Generate menu items
    function generateMenuItems() {
      const menuCont = document.querySelector('.menu-container');
      const menuItems = [
        { name: "Apple Mint Shisha", description: "Smooth apple and mint flavor for a relaxing experience.", price: 12.50, image: shishaImg },
        { name: "Arabic Coffee", description: "Bitter yet addicting.", price: 2.99, image: coffeeImg },
        { name: "Breakfast Combo", description: "An all you can eat meal to start the day. Croissants, Manakish and more!", price: 8.99, image: breakfastImg },
        { name: "Classic Beef Burger with Cheese", description: "A good 'ol classic that is forever timeless.", price: 6.99, image: burgerImg },
        { name: "Grilled Mashawi", description: "Grilled arabic goodness including tawouk, kafta, and lahme.", price: 11.99, image: mashawiImg },
        { name: "Pasta", description: "Italy has come to you!", price: 5.99, image: pastaImg },
        { name: "Pepperoni Pizza", description: "Italy is still here! Just more cheesy!", price: 7.99, image: pizzaImg },
        { name: "Sushi", description: "I hope you know how to use chopsticks!", price: 8.99, image: sushiImg }
      ];

      menuItems.forEach(item => {
        // Create menu item
        const article = document.createElement('article');
        article.classList.add('menu-item');

        // Add menu item img
        const img = document.createElement('img');
        img.classList.add('menu-img');
        img.src = item.image;
        img.alt = 'Not Found!';
        img.loading = 'lazy';

        // Create menu content container
        const menuContent = document.createElement('div');
        menuContent.classList.add('menu-content');

        // Create menu details
        const itemName = document.createElement('h2');
        itemName.classList.add('menu-name');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('menu-desc');
        itemDesc.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('menu-price');
        itemPrice.textContent = `$${item.price}`;

        // Appending menu items
        menuCont.append(article);
        article.append(img, menuContent);
        menuContent.append(itemName, itemDesc, itemPrice);
      });
    }

    generateMenuContainer();
    generateMenuItems();
  };

  return { loadMe };
})();
