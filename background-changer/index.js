const btnEl = document.getElementById("btn");
btnEl.addEventListener('click',()=> {
    document.body.style.background = randomBg()
})

function randomBg() {
    return `rgb(${Math.floor(Math.random()* 250)},${Math.floor(Math.random()* 250)},${Math.floor(Math.random()* 250)})`
}