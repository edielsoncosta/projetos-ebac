/*  criar validação caso número B seja maior que Numero A 
    mensagem positiva, caso, formulário válido - Negativa se for formulário inválido
*/

const form = document.getElementById('formulario')
form.addEventListener('submit',function(e){
    e.preventDefault();

let numA = document.getElementById('valorTransacao').value
let numB = document.getElementById('valorConta').value
numA = parseInt(numA)
numB = parseInt(numB)
alert(validacao(numA,numB))

reset()
})

function validacao(numA,numB){
    if(numA < numB){
        alert('Transferência Inválida') 
    }
    else if(numA > numB){
        alert('Transferência Válida')
    }
    else if(numA == numB){
        alert('Não pode Transferir todo seu Saldo!')
    }
}

reset()
function reset(){
    document.getElementById('valorConta').value = ' '
    document.getElementById('valorTransacao').value = ' '
    document.getElementById('mailto').value = ' '
}