function Calcular(){
var valor1 = document.getElementById('entrada1') // ou pode botar o .value aqui
var valor2 = document.getElementById('entrada2')
var res = document.getElementById('resultado')

var resultado = Number( valor1.value )+ Number(valor2.value)

res.innerHTML = `o resultado da operação é : ${resultado} `

}




