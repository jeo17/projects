const root = document.querySelector("body, html");
const container = document.querySelector('.gg-container');
const conta = document.querySelector(".gg-box");
const x = document.querySelectorAll(".js");

   
   
      

     conta.addEventListener("click",function(eo) {
     if (eo.target.className =="js") {
     
      
      var currentImg = this;
      const parentItem = currentImg.parentElement, screenItem = document.createElement('div');
      screenItem.id = "gg-screen";
      container.prepend(screenItem);
      if (parentItem.hasAttribute('data-theme')) screenItem.setAttribute("data-theme", "dark");
      var route = eo.target;
      root.style.overflow = 'hidden';
      let imgData = route.getAttribute("data-link");
      screenItem.innerHTML = '<div class="gg-image"></div><div class="gg-close gg-btn">&times</div><div class="gg-next gg-btn">&rarr;</div><div class="gg-prev gg-btn">&larr;</div><div class="gg-trash gg-btn-trash" data-L=" ' + imgData + ' "></div> ';
      
     /* trash.addEventListener("click",(eo) => {
        fetch("/", { method: "DELETE" } )
       .then((response)=> response.json())
       .then((data)=> console.log(data))
       .catch((err)=> {
          console.log(err);
                       } );
      })*/

      const images = document.querySelectorAll(".gg-box > img");
      const l = images.length;
      const first = images[0].id, last = images[l-1].id;
      const imgItem = document.querySelector(".gg-image"), prevBtn = document.querySelector(".gg-prev"), nextBtn = document.querySelector(".gg-next"), close = document.querySelector(".gg-close"), trash = document.querySelector(".gg-trash");
      imgItem.innerHTML = '<img src="' + route.src + '"id="' + eo.target.id + '"> ';
     
      
        
      if (l > 1) {
       
        if (route.id == first) {
          prevBtn.hidden = true;
          var prevImg = false;
        
        }
        else if (route.id == last) {
          nextBtn.hidden = true;
          var nextImg = false;
          
        }
      }
      else {
        prevBtn.hidden = true;
        nextBtn.hidden = true;
      }
  
      screenItem.addEventListener("click", function(e) {
        if (e.target == this || e.target == close) hide();
      });
  
      root.addEventListener("keydown", function(e) {
        if (e.keyCode == 37 || e.keyCode == 38) prev();
        if (e.keyCode == 39 || e.keyCode == 40) next();
        if (e.keyCode == 27 ) hide();
      });
  
      prevBtn.addEventListener("click", prev);
      nextBtn.addEventListener("click", next);
  
      function prev() {
        let j = document.querySelector(".gg-image > img").id;
       
          prevImg = document.getElementById(j-1);
          let  prevtrash= prevImg.getAttribute("data-link")
          trash.setAttribute("data-l",prevtrash);
        
          imgItem.innerHTML = '<img src="' + prevImg.src + '" id="' + prevImg.id + '">';
         currentImg = document.getElementById(j-1);
         var mainImg = document.querySelector(".gg-image > img").id;
         nextBtn.hidden = false;
         prevBtn.hidden = mainImg === first;
         
        
      };
  
      function next() {
        let j = document.querySelector(".gg-image > img").id;
        
        nextImg = document.getElementById(Number(j)+1);
        let  nexttrash= nextImg.getAttribute("data-link")
        trash.setAttribute("data-l",nexttrash);

        imgItem.innerHTML = '<img src="' + nextImg.src + '" id="' + nextImg.id + '">';
        currentImg = document.getElementById(Number(j)+1);
        var mainImg = document.querySelector(".gg-image > img").id;
        prevBtn.hidden = false;
        nextBtn.hidden = mainImg === last;
      };
  
      function hide() {
        root.style.overflow = 'auto';
        screenItem.remove();
        

      };
     
      
    }
  });

   
   
 
 


function gridGallery (options) {
  if (options.selector) selector = document.querySelector(options.selector);
  if (options.darkMode) selector.setAttribute("data-theme", "dark");
  if (options.layout == "horizontal" || options.layout == "square") selector.setAttribute("data-layout", options.layout);
  if (options.gaplength) selector.style.setProperty('--gap-length', options.gaplength + 'px');
  if (options.rowHeight) selector.style.setProperty('--row-height', options.rowHeight + 'px');
  if (options.columnWidth) selector.style.setProperty('--column-width', options.columnWidth + 'px');
}

