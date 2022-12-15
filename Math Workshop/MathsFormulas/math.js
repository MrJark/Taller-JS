//Cálculo del area y perímetro de un cuadrado

console.group('Square');


const squareSide = 5; 
const squarePerimeter = squareSide * 4;

//dos maneras de elevar la el side y encontrar su area
const squareArea = squareSide * squareSide;
const squareArea2 = Math.pow(squareSide, 2);//esta es la mejor y más correcta

console.log({
    squareSide,
    squarePerimeter,
    squareArea,
});

function squareeCalcs (side) {
    return{
        perimeter: side * 4,
        area: side * side,
    };
}

console.groupEnd('Square'); 
//el console.group('Square'); y console.groupEnd('Square'); sirven para agrupar en la consola los calculos que nosotros queramos y puedan colapsar y se vea mas bonito. Tenemos que poner entre los conole, lo cálculos de los objetos que sean similares (o lo que nosotros queramos que sea un grupo y que se nos muestre en un mismo bloque en la consola)

//Cálculo del area y perímetro de un triángulo

console.group('Triangle');

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight=  5.5; //pitagoras 

const trianglePerimeter = triangleBase + triangleSide1 + triangleSide2;
const triangleArea = (triangleBase * triangleHeight) / 2;

console.log({
    triangleSide1,
    triangleSide2,
    triangleBase,
    triangleHeight,
    trianglePerimeter,
    triangleArea,
});

//Pero la forma mas secilla de hacer esto si queremos escalarlo en el tiempo es hacer una función con ello

function triangleCalcs (side1, side2, base, height) {
    return{
        perimeter: side1 + side2 + base,
        area: (base * height) / 2,
    };
};

//voy a calcular la altura de un triángulo isósceles no equilátero
function triangleHeightCalcs (sides, Base){
    if ( sides == Base) {
        console.warn ('Este no es un triángulo isósceles');
    } else {
        // formula: h = √(sides ** 2 - (Base**2)/4)
        return Math.sqrt ( (sides ** 2) - ( (Base ** 2) ) / 4 );
    };
};

console.groupEnd('Triangle');

//Circunferencias

console.group('Circle');

const circleRadio = 3;
const pi = Math.PI;
//.toFixed(18) este método lo que nos permite es darle un número concreto de decimales. En este caso, el número de decimales que le he puesto son 18.

const circlePerimeter = (circleRadio * 2) * pi;
const circleArea = pi * Math.pow(circleRadio, 2);
//otra forma de hacer o escribir una potencia sería -> circleRadio ** 2. Es decir, los dos ' ** ' significan que estamos elevando y el número que pongamos a continuación, sería a lo que lo estamos elevado. En el caso del ejemplo, al 2.

console.log({
    circleRadio,
    circleArea,
    circlePerimeter,
});

function cicleCalcs (radio) {
    return{
        girth: radio * Math.PI,
        area: Math.PI * Math.pow(radio, 2),
    };
};

console.groupEnd('Circle');
