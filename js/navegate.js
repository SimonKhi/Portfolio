/* 
********** funcion para la barra de navegacion **********
*/
function navigateTo(section) {
    event.preventDefault();
    var direccion = document.getElementById(section);
    if(direccion) 
        direccion.scrollIntoView() 
    else
        window.scrollTo({top: 0});
}