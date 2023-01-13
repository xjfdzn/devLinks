function toggleMode() {
    const html = document.documentElement
    
    html.classList.toggle("light")


// Pegar a tag img
const img = document.querySelector("#profile img")

// Substituir a img
    if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    img.setAttribute("src", "./assets/avatar.png")
    }

}