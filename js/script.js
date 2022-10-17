// Declaring all global variables - Start
const foods = document.querySelectorAll('.food-block');
const drinks = document.querySelectorAll('.drink-block');
const desserts = document.querySelectorAll('.dessert-block');
const overlay = document.getElementById('overlay');
const endboxOrder = document.getElementById('endboxOrder');

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

// -------- Get order names and costs - Start

// -------- Get order names and costs - End
function getOrders() {
    // Getting Order Names and Costs
    const foodOrder = document.querySelector(".food-block.selected .option-name").innerText;
    const foodPriceString = document.querySelector('.food-block.selected .opt-prc').innerText;
    const foodPrice = Number(foodPriceString.replace(',','.'));
    const drinkOrder = document.querySelector(".drink-block.selected .option-name").innerText;
    const drinkPriceString = document.querySelector('.drink-block.selected .opt-prc').innerText;
    const drinkPrice = Number(drinkPriceString.replace(',','.'));
    const dessertOrder = document.querySelector(".dessert-block.selected .option-name").innerText;
    const dessertPriceString = document.querySelector('.dessert-block.selected .opt-prc').innerText;
    const dessertPrice = Number(dessertPriceString.replace(',','.'));


    // Changing text in Checkout box
    const endFood = document.querySelector('.end-food');
    const endDrink = document.querySelector('.end-drink');
    const endDessert = document.querySelector('.end-dessert');
    const foodCost = document.querySelector('.food-price');
    const drinkCost = document.querySelector('.drink-price');
    const dessertCost = document.querySelector('.dessert-price');
    const totalCost = document.querySelector('.total-price');
    const finalPrice = (foodPrice + drinkPrice + dessertPrice);


    endFood.innerHTML = `${foodOrder}`;
    foodCost.innerHTML = "R$ " + `${foodPrice.toFixed(2)}`
    endDrink.innerHTML = `${drinkOrder}`;
    drinkCost.innerHTML = "R$ " + `${drinkPrice.toFixed(2)}`
    endDessert.innerHTML = `${dessertOrder}`;
    dessertCost.innerHTML = "R$ " + `${dessertPrice.toFixed(2)}`
    totalCost.innerHTML = "R$ " + `${finalPrice.toFixed(2)}`

}

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

function finishOrder() {
    overlay.classList.remove('deactivated')
    getOrders()
}

function redoOrder() {
    overlay.classList.add('deactivated')
}

activateBtn();




