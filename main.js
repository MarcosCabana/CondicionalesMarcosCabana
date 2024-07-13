//! Ejercicio 1

let numero1 = prompt("ingrese el primer numero:")
let numero2 = prompt("ingrese el segundo numero:")

// if (numero1<numero2) {
//     console.log("el numero 1 no es mayor al numero 2.")
// } else {
//     console.log("el numero 1 si es mayor que el numero 2.")
// }

//! Ejercicio 2 (variables del ej 1)

// if (numero1==numero2) {
//     console.log("los numeros son iguales.")
// } else {
//     console.log("los numeros no son iguales.")
// }

//! Ejercicio 3 (var de ej 1)

// if (numero1==numero2) {
//     console.log("los numeros son iguales.")
// } else if(numero1<numero2) {
//     console.log("num 1 es menor.")
// } else {
//     console.log("num 1 es mayor.");
// }

//! Ejercicio 4 (var de ej 1 + var del ej 4)

let numero3 = prompt("Ingrese el tercer numero:")

if (numero1 < numero2 && numero1 < numero3) {
    console.log("El numero 1 es el mas chico.");
} else {
    if (numero2 < numero1 && numero2 < numero3) {
        console.log("El numero 2 es el mas chico.");
    } else {
        console.log("El numero 3 es el mas chico.");
    }
}

//! Ejercicio 5

// let obj1 = {
//     Nombre: "Carla",
//     Altura: 1.84,
//     Edad: 69
// }

// let obj2 = {
//     Nombre: "Carlo",
//     Altura: 1.80,
//     Edad: 96
// }

// if (obj1.Edad<obj2.Edad) {
//     console.log("Carlo es mas viejo.")
// } else {
//     console.log("Carla es mas vieja.")
// }
// if (obj1.Altura<obj2.Altura) {
//     console.log("Carlo es mas alto.")
// } else {
//     console.log("Carla es mas alta.")
// }

//! Ejercicio 6

// let tuNombre = prompt("Ingrese su nombre:")
// let tuEdad = prompt("Ingrese su edad:")
// let tuAltura = prompt("Ingrese su altura en cm:")
// let tuVision = prompt("Ingrese su vision (sea honesto :D):")

// if (tuEdad < 18) {
//     console.log("Sos menor de edad, no podes tener la licencia.")
// } else if (tuAltura < 150){
//     console.log("Tu altura no es la requerida para obtener la licencia.")
// } else if (tuVision < 8){
//     console.log("Tu vision no es optima para tener la licencia.")
// } else {
//     console.log("Felicidades, podes tener tu licencia :D")
// }

//! Ejercicio 7

// let tuNombre = prompt("Ingrese su nombre");
// let tuPase = prompt("Ingrese el valor de su pase");
// let miNombre = "Marcos";

// if (tuNombre === miNombre || tuPase === "vip") {
//     console.log("Bienvenido :D");
// } else {
//     let posEntrada = prompt("Posee entrada?");

//     if (posEntrada.toUpperCase() === "SI" || posEntrada.toUpperCase() === "S" || posEntrada.toUpperCase() === "TRUE") {
//         let respuesta = prompt("Desea utilizarla?");
//         if (respuesta.toUpperCase() === "SI" || posEntrada.toUpperCase() === "S" || posEntrada.toUpperCase() === "TRUE") {
//             console.log("Bienvenido :D");
//         } else {
//             console.log("Que lastima, sera la proxima :(");
//         }
//     }

//     if (tuNombre !== miNombre && posEntrada.toUpperCase() !== "SI" && posEntrada.toUpperCase() !== "S" && posEntrada.toUpperCase() !== "TRUE") {
//         let respuestaCompra = prompt("Desea comprar?");
//         if (respuestaCompra.toUpperCase() === "SI" || respuestaCompra.toUpperCase() === "S" || respuestaCompra.toUpperCase() === "TRUE") {
//             let dineroDisp = Number(prompt("Cuanta plata tenes?"));
//             if (dineroDisp >= 1000) {
//                 console.log("Se realizo su compra con exito, BIENVENIDO :D");
//             } else {
//                 console.log("No tenes plata suficiente");
//             }
//         } else {
//             console.log("Que lastima, sera la proxima :(");
//         }
//     }
// }

//! Ejercicio 8

// let numeroIncognita = 7;
// let numeroIngresado = parseInt(prompt("Ingrese un numero para la adivinanza"));

// if (numeroIngresado === numeroIncognita) {
//     console.log("Ganastee :D");
// } else {
//     if (numeroIngresado > numeroIncognita) {
//         alert("Tu numero es mayor, vuelve a intentarlo");
//     } else {
//         alert("Tu numero es menor, vuelva a intentarlo");
//     }

//     numeroIngresado = parseInt(prompt("Ingrese un numero"));

//     if (numeroIngresado === numeroIncognita) {
//         console.log("Ganastee :D");
//     } else {
//         if (numeroIngresado > numeroIncognita) {
//             alert("Tu numero es mayor, vuelve a intentarlo");
//         } else {
//             alert("Tu numero es menor, vuelva a intentarlo");
//         }

