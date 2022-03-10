const url = 'http://localhost:3000/NEAr';
let campo = document.querySelector(".contenedor-social");
console.log(campo);
//
var contador = 0;
let msg = "Solo puedes dar un clic por obra de arte";
function contar() {
  console.log("entra");
  document.getElementById("btnlikes").innerHTML = contador++;
  if (contador > 1) {
    contador = 1;
    alert(msg);
  }
}

const getData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  data.forEach((card) => {
    const { nombre, foto, coleccion, precio, likes, nickname } = card;
    campo.innerHTML += ` 
        <div class="card">
        <img src="${foto}" alt="">
        <p>${nombre}</p>
        <p style="color:blue; font-weigth:bold">${nickname}</p>
        <p>${precio}</p>
        <p>"Colección: "${coleccion}</p>
        <button id="btnlikes" class="btn btn-primary" onclick="contar()">${likes} Like </button>
        `;
  });
};

window.addEventListener("DOMContentLoaded", getData());
