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

    const salarios = trabajos.map( function (element) {
        return element.salario;
    });

    const medianaSalarios = AllFunctions.medianCalc(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
};

//Ejercicio: Aumento de sueldo
//Fórmula: % Aumento del salario = ((Nuevo Salario - Salario Anterior) / Salario Anterios) * 100
//Fórmula: Nuevo Salario = Salario Anterior * (1 +(% Aumento / 100))

function aumentoSalarial (namePerson) {

}