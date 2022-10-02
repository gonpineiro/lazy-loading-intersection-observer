import { registerImage } from './lazy.js'

const maximun = 122
const minimun = 1
const random = () => Math.floor(Math.random() * (maximun - minimun)) + minimun

const createImageNode = () => {
    /* Creamos un contenedor */
    const container = document.createElement('div')
    container.className = "p-4";

    /* Creamos una imagen */
    const imagen = document.createElement('img');
    imagen.class = 'mx-auto'
    imagen.width = '320'
    //imagen.src = `https://randomfox.ca/images/${random()}.jpg`
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    /* Agregar la imagen dentro del contenedor */
    container.appendChild(imagen)

    return container
}

const nodeMount = document.getElementById('images')

const addButton = document.querySelector('button')

const addImages = () => {
    const newImage = createImageNode()
    nodeMount.append(newImage)
    registerImage(newImage)
}
addButton.addEventListener('click', addImages)

