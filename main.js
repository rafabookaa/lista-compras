let frutasArray = [];
let laticiniosArray = [];
let congeladosArray = [];
let docesArray = [];

let select = document.getElementById('select')
select.addEventListener('change', function seleciona () {
    var selecao = select.value;
    
let input = document.querySelector('.input-botao')
input.focus();

function adicionaItem() {

    if(selecao == 'frutas') {
        frutasArray.push(input.value)
        novoItem();
    }

    if(selecao == 'laticinios') {
        laticiniosArray.push(input.value)
        novoItem();
        
    }
    if(selecao == 'congelados') {
        congeladosArray.push(input.value)
        novoItem();
        
    }
    if(selecao == 'doces') {
        docesArray.push(input.value)
        novoItem();
        
    }     
    input.value = " ";
    input.focus(); 

}
let button = document.querySelector('button');
    button.onclick = adicionaItem;

    function novoItem () {
        let adicionaNovoItem = confirm('Item adicionado á lista \n \n Deseja adicionar um novo item?')

        if(adicionaNovoItem) {
            
        } else 
        alert('Clique no botão imprimir lista, para que a sia lista de compras seja mostrada')
    }

    
})

function imprimeLista () {
    alert(`Sua lista de compras é: \n \n Frutas: ${frutasArray} \n \n Laticinios: ${laticiniosArray} \n \n Congelados: ${congeladosArray} \n \n Doces: ${docesArray}`)
}

let botaoImprime = document.querySelector('.botao-imprime')
botaoImprime.onclick = imprimeLista;


