
let sections = document.querySelectorAll('section')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -590;
        let height = sec.offsetHeight +580;
    if (top >= offset && top < offset + height) {
        sec.classList.add('show-animate')
    }
    else {
        sec.classList.remove('show-animate')
    }
    })
}


function fecharElementos() {
    let banner = document.querySelector('.banner');
    let filtro = document.querySelector('.filtro');

    banner.style.display = "none";
    filtro.style.display = "none";
}

// Adicionando um evento de clique diretamente na função
document.addEventListener('click', fecharElementos);
