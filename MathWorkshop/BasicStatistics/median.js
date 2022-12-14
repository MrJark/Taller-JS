
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

//Vamos a calcular la mediana. Es el elemento que está en el centro de la lista, el valor que está en medio, Si la lista es impar, será el que esté justo en medio pero si es par, dara el promedio de los dos que se encuentre en la mitad, la mitad por arriba y la mitad por abajo
function medianCalc (unorderList) {

    const list = sortedList(unorderList);// esto es para que la lista desordenada se ordene y funione como debe

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

//parte para ordenar una lista desordenada
function sortedList (unsortedList) {
    function sortUnsortedList (valorAcumulado, nuevoValor) {
        //debemos decir el criterio con el que queremos ordenar la lista. De mayor a menor, al reves, si es un string, por ordel alfabético...
        //Forma 1. Más larga y compleja

        // if(valorAcumulado > nuevoValor) {
        //     return 1;
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0;
        // } else if (valorAcumulado < nuevoValor) {
        //     return -1;
        // };

        //con este condicional lo que hacemos es ordenar nuestra lista de menor a mayor. Los returns con numeros positivos negativos y el cero es por el método .sort() el cual si le devolvemos un valor postivo >= 1, hará el flip y si le devolvemos un valor <= 0 dejará los numeros como están y pasará al siguiente de la lista.
        //Y si queremos ordenar la lista de mayor a menos, simplemente tendremos que cambiar el 1 por el -1 y nos la ordenará al revés

        //Forma 2, más rápida y limpia

        return valorAcumulado - nuevoValor; //y ya está

        // esto me devuelve un numero positivo, negativo o cero y por tanto con   .sort() lo ordena dependiendo lo que de y como lo queramos, en este caso la ordena de menor a mayor y su ponemos nuevoValor - valorAcumulado, nos la ordenará de mayor a menor
    };

    const list = unsortedList.sort(sortUnsortedList);
    //y otra manera mucho más fácil y limpia es con las arrow functions
    // const list = unsortedLis.sort((a,b) => a - b);

    return list;
};