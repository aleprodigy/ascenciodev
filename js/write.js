
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 95 * i);
    });
}

const titulo = document.querySelector('p')
typeWriter(titulo)