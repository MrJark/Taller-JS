
const btn = document.querySelector('#calculate');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const priceResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceDiscount );

function calculatePriceDiscount () {
    // Formula -> (Price * (100 - Discount)) / 100;

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    //para corregir cieros bugs 
    if ( !price || !discount ) {
        priceResult.innerHTML = 'Escribe el precio y el descuento antes, por favor 🔪'
        return;
    }
    if (discount >= 100){
        priceResult.innerHTML = 'No estás entendiendo como funcionan los descuentos...'
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    priceResult.innerHTML = 'El precio con el descuento es $' + newPrice;
};