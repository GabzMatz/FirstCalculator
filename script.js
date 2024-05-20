let visor = document.getElementById("visor")
let on = document.getElementById("on");
let reset = document.getElementById("reset");
let off =document.getElementById("off");
let nums = document.querySelectorAll(".num")
let util = document.querySelectorAll(".utils")
let digit1 = "0"
let ligar = false
let norepeat = true
let temp = ""
let type = ""




nums.forEach((num)=>{
    num.addEventListener("click",manipuler)
})

util.forEach((optionCalc)=>{
    optionCalc.addEventListener("click",calculator)
})




function manipuler(){
    let numero = this.innerHTML

    if(digit1 == "0"){
        digit1 = numero
    }
    else if(digit1.length < 9){
        digit1 += numero
    }
    visor.innerHTML = digit1;

    }

function calculator(x){
    let option = x.target.innerHTML
    if(option == "=" && temp.length > 0 ){
        switch (type) {
            case "+":
                result = parseInt(temp) + parseInt(digit1);
                break;
            case "-":
                result = parseInt(temp) - parseInt(digit1);
                break;
            case "/":
                result = parseInt(temp) / parseInt(digit1);
                break;
            case "*":
                result = parseInt(temp) * parseInt(digit1);
                break;
            case "%":
                result = parseInt(temp) % parseInt(digit1);
                break;
            default:
                result = "Invalid operation";
        }
    visor.innerHTML = result
    digit1 = "0"
    norepeat = true
    temp = ""
    type = ""
    }


    if(digit1.length < 9 && norepeat){
        switch(option){
            case "+":
                type = "+"
                temp = digit1
                digit1 = "0"
                norepeat = false
                break
                
            case "-":
                type = "-"
                digit1 += "-"
                temp = digit1
                digit1 = "0"
                norepeat = false

                break
            case "/":
                type = "/"
                digit1 += "/"
                temp = digit1
                digit1 = "0"
                norepeat = false

                break
            case "*":
                type = "*"
                digit1 += "*"
                temp = digit1
                digit1 = "0"
                norepeat = false

                break
            case "%":
                type = "%"
                digit1 += "%"
                temp = digit1
                digit1 = "0"
                norepeat = false
                break
        }
    }
}

on.addEventListener("click",() => {
    visor.innerHTML = digit1
    ligar=true
})
off.addEventListener("click",() =>{
    visor.innerHTML = ""
    ligar = false
    digit1 = "0"
    norepeat = true
    temp = ""
    type = ""
})

reset.addEventListener("click",function(){
    digit1 = "0"
    norepeat = true
    temp = ""
    type = ""
    if(ligar){
        visor.innerHTML = digit1
        setTimeout(() =>{
            visor.innerHTML = "0"},100)
    }
})

