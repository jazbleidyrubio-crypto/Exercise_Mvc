class Api_modelo{

    guardar_cliente(lista_cliente, obj_cliente){
        localStorage.getItem(JSON.parse("lista cliente"));
          // Agregar el nuevo cliente a la lista
        lista_cliente.push(obj_cliente);

        // Guardar la lista completa en LocalStorage
        localStorage.setItem(lista_cliente, JSON.stringify(lista));
        console.log("Cliente guardado correctamente.")
    }


    imprimir_cliente(){
        const info= localStorage("cliente");
        console.log(info);
    }
}