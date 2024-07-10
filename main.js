// let numero1 = prompt("ingrese el primer numero")
// let numero2 = prompt("ingrese el segundo numero")

/*if (numero1<numero2) {
    console.log("el numero 1 no es mayor al numero 2")
} else {
    console.log("el numero 1 si es mayor que el numero 2")
}*/

// if (numero1==numero2) {
//     console.log("los numeros son iguales")
// } else {
//     console.log("los numeros no son iguales")
// }

// if (numero1==numero2) {
//     console.log("los numeros son iguales")
// } else if(numero1<numero2) {
//     console.log("num 1 es menor")
// } else {
//     console.log("num 1 es mayor");
// }

// let numero3 = prompt("ingrese el tercer numero")

// console.log(`el numero menor es ${Math.min(numero1, numero2, numero3)}`)

let numero1 = prompt("ingrese la edad de Carla")
let numero2 = prompt("ingrese la altura de carla")
let numero3 = prompt("ingrese la edad de carlo")
let numero4 = prompt("ingrese la altura de carlo")

let obj1 = {
    Nombre: "Carla",
    Altura: numero2,
    Edad: numero1
}

let obj2 = {
    Nombre: "Carlo",
    Altura: numero4,
    Edad: numero3
}

if (obj1.Edad<obj2.Edad) {
    console.log("Carlo es mas viejo");
} else {
    console.log("Carla es mas vieja");
}
if (obj1.Altura<obj2.Altura) {
    console.log("Carlo es mas alto");
} else {
    console.log("Carla es mas alta");
}
















