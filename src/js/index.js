// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
// - Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttomElement = document.getElementById('button')

const printClick = ()=>{
    console.log('CLICK')
}

buttomElement.addEventListener('click', printClick)

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const h1Element = document.getElementById('h1')
const h1Original = h1Element.textContent

const changeH1 = () =>{
    h1Element.textContent = ('Quita de encima!!!')
}

const returnH1 = ()=>{
    h1Element.textContent = h1Original
}

h1Element.addEventListener('mouseover', changeH1)
h1Element.addEventListener('mouseout',returnH1)

// - Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

const windowSize = ()=>{
    console.log(window.innerWidth,window.innerHeight)
}

window.addEventListener('resize', windowSize)

// - Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const text = document.getElementById('p')

const keyboardPress = (event)=>{
    text.textContent = 'Has pulsado la tecla ' + event.key 
}
window.addEventListener('keydown', keyboardPress)

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

const words = ['mano', 'mesa', 'movil', 'adios', 'hola' ]
const h2 = document.getElementById('h2')
const previus = document.getElementById('button1')
const next = document.getElementById('button2')

let i = 0
h2.textContent = words.length[1]


// - Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.
const range =document.getElementById('range')

