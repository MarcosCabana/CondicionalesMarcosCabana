//! Ejercicio 1

// let numero1 = prompt("ingrese el primer numero")
// let numero2 = prompt("ingrese el segundo numero")

// if (numero1<numero2) {
//     console.log("el numero 1 no es mayor al numero 2")
// } else {
//     console.log("el numero 1 si es mayor que el numero 2")
// }

//! Ejercicio 2 (variables del ej 1)

// if (numero1==numero2) {
//     console.log("los numeros son iguales")
// } else {
//     console.log("los numeros no son iguales")
// }

//! Ejercicio 3 (var de ej 1)

// if (numero1==numero2) {
//     console.log("los numeros son iguales")
// } else if(numero1<numero2) {
//     console.log("num 1 es menor")
// } else {
//     console.log("num 1 es mayor");
// }

//! Ejercicio 4 (var de ej 1 + var del ej 4)

// let numero3 = prompt("ingrese el tercer numero")

// console.log(`el numero menor es ${Math.min(numero1, numero2, numero3)}`)

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
//     console.log("Carlo es mas viejo")
// } else {
//     console.log("Carla es mas vieja")
// }
// if (obj1.Altura<obj2.Altura) {
//     console.log("Carlo es mas alto")
// } else {
//     console.log("Carla es mas alta")
// }

//! Ejercicio 6

// let tuNombre = prompt("Ingrese su nombre",)
// let tuEdad = prompt("Ingrese su edad")
// let tuAltura = prompt("Ingrese su altura en cm")
// let tuVision = prompt("Ingrese su vision (sea honesto :D)")

// if (tuEdad<18) {
//     console.log("Sos menor de edad, no podes tener la licencia")
// } else if (tuAltura<150){
//     console.log("Sos enano, no podes tener la licencia")
// } else if (tuVision<8){
//     console.log("Tu vision no es optima para tener la licencia")
// } else {
//     console.log("Felicidades, podes tener tu licencia :D")
// }

//! Ejercicio 7

// let tuNombre = prompt("Ingrese su nombre");
// let tuPase = prompt("Ingrese el valor de su pase");
// let miNombre = "Marcos";

// if (tuNombre === miNombre || tuPase === "vip") {
//     console.log("Bienvenidos al Himalayaa");
// } else {
//     let posEntrada = prompt("Posee entrada?");

//     if (posEntrada.toUpperCase() === "SI" || posEntrada.toUpperCase() === "S" || posEntrada.toUpperCase() === "TRUE") {
//         let respuesta = prompt("Desea utilizarla?");
//         if (respuesta.toUpperCase() === "SI" || posEntrada.toUpperCase() === "S" || posEntrada.toUpperCase() === "TRUE") {
//             console.log("Bienvenidos al Himalayaa");
//         } else {
//             console.log("Que lastima, sera la proxima :(");
//         }
//     }

//     if (tuNombre !== miNombre && posEntrada.toUpperCase() !== "SI" && posEntrada.toUpperCase() !== "S" && posEntrada.toUpperCase() !== "TRUE") {
//         let respuestaCompra = prompt("Desea comprar?");
//         if (respuestaCompra.toUpperCase() === "SI" || respuestaCompra.toUpperCase() === "S" || respuestaCompra.toUpperCase() === "TRUE") {
//             let dineroDisp = Number(prompt("Cuanta plata tenes?"));
//             if (dineroDisp >= 1000) {
//                 console.log("Se realizo su compra con exito, BIENVENIDOS AL HIMALAYAAA");
//             } else {
//                 console.log("No tenes plata suficiente");
//             }
//         } else {
//             console.log("Que lastima, sera la proxima :(");
//         }
//     }
// }

