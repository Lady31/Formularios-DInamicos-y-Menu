function calculateTotal() {
    const mainDish = document.getElementById('mainDish');
    const dessert = document.getElementById('dessert');

    const mainDishPrice = parseFloat(mainDish.value);
    const dessertPrice = parseFloat(dessert.value);

    const totalPrice = mainDishPrice + dessertPrice;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Plato fuerte: $${mainDishPrice}<br>Postre: $${dessertPrice}<br>Total a pagar: $${totalPrice.toFixed(2)}`;
}
