function deleteByKey(arr, key) {
    let novo = []
    for( let c in arr) {
        if( c != key) {
            novo.push(arr[c])
        }
    }
    return novo
}


const elementos = {
    adicionar_item: {
        elemento: document.querySelector( 'div#adicionar_item'),
        inputs: document.querySelectorAll( 'input.add'),
        clear_btns: document.querySelectorAll( 'button.add'),
        cancelar: document.querySelector( 'button#cancelar'),
        adicionar: document.querySelector( 'button#adicionar_a_lista')
    },
    lista_de_compras: {
        elemento: document.querySelector( 'div#lista_de_compras'),
        lista_principal: document.querySelector( 'ul#lista_principal'),
        dados_fianis: document.querySelector( 'ul#dados_finais'),
        adicionar: document.querySelector( 'button#adicionar')
    },
    editar: {
        elemento: document.querySelector( 'div#editar')
    }
}

let lista = []
let final = { produtos:0, itens:0, total:'' }

elementos.adicionar_item.elemento.style.display = 'none'
document.querySelector( 'div#editar').style.display = 'none'