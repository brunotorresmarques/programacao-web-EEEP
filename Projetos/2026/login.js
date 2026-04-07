function logar () {
    let usuario = document.getElementById('user').value
    let senha = document.getElementById('password').value

    if (usuario === '' || senha === '') {
        alert('Por favor, preencha todos os campos.')
    }
}