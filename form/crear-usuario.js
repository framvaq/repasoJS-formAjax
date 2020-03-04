//Inicio el script cuando la página esté creada.
window.addEventListener('load', iniciado, false);

//Declaro aquí esta variable para asegurarme de que es global, y que varias funciones, cuando llamen a esta variable tenga el valor deseado, y no uno desactualizado
var elementoConFoco;

//Guardo en una variable todos los elementos del formulario:
var nombre = document.getElementById("nombre").value;
var primerApellido = document.getElementById("primerApellido").value;
var segundoApellido = document.getElementById("segundoApellido").value;
var pass = document.getElementById("pass").value;

//Función iniciado (para comprobación interna)
function iniciado() {
    console.log("se ha iniciado");
    
    //Cuando se haga click en el botón de enviar se inicia la función de validación.
    document.getElementById("enviar").addEventListener('click', validar, false);
}

//Variables que guardarán los mensajes.
var mensajeFormularioValido = "El formulario se ha enviado correctamente. Datos: <br>";
var mensajeFormularioErroneo = "Hay errores en el formulario:<br>";

/**
 * Función general de validación, llamará a las demás.
 * @param {event} e evento
 */
function validar(e){
    //Evito que se envíe el formulario
    e.preventDefault();;

    let comp = false;

    if (validarNombre(nombre) && validarPrimerApellido(primerApellido) && validarSegundoApellido(segundoApellido) && validarContrasena(pass)){
        comp = true;
    }

    escribir(comp);
}

function validarNombre(nombre) {
    return true;
}

function validarPrimerApellido(primerApellido) {
    return true;
}

function validarSegundoApellido(segundoApellido){
    return true;
}

function validarContrasena(pass){
    /*
    Divido la expresión regular en partes:
        (?=^[a-záéíóúüA-ZÁÉÍÓÚÜñÑçÇ0-9]{8,16}$) ==> Al menos 8 caracteres. 16 máximo.
        (?=^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑçÇ]) ==> Caracteres alfabéticos (al menos uno).
        (?=.*[a-záéíóúüñç].*[A-ZÁÉÍÓÚÑÇ].*) ==> Al menos una mayúscula y una minúscula.
        (?=.*[áéíóúüÁÉÍÓÚÜ].*) ==> Debe contener un carácter alfabético que sea con acento.
        (?=^[^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]+$) ==> Sólo puede contener 3 dígitos decimales. Ni más ni menos. yNo debe terminar en dígito decimal.
        (?=[^$€*]*[$€*]+[^$€*]*) ==> Obligatoriamente al menos uno de estos caracteres $ (dolar) € (euro) * (asterisco)

        (?=^[a-záéíóúüA-ZÁÉÍÓÚÜñÑçÇ0-9]{8,16}$)(?=^.*[a-záéíóúüñç].*)(?=.*[A-ZÁÉÍÓÚÑÇ].*)(?=.*[áéíóúüÁÉÍÓÚÜ].*)(?=^[^0-9]*[0-9][^0-9]*[0-9][^0-9]*[0-9][^0-9]+$)(?=.*([$€*]+))
    */
    var regex;
}


/*FUNCIONES PARA VAGOS*/
function escribir(comp){
    let mensaje;
    if (comp){
        mensajeFormularioValido += "Nombre: " + document.getElementById("nombre").value + "<br>";
        mensajeFormularioValido += "Primer apellido: " + document.getElementById("primerApellido").value + "<br>";
        mensajeFormularioValido += "Segundo Apellido: " + document.getElementById("segundoApellido").value + "<br>";
        mensajeFormularioValido += "Contraseña: ******* (es broma, es esta):" + document.getElementById("pass").value + "<br>";
    } else {
        mensaje = mensajeFormularioErroneo;
    }

    document.getElementById("esconder").innerHTML = mensaje;
    //Reinicio todas las variables para próximos intentos
    mensajeFormularioValido = "El formulario se ha enviado correctamente. Datos: <br>";
    mensajeFormularioErroneo = "Hay errores en el formulario:<br>";
    mensaje = "";

}