let alcool = document.querySelector("#alcool")
let gasolina = document.querySelector("#gasolina")
let resultado = document.querySelector("#resultado")
let calcular = document.querySelector("#calcular")

calcular.addEventListener("click", function () {

    let precoAlcool = Number(alcool.value)
    let precoGasolina = Number(gasolina.value)

    let calculo = precoAlcool / precoGasolina

    if (calculo <= 0.7) {
        resultado.textContent = "Resultado: É melhor utilizar Álcool"
    } else {
        resultado.textContent = "Resultado: É melhor utilizar Gasolina"
    }

})