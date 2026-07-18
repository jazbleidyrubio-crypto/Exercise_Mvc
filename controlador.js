import ClienteModelo from "./cliente_modelo.js";


// Botón registrar
const boton_registrar = document.getElementById("boton_registrar");


boton_registrar.addEventListener("click", function(){

    // Obtener datos del formulario
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const rol = document.querySelector("#rol").value;


    // Crear cliente con el modelo
    const nuevo_cliente = new ClienteModelo(
        nombre,
        apellido,
        rol
    );

     //validar que el nombre tenga mas de 3 caracteres
    if (!nuevo_cliente.validar_nombre()){
        alert("Nombre invalidado.El nombre debe tener más de 3 caracteres.");
    }else{
        // Obtener clientes guardados
        let clientes = localStorage.getItem("clientes");
        if (clientes == null){
            clientes = [];
            
        } else{
            clientes = JSON.parse(clientes);
        }

    // Evitar duplicados 

    const clienteExistente = clientes.some(clienteGuardado => 
        clienteGuardado.datonombre.toLowerCase() === nuevo_cliente.datonombre.toLowerCase() &&
        clienteGuardado.datoapellido.toLowerCase() === nuevo_cliente.datoapellido.toLowerCase() &&
        clienteGuardado.datorol.toLowerCase() === nuevo_cliente.datorol.toLowerCase()
    );


    if (clienteExistente){
        alert("El cliente ya esta registrado")
        return;
    }


        // Agregar nuevo cliente
        clientes.push(nuevo_cliente);


        // Guardar clientes
        localStorage.setItem("clientes",JSON.stringify(clientes));

        // Saludo final usando el nombre capturado
        alert("¡Hola " + nombre + ", tu registro fue procesado correctamente!");

        console.log("Cliente registrado:");
        console.log(nuevo_cliente);


        console.log("Todos los clientes:");
        console.log(clientes);
        }        





});