//         numeroIngresado = parseInt(prompt("Ingrese numero"));

//         if (numeroIngresado === numeroIncognita) {
//             console.log("Ganastee :D");
//         } else {
//             console.log("No ganaste, suerte la proximaa");
//         }
//     }
// }

//! Ejercicio 9

// let tuEdad = parseInt(prompt("Ingrese su edad:"))

// if (tuEdad <= 12) {
//     console.log("Eres un infante")
// } else if (tuEdad >= 13 & tuEdad <= 18){
//     console.log("Eres un adolescente")
// } else if (tuEdad >= 19 & tuEdad <= 45){
//     console.log("Eres un joven mayor")
// } else if (tuEdad >= 45 & tuEdad <= 100) {
//     console.log("Eres un anciano")
// } else if (tuEdad > 100){
//     console.log("De verdad tiene esa edad? ")
// }

//! Ejercicio 10

// let jugador1 = prompt("Ingrese el valor de jugador 1:").toLowerCase();
// let jugador2 = prompt("Ingrese el valor de jugador 2:").toLowerCase();

// let trampa1 = jugador1 === "piedra" || jugador1 === "tijera" || jugador1 === "papel";
// let trampa2 = jugador2 === "piedra" || jugador2 === "tijera" || jugador2 === "papel";

// if (!trampa1 && !trampa2) {
//     console.log("Los dos hicieron trampa.");
// } else {
//     if (jugador1 === "piedra" || jugador1 === "tijera" || jugador1 === "papel") {
//         if (jugador2 === "piedra" || jugador2 === "tijera" || jugador2 === "papel") {
//             if (jugador1 === jugador2) {
//                 console.log("Es un empate.");
//             } else {
//                 if ((jugador1 == "piedra" && jugador2 == "tijera") || (jugador1 == "papel" && jugador2 == "piedra") || (jugador1 == "tijera" && jugador2 == "papel")) {
//                     console.log("Gana el jugador 1");
//                 } else {
//                     console.log("Gana el jugador 2");
//                 }
//             }
//         } else {
//             console.log("El jugador 2 hizo trampa");
//         }
//     } else {
//         console.log("El jugador 1 hizo trampa.");
//     }
// }

//! Ejercicio 11

// let tuColor = prompt("Ingrese un color:").toLowerCase()

// switch (tuColor) {
//     case "blanco":
//         console.log("Falta de color.");
//         break;
//     case "negro":
//         console.log("Falta de color.");
//         break;
//     case "verde":
//         console.log("El color de la naturaleza.");
//         break;
//     case "azul":
//         console.log("El color del agua.");
//         break;
//     case "amarillo":
//         console.log("El color del sol.");
//         break;
//     case "rojo":
//         console.log("El color del fuego.");
//         break;
//     case "marron":
//         console.log("El color de la tierra.");
//         break;
//     default:
//         console.log("Excelente eleccion, no lo tenia pensado :)");
//         break;
// }

//! Ejercicio 12

// let primerValor = parseInt(prompt("Ingrese el primer valor:"));
// let segundorValor = parseInt(prompt("Ingrese el segundo valor:"));
// let operacion = prompt("Ingrese la operacion que desea calcular:").toLowerCase();

// switch (operacion) {
//     case "suma":
//         let suma = primerValor + segundorValor;
//         console.log("El resultado es", suma);
//         break;
//     case "resta":
//         let resta = primerValor - segundorValor;
//         console.log("El resultado es", resta);
//         break;
//     case "division":
//         let division = primerValor / segundorValor;
//         if (segundorValor == 0) {
//             console.log("ERROR. No se puede calcular.");
//             break;
//         }
//         console.log("El resultado es", division);
//         break;
//     case "multiplicacion":
//         let multiplicacion = primerValor * segundorValor;
//         console.log("El resultado es", multiplicacion);
//         break;

//     default:
//         console.log("Su operacion no se puede calcular.");
//         break;
// }

//! Ejercicio 13

// let nombre = prompt("Ingrese su nombre:")
// let apellido = prompt("Ingrese su apellido:")
// let fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento:")
// let sexo = prompt("Ingrese su sexo:")
// let nacionalidad = prompt("Ingrese su nacionalidad:")
// let documento = prompt("Ingrese su dni:")
// let texto = "Nombre: " + nombre + " Apellido: " + apellido + " Fecha de Nacimiento: " + fechaDeNacimiento + " Sexo: " + sexo + " Nacionalidad: " + nacionalidad + " Documento: " + documento + " Tus datos ingresados son correctos? (si/no)"
// let verificacion = prompt(texto)

// if (verificacion.toLowerCase() === "si") {
//     console.table({
//         nombre,
//         apellido,
//         fechaDeNacimiento,
//         sexo,
//         nacionalidad,
//         documento,
//     });
// } else {
//     console.log("Vuelva a intentarlo en un mes.");
// } 

