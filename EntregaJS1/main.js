// La idea de este simulador es que una persona pueda ingresar sus datos y pueda tener toda la informacion necesaria para poder ir a hacer Surf a las playas de Uruguay

// Solicitar nombre y altura al usuario
let nombre = prompt("Bienvenido/a a SurfUY . Por favor, ingresa tu nombre:");
let altura = prompt("Hola " + nombre + ", ingresa tu altura en centímetros:");

// Función para calcular el tamaño adecuado de tabla según la altura
function calcularTabla(nombre, altura) {
    if (altura < 150) {
        return "Shortboard";
    } else if (altura >= 150 && altura < 180) {
        return "Funboard";
    } else {
        return "Longboard";
    }
}

// Información de las tablas en objetos
let tablas = {
    Shortboard: "Para surfistas avanzados, ideal para maniobras rápidas.",
    Funboard: "Tabla versátil, buena para diferentes tipos de olas y niveles.",
    Longboard: "Ideal para principiantes o para olas pequeñas y lentas."
};

// Información de las playas
let playas = [
    { nombre: "Playa A", dificultad: "Principiante" },
    { nombre: "Playa B", dificultad: "Medio" },
    { nombre: "Playa C", dificultad: "Alto" },
    { nombre: "Playa D", dificultad: "Profesional" }
];

// Declaración de las ciudades y cantidad de spots
let PuntaDelEste = 5;
let Montevideo = 3;
let Rocha = 8;
let LaPaloma = 6;

// Función para sumar cantidad de spots de surf por ciudad para luego poder armar un itinerario de viaje
function sumarSpots(PuntaDelEste, Rocha) {
    return PuntaDelEste + Rocha;
}

// Convertir altura a número
altura = parseFloat(altura);

// Calcular tabla recomendada
let tablaRecomendada = calcularTabla(nombre, altura);

// Mostrar información de la tabla recomendada
console.log("¡Hola " + nombre + "! Según tu altura de " + altura + "cm, te recomendamos una tabla " + tablaRecomendada + ".");
alert("¡Hola " + nombre + "! Según tu altura de " + altura + "cm, te recomendamos una tabla " + tablaRecomendada + ".");
console.log("Descripción de la tabla recomendada:");
console.log(tablas[tablaRecomendada]);

// Mostrar información de las playas
console.log("\nAquí tienes información sobre algunas playas:");
playas.forEach(function(playa) {
    console.log(playa.nombre + " - Dificultad: " + playa.dificultad);
});

// Mostrar suma de spots por ciudad
console.log("\nSuma de spots de surf por ciudad:");
console.log("Ciudad 1: " + PuntaDelEste);
console.log("Ciudad 2: " + Montevideo);
console.log("Ciudad 3: " + Rocha);
console.log("Ciudad 4: " + LaPaloma);
console.log("Total de spots: " + sumarSpots(PuntaDelEste, Montevideo, Rocha, LaPaloma));