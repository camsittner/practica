//juan = new Persona(atributos);// camila = newPersona('camila','sittner',21)
//poner: nombre,edad,apellido
class Persona{
    constructor (nombre, apellido, fecha_nacimiento){
        this.nombre = nombre;
        this.apellido = apellido;
        //this.edad = edad;
        this.fecha_nacimiento = fecha_nacimiento;
      
    }

    saludar(){
        console.log(`hola, soy ${this.nombre}, ${this.apellido}`); //('hola, soy' +${this.nombre})
    }

    
    
    getEdad(){
        let anio = new Date ();
        let edad = anio.getFullYear() - this.fecha_nacimiento;

        //let edad = 2024 - this.fecha_Nacimiento; deja siempre la misma edad al no cambiar durante los años
        //console.log(edad)
        return edad;
    }

   }

   let camila = new Persona ('camila','sittner',2003);
   let edad = camila.getEdad(); 
   console.log(edad)
  
    let tadeo = new Persona ('tadeo','luiselli',1997);//para colocar otros


   camila.saludar();

   tadeo.saludar();

