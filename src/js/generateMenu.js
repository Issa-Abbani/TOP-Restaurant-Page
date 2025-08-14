export const generateMenu = (()=>{
  const main = document.querySelector('main');
  const loadMe = ()=>{
    main.innerHTML = '';

    //generate menu container
    function generateMenuContainer(){
      const menuCont = document.createElement('div');
      menuCont.classList.add('menu-container');
      main.append(menuCont);
    }

    //generate menu items
    function generateMenuItems(){
      const menuCont = document.querySelector('.menu-container');
      const menuItems = [
        {
          name: "Apple Mint Shisha",
          description: "Smooth apple and mint flavor for a relaxing experience.",
          price: 12.50,
          image: 'assets/images/shisha_logo_16by9.jpg'
        },
        {
          name: "Arabic Coffee",
          description: "Bitter yet addicting.",
          price: 2.99,
          image: 'assets/images/coffee_16by9.jpg'
        },
        {
          name: "Breakfast Combo",
          description: "An all you can eat meal to start the day. Croissants, Manakish and more!",
          price: 8.99,
          image: 'assets/images/breakfast_16by9.jpg'
        },
        {
          name: "Classic Beef Burger with Cheese",
          description: "A good 'ol classic that is forever timeless.",
          price: 6.99,
          image: 'assets/images/burger_16by9.jpg'
        },
        {
          name: "Grilled Mashawi",
          description: "Grilled arabic goodness including tawouk, kafta, and lahme.",
          price: 11.99,
          image: 'assets/images/mashewe_16by9.jpg'
        },
        {
          name: "Pasta",
          description: "Italy has come to you!",
          price: 5.99,
          image: 'assets/images/pasta_logo_16by9.jpg'
        },
        {
          name: "Pepperoni Pizza",
          description: "Italy is still here! Just more cheesy!",
          price: 7.99,
          image: 'assets/images/pizza_logo_16by9.jpg'
        },
        {
          name: "Sushi",
          description: "I hope you know how to use chopsticks!",
          price: 8.99,
          image: 'assets/images/sushi_eating_16by9.jpg'
        }
      ];

      menuItems.forEach(item =>{
        //create menu item
        const article = document.createElement('article');
        article.classList.add('menu-item');

        //add menu item img
        const img = document.createElement('img');
        img.classList.add('menu-img');
        img.src = item.image;
        img.alt = 'Not Found!';
        img.loading = 'lazy';

        //create menu content container
        const menuContent = document.createElement('div');
        menuContent.classList.add('menu-content');

        //create menu details
        const itemName = document.createElement('h2');
        itemName.classList.add('menu-name');
        itemName.textContent = item.name;

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('menu-desc');
        itemDesc.textContent = item.description;

        const itemPrice = document.createElement('span');
        itemPrice.classList.add('menu-price');
        itemPrice.textContent = `$${item.price}`;

        //appending menu items
        menuCont.append(article);
        article.append(img, menuContent);
        menuContent.append(itemName,itemDesc, itemPrice);
      });

    }

    generateMenuContainer();
    generateMenuItems();

  }//loadMe
  return{loadMe};
})();