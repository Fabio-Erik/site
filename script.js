// CARROSSEL

let slides = document.querySelectorAll(".slide")

let index = 0

function trocarSlide() {

    slides[index].classList.remove("active")

    index++

    if (index >= slides.length) {
        index = 0
    }

    slides[index].classList.add("active")

}

setInterval(trocarSlide, 3000)



// FORMULARIO

let form = document.getElementById("formulario")
let mensagem = document.getElementById("mensagem")
let fechar = document.getElementById("fechar")

form.addEventListener("submit", function (e) {

    e.preventDefault()

    mensagem.style.display = "block"

})

fechar.addEventListener("click", function () {

    mensagem.style.display = "none"

})

document.getElementById("formulario").addEventListener("submit", function (e) {

    e.preventDefault()

    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let endereco = document.getElementById("endereco").value
    let mensagem = document.getElementById("mensagem").value

    let texto = `Olá, vim pelo site.

Nome: ${nome}
Telefone: ${telefone}
Endereço: ${endereco}
Mensagem: ${mensagem}`

    let numero = "5561981496408"

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

    window.open(url, "_blank")

})

const sobre = document.querySelector(".conteudo-sobre")

function mostrarSobre() {

    const posicao = sobre.getBoundingClientRect().top
    const alturaTela = window.innerHeight

    if (posicao < alturaTela - 100) {
        sobre.classList.add("aparecer")
    }

}

window.addEventListener("scroll", mostrarSobre)

const servicos = document.querySelector("#servicos")
const cards = document.querySelectorAll(".card")
const botao = document.querySelector(".btn-servicos")

let animacaoServicos = false

function mostrarServicos() {

    const posicao = servicos.getBoundingClientRect().top
    const alturaTela = window.innerHeight

    if (posicao < alturaTela - 100 && !animacaoServicos) {

        animacaoServicos = true

        cards.forEach((card, index) => {

            setTimeout(() => {

                card.classList.add("aparecer")

            }, index * 300)

        })

        setTimeout(() => {

            botao.classList.add("subir")

        }, cards.length * 300 + 200)

    }

}

window.addEventListener("scroll", mostrarServicos)