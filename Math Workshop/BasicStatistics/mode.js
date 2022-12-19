
//Calculamos la moda
//La moda es la el número (o string) que más se repite en una lista

function modeCalc (list) {
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

//elemento cogido de median.js, era para ordenar listas desordenadas
function sortedBidimensionalList (unsortedList, i) { //con los dos parámetros que le estamos dando, le decimos que nos ordene la unsortedList y además, la posición en el array que queremos que nos ordene, en este caso es la posición 1 
    function sortUnsortedList (valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i];//le ponemos el índice (i) porque es la posición del array de dos elementos que queremos que nos compare y esto nos dará como resultado un array donde el elemento que más se repita nos lo ordene en la última posición ya que lo estamos ordenando de menor a mayor
    };
    const list = unsortedList.sort(sortUnsortedList);
    return list;
};
//Ejecicio: Debemoss convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

// function solution(obj) {
//     const out = [];
//     const aux = Object.entries(obj);
//     aux.forEach((student) => {
//       out.push({
//           "id": student[0],
//           "name": student[1],
//         })
//     })
//     return out;
// };
