function remover_da_lista(key) {
    lista = deleteByKey(lista, key)
    atualizar_pagina()
}
function atualizar_final() {
    final = { produtos:lista.length, itens:0, total:'' }
    let total = 0
    for( let c = 0; c < lista.length; c++) {
        final.itens += lista[c].quantidade
        total += lista[c].total_num
    }
    final.total = total.toLocaleString( 'pt-br', { style:'currency', currency:'BRL'})
}
function verificar_valores() {
    let nome = elementos.adicionar_item.inputs[0].value
    let preco = elementos.adicionar_item.inputs[1].value
    let quantidade = elementos.adicionar_item.inputs[2].value

    if( quantidade == '' ) { quantidade = 1 }
    if( Number(preco) <= 0 || nome == '' || preco == '' || Number(quantidade) < 1) {
        alert( 'Oops! Digite os dados corretamente...')
        return false
    } else {
        adicionar_ao_array( nome, Number(preco), Number(quantidade))
        return true
    }
}
function adicionar_ao_array( nome, preco, quantidade) {
    let total = preco * quantidade
    lista.push( {
        nome: nome,
        preco_txt: preco.toLocaleString( 'pt-br', { style:'currency', currency:'BRL'}),
        total_txt: total.toLocaleString( 'pt-br', { style:'currency', currency:'BRL'}),
        preco_num: preco,
        total_num: total,
        quantidade: quantidade
    })
    atualizar_pagina()
}
function atualizar_pagina() {
    listaPagina = elementos.lista_de_compras.lista_principal
    dadosFinais = elementos.lista_de_compras.dados_fianis
    if(lista.length == 0) {
        listaPagina.innerHTML = '<li class="nada_adicionado"> <span> Nada adicionado ainda... </span> </li>'
        dadosFinais.innerHTML = ''
    } else {
        atualizar_final()
        listaPagina.innerHTML = ''
        for( let c = 0; c < lista.length; c++) {
            listaPagina.innerHTML += `<li id="item_lista">
                <div class="textos">
                    <span class="texto-0"> ${lista[c].nome} </span>
                    <span class="texto-1"> (${lista[c].preco_txt}) </span>
                    <hr>
                    <span class="texto-2"> ${lista[c].total_txt} </span>
                    <span class="texto-3"> (${lista[c].quantidade}x) </span>
                </div>
                <div class="botoes">
                    <button class="editar"> Editar </button>
                    <button class="remover"> Remover </button>
                </div>
            </li>`
            dadosFinais.innerHTML = `<li id="total_produtos"> Produtos: ${final.produtos} </li>
            <li id="total_itens"> Itens: ${final.itens} </li>
            <li>
                <span> TOTAL: </span>
                <span id="total_compra"> ${final.total} </span>
            </li>`
        }
        let editarRemover = [
            document.querySelectorAll( 'button.editar'),
            document.querySelectorAll( 'button.remover')
        ]
        for( let c = 0; c < lista.length; c++) {
            editarRemover[0][c].addEventListener( 'click', function() {
                editar_item(c)
            })
            editarRemover[1][c].addEventListener( 'click', function() { remover_da_lista(c) })
        }
    }
}
function editar_item(key) {
    const editar = {
        elemento: document.querySelector( 'div#editar'),
        nome: document.querySelectorAll( 'input.edit')[0],
        preco: document.querySelectorAll( 'input.edit')[1],
        quantidade: document.querySelectorAll( 'input.edit')[2],
        limpar: document.querySelector( 'button.edit'),
        mais: document.querySelectorAll( 'button.mais'),
        menos: document.querySelectorAll( 'button.menos'),
        salvar: document.querySelector( 'button#voltar')
    }
    editar.elemento.style.display = ''
    elementos.lista_de_compras.elemento.style.display = 'none'
    
    editar.nome.value = lista[key].nome
    editar.preco.value = lista[key].preco_num
    editar.quantidade.value = lista[key].quantidade

    editar.limpar.addEventListener( 'click', function() {
        editar.nome.value = ''
    })

    for( let c = 0; c < 2; c++) {
        editar.mais[c].addEventListener( 'click', function() {
            if(c == 0) {
                editar.preco.value = Number(editar.preco.value) +1
            } else {
                editar.quantidade.value = Number(editar.quantidade.value) +1
            }
        })
        editar.menos[c].addEventListener( 'click', function() {
            if(c == 0) {
                editar.preco.value = Number(editar.preco.value) -1
            } else {
                editar.quantidade.value = Number(editar.quantidade.value) -1
            }
        })
    }

    editar.salvar.addEventListener( 'click', function() {
        if( editar.quantidade.value == '' ) { editar.quantidade.value = 1 }
        if( Number(editar.preco.value) <= 0 || editar.nome.value == '' || editar.preco.value == '' || Number(editar.quantidade.value) < 1) {
            alert( 'Oops! Digite os dados corretamente...')
        } else {
            let total = Number(editar.preco.value) * Number(editar.quantidade.value)
            lista[key] = {
                nome: editar.nome.value,
                preco_txt: Number(editar.preco.value).toLocaleString( 'pt-br', { style:'currency', currency:'BRL'}),
                total_txt: total.toLocaleString( 'pt-br', { style:'currency', currency:'BRL'}),
                preco_num: Number(editar.preco.value),
                total_num: total,
                quantidade: Number(editar.quantidade.value)
            }
            editar.elemento.style.display = 'none'
            elementos.lista_de_compras.elemento.style.display = ''
            atualizar_pagina()
        }
    })
}