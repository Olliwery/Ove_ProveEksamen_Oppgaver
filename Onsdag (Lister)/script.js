let tall = [0, 10, 100, 1000, 10000, 100000]
let henteTallEL = document.getElementById("henteTall")

henteTallEL.addEventListener("change", oppgave1)

let TextPrinterEL = document.getElementById("TextPrinter")


function oppgave1() {
    TextPrinterEL.innerText = (tall[henteTallEL.value])
    henteTallEL.value = ""
}






let arrayListe = [0, 10, 100, 1000, 10000, 100000]
let velgeTallEL = document.getElementById("velgeTall")

velgeTallEL.addEventListener("change", oppgave1)

let SeTallEL = document.getElementById("SeTall")


function oppgave1() {
    SeTallEL.innerText = (arrayListe[velgeTallEL.value])
    velgeTallEL.value = ""
}