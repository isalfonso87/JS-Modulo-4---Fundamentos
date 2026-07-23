//Lección 1 - Alerta de inicio - prompt / alert / console.log
//Genera una ventana de consulta de nombre y saludo protocolar

let nombre = prompt("¿Cómo te llamas?");
alert("¡Hola " + nombre + "! Mucho gusto.");

console.log("¡Saludos!");

//Lección 2 - Variables, expresiones y sentencias condicionales
let a = 8;
let b = 2;
let c = 6;
let d = 3;

console.log(a + b);
console.log(a - b);
console.log(c * d);
console.log(c / d);
console.log(a % b);
console.log((a + b) - c);

//Lección 2 - let - const / if - else - switch
//Genera lista de inventario comercio

let productos = ["arroz", "fideos", "jugo", "mantequilla", "cerveza"];
for (let i = 0; i < productos.length; i++) {

    console.log(productos[i]);
}

//Lección 2 - Cuenta regresiva
const cuentaRegresiva = () => {
    let tiempo = 10;
    const intervalo = setInterval(() => {
        console.log(tiempo);
        tiempo--;

        if (tiempo < 0) {
            clearInterval(intervalo);
            console.log("Go! Go! Go!");
        }
    }, 1000)
};
cuentaRegresiva();

//Lección 2 - Clasificador de temperatura
const obtenerTemperatura = function () {
    return Math.floor(Math.random() * 41);
}
const clasificarClima = () => {
    let temperatura = obtenerTemperatura();
    let mensaje = "Hace calor";
    if (temperatura <= 15) {
        mensaje = "Hace frío";
    } else if (temperatura <= 25) {
        mensaje = "Está templado";
    }

    console.log(`Tempratura actual: ${temperatura}°C - ${mensaje}`);
};

clasificarClima();
clasificarClima();

//Lección 3 - Filtra números pares de un array
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let pares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}
console.log(pares);

//Lección 3 - array / for - while / filter y otros
let num = [1, 2, 3, 4, 5, 6, 7, 8];
let pair = [];
let i = 0;
while (i < num.length) {
    if (num[i] % 2 === 0) {
        pair.push(num[i]);
    }
    i++;
}
console.log(pares);


//Lección 4 - function - Contador de visitas
function saludar() {
    console.log("Hola, mundo!");
}
saludar();
let visitas = 0;
function incrementarVisitas() {
    visitas++;
    console.log("Número de visitas: " + visitas);
}
incrementarVisitas();
incrementarVisitas();
incrementarVisitas();


//Lección 5 - objects - value - methods / map() - forEach()
//Objeto de persona y log de presentación
const persona = {
    nombre: "Sofía",
    edad: 30,
    profesion: "Desarrollador",
    presentarse: function () {
        return `Hola, soy ${this.nombre} y trabajo como ${this.profesion}.`;
    }
};

console.log(persona.presentarse());