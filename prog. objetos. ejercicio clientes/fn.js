/*
class Persona2{
    
        nombre = '';
        apellido = '';
        dni = '';
        nacionalidad = '';
        fecha_nacimiento = ''
}   



class cliente extends Persona2{
//constructor(nombre, apellido,dni , nacionalidad, fecha_nacimiento, cuenta){
    //super(nombre, apellido,dni , nacionalidad, fecha_nacimiento);
    cuenta = '';//cuenta;

    
    mostrar(){
        console.log(`hola ${this.nombre} mi cuenta es ${this.cuenta}`)
    } 

}*/

class Persona2{
    constructor (nombre, apellido,dni , nacionalidad, fecha_nacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nacionalidad = nacionalidad;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    mostrar(){
        console.log(`hola ${camila.nombre} mi cuenta es ${camila.cuenta}`)
    } 

}

class cliente extends Persona2{
    constructor(nombre, apellido,dni , nacionalidad, fecha_nacimiento, cuenta){
        super(nombre, apellido,dni , nacionalidad, fecha_nacimiento);
        this.cuenta = cuenta;
    }

   
}


/*let persona2 = new cliente();
   persona2.nombre = 'camila';
   persona2.apellido = 'apellido';
   persona2.dni = 44875941
   persona2.nacionalidad = 'argentina';
   persona2.fecha_nacimiento = 2003;
   persona2.cuenta = 'cuenta';*/

   let camila = new cliente ('camila','sittner', 44875941, 'nacionalidad', 2003, 'cuenta b');
   //persona2.mostrar();
   camila.mostrar();
  
  
    

