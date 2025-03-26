var printHer = document.getElementById("heiKonsoll")
printHer.addEventListener("click", print)

function print() {
    console.log("Hei verden")
}




function leggTilTekst() {
    var tekstEliment = document.getElementById("heihei")

    tekstEliment.innerHTML += ('<h1>lolol</h1>')
}


var byttModus = document.getElementById("svarthvitt")
byttModus.addEventListener("click", modus)

function modus() {
    if (
        document.body.style.backgroundColor === "black")
        {document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    

    else {
        document.body.style.backgroundColor = "white"
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"

    }
        
}