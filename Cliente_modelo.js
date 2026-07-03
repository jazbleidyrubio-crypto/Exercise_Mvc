class ClienteModelo {
    constructor(datonombre, datoapellido, datorol){
        this.datonombre = datonombre
        this.datoapellido = datoapellido
        this.datorol = datorol
    }
    

    get_nombre(){
        return this.nombre
    }

    set_nombre(datonombre){
    this.nombre = nuevo_dato
    }

    get_apellido(){
        return this.apellido
    }

    set_apellido(datoapellido){
        this.apellido = nuevo_dato
    }

    get_rol(){
        return this.rol
    }

    set_rol(datorol){
        this.rol = nuevo_dato
    }
}