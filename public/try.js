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



// sign & login
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




//add image
const add = document.getElementById("add");
/*const cont = document.querySelector(".gg-box");
const pickPic = document.getElementById("pickPic");
let url;


  pickPic.addEventListener("change",function adding(eo) {
   url = URL.createObjectURL(eo.target.files[0]);
  })

 add.addEventListener("click",(eo) => {
  let iii = document.querySelectorAll(".js").length;
  let newE = `<img loading="lazy" src="${url}" class="js" id="${iii}">`;
  cont.innerHTML += newE;
 })*/
 




// reguler expration

const mail = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

const regEmail  =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regPassword =
  /^(?=.*[0-9])(?=.{8,})(?=.*[a-z])/;

  mail.addEventListener("keyup", (eo) => {
    if (regEmail.test(mail.value)) {
      mail.classList.remove("error");
      mail.classList.add("success");
    } else {
      mail.classList.remove("success");
      mail.classList.add("error");
  
    }
  });
  
  
  pass1.addEventListener("keyup", (eo) => {
    if (regPassword.test(pass1.value)) {
      pass1.classList.remove("error");
      pass1.classList.add("success");
    } else {
      pass1.classList.remove("success");
      pass1.classList.add("error");
  
    }
  });

  pass2.addEventListener("keyup", (eo) => {
    if (regPassword.test(pass2.value)) {
      pass2.classList.remove("error");
      pass2.classList.add("success");
    } else {
      pass2.classList.remove("success");
      pass2.classList.add("error");
  
    }
  });


  //add image popap:

   const box2= document.getElementById("box2")

   add.addEventListener("click",(eo) => {
    box2.showModal();
   })
