const url = 'http://localhost:3000/NEAr';
let campo = document.querySelector(".contenedor-social");
console.log(campo);
//
var contador = 0;
var likes = 0;

function contar() {
  console.log("entra");
  document.getElementById("btnlikes").innerHTML = contador++;
  if (contador > 10) {
    contador++;
  }
  let msg = "Llevas " + contador + "likes, no puedes dar mas de 10";
  alert(msg);
}

const getData = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  data.forEach((card) => {
    const { nombre, foto, coleccion, precio, contador, nickname } = card;
    campo.innerHTML += ` 
    <div class="card">
    <img src="${foto}" class="card-img-top"
        alt="...">
    <div class="card-body">
        <h5 class="card-title">${precio} </h5>
        <p class="card-text">${nombre} &#8226; ${coleccion} </p>
        <p>${nickname}</p>
        <p>${contador} likes</p>
        <button onclick="contar()" type="button" class="btn btn-outline-ligth-grey btn1" id="btnlikes"><span class="fa fa-heart"></span></button>
    </div>
</div>
        `;
  });
};

window.addEventListener("DOMContentLoaded", getData());
