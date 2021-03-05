function voltar_a_listaDeCompras(adicionar) {
    if(adicionar) {
        if( verificar_valores()) {
            elementos.adicionar_item.elemento.style.display = 'none'
            elementos.lista_de_compras.elemento.style.display = ''
        }
    } else {
        elementos.adicionar_item.elemento.style.display = 'none'
        elementos.lista_de_compras.elemento.style.display = ''
    }
    for( let c = 0; c < 3; c++) { elementos.adicionar_item.inputs[c].value = '' }
}


elementos.lista_de_compras.adicionar.addEventListener( 'click', function() {
    elementos.lista_de_compras.elemento.style.display = 'none'
    elementos.adicionar_item.elemento.style.display = ''
})

elementos.adicionar_item.cancelar.addEventListener( 'click', function() { voltar_a_listaDeCompras(false) })
elementos.adicionar_item.adicionar.addEventListener( 'click', function() { voltar_a_listaDeCompras(true) })

for( let c = 0; c < 3; c++) {
    elementos.adicionar_item.clear_btns[c].addEventListener( 'click', function() { elementos.adicionar_item.inputs[c].value = '' })
}