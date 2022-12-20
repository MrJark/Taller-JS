console.log(salarios);

//Análisis salarial

function findPerson (wanted) {
    
    return salarios.find(persona => persona.name == wanted);
    
    //La arrow function anterior es igual que el código siguiente
//     salarios.find( (persona) => {
//         return persona.name == personInFind;
//     });
//     return persona;
};

function medianaPorPersona(namePerson) {
    const trabajos = findPerson(namePerson).trabajos;//Esto es un array que podemos itear para encontrar la mediana

    const salarios = trabajos.map( function (element) { //el método .map() me permite recorrer un array y crear otro a partar del elemento que queramos del array inicial
        return element.salario;
    });

    const medianaSalarios = AllFunctions.medianCalc(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
};

//Ejercicio: Aumento de sueldo
//Fórmula: % Aumento del salario = ((Nuevo Salario - Salario Anterior) / Salario Anterios) * 100
//Fórmula: Nuevo Salario = Salario Anterior * (1 +(% Aumento / 100))

function proyeccionPorPersona (nombrePersona) {
    const trabajos = findPerson(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) { //ponemos en el ciclo i = 1 y no i = 0 porque no queremos tener un salto tan grande de 0 a el primer sueldo, ya que sería algo irreal y no me dice cuanto aumentó su salario respecto a los años anteriores
        const salarioActual = trabajos[i].salario; //ponemos [i] porque el salario de ese mes corresponde al índice que estamos buscando
        const salarioAnterior = trabajos[i - 1].salario; // ponemos [i -1] porque es el índice del salario anterior a i
        const crecimientoSalarial = salarioActual - salarioAnterior;
        const porcentajeDeCrecimiento = (crecimientoSalarial / salarioAnterior) * 100;
        
        porcentajesCrecimiento.push(porcentajeDeCrecimiento);
    }
    
    const medianaPorcentajesCrecimiento = AllFunctions.medianCalc(porcentajesCrecimiento);
    
    console.log(
        porcentajesCrecimiento, 
        `La mediana es ${medianaPorcentajesCrecimiento} %`,
    );

    const ultimoSalario = trabajos[trabajos.length - 1].salario; //si queremos entrar a la última posición de salarios como empezamos a contar desde 0, tenemos que restarle 1 al length 
    const aumentoSalario = (ultimoSalario * medianaPorcentajesCrecimiento) / 100;
    const nuevoSalario = (ultimoSalario + aumentoSalario);

    return `El nuevo salario es de $${nuevoSalario}`;
};

