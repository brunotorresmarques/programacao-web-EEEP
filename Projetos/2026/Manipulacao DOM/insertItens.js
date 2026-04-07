



function criar() {
    let novoItem = document.createElement('button')

    let valor = document.getElementById('valor').value


    novoItem.textContent = valor

    let lista = document.getElementById('lista')


    lista.addEventListener('click', (event) => {
        if (event.target.tagName == 'BUTTON') {
            alert("O botão foi clicado!!")
        }
    })


    lista.appendChild(novoItem)

    document.getElementById('valor').value = ""
}
