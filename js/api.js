    
    remainValidated()
    /* almacena la validación en el localStorage y permite el acceso a los videos
       pero no te permite acceder a la página web a menos que no valides el usuario
    */
    function remainValidated(){ 
    var isValidated = localStorage.getItem("validated")
    console.log(isValidated)
    localStorage.removeItem("validated")
	if (isValidated == true) {
        console.log("You can access the website")
    }
    else if (isValidated == false || isValidated == undefined){
        window.location.href = "./register.html"
    }
    }
    

