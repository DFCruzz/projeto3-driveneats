// Declaring all global variables - Start
const foods = document.querySelectorAll('.food-block');
const drinks = document.querySelectorAll('.drink-block');
const desserts = document.querySelectorAll('.dessert-block');

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
            if(drinkItem.classList.contains('selected') && drinkItem !== drink) {
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
            if(dessertItem.classList.contains('selected') && dessertItem !== dessert) {
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


// -------- Order button function - Start
function activateBtn() {
    const orderBtn = document.querySelector('.order-btn');
    const orderSelection = document.querySelectorAll('.selected');

    if(orderSelection.length == 1) { 
        orderBtn.disabled = true;      
        orderBtn.innerHTML = "2 opções restantes";
    }
    else if (orderSelection.length == 2) {  
        orderBtn.disabled = true;      
        orderBtn.innerHTML = "Selecione sua última opção";
    }
    else if (orderSelection.length == 3) {
        orderBtn.disabled = false;
        orderBtn.innerHTML = "Prontinho! Clique aqui para finalizar o pedido"
    }
    else {
        orderBtn.disabled = true;
        orderBtn.innerHTML= "Selecione os 3 itens para fechar o pedido"
    }
}
// -------- Order button function - End

activateBtn();




