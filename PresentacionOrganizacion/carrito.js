//Variables
const carrito = document.getElementById("carrito"),
      listaPostres = document.getElementById("lista-postres"),
      contenedorCarrito = document.querySelector('.buy-card .lista_de_postres'),
      vaciarCarritoBtn = document.querySelector('#vaciar_carrito');

let articulosCarrito = [];

registrarEventsListeners()

function registrarEventsListeners() {
    //Cuando yo le de click a "agregar al carrito de compras"
    listaPostres.addEventListener('click', agregarPostre);


    //Eliminar postre del carrito
    carrito.addEventListener('click', eliminarPostre);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', e => {
        articulosCarrito = [];
        limpiarHTML()
    })
}

function agregarPostre(e) {
    if (e.target.classList.contains("agregar-carrito")) {
        const postreSeleccionado = e.target.parentElement.parentElement;
        leerInfo(postreSeleccionado)
    }
}

//Elimina un postre del carrito
function eliminarPostre(e) {
    if(e.target.classList.contains("borrar-postre")){
        const postreId = e.target.getAttribute('data-id');
        
        //Eliminar del arreglo del articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(postre => postre.id !== postreId)

        carritoHTML()

    }
}

//Leer el contenido de nuestro HTML al que le dimos click y extrae la info del postre
function leerInfo(postre) {
    //Crear un objeto con el contenido del postre actual
    const infoPostre = {
        imagen: postre.querySelector('img').src,
        titulo: postre.querySelector('h3').textContent,
        precio: postre.querySelector('h4').textContent,
        id : postre.querySelector('button').getAttribute('data-id'),
        cantidad : 1
    }
    console.log(infoPostre);

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(postre => postre.id === infoPostre.id)

    if (existe) {
        //Actualizar la cantidad
        const postres = articulosCarrito.map(postre => {
            if (postre.id === infoPostre.id) {
                postre.cantidad++;
                return postre 
            } else {
                return postre;
            }
        });
        [...articulosCarrito,infoPostre]
    } else {
        //Agregamos elementos al carrito de compras
        articulosCarrito = [...articulosCarrito,infoPostre]
    }
    carritoHTML()
}

//Muestra el carrito en el HTML

function carritoHTML() {
    limpiarHTML()
    //Recorre el carrito de compras y genera el HTML
    articulosCarrito.forEach(postre => {
        const fila = document.createElement('div');
        fila.innerHTML = `
            <img src="${postre.imagen}"></img>
            <h3>${postre.titulo}</h3>
            <h4>${postre.precio}</h4>
            <p>${postre.cantidad}</p>
            <p><span class="borrar-postre" data-id="${postre.id}">X</span></p>
        `;

        contenedorCarrito.appendChild(fila)
    });
}

//Elimina los postres de la lista_de_postres
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}