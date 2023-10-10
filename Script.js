
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