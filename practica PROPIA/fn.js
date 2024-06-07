
function buscar(){
 mujeredad = 0;
 cantidad = "";

    fetch("https://randomuser.me/api/?results=3")
    
        .then(response => response.json())
        .then(data => data.results.forEach(element => {
            console.log(element)
          
            if (mujeredad < element.dob.age ){
                element.dob.age = mujeredad
                
                console.log(mujeredad)
            //document.getElementById("mujer").innerHTML = `${element.name.first}`,`${element.gender}`
           }

        }))

}