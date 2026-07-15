


//vamos a sumar ds numeros

// Entrada de datos

let numero1 = Number(prompt("ingresa el primer numero: "));
let numero2 = Number(prompt("ingresa el segundo numero: "));
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
// Salida de datos


console.log("Los números que escogiste son: ", numero1, "y", numero2); //salida de dato por la consola. 
alert(`Los números que escogiste son: ${numero1} y ${numero2}`); // salida de datos por la pantalla.
//document.write(`Los números que escogiste son: ${numero1} y ${numero2}`);// salida por el DOM

//suma
console.log("El resultado de la suma de los numeros es: ", suma); //salida de dato por la consola. 
alert(`El resultado de la suma de los numeros es: ${suma}`); // salida de datos por la pantalla.
//document.write(` El resultado de la suma de los numeros es: ${suma}`);// salida por el DOM


//resta
console.log("El resultado de la resta de los numeros es: ", resta); //salida de dato por la consola. 
alert(`El resultado de la resta de los numeros es: ${resta}`); // salida de datos por la pantalla.
//document.write(`El resultado de la resta de los numeros es: ${resta}`);// salida por el DOM

//multiplicacion
console.log("El resultado de la multiplicacion de los numeros es: ", multiplicacion); //salida de dato por la consola. 
alert(`El resultado de la multiplicacion de los numeros es: ${multiplicacion}`); // salida de datos por la pantalla.
//document.write(`El resultado de la multiplicacion de los numeros es: ${multiplicacion}`);// salida por el DOM

//division
console.log("El resultado de la division de los numeros es: ", division); //salida de dato por la consola. 
alert(`El resultado de la division de los numeros es: ${division}`); // salida de datos por la pantalla.
//document.write(`El resultado de la division de los numeros es: ${division}`);// salida por el DOM


//ejemplo de if

if (suma % 3 === 0) {
    console.log("las suma es multiplo de 3");
}

//ejemplo de if else

if (resta % 2 === 0) {
    console.log("la resta es multiplo de 2");
}
else {
    console.log("la resta no es multiplo de 2");
}

//ejemplo de switch

switch (multiplicacion) {
    case 10: {
        console.log("El resultado de la multiplicacion es 10");
        break;
    }

    case 6: {
        console.log("El resultado de la multiplicacion 6");
        break;
    }

    default: {
        console.log("El resultado de la multiplicacion no es ni 10 o 6");
        break;
    }
}

//ejemplo de una arreglo

let resultados = [suma, resta, multiplicacion, division];
console.log("Estos son los resultados: ", resultados)

resultados.sort((a, b) => a - b);
console.log("Estos son los resultados ordenados:", resultados);

//ejemplos de for

let menor = resultados[0];
for (let i = 1; i < resultados.length; i++) {
    if (resultados[i] < menor) {
        menor = resultados[i];
    }
}
console.log("El menor de los resultados es:", menor);

let mayor = resultados[0];
for (let i = 1; i < resultados.length; i++) {
    if (resultados[i] > mayor) {
        mayor = resultados[i];
    }
}
console.log("El mayor de los resultados es:", mayor);



//ejemplo de while

let i = 0;
let centro1;
let centro2;

while (i < resultados.length) {

    if (i === resultados.length / 2 - 1) {
        centro1 = resultados[i];
    }

    if (i === resultados.length / 2) {
        centro2 = resultados[i];
        break;
    }

    i++;
}
console.log("Los resultados centrales: ", centro1, "y", centro2);


//ejemplo de función que filtra elementos según una condición

function filtrarPares(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

let resultadosPares = filtrarPares(resultados);

if (resultadosPares.length > 0) {
    console.log("Los resultados que son pares son: ", resultadosPares);
} else {
    console.log("No se encontró ningún resultado par.");
}

//ejemplo de llamado a la funcion (Lección #4 condición Funciones en JavaScript)

console.log("Ahora tomaremos los siguientes resultados", suma, resta, "y", multiplicacion, "para generar nuevos valores");

console.log("Sumaremos: ", suma, "+", resta);
function nuevaSuma(a, b) {
    return a + b;
}
console.log("La nueva suma es: ", nuevaSuma(suma, resta));


console.log("Restaremos: ", suma, "-", resta);
function nuevaResta(a, b) {
    return a - b;
}
console.log("La nueva resta es: ", nuevaResta(suma, resta));


console.log("Multiplicaremos: ", suma, "x", multiplicacion);
function nuevaMultiplicacion(a, b) {
    return a * b;
}
console.log("La nueva multiplicacion es: ", nuevaMultiplicacion(suma, multiplicacion));


console.log("dividiremos: ", multiplicacion, "/", resta);
function nuevaDivision(a, b) {
    return a / b;
}
console.log("La nueva division es: ", nuevaDivision(multiplicacion, resta));



//función que llama a otras funciones dentro de sí misma

function generarNuevosResultados(suma, resta, multiplicacion) {
    return [
        nuevaSuma(suma, resta),
        nuevaResta(suma, resta),
        nuevaMultiplicacion(suma, multiplicacion),
        nuevaDivision(multiplicacion, resta)
    ];
}

let nuevosResultados = generarNuevosResultados(suma, resta, multiplicacion);
console.log("Estos son los nuevos resultados: ", nuevosResultados)

nuevosResultados.sort((a, b) => a - b);
console.log("Estos son los nuevos resultados ordenados:", nuevosResultados);


//ejemplo de objeto con propiedades y valores

let calculadora = {
    numero1: numero1,
    numero2: numero2,
    suma: suma,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division
};

console.log(calculadora);
console.log(calculadora.suma); // accedés a una propiedad con punto

//ejemplo de método dentro de un objeto

let calculadoraConMetodo = {
    numero1: numero1,
    numero2: numero2,
    suma: suma,
    resta: resta,
    mostrarResumen: function () {
        console.log(`Resumen: ${this.numero1} y ${this.numero2} → suma: ${this.suma}, resta: ${this.resta}`);
    }
};

calculadoraConMetodo.mostrarResumen(); // así se llama un método

//ejemplo de arreglo de objetos

let operaciones = [
    { nombre: "suma", resultado: suma },
    { nombre: "resta", resultado: resta },
    { nombre: "multiplicacion", resultado: multiplicacion },
    { nombre: "division", resultado: division }
];

console.log("Arreglo de objetos: ", operaciones);

//recorrido con forEach (ejecuta una acción por cada elemento, no retorna nada)

operaciones.forEach(function (op) {
    console.log(`La ${op.nombre} dio como resultado: ${op.resultado}`);
});

//recorrido con map (retorna un nuevo arreglo transformado)

let descripciones = operaciones.map(function (op) {
    return `${op.nombre.toUpperCase()}: ${op.resultado}`;
});

console.log("Descripciones generadas con map: ", descripciones);

