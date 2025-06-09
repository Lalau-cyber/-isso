const cidades = ["palhoça","itajai","BC"]
console.log(cidades)

function adicionarFinal(){
    //função PUSH adiciona elementos no final da lista
    cidade = prompt("digite uma cidade")
    cidades.push(cidade)
    console.log(cidades)
}
function adicionarInicio(){
    //função UNSHIFT adiciona elementos no inicio da lista
    cidade = prompt("digite uma cidade")
    cidades.unshift(cidade)
    console.log(cidades)
}
function removerFinal(){
    //função pop remove elementos no final da lista
    cidades.pop(cidade)
    console.log(cidades)}

    function removerInicio(){
        //função shift remove elementos no inicio da lista
        cidades.shift(cidade)
        console.log(cidades)}
    
