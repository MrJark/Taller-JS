
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
    const average = sumList / list.length;
    console.log(average);
    return average;
};
