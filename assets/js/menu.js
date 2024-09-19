document.addEventListener("DOMContentLoaded", function(){
     var burger = document.getElementById('burger');
     var menuBurger = document.getElementById('menuBurger');
     var menuEnd = document.getElementById('menuEnd');
    var link = [];
    for(let i = 1; i <= 5; i++){
        link[i] = document.getElementById(`link${i}`);
    }
 
    
    function MenuOpen(){
        menuBurger.style.display = "flex";
    }
    
    function MenuEnd(){
        menuBurger.style.display = "none";
    }
    
    
    if(typeof burger == 'object'){burger.addEventListener('click', MenuOpen)};
    if(typeof menuEnd == 'object'){menuEnd.addEventListener('click', MenuEnd)};
    for(let i = 1; i <= 5; i++){
        
        if(typeof link[i] == 'object'){link[i].addEventListener('click', MenuEnd)};
   }
    
});