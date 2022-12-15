
const btn = document.querySelector('#calculate');
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
// const inputDiscount = document.querySelector('#discount');
const priceResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceDiscount );

// first and second metod: function calculatePriceDiscount () {
//     // Formula -> (Price * (100 - Discount)) / 100;

//     const price = Number(inputPrice.value); //colocar number es para obligar a que sea un número lo que escriban
//     const discount = Number(inputDiscount.value);

//     //para corregir cieros bugs 
//     if ( !price || !discount ) {
//         priceResult.innerHTML = 'Escribe el precio y el descuento antes, por favor 🔪'
//         return;
//     }
//     if (discount >= 100){
//         priceResult.innerHTML = 'No estás entendiendo como funcionan los descuentos...'
//         return;
//     }

//     const newPrice = (price * (100 - discount)) / 100;

//     priceResult.innerHTML = 'El precio con el descuento es $' + newPrice;
// };

// second metod: function calculatePriceDiscount () {
//     // Formula -> (Price * (100 - Discount)) / 100;

//     const price = Number(inputPrice.value); //colocar number es para obligar a que sea un número lo que escriban
//     const coupon = inputCoupon.value; //es un string

//     if ( !price || !coupon ) {
//         priceResult.innerHTML = 'Escribe el precio y el descuento antes, por favor 🔪'
//         return;
//     }

//     let discount;

//     // if (coupon == 'Patatas-traigo') {
//     //     discount = 30;
//     // } else if (coupon == 'Manolo-Cabeza-Bolo') {
//     //     discount = 15;
//     // }else  {
//     //     priceResult.innerHTML = `Una pena, el precio es de ${inputPrice.value}, sorry 🙂`;
//     //     return;
//     // }

//     //otra manera de hacerlo sería con switch

//     switch (coupon) {
//         case 'Patatas-traigo':
//             discount = 30;
//             break;
//         case 'Manolo-Cabeza-Bolo':
//             discount = 14;
//             break;
    
//         default:
//             priceResult.innerHTML = `Una pena, el precio es de ${inputPrice.value}, sorry 🙂`;
//         return;
//     };

//     const newPrice = (price * (100 - discount)) / 100;

//     priceResult.innerHTML = `El precio con el descuento es $ ${newPrice}`;
// };

//Otra manera de hacerlo pero con código mucho más limpio. Con solo uno o dos if y con arrays y objetos

//Otra manera de hacerlo pero con código mucho más limpio. Con solo uno o dos if y con arrays y objetos

const couponObj = {
    'Manolo-Cabeza-Bolo': 15,
    'Patatas-traigo': 30,
    'Pos-ya-estaría': 5,
}

//Esta sería otra manera de trabajar, y seguramente sea la más indicada y como se trabaja en el back-end. Ya que es un poco más larga que solo con arrays pero podemos tener más información de cada cupón

const couponsList = [];
couponsList.push({
    name: 'Pos-ya-estaría',
    discount: 5,
});
couponsList.push({
    name: 'Patatas-traigo',
    discount: 30,
});

function calculatePriceDiscount () {
    // Formula -> (Price * (100 - Discount)) / 100;
    
    const price = Number(inputPrice.value); //colocar number es para obligar a que sea un número lo que escriban
    const coupon = inputCoupon.value; //es un string

    if ( !price || !coupon ) {
        priceResult.innerHTML = 'Escribe el precio y el descuento antes, por favor 🔪'
        return;
    }

    let discount;

    if (couponObj[coupon]) {
        discount = couponObj[coupon];
    }else {
        priceResult.innerHTML =`El cupon no es válido, lo siento. Tu precio es $${inputPrice.value}`
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    priceResult.innerHTML = `El precio con el descuento es $ ${newPrice}`;
};

