const concerts = [ //array de conciertos
    {
        artist: "Taylor Swift",
        name: "Enchanted Evenings",
        description: "Una noche mágica llena de los mayores éxitos de Taylor Swift.",
        date: "2025/06/15",
        minimumTicketPrice: 200,
        show: false
    },
    {
        artist: "Drake",
        name: "Dreams and Destiny Tour",
        description: "Un viaje musical a través de las mejores rimas y melodías de Drake.",
        date: "2025/07/20",
        minimumTicketPrice: 180,
        show: false
    },
    {
        artist: "Billie Eilish",
        name: "Echoes of Silence",
        description: "Una experiencia íntima y única con la voz cautivadora de Billie Eilish.",
        date: "2025/08/20",
        minimumTicketPrice: 150,
        show: false
    },
    {
        artist: "Harry Styles",
        name: "Celestial Nights",
        description: "Un espectáculo deslumbrante que combina el pop moderno con la esencia del rock.",
        date: "2025/09/10",
        minimumTicketPrice: 180,
        show: false
    },
    {
        artist: "Beyoncé",
        name: "Golden Aura",
        description: "La reina del pop regresa para ofrecer un show lleno de energía y talento.",
        date: "2025/10/12",
        minimumTicketPrice: 250,
        show: false
    },
    {
        artist: "The Weeknd",
        name: "Twilight Mirage",
        description: "Un viaje sonoro a través de las noches más memorables con The Weeknd.",
        date: "2025/11/01",
        minimumTicketPrice: 175,
        show: false
    },
    {
        artist: "Ariana Grande",
        name: "Heaven’s Glow Tour",
        description: "Un concierto espectacular con la poderosa voz y presencia de Ariana Grande.",
        date: "2025/11/22",
        minimumTicketPrice: 170,
        show: false
    },
    {
        artist: "Dua Lipa",
        name: "Neon Horizons",
        description: "Una noche vibrante de pop y ritmos electrizantes con Dua Lipa.",
        date: "2025/12/06",
        minimumTicketPrice: 140,
        show: false
    },
    {
        artist: "Ed Sheeran",
        name: "Journey of Hearts",
        description: "Una travesía emocional a través de las melodías y letras de Ed Sheeran.",
        date: "2025/01/18",
        minimumTicketPrice: 120,
        show: false
    },
    {
        artist: "Kendrick Lamar",
        name: "Voices of the City",
        description: "Un potente mensaje social y musical en el escenario con Kendrick Lamar",
        date: "2025/02/14",
        minimumTicketPrice: 180,
        show: false
    }
];


// ---------------- MAIN CODE ---------------- //

// Evento para filtrar los conciertos
function filtrarConciertos() { //funcion para filtrar los conciertos

    const nombre = document.getElementById("nombreConcierto").value;
    const artista = document.getElementById("nombreArtista").value;
    const fechaInicio = document.getElementById("fechaInicio").value;
    const fechaFin = document.getElementById("fechaFin").value;

    concerts.forEach(concert => concert.show = false); //iteramos el array de conciertos y asignamos false a la propiedad show

    if (nombre) { //si el nombre no esta vacio
        filtrarPorNombre(nombre);
    }
    if (artista) { //si el artista no esta vacio
        filtrarPorArtista(artista);
    }
    if (fechaInicio && fechaFin) { //si las fechas no estan vacias
        filterConcertsByDate(fechaInicio, fechaFin);
    }
    if (!nombre && !artista && !fechaInicio && !fechaFin) { //si no hay nada en los campos
        concerts.forEach(concert => concert.show = true);
    }

    for (let i = 0; i < concerts.length; i++) { //iteramos el array de conciertos para mostrar los conciertos que cumplen con las condiciones

        const concierto = document.getElementById("concierto" + (i + 1));
        const header = document.getElementById("header" + (i + 1));

        if (concierto && header) {
            concierto.style.display = concerts[i].show ? "flex" : "none";
            header.style.display = concerts[i].show ? "flex" : "none";
        }
    }
}

document.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {

        for (let i = 0; i < concerts.length; i++) {

            if (event.target.id === "reminder" + (i + 1)) {

                let fechaConcierto = new Date(concerts[i].date);
                calcularDiasAntelacion(fechaConcierto, i);
            }
        }
    }
});


// Evento para calcular los días de anticipación
document.addEventListener("click", function(event) { //evento click

    if (event.target.tagName === "BUTTON") { //si el evento es un boton

        for (let i = 0; i < concerts.length; i++) { //iteramos el array de conciertos

            if (event.target.id === "purchase" + (i + 1)) { //si el boton es comprar

                let cantidad = parseInt(document.getElementById("cantidad" + (i + 1)).value);
                const checkbox = document.getElementById("Residente" + (i + 1));
                let precio = concerts[i].minimumTicketPrice;
                console.log(precio, cantidad, checkbox.checked);

                let total = calcularPrecioDescuento(precio, cantidad, checkbox.checked);


                const totalHTML = document.getElementById("total" + (i + 1));

                totalHTML.innerText = `Total: ${total}€`;

                break;
            }
        }

    }
});

// ---------------- FUNCTIONS ---------------- //

// Función para buscar conciertos por las primeras tres letras del artista
function filtrarPorNombre(letras) {
    const minusculas = letras.toLowerCase(); // para convertir la entrada del cliente a minusculas


    for (let i = 0; i < concerts.length; i++) {
        // Verifica si el artista comienza con las letras escritas y almacena datos en los objetos asignados si hay coindicendia
        if (concerts[i].name.toLowerCase().startsWith(minusculas)) {
            concerts[i].show = true;
        }
    }
}

// Función para buscar conciertos por las primeras tres letras del artista
function filtrarPorArtista(letras) {
    const minusculas = letras.toLowerCase(); // para convertir la entrada del cliente a minusculas


    for (let i = 0; i < concerts.length; i++) {
        // Verifica si el artista comienza con las letras escritas y almacena datos en los objetos asignados si hay coindicendia
        if (concerts[i].artist.toLowerCase().startsWith(minusculas)) {
            concerts[i].show = true;
        }
    }
}
function filterConcertsByDate(startDate, endDate) {
    const start = new Date(startDate); //objeto date para poder iterarlo despues
    const end = new Date(endDate);

    for (let i = 0; i < concerts.length; i++) { //iteramos las fechas dentro del array concertDates para pasar a objeto date
        const date = new Date(concerts[i].date);
        if (date >= start && date <= end) { //recorremos las opciones elegidas y si encuentra true lo almacena en su objeto
            concerts[i].show = true;
        }
    }
}


function calcularDiasAntelacion(fechaConcierto, i) {
    // Días de de hoy
    let diasDeHoy = new Date();

    // Calcular la diferencia en días Math.ceil para redondear arriba
    let diferenciaMs = fechaConcierto - diasDeHoy;
    let diasHastaConcierto = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));


    document.getElementById("diasQueQuedan" +(i +1)).textContent =
        diasHastaConcierto >= 0  ? "Quedan " + diasHastaConcierto + " días." : "El concierto ya ha pasado.";
}



function calcularPrecioDescuento(precioBase, cantidad, checkBox) {
    let total;

    console.log(total, precioBase, cantidad, checkBox);

    // Comprobar si el checkbox está marcado
    if (checkBox) { // Use the boolean value directly
        let descuento = 0.5;
        total = (precioBase - (precioBase * descuento)) * cantidad;
    } else {
        total = precioBase * cantidad;
        console.log(total)
    }

    // Redondear el total a dos decimales usando Math
    total = Math.round(total * 100) / 100;
    console.log(total)

    return total;
}




