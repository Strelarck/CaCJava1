document.addEventListener("DOMContentLoaded", () => {
    remainValidated()
    rememberUser()
});

/* almacena la validación en el localStorage en la instancia de login y permite el acceso a los videos pero no te permite acceder a la página web a menos que no valides el usuario
    */

   function remainValidated(){ 
       var isValidated = localStorage.getItem("validated") /* obtengo el item del login en movies */
       console.log(isValidated)
       localStorage.removeItem("validated")
       if (isValidated == true) {
           console.log("You can access the website")
        }
        else if (isValidated == false || isValidated == undefined){ /* lo devuelvo a register si intenta acceder sin el token validado */
             window.location.href = "./register.html"
        }
    }
    
    
    function rememberUser(){
        var user = localStorage.getItem("email")
        console.log(user)

        var welcome = document.getElementById("user").innerHTML = "Bienvenido usuario: " + user 
        console.log(welcome)
    }