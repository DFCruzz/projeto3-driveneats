// Declaring all global variables - Start
const foods = document.querySelectorAll('.food-block');
const drinks = document.querySelectorAll('.drink-block');
const desserts = document.querySelectorAll('.dessert-block');
const slider = document.querySelector('.selection-options');
const orderBtn = document.getElementsByClassName('.order-btn');
const orderSelection = document.querySelectorAll('.selected');
// -------- Select items functions - Start

// Choose you food option - Start
foods.forEach((food) => {
    food.addEventListener('click', function() {
        const userSelection = document.querySelectorAll('.food-block');
        userSelection.forEach(foodItem => {
            if(foodItem.classList.contains("selected") && foodItem !== food) {
                foodItem.classList.remove('selected')
            }
        });
        if(food.classList.contains('selected')) {
            food.classList.remove('selected')
        }
        else {
            food.classList.add('selected')
        }
        activateBtn()
    });
});
// Choose you food option - End

// Choose you drink option - Start
drinks.forEach((drink) => {
    drink.addEventListener('click', function() {
        const userSelection = document.querySelectorAll('.drink-block');
        userSelection.forEach(drinkItem => {
            if(drinkItem.classList.contains("selected") && drinkItem !== drink) {
                drinkItem.classList.remove('selected')
            }
        });
        if(drink.classList.contains('selected')) {
            drink.classList.remove('selected')
        }
        else {
            drink.classList.add('selected')
        }
        activateBtn()
    });
});
// Choose you drink option - End

// Choose you dessert option - Start
desserts.forEach((dessert) => {
    dessert.addEventListener('click', function() {
        const userSelection = document.querySelectorAll('.dessert-block');
        userSelection.forEach(dessertItem => {
            if(dessertItem.classList.contains("selected") && dessertItem !== dessert) {
                dessertItem.classList.remove('selected')
            }
        });
        if(dessert.classList.contains('selected')) {
            dessert.classList.remove('selected')
        }
        else {
            dessert.classList.add('selected')
        }
        activateBtn()
    });
});
// Choose you dessert option - End

// -------- Select items functions - End





