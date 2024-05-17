function buscar(){
    let URL="https://randomuser.me/api/";
    console.log(URL);
    fetch (URL)
        .then(Response => Response.json())
        .then(data=>{
            //console.log(data.results[0])
            let personaje = new Persona3 (data.results[0].name.first,data.results[0].name.last, data.results[0].gender,data.results[0].location.city, data.results[0].email);
            //console.log(personaje)
            personaje.mostrar();
        })
}

class Persona3{
    constructor (name,lastname,gender,city,email){
        this.name = name;
        this.lastname = lastname;
        this.gender= gender;
        this.city = city;
        this.email= email;
    }

    mostrar(){
        console.log(`holas soy ${this.name} ${this.lastname} mi genero es ${this.gender}`);
        document.write((`holas soy ${this.name} ${this.lastname} mi genero es ${this.gender}`));
    } 
}
  
   
  
  
    

