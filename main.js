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
        alert('Imprima a lista de itens')
    }

    
})


