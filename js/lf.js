document.addEventListener("DOMContentLoaded", function () {
    const carrito = [];

    const productos = [
        {
            id: 1,
            nombre: 'S.Combinado',
            precio: 6500
        },
        {
            id: 2,
            nombre: 'S.Jequn',
            precio: 6000
        },
        {
            id: 3,
            nombre: 'S.Lisa',
            precio: 6000
        },
        {
            id: 4,
            nombre: 'S.Mikail',
            precio: 6000
        },
        {
            id: 5,
            nombre: 'S.Polera Dumbo',
            precio: 5700
        },
        {
            id: 6,
            nombre: 'S.Zig Zag',
            precio: 6500
        }
    ];


    function agregarAlCarro(id) {
        const productoEncontrado = productos.find(producto => producto.id === id);
        carrito.push(productoEncontrado);
        console.table(carrito);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Se agrego ${productoEncontrado.nombre} al carrito`,
            showConfirmButton: false,
            timer: 1500
        })
        //Agregar fila a la tabla del carrito
        document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${productoEncontrado.id}</td>
            <td>${productoEncontrado.nombre}</td>
            <td>${productoEncontrado.precio}</td>
        </tr>
    `;
        //Incrementar el total
        let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById('total').innerText = 'Total a pagar $: ' + totalCarrito;
    }

    let botones = document.querySelectorAll('.btn.btn-primary');
    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            let idProducto = parseInt(this.getAttribute('data-id'));
            agregarAlCarro(idProducto);
        });
    });

    let botonFinalizarCompra = document.querySelector('#botonFinalizarCompra');
    botonFinalizarCompra.addEventListener('click', function () {
        location.reload();
    });

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal('carrito', JSON.stringify(productos));
});

//GET a JSON propio
function obtenerDatosJson() {
    const URLJSON = './productos.json'
    fetch(URLJSON)
        .then((respuesta) => respuesta.json())
        .then((datos) => console.log(datos))
}
obtenerDatosJson();

