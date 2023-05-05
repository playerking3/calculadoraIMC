var form = document.getElementById("formulario")




function enviar(event) {
    event.preventDefault()
    var div = document.getElementById("resultado")
    var result = document.getElementById("result")
    var data = new FormData(this)
    var peso = (data.get("peso"))
    var altura = (data.get("altura")) 
    var imc = peso / (altura * altura)
    if (imc < 18.5){
        result.innerHTML = "Magreza"
    }else if (imc >= 18.5 && imc < 24.9){
        result.innerHTML = "Peso normal"
    }else if(imc >= 24.9 && imc < 29.9){
        result.innerHTML = "Sobrepeso"
    }else if(imc >= 29.9 && imc < 39.9){
        result.innerHTML = "Obesidade Grau I"
    }else if (imc > 39.9){
        result.innerHTML = "Obesidade Grau II"
    }
    
}




form.addEventListener("submit", enviar)