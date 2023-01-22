const chk = document.getElementById('chk')
var box = document.getElementsByClassName('box')
var heading = document.getElementsByClassName('heading')
var heading_md = document.getElementsByClassName('heading-md')
var text = document.getElementsByClassName('text')
var logo = document.getElementsByClassName('logo-name')
var icons = document.getElementsByClassName('fa-solid')
var username = document.querySelector("#username");
var html = document.querySelector("#html");
let buttons = document.querySelector(".buttons");
let btn = buttons.querySelectorAll(".btn");

if (localStorage.getItem("token") == null){
  alert("Voce precisa estar logado para acessar esta pagina");
  window.location.href = "http://localhost:8080/";
}

chk.addEventListener('change', () => {
  document.body.classList.toggle('light')
  for (var x=0;x<box.length;x++) {
    box[x].classList.toggle('light')
  }
  for (var x=0;x<text.length;x++) {
    text[x].classList.toggle('light')
  }
  for (var x=0;x<heading_md.length;x++) {
    heading_md[x].classList.toggle('light')
  }
  for (var x=0;x<heading.length;x++) {
    heading[x].classList.toggle('light')
  }
  for (var x=0;x<logo.length;x++) {
    logo[x].classList.toggle('light')
  }
  for (var x=0;x<icons.length;x++) {
    icons[x].classList.toggle('light')
  }
  for (var x=0;x<btn.length;x++) {
    btn[x].classList.toggle('light')
  }
  for (var x=0;x<username.length;x++) {
      btn[x].classList.toggle('light')
    }
})

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#username");

if (userLogado.nome == ''){
     alert("Voce precisa estar logado para acessar esta pagina");
     window.location.href = "http://localhost:8080/";
}

logado.innerHTML = userLogado.nome;

function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "http://localhost:8080/";
}

function msgAlert() {
  let msgAlert = document.querySelector("#msg-alert");
  msgAlert.setAttribute("style", "visibility: visible");
}

function closeOpt() {
  let msgAlert = document.querySelector("#msg-alert");
  msgAlert.setAttribute("style", "visibility: hidden");
}

function fecharMenu(){
    let abrirMenu = document.querySelector("#abrirMenu");
    let menuAcess = document.querySelector(".accessibility");
    menuAcess.setAttribute("style", "visibility: hidden");
    abrirMenu.setAttribute("style", "visibility: visible");
}

function abrirMenu(){
    let abrirMenu = document.querySelector("#abrirMenu");
    let menuAcess = document.querySelector(".accessibility");
    menuAcess.setAttribute("style", "visibility: visible");
    abrirMenu.setAttribute("style", "visibility: hidden");
}

