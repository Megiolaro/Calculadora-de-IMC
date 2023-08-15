let botaoMulher = document.querySelector(".button-mulher")
let botaoHomem = document.querySelector(".button-homem")
let inputAltura = document.querySelector(".input-altura")
let inputPeso = document.querySelector(".input-peso")
let result = document.querySelector(".result")


function escolhaMulher(){
    botaoMulher.style.cssText = 
    'color: #fff;' +
    'background-color: #d38bfd'
    botaoHomem.style.cssText =
    'color: #5187ac' +
    'background-color: #eff8ff' +
    'border: 1px solid #5187ac'    
}

function escolhaHomem(){
    botaoHomem.style.cssText =
    'color: #fff;' +
    'background-color: #36b1df;'
    botaoMulher.style.cssText =
    'color: #ac81c5' +
    'border: 1px solid #ac81c5' +
    'background-color: #fbf4ff'
}

function calculoIMC(){
    let resultado = 0
    resultado = inputPeso.value / (Math.pow(inputAltura.value, 2))
    if(resultado < 16){
        result.innerHTML = "Magreza grave"
        result.classList.remove("hiden")
    }
    else if(resultado >= 16 && resultado < 17){
        result.innerHTML = "Magreza moderada"
        result.classList.remove("hiden")
    }
    else if(resultado >= 17 && resultado < 18.5){
        result.innerHTML = "Magreza leve"
        result.classList.remove("hiden")
    }
    else if(resultado >= 18.5 && resultado < 25){
        result.innerHTML = "Saudável"
        result.classList.remove("hiden")
    }
    else if(resultado >= 25 && resultado < 30){
        result.innerHTML = "Sobrepeso"
        result.classList.remove("hiden")
    }
    else if(resultado >= 30 && resultado < 35){
        result.innerHTML = "Obesidade Grau I"
        result.classList.remove("hiden")
    }
    else if(resultado >= 35 && resultado < 40){
        result.innerHTML = "Obesidade Grau II (considerada severa)"
        result.classList.remove("hiden")
    }
    else if(resultado >= 40){
        result.innerHTML = "Obesidade Grau III (considerada mórbida)"
        result.classList.remove("hiden")
    }
}

