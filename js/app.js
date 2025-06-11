const numeros = [1400];
let soma;
let quantidade;
let valor;
let item;
function adicionar() {
    if (document.getElementById("produto").value == "Fone de ouvido - R$100") {
        numeros.push(100 * document.getElementById("quantidade").value) 
        soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        quantidade = document.getElementById("quantidade").value;
        valor = 100;
        item = "Fone de ouvido";
        atualizarLista();
    }
    if (document.getElementById("produto").value == "Celular - R$1400") {
        numeros.push(1400 * document.getElementById("quantidade").value) 
        soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        quantidade = document.getElementById("quantidade").value;
        item = "Celular";
        valor = 1400;
        atualizarLista();
    }
    if (document.getElementById("produto").value == "Oculus VR - R$5000") {
        numeros.push(5000 * document.getElementById("quantidade").value) 
        soma = 0;
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        quantidade = document.getElementById("quantidade").value;
        item = "Oculus VR";
        valor = 5000;
        atualizarLista();
    }
    if (numeros[numeros.length - 1] == 0) {
                numeros.pop();
    }
    console.log(numeros);
    console.log(soma);

}

function limpar() {

    const lista = document.getElementById('lista');
    lista.innerHTML = 'Nenhum item no carrinho';
    numeros.length = 0;
    soma = 0;
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$0</span>`;
    console.log(numeros);
    console.log(soma);
}