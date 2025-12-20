function toggleMode() {
  const html = document.documentElement
  const box = document.querySelector("#box")
  const img = document.querySelector("#profile-img")

  // inicia animação
  box.classList.add("flip-box")

  // troca tema + imagem no meio do giro
  setTimeout(() => {
    html.classList.toggle("light")

    if (html.classList.contains("light")) {
      img.src = "./assets/perfil-light.png"
    } else {
      img.src = "./assets/perfil-dark.png"
    }
  }, 400)

  // remove a classe para permitir novo clique
  setTimeout(() => {
    box.classList.remove("flip-box")
  }, 800)
}
