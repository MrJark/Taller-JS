
//Ejercicio para saber si una lista es par o impar

//Froma 1
// function esPar (list) {
//     if (list.length % 2) {
//         return false;
//     } else {
//         return true;
//     }
// };
//el operador % es la fomra en la que dividimos un número y nos dice si es divisible entre ese número y no nos da decimales. Es decir: 10 % 2 nos dará 0 y popr tanto, es un elemento false ya que o sha dado cero y no tenemos ningún decimal en la dividión pero si le decimos 11 % 2, nos drá 1 porque si tenemos decimales y por tanto, ese 1 significa true
 
//Forma 2
function esPar (list) {
    return !(list.length % 2); //como nos daría cero si es un número par y daría false, tenemos que negar esa condició para que nos de true a ser un nº par
};
function esImpar (list) {
    return (list.length % 2);
};

//Vamos a calcular la mediana. Es el elemento que está en el centro de la lista, el valor que está en medio, Si la lista es imoar, será el que esté justo en medio pero si es par, dara el promedio de los dos que se encuentre en medio

function medianCalc (list) {
    const parList = esPar(list);

    if (parList) {
        const indexMitad1ListaPar = (list.length / 2) - 1;
        const indexMitad2ListaPar = (list.length / 2);

        //Forma 1
        //con esto calculamos el promedio de la lista ya que cogería la mitad por abajo y la mitad por arriba, los sumaría y los dividiría entre 2
        // averageCalc([list[indexMitad1ListaPar], [indexMitad2ListaPar]]);

        //Forma 2 y más limpia de hacerlo
        const halvesLists = [];
        halvesLists.push(list[indexMitad1ListaPar]);
        halvesLists.push(list[indexMitad2ListaPar]);

        const medianHalves = averageCalc(halvesLists);
        return medianHalves;
        //de esta sengunda manera lo que hacemos es tener una lista de mitades vacia y le hacemos .push de la mitad superior e inferior. Y a esa lista hacemos el averageCalc manteniendo las constantes indexMitad1ListaPar y indexMitad2ListaPar

    } else {
        const indiceMedianaListaImpar = Math.floor (list.length / 2);
        //esta const me da el número que está en el centro de la lista sin los decimales ya que es lo que hace el método .floor() de Math y nos redondea hacia abajo
        //recordar que se empieza a contar desde cero y no desde 1
        const medianaListImpar = list[indiceMedianaListaImpar];
        //en esa const tenemos la mediana en la constante guardada
        return medianaListImpar;
    };
};

//parte del average
function averageCalc (list)  {
    
    function addAllElements (valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    };
    const sumList = list.reduce(addAllElements);

    // las anteriores 3 lineas de código se pueden resumir o acortar con unas arrow functions como :
    // const sumList = list.reduce((valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor);
    
    const average = sumList / list.length;
    console.log(average);
    return average;
};
