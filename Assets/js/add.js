let formulario = document.getElementById('formulario');
const url = ("http://localhost:3000");
window.addEventListener('DOMContentLoaded', async () => {
})
formulario.addEventListener('submit', async (esc) => {
    esc.preventDefault();
    //capturando los datos del html y los voy a enviar a mi storage.json
    let coleccion = document.getElementById('colection').value;
    let nickname = document.getElementById('nickname').value;
    let precio = document.getElementById('price').value;
    let nombre = document.getElementById('name').value;
    let foto = document.getElementById('NFT').value;


    // atraves de una promesa url donde se van a guardar esos datos
    let resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            colection: coleccion,
            nickname: nickname,
            price: precio,
            name: nombre,
            NFT: foto
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    let data = resp.json();
    console.log(data)
})