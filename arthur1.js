const carros = ["fusca", "chevete", "brasilia","opala","maverick"]
console.log(carros)

function inserir(){
carro = document.getElementById("carro").value
    carros.push(prompt("digite seu carro"))
console.log()

}
    function remover(){
        if(carros!= [0]){
            console.log("nao ha mais elementos")
        }
        carros.pop()
            console.log(carros)
        
    }
