
document.getElementById("resp").addEventListener("click", ()=>{
    var menu = document.getElementById("men");
    var resp = document.getElementById("resp");
    var logoheader = document.getElementById("logoheader");
    var nav = document.getElementById("navigation");
    var img = document.getElementById("img");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    if(window.getComputedStyle(menu).display == "block"){
        
        menu.style.animation = "fadeout 0.5s"
        setTimeout(() => {
            menu.style.display = "none";
            resp.style.boxShadow = "none";
            logoheader.style.display = "block";
          }, 498);
       
    }else{
       
        menu.style.animation = "fadein 0.5s"
        setTimeout(() => {
            menu.style.display = "block";
            resp.style.boxShadow = "4px 4px 5px 0px rgba(0, 0, 0, 0.75)";
            logoheader.style.width = "0%";
            resp.style.width ="90%";
            resp.style.marginBottom= "2rem";
            nav.style.width= "0%";
          }, 500);
    }
})
img.addEventListener('click',()=>{
    img.style.width = "100%";
    img.style.display = "flex";
})
img1.addEventListener('click',()=>{
    img1.style.width = "100%";
    img1.style.display = "flex";
    img1.style.margin = "auto";
})
img2.addEventListener('click',()=>{
    img2.style.width = "100%";
    img2.style.display = "flex";
    img2.style.margin = "auto";
})