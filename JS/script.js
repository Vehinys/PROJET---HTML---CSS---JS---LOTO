    window.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector("section")
    const nbBox = 49
    let colors = ["#165b33ce",]

    // k = key / v = value
    // Créer un tableau de 1 à 49 (k = key / v = value)
    let numeros = Array.from({ length: 49 }, (k, v) => v + 1)
        // Melanger le tableau "numéro sans doublons"
    let shuffle = numeros.sort(() => Math.random() - 0.5)
    console.log(shuffle)

    for (let i = 1; i <= nbBox; i++) {

        //Créer un élément de type <div>
        let box = document.createElement("div", "image")
            // On attribue la classe box à l'élément
        box.classList.add("box")
            // on ajoute du contenu dans l'élément box
        box.innerHTML = shuffle[i - 1]

        let img = document.createElement("img")
        img.src = `./img/image${i}.jpg`
        box.appendChild(img)

            // On génére un nombre aléatoire du tableau colors
        let randomIndex = Math.floor(Math.random() * colors.length)
            // On attribue une couleur aléatoire aux éléments
        box.style.backgroundColor = colors[randomIndex]
            // On ajoute l'élément box dans la section
        section.appendChild(box)
        
        
        box.addEventListener("click", function() {
            box.classList.toggle("active")
        })
    }

})