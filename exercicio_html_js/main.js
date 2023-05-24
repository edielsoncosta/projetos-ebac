/*  criar validação caso número B seja maior que Numero A 
    mensagem positiva, caso, formulário válido - Negativa se for formulário inválido
*/
const conteudo = document.querySelector('#conteudo')
console.log(conteudo);
const form = document.querySelector('#formulario');
form.addEventListener('submit',function(e){
    console.log(e)
    e.preventDefault();

let numA = document.getElementById('valorTransacao').value
let numB = document.getElementById('valorConta').value
numA = parseInt(numA)
numB = parseInt(numB)
console.log(numA)
console.log(numB)
//alert(validacao(numA,numB))
conteudo.innerHTML = validacao(numA,numB);

reset()
});

function validacao(numA,numB){
    if(numA < numB){
        return `Transferência Inválida
        Saldo: ${numA}
        Valor da Transação: ${numB}
        ` 
    }
    else if(numA > numB){
        return `Transferência válida
        Saldo: ${numA}
        Valor da Transação: ${numB}
        ` 
    }
    else if(numA == numB){
        return 'Não pode Transferir todo seu Saldo!'
    }
}

function exibe_doc(string){
    
}

reset()
function reset(){
    document.getElementById('valorConta').value = ' '
    document.getElementById('valorTransacao').value = ' '
    document.getElementById('mailto').value = ' '
}