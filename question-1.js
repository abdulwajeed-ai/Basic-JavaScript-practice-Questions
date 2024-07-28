// simple calculator asking to user a type of operation and taking two number and doing operation according choosen operator.

let a = prompt('what type of operation do you +, -, *, /')

let firstNumber = prompt('enter your first number to ' + a)
firstNumber = parseInt(firstNumber)
let secondNumber = prompt('enter your second to ' + a)
secondNumber = parseInt(secondNumber)


if(a=="+"){
    alert(firstNumber + secondNumber)
}
else if(a=="-"){
    alert(firstNumber - secondNumber)
}
else if(a=="*"){
    alert(firstNumber * secondNumber)
}
else if(a=="/"){
    alert(firstNumber / secondNumber)
}
else{
    console.log('first selelct type and enter your values to do calculations')
}