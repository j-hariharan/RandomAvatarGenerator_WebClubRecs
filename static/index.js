let image = document.querySelector(".cover .right img")
setInterval(() => {
    image.src = `/generate?seed=${Math.random()}`
}, 2500)