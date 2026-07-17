Aplicación de Consola en JavaScript

Proyecto ABP 

Autor: Lucas Carvacho

Descripción

Esta aplicación permite al usuario ingresar dos números y realizar operaciones matemáticas básicas (suma, resta, multiplicación y división), mostrando los resultados por consola y mediante ventanas emergentes (alert). Además, el proyecto integra estructuras condicionales, bucles, funciones, arreglos y objetos, aplicando los conceptos fundamentales de JavaScript vistos a lo largo del módulo.

Objetivo

Desarrollar una aplicación en consola que permita:


Realizar operaciones matemáticas básicas.
Implementar estructuras condicionales y de bucles.
Usar funciones para modularizar el código.
Trabajar con arreglos y objetos.

Funcionalidades

1. Entrada y salida de datos


Se solicitan dos números al usuario mediante prompt().
Los resultados se muestran por consola (console.log) y por pantalla (alert).


2. Operaciones matemáticas


Suma, resta, multiplicación y división de los dos números ingresados.


3. Estructuras condicionales


if: verifica si la suma es múltiplo de 3.
if / else: verifica si la resta es múltiplo de 2.
switch: evalúa el resultado de la multiplicación contra casos específicos (10, 6, u otro).


4. Arreglos y bucles


Se almacenan los resultados (suma, resta, multiplicación, división) en un arreglo.
El arreglo se ordena con sort().
Se recorre con for para encontrar el valor menor y el mayor.
Se recorre con while para obtener los valores centrales del arreglo.


5. Funciones


filtrarPares(arreglo): filtra y retorna los resultados que son números pares.
nuevaSuma, nuevaResta, nuevaMultiplicacion, nuevaDivision: funciones que reciben parámetros y retornan un nuevo resultado a partir de operaciones previas.
generarNuevosResultados(suma, resta, multiplicacion): función que llama a las funciones anteriores dentro de sí misma para generar un nuevo arreglo de resultados, el cual también es ordenado.


6. Objetos


calculadora: objeto que almacena los números ingresados y los resultados de las operaciones como propiedades.
calculadoraConMetodo: objeto que además incluye un método (mostrarResumen) que imprime un resumen usando this.
operaciones: arreglo de objetos, donde cada objeto representa una operación (nombre y resultado).


7. Recorrido de arreglos de objetos


forEach(): recorre el arreglo operaciones e imprime cada resultado por consola.
map(): genera un nuevo arreglo (descripciones) con un texto formateado para cada operación.

Flujo de interacción

Ingresar el primer número y presionar Enter.
Ingresar el segundo número y presionar Enter.
Comenzarán a aparecer los alert con resultados; avanzar con Enter/Aceptar hasta que terminen.
Revisar la consola del navegador para ver el detalle completo.


