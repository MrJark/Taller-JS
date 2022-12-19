
//Ejercicio. Calcular el promedio

//Primera forma de calcular el average

// function averageCalc (list)  {
//     //Formula Promedio = suma de todos los elementos / nº de elementos
//     //Suma de los elementos
//     let sumList = 0;

//     for (let i = 0; i < list.length; i++) {
//         sumList = sumList + list [i];
//     }
//     //Calculo de los nº elementos -> list.length
//     const average = sumList / list.length;
//     console.log(average);
//     return average;
// };

//Second way de calcular el average. Reduce method
//este es un método 'duro'

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


