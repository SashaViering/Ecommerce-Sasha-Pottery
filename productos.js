let divProductos = document.getElementById("divProductos")
localStorage.setItem('carrito', JSON.stringify([]))
let botonCarrito = document.getElementById("botonCarrito")
let modalBody = document.getElementById("modal-body")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let parrafoCompra = document.getElementById('precioTotal')
let acumulador;

fetch('./Producto.json')
    .then(promesa => promesa.json())
    .then(datosProductos => {

        datosProductos.forEach((productoEnArray, indice) => {
            divProductos.innerHTML += `
            <div class="card mb-3 caja" id="producto${indice}" style="width: 18rem;">
                <img src="./img/${productoEnArray.img}" class="card-img-top mt-2" height= "290px">
                <div class="card-body text-center">
                    <h5 class="card-title fontSizeProd fontWCateg">${productoEnArray.nombre}</h5>
                    <p class="card-text">${productoEnArray.material}</p>
                    <p class="card-text fontwBold">$${productoEnArray.precio}</p>
                    <p class="card-text">Stock: ${productoEnArray.stock}</p>
                    <button type="button" id="boton${indice}" class="btn-success btn btn-small">
                        +
                    </button>
                </div>
            </div>
            `
        });

        datosProductos.forEach((productoEnArray, indice) => {
            document.getElementById(`boton${indice}`).addEventListener('click', () => {
                 if(productos.find(producto => producto.nombre == productoEnArray.nombre)) {
                     let index = productos.findIndex(producto => producto.nombre == productoEnArray.nombre)
                     productos[index].cant++
                     localStorage.setItem('carrito', JSON.stringify(productos))
                 } else {
                     let nuevoProducto = new Producto(productoEnArray.nombre, productoEnArray.material, productoEnArray.precio, productoEnArray.stock, productoEnArray.img)
                     productos.push(nuevoProducto)
                     localStorage.setItem('carrito', JSON.stringify(productos))
                 }
                 
            })
        })
})
.catch(error => console.error(error))

class Producto {
    constructor(nombre, material, precio, stock, img) {
        this.nombre = nombre;
        this.material = material;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cant = 1;
    }
}
  
let productos = []


let darkMode;

if (localStorage.getItem("blackMode")) {
    darkMode = localStorage.getItem("blackMode");

}else{
    darkMode = "light"
}
localStorage.setItem("blackMode", darkMode)

$( () =>{
    if(localStorage.getItem("blackMode") == "dark"){
       $("body").addClass("blackMode")
       $("#botonDM").hide()
       $("#botonLM").show()
    }else{
        $("#botonLM").hide()
    }
    $("#botonLM").click ( () =>{
        $("#botonLM").hide()
        $("#botonDM").show()

        $("body").removeClass("blackMode")
        localStorage.setItem("blackMode", "light")
    })

    $("#botonDM").click ( () =>{
        $("#botonLM").show()
        $("#botonDM").hide()

        $("body").addClass("blackMode")
        localStorage.setItem("blackMode", "dark")
    })
})

  $( () =>{
      $(".btn-whatsapp").animate({
        "bottom": "30px",
        "right": "30px",
      },{
        duration: 600,
        easing: "swing"
      }).fadeOut(1000).delay(300).fadeIn(1500).fadeOut(1000).delay(300).fadeIn(2000)
  
  })