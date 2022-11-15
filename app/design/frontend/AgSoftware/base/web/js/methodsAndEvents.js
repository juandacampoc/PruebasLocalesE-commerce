//encapsulamos los ID de todos los input en constantes
const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

//encapsulamos los ID de todos los ERRORES de los input en constantes
const firtNameError = document.querySelector('#firtNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

//encapsulamos el ID del boton en una constante
const button = document.querySelector('#button');

button.addEventListener('click',(event)=>{
    event.preventDefault();//para evitar el comportamiento del FORM que recarga la pagina
    validateEmpty(firstName.value, firstName);
})

function validateEmpty(valueImput, divInput){
    if(valueImput.length == 0){
        showError(divInput);
    }else {
        hideError();
    }
}
function showError(divInput){
    divInput.style.border ='1px solid red'; // 2:20:20 tiempo del video para continuar
}
function hideError(){

}
