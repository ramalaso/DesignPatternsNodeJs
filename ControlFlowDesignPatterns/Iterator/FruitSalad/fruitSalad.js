const fruits = ['Apples', 'Oranges', 'Kiwi', 'Pears'];

function* fruitShop() {
    for (const fruit of fruits) {
        yield fruit;
    }
}

const getFruits = fruitShop();

function makeSalad() {
    let fruitBasket = getFruits.next();
    if (!fruitBasket.done) {
        console.log(fruitBasket.value);
        makeSalad();
    } else {
        console.log('---Were out of fruits');
    }
}

makeSalad();