/* 
********** funcion para la barra de navegacion **********
*/
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