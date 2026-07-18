export default class ClienteModelo {
    constructor(datonombre, datoapellido, datorol){
        this.datonombre = datonombre
        this.datoapellido = datoapellido
        this.datorol = datorol
    }
    
    //validar que el nombre tenga mas de 3 caracteres
    validar_nombre(){
        return this.datonombre != null && this.datonombre.length >=3 &&
        this.datoapellido != null && this.datoapellido.length >=3;
    }

    get_nombre(){
        return this.datonombre
    }

    set_nombre(datonombre){
    this.datonombre = datonombre
    }

    get_apellido(){
        return this.datoapellido
    }

    set_apellido(datoapellido){
        this.datoapellido = datoapellido
    }

    get_rol(){
        return this.datorol
    }

    set_rol(datorol){
        this.datorol = datorol
    }
}