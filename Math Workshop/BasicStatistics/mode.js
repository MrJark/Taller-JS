
//Calculamos la moda
//La moda es la el número (o string) que más se repite

function modeCalc (list) {
    const countList = ();

    for (let i = 0; i < list.length; i++){
        const element = list[i]; //element es el nº o string que aparece en nuestra lista

        if (countList[element]) {
            countList[element] += 1; //el += es para sumarle a ese elemento, al valor acumulado, un 1, sería lo mismo que poner countList[element] = countList[element] + 1;
        } else {
            countList[element] = 1;//esto es lo que me guarda que el elemento apareció mínimo 1 vez
        };
        //es un condicional par que me los pueda ir contando
    };
};