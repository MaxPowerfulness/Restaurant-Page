function menuInitialize() {
    const content = document.getElementById('content');

    const drink = [['Soda', '$1.50'], ['Coffee', '$1.00'], ['Juice', '$1.50'], ['Iced Tea', '$1.50'], ['Smoothie', '$2.50'], ['MilkShake', '$3.00']];
    const food = [['Chicken Pesto', '$6.50'], ['BLT', '$6.00'], ['Turkey Avocado', '$6.50'], ['Ham Apple Swiss', '$7.00'], ['Cheesy Veggie', '$5.50'], ['Bacon and Eggs', '$6.00'], ['Italian', '$6.50'], ['Prosciutto and Provolone', '$7.00'], ['Pizza Panini', '$6.50'], ['Dessert', '$6.00']];
    const side = [['Fries', '$3.00'], ['Onion Rings', '$3.00'], ['Tater Tots', '$3.00'], ['Salad', '$2.50'], ['Soup', '$2.50'], ['Potato Salad', '$2.50']];

    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('menuContainer');
    content.appendChild(drinkContainer);
    const drinkHeader = document.createElement('h1');
    drinkHeader.textContent = "Drinks";
    drinkContainer.appendChild(drinkHeader);
    menuItemGenerator(drink, drinkContainer);

    const foodContainer = document.createElement('div')
    foodContainer.classList.add('menuContainer');
    content.appendChild(foodContainer);
    const foodHeader = document.createElement('h1');
    foodHeader.textContent = "Paninis";
    foodContainer.appendChild(foodHeader);
    menuItemGenerator(food, foodContainer);

    const sideContainer = document.createElement('div');
    sideContainer.classList.add('menuContainer');
    content.appendChild(sideContainer);
    const sideHeader = document.createElement('h1');
    sideHeader.textContent = "Sides";
    sideContainer.appendChild(sideHeader);
    menuItemGenerator(side, sideContainer);
}



function menuItemGenerator(menuList, container) {
    return menuList.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('menuItem');
        let menuItem = item[0].padEnd(50, '.')
        div.textContent = `${menuItem}` + `${item[1]}`;
        container.appendChild(div);
    });
};

export {menuInitialize};