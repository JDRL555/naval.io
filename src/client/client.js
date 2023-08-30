const ship = document.getElementById("ship")
const view = document.getElementById("ship_view")
const body = document.querySelector("body")


for (let i = 0; i < 30; i++) {
  const point = document.createElement("div")
  point.setAttribute("class", "point")
  const x = (Math.random() * window.innerWidth) * 5
  const y = (Math.random() * window.innerHeight) * 5

  point.style.left = `${x}px`
  point.style.top = `${y}px`

  body.appendChild(point)
}

let moveX = 0
let moveY = 0

document.onmousemove = event => {
  const mouseX  = event.clientX
  const mouseY  = event.clientY

  const posX    = mouseX - window.innerWidth / 2
  const posY    = window.innerHeight / 2 - mouseY
  
  const rand      = Math.atan2(posX, posY)
  const rotation  = Math.round(rand * (180 / Math.PI))

  ship.style.transform = `rotate(${rotation}deg)`
  view.style.transform = `translate(${mouseX}px, ${mouseY}px)`
  window.scrollTo(mouseX, mouseY)
  // setInterval(() => window.scrollTo(mouseX, mouseY), 1000)
}
