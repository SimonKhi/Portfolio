const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\[a-zA-Z0-9-.]+$/,
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case 'usuario':
            if(expresiones.nombre.test(e.target.value)){

            } else {
                document.getElementById()
            }
        break;
        case 'email':

        break;
        case 'mensaje':

        break;
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

nombre.addEventListener('keyup', validarFormulario);
nombre.addEventListener('blur', validarFormulario);
email.addEventListener('keyup', validarFormulario);
email.addEventListener('blur', validarFormulario);
mensaje.addEventListener('keyup', validarFormulario);
mensaje.addEventListener('blur', validarFormulario);

function navigateTo(section) {
    var direccion = document.getElementById(section);

    if (direccion) {
        direccion.scrollIntoView({
            behavior: 'smooth'
        });
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    event.preventDefault();
}
