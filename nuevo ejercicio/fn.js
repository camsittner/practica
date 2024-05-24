class Clientes{
    constructor(nombre,lastName,dni ,fecha_nacimiento){
    this.nombre = nombre;
    this.lastName = lastName;
    this.dni = dni;
    this.fecha_nacimiento = fecha_nacimiento;
}
mostrar(){
    console.log(`el cliente ${this.nombre} posee un saldo de ${this.saldo} `) }

};
/*
    getname(){return this.name; }
    setname(name){this.name = name; }
    getlastName(){return this.lastname; }
    setlastName(lastName){this.lastName = lastName; }
}*/


/*class cuenta_bancaria extends Clientes{
   mostrar(){
    super.saldo = saldo;
   //this.id_persona = id_persona;
    //this.historial = historial;

} 
} /*

consultar_saldo(){
console.log(this.saldo)
}

depositar(){}

retirar(){}

}*/


let pepe = new Clientes ('camila','sittner', '44875941', '30/ 08/ 2003');
//let pepe = new cuenta_bancaria ('camila','10.000');

pepe.mostrar();
//console.log(pepe);