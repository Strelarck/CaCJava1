// DOM
document.addEventListener('DOMContentLoaded', () => {	
	const formulario = document.querySelector('form');

	const mostrarError = (input, mensaje) =>{
		const divPadre = input.parentNode;
		const errorText = divPadre.querySelector('.error-text');
		divPadre.classList.add('error');
		errorText.innerText = mensaje;
	}

	const eliminarError = input => {
		const divPadre = input.parentNode;
		divPadre.classList.remove('error');
		const errorText = divPadre.querySelector('.error-text');
		errorText.innerText = '';
	}

	//verificar campos completos

	formulario.querySelectorAll('input').forEach(input => {
		input.addEventListener('change', () => {
			const valor = input.value.trim();
			if (valor !== ''){
				eliminarError(input);
			}
		})
	});

	//validar campos

	function validarCampo(campoId, mensaje){
		const campo = document.getElementById(campoId);
		const value = campo.value.trim();
		if (value == ''){
			mostrarError(campo , mensaje)
			return false;
		} else {
			eliminarError(campo)
			return true;
		}
	}

	//validar formato mail

	function esEmail(email){
		const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return formatoEmail.test(email);
	}

	//validar campo email

	function validarEmail(campoId, mensaje){
		const campo = document.getElementById(campoId);
		const email = campo.value.trim();

		if (email == ''){
			mostrarError(campo, 'ingresa el correo electronico')
			return false;
		} else if (!esEmail(email)){
			mostrarError(campo,mensaje);
			return false;
		} else {
			eliminarError(campo);
			return true;
		}
	}

	//validar formulario
	const validarFormulario = () => {
		let validar = true;
		validar = validarCampo('nombre', 'Ingrese su nombre') && validar;
		validar = validarCampo('apellido', 'Ingrese su apellido') && validar;
		validar = validarCampo('telefono', 'Ingrese su teléfono') && validar;
		validar = validarEmail('email','el correo electronico no es valido') && validar;
		validar = validarCampo('password','ingrese una contraseña') && validar;

		return validar;
	}

	//event listener (corrobora antes de enviar)
	
	formulario.addEventListener('submit', event => {
		event.preventDefault();
		if (!validarFormulario()) {
			event.preventDefault()
			console.log("El formulario es invalido");
		} else {
			event.preventDefault();
			console.log("El formulario es valido");
		}
	})

})