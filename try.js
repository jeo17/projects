$(document).ready(function () {
  $("#goRight").on("click", function () {
    $("#slideBox").animate({
      marginLeft: "0",
    });
    $(".topLayer").animate({
      marginLeft: "100%",
    });
  });
  $("#goLeft").on("click", function () {
    $("#slideBox").animate({
      marginLeft: "50%",
    });
    $(".topLayer").animate({
      marginLeft: "0",
    });
  });
});

$(document).ready(function () {
  $(".datepicker").pickadate({
    formatSubmit: "dd-mm-yyyy",
    min: [2016, 12, 17],
    max: [2017, 01, 15],
    closeOnSelect: false,
    closeOnClear: false,
  });

  // Autotab
  $(".date-field").autotab("number");

  $(".single-date-field").mask("00/00/0000", {
    placeholder: "_ _ /_ _ /_ _ _ _",
  });
});

//my work

const wave = document.getElementById("wave");
const close = document.getElementById("close");
const login = document.getElementById("log");
const box = document.querySelector("dialog");
const signup = document.getElementById("sign up");
const slideBox = document.getElementById("slideBox");
const topLayer = document.getElementById("topLayer");




login.addEventListener("click", (eo) => {
  box.showModal();
  slideBox.style.marginLeft = "50%";
  topLayer.style.marginLeft = "0px";
});

signup.addEventListener("click", (eo) => {
  box.showModal();
  slideBox.style.marginLeft = "0px";
  topLayer.style.marginLeft = "100%";
});

close.addEventListener("click", (eo) => {
  box.close();
});

close1.addEventListener("click", (eo) => {
  box.close();
});





const add = document.getElementById("add");
const cont = document.querySelector(".gg-box");
const newE = `<img loading="lazy" src="/Users/msi/wallpapers/Nouveau dossier/wallpaperflare.com_wallpaper (12).jpg" class="js">`;

  add.addEventListener("click",(eo) => {
    cont.innerHTML += newE;
  
  })




