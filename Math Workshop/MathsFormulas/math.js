//Cálculo del area y perímetro de un cuadrado

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

//Cálculo del area y perímetro de un triángulo

const triangleSide1 = 5;
const triangleSide2 = 7;
const triangleBase = 4;
const triangleHeight= ; //pitagoras 

const trianglePerimeter = triangleBase + triangleSide1 + triangleSide2;

const triangleArea = (triangleBase * triangleHeight) / 2;
