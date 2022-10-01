const isIntersecting = (entry) => {
    return entry.isIntersecting // True si esta dentro de la pantalla
}

const accion = (entry) => {
    const nodo = entry.target
    console.log('hola');

    observer.unobserve(nodo)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

export const registerImage = (imagen) => {
    /* Interseccion Observer: observe la imagen*/

    observer.observe(imagen)
}