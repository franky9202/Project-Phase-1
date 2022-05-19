function fetchDigimon() {
    const input = document.querySelector(".digiCardInput")

    input.addEventListener("change", (e) => {
        e.preventDefault()
        const digiContainer = document.querySelector("#digiContainer")
        const digimonInput = e.target.value
        
        if (e.target.checked === true) {
            fetch(`https://digimon-api.vercel.app/api/digimon/level/${digimonInput}`)
                .then(res => res.json())
                .then(data => {
                    data.forEach(digimonName => {
                        const col = document.createElement("div")
                        col.className = `col${digimonInput}`
                        col.id = "col"
                        const card = document.createElement("div")
                        card.className = "cardFront"
                        const digiImage = document.createElement("img")
                        digiImage.src = digimonName.img
                        digiImage.class = "card-img"
                        digiImage.alt = "DigimonImage"
                        const card_body = document.createElement("div")
                        card_body.className = "card-bodyBack"
                        const header = document.createElement("h5")
                        header.className = "card-title"
                        header.textContent = `${digimonName.name}`
                        const para = document.createElement("p")
                        para.className = "card-text"
                        para.textContent = `level: ${digimonName.level}`
                        digiContainer.append(col)
                        col.append(card, card_body)
                        card.append(digiImage)
                        card_body.append(header,para)
                        
                        card.addEventListener("click", () =>{
                            card.classList.toggle("flipCard")
                        })
                    });
                })
        }
        if (e.target.checked === false) {
            digiContainer.textContent =""
        }
        
    })
    
}

document.addEventListener("DOMContentLoaded", fetchDigimon)