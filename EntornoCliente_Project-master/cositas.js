// Ejemplo de uso
const startDate = prompt("Introduce la primera fecha (yyyy/mm/dd):");
const endDate = prompt("Introduce la segudna fecha (yyyy/mm/dd):");


const conciertosValidos = filterConcertsByDate(startDate, endDate);


if (conciertosValidos.length > 0) {
    // Usa document.write para mostrar la información
    document.write("<h2>Conciertos en las fechas elegidas: </h2>");
    conciertosValidos.forEach((concert) => {
        document.write(`<strong>Concierto:</strong> ${concert.name}<br>`);
        document.write(`<strong>Artista:</strong> ${concert.artist}<br>`);
        document.write(`<strong>Fecha:</strong> ${concert.date}<br>`);
        document.write(
            `<strong>Descripción:</strong> ${concert.description}</p>`
        );
    });
} else {
    document.write("<p>No hay conciertos entre las fechas elegidas.</p>");
}



// Ejemplo de uso
const letras = prompt("Introduce las primeras 3 letras del artista:");
//llamamos a la funcion para validar
const coincidencias = filtrarPorNombre(letras);


if (coincidencias) {
    document.write("<h2>Conciertos encontrados:</h2>");
    document.write(coincidencias);
} else {
    document.write("<p>No se encontraron conciertos que coincidan con la búsqueda.</p>");
}