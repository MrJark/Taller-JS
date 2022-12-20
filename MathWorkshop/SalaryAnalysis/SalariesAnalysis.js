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

//Análisis empresarial.
//Tengo que hacer el análisis por empresas que tenemos (incluido el freelancer) y dentro de cada una ver los años en los que han estado y los sueldos cada año para poder estimar, por ejemplo, cuanto cada empresa se puede gartar los años futuros en sueldos o cuando van a ganar las personas por cada empresa en la que estén o cuanto a aumentado el sueldo a lo largo de los años

//DEBEMOS TENER CUIDADO CON LOS NOMBRES PORQUE EN SALARIES.JS HAY NOMBRES MUY PARECIDOS A LOS QUE VAMOS A PONER EN ESTAS FUNCIONES. 
//SINTAXIS MUY CIMPORTANTE

const empresas = {};

// las primeras palabras del los ciclos for, persona y trabajo, es lo que vamos a crear en nuestro objeto empresas 
for (persona of salarios) { //esto es para recorrer el arreglo de salarios
    for (trabajo of persona.trabajos){ //para recorrer el arreglo de trabajos y dentro de esto tenemos trabajo.year trabajo.empresa trabajo.salario y tendremos que sacar esa información
        if (!empresas[trabajo.empresa]) { //esto quiere decir: si no existe dentro de mi objeto empresas un objeto que venga del file salaries.js que tenga la propiedad trabajo.empresa, lo cree dentro de empresas y que sea un objeto
            empresas[trabajo.empresa] = {};
        }
        //si sí existe, pasamos al siguiente if
        //este if nos dice que, si no existe dentro de empresas un trabajo.empresa y que a su vez tenga un trabajo.year, lo cree y sea un array
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        //este último nos permite introducir el salario al objeto empresas[trabajo.empresa][trabajo.year]
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    };
};

console.log(empresas);

//Mediana de salarios en un año en específico
function  medianaEmpresaYear (nombreEmpresa, year) { //necesitamos los dos parámetros
    if (!empresas[nombreEmpresa]) {
        console.warn('Esa empresa no está en nuestra base de datos');
    } else if (!empresas[nombreEmpresa][year]) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return AllFunctions.medianCalc(empresas[nombreEmpresa][year]);
    }
}

//Proyección de salarios de una empresa. ES muy parecido a la proyección por persona
function proyeccionPorEmpresa (nombreEmpresa) {
    if (!empresas[nombreEmpresa]) {
        console.warn('Esta empresa no está en nuestra base de datos');
    } else { //tenemos que crear un array a partir del objeto empresa donde contengan todas los datos de todos los años de los salarios y eso lo creamos a partit de ' Object.keys() Object.value() u Object.entries() y de este arreglo es del cual hay que sacar la mediana
        const empresaYear = Object.keys(empresas[nombreEmpresa]);// el .keys me devuelve las llaves donde están en este caso los salarios, es decir, los años
        const listaMedianaYear = empresaYear.map( (year) => { // el .map() nos crea un nuevo arreglo de lo que le digamos por cada elemento dentro del array
            return medianaEmpresaYear(nombreEmpresa, year);// con esto lo que conseguimos es que dentro de la const empresaYear se creer por cada elemento un arreglo que me devuelva la mediana de la empresa, su nombre y el año
        });
        // console.log({listaMedianaYear});
        //De aquí hacia arriba tenemos todas las medianas de los años en que la empresa 'existe'
        //Lo siguiente es lo mismo que habíamos hecho en l aparte de proeyccionPorPersona, un ciclo for

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYear.length; i++){ //i=1 porque no queremos un salto tan grande de salario, no nos daría un resultado real
            const salarioActual = listaMedianaYear[i]; //no ponemos ningún .salario ni nada porque estamos construyendo ya a partir de un array de números, de los números que nosotros queremos
            const salarioAnterior = listaMedianaYear[i -1];
            const crecimientoSalarial = salarioActual - salarioAnterior;
            const porcentajeDeCrecimiento = crecimientoSalarial/salarioAnterior;
            porcentajesCrecimiento.push(porcentajeDeCrecimiento);
        };
        const medianaPorcentajesCrecimiento = AllFunctions.medianCalc(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYear[listaMedianaYear.length - 1]; //este me saca la aúltima mediana de cada una de las empresas
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;

        return nuevaMediana;
    };

};
