const chk = document.getElementById('chk')
var box = document.getElementsByClassName('box')
var heading = document.getElementsByClassName('heading')
var heading_md = document.getElementsByClassName('heading-md')
var text = document.getElementsByClassName('text')
var logo = document.getElementsByClassName('logo-name')
var icons = document.getElementsByClassName('fa-solid')
let buttons = document.querySelector(".buttons");
let btn = buttons.querySelectorAll(".btn");

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
})

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
