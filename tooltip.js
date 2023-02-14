const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function remove(){
    let video = document.getElementById("miVideo");
    let contenido = document.getElementById("contenidoVideo");

    video.remove();
    contenido.remove();
}

document.getElementById("botonVideo").addEventListener('click',remove);