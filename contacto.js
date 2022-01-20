class Cliente {
    constructor(nombre, email, telefono, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
  }
  
  let clientes = []
  
  let divClientes = document.getElementById('clientes')
  let formCliente = document.getElementById('formCliente')
  
  
  formCliente.addEventListener('submit', (e) => {
      e.preventDefault()
  
      let datForm = new FormData(e.target)
      
      let cliente = new Cliente (datForm.get("nombre"), datForm.get("email"), datForm.get("telefono"), datForm.get("mensaje"))
      clientes.push(cliente)
      
      localStorage.setItem('clientes', JSON.stringify(clientes))
  
      formCliente.reset()
  
  
      divClientes.innerHTML += `
        <div>
            <p class="mx-5 mt-2"><b>Gracias por contactarte con nosotros, nos pondremos en contacto a la brevedad</b></p>
        </div>
      ` 
  })