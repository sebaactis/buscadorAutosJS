// Variables para filtrado 

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


// Variables

const resultado = document.querySelector('#resultado'); // Contenedor para resultados

const max = new Date().getFullYear();
const min = max - 10;


// Objeto para los datos de la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos al cargar


    // Llena las opciones del año
    llenarSelect();


    // Listeners para los select de busquedas

    marca.addEventListener('change', e => {
        datosBusqueda.marca = e.target.value;
        filtrarAuto();
    })

    year.addEventListener('change', e => {
        datosBusqueda.year = e.target.value;
        filtrarAuto();
    })

    minimo.addEventListener('change', e => {
        datosBusqueda.minimo = e.target.value;
        filtrarAuto();
    })

    maximo.addEventListener('change', e => {
        datosBusqueda.maximo = e.target.value;
        filtrarAuto();
    })

    puertas.addEventListener('change', e => {
        datosBusqueda.puertas = e.target.value;
        filtrarAuto()
    })

    transmision.addEventListener('change', e => {
        datosBusqueda.transmision = e.target.value;
        filtrarAuto()
    })

    color.addEventListener('change', e => {
        datosBusqueda.color = e.target.value;
        console.log(datosBusqueda);
        filtrarAuto()
    })
});





// Funciones

function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo

    autos.forEach(auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio ${precio} - Color ${color}
        `
        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })

}

// Años del select de año

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al SELECT.
    }
};

// Funcion que filtra en base a la busqueda

function filtrarAuto() {
    const filtrados = autos.filter( filtrarMarca ).filter ( filtrarYear ).filter ( filtrarMinimo ).filter ( filtrarMaximo).filter ( filtrarPuertas ).filter ( filtrarTransmision ).filter ( filtrarColor )
    
    if ( filtrados.length) {

        mostrarAutos(filtrados);

    } else {
        noFiltros();
    }
};

// Funcion que muestra un div si no hay resultados

function noFiltros() {

    limpiarHTML();

    const noFiltros = document.createElement('div');
    noFiltros.classList.add ('alerta', 'error');
    noFiltros.textContent = 'No hay resultados, cambie sus parametros de busqueda';
    resultado.appendChild(noFiltros);
}

function filtrarMarca (auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
};

function filtrarYear (auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
};

function filtrarMinimo (auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
};

function filtrarMaximo (auto) {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
};

function filtrarPuertas (auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarPuertas (auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}

function filtrarTransmision (auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor (auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}

function limpiarHTML () {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
};

