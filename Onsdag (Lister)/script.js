let tall = [0, 10, 100, 1000, 10000, 100000]
let henteTallEL = document.getElementById("henteTall")
let visListeEL = document.getElementById("visListe")
let text = ""

for (let i = 0; i < tall.length; i++) {
    text += tall[i] + " - "

}
visListeEL.innerText = text


henteTallEL.addEventListener("change", oppgave1)

let TextPrinterEL = document.getElementById("TextPrinter")


function oppgave1() {
    TextPrinterEL.innerText = (tall[henteTallEL.value])
    henteTallEL.value = ""
}


/*fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff*/



let velgeTallEL = document.getElementById("velgeTall")
let endreTallEL = document.getElementById("endreTall")

velgeTallEL.addEventListener("change", velgeTall)
endreTallEL.addEventListener("change", endreTall)


let SeTallEL = document.getElementById("SeTall")


function velgeTall() {
    
}

function endreTall() {
    velgeTall.value
    SeTallEL.innerText = (tall[velgeTallEL.value])
    velgeTallEL.value = ""
}