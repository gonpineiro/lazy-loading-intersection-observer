/* Por cada entrada que la Api escucha existe un atributo que te indica si fue intersectada */
const isIntersecting = (entry) => entry.isIntersecting


const loadImage = (entry) => {
    const container = entry.target
    const imagen = container.firstChild
    const url = imagen.dataset.src
    imagen.src = url

    /* Utilizamos este metodo para dejar de observar la imagen una vez que se renderizo */
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        /* Filtramos todos los elementos intersectados */
        .filter(isIntersecting)

        /* Por cada elemento intersectado ejecutamos la funcion loadImage() */
        .forEach(loadImage)
})

export const registerImage = (imagen) => {
    /* Interseccion Observer: observe la imagen */
    observer.observe(imagen)
}