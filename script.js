function toggleMode() {
    //atributo toggle faz a troca de modo automaticamente sem um código extenso
    const html = document.documentElement
    html.classList.toggle("light")
    
    //pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, adicionar avatar-light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se não tiver, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }
}
