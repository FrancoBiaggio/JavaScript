document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tablaForm');
    const botonesPlayas = document.querySelectorAll('.playa-boton');

    botonesPlayas.forEach(boton => {
        boton.addEventListener('click', () => {
            const playa = boton.getAttribute('data-playa');
            let itinerario = JSON.parse(localStorage.getItem('itinerarioSurf')) || { playas: [] };

            if (!itinerario.playas.includes(playa)) {
                itinerario.playas.push(playa);
                localStorage.setItem('itinerarioSurf', JSON.stringify(itinerario));
                alert(`Playa ${playa} agregada al itinerario`);
            } else {
                alert(`Playa ${playa} ya está en el itinerario`);
            }
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nivel = document.getElementById('nivel').value;
        const estatura = document.getElementById('estatura').value;
        const tabla = obtenerTablaRecomendada(nivel, estatura);

        let itinerario = JSON.parse(localStorage.getItem('itinerarioSurf')) || { playas: [] };
        itinerario.nivel = nivel;
        itinerario.estatura = estatura;
        itinerario.tabla = tabla;

        localStorage.setItem('itinerarioSurf', JSON.stringify(itinerario));
    });


let subtitulo = document.createElement("h2")
subtitulo.innerText = "Hola Surfista"
document.body.append(subtitulo)

    

function obtenerTablaRecomendada(nivel, estatura) {
    if (nivel === 'Principiante') {
        return 'Tabla de espuma';
    } else if (nivel === 'Intermedio') {
        return 'Tabla de fibra de vidrio';
    } else if (nivel === 'Avanzado') {
        return 'Tabla de performance';
    }
}

let destinos = localStorage.getItem("itinerarioSurf")
console.log(destino)

