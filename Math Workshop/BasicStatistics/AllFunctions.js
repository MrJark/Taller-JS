//'Super función' para poder llevarlo todo al análisis salarial, esta siempre va a ir la primera en mayúscula, como el método Math para que en su interior tenga métodos, o en este caso las funciones que ya hemos creado. 
//Vamos a guardar funciones dentro de objetos
const AllFunctions = {};
// y esto se consigue con la siguiente sintaxis:
// AllFunctions.ejemplo = function ejemplo (parámetro) {};

AllFunctions.esPar = function esPar (list) {
    return !(list.length % 2); //como nos daría cero si es un número par y daría false, tenemos que negar esa condició para que nos de true a ser un nº par
};
AllFunctions.esImpar = function esImpar (list) {
    return (list.length % 2);
};
AllFunctions.averageCalc = function averageCalc (list)  {
    
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
//Vamos a calcular la mediana. Es el elemento que está en el centro de la lista, el valor que está en medio, Si la lista es impar, será el que esté justo en medio pero si es par, dara el promedio de los dos que se encuentre en la mitad, la mitad por arriba y la mitad por abajo
AllFunctions.medianCalc = function medianCalc (unorderList) {

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
AllFunctions.averageCalc = function averageCalc (list)  {
    
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
AllFunctions.sortedList = function sortedList (unsortedList) {
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
AllFunctions.modeCalc = function modeCalc (list) {
    const countList = {};

    for (let i = 0; i < list.length; i++){
        const element = list[i]; //element es el nº o string que aparece en nuestra lista

        if (countList[element]) {
            countList[element] += 1; //el += es para sumarle a ese elemento, al valor acumulado, un 1, sería lo mismo que poner countList[element] = countList[element] + 1;
        } else {
            countList[element] = 1;//esto es lo que me guarda que el elemento apareció mínimo 1 vez
        };
        //usamos un condicional par que me los pueda ir contando
    };

    //métodos para crear un array a través de un objeto:
    //Object.entries()
    //Object.keys()
    //Object.values() -> este nos devuelve un array de dos posiciones (un array de un array), es decir, me devuelve las 'keys' en la primera posición y los valores 'values' en la segunda posición
        //Eje: const obj = {a:1, b:2, c:3}
        //Object.keys(obj) -> ['a', 'b', 'c']
        //Object.values(obj) -> [1, 2, 3]
        //Object.entries(obj) -> [Array(2), Array(2), Array(2)]
            //0 -> (2) ['a', 1]
            //1 -> (2) ['b', 2]
            //2 -> (2) ['c', 3]
            //lenght: 3
    //

    const arrayList = Object.entries(countList);
    const sortList = sortedBidimensionalList(arrayList, 1);//el 1 lo ponemos porque es la posición que queremos que nos ordene ya que  es el nº de veces que aparece (desde el método .entries())
    const maxRepetitionNumber = sortList[sortList.length - 1]; //con esto lo que hacemos es que nos diga cuál ha sido el nº que más se ha repetido dentro de la sortList ya que es la lista ordenada y como la estamos oredenando de menor a mayor y la lista empieza acontar desde 0, el -1 nos sirve para llegar a la última posición del array

    console.log({countList, arrayList, sortList, maxRepetitionNumber});
    
    const moda = maxRepetitionNumber[0];
    return `La moda de la lista que me has pasado es '${moda}'`;
};
AllFunctions.sortedBidimensionalList = function sortedBidimensionalList (unsortedList, i) { //con los dos parámetros que le estamos dando, le decimos que nos ordene la unsortedList y además, la posición en el array que queremos que nos ordene, en este caso es la posición 1 
    function sortUnsortedList (valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];//le ponemos el índice (i) porque es la posición del array de dos elementos que queremos que nos compare y esto nos dará como resultado un array donde el elemento que más se repita nos lo ordene en la última posición ya que lo estamos ordenando de menor a mayor
    };
    const list = unsortedList.sort(sortUnsortedList);
    return list;
};