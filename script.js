
document.getElementById("resp").addEventListener("click", ()=>{
    var menu = document.getElementById("men");
    var resp = document.getElementById("resp");
    var logoheader = document.getElementById("logoheader");
    var nav = document.getElementById("navigation");
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3");
    var img = document.getElementById("img");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var croix = document.getElementById("croix");
    var croix1 = document.getElementById("croix1");
    var croix2 = document.getElementById("croix1");
    var lorem1 = document.getElementById("lorem1");
    var lorem2 = document.getElementById("lorem2");
    var lorem3 = document.getElementById("lorem3");
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
image1.addEventListener('click',()=>{
    img.style.width = "100%";
    img.style.display = "flex";
    lorem1.style.margin = "auto";
    croix.style.display ="block";
    croix.style.width = "30px";
    croix.style.height = "30px";
    croix.style.cursor = "pointer";
})
croix.addEventListener('click',()=>{
    img.style.width = "calc(600 * var(--res))";
    img.style.display = "block";
    croix.style.display = "none";
})


image2.addEventListener('click',()=>{
    img1.style.width = "100%";
    img1.style.display = "flex";
    lorem2.style.margin = "auto";
    croix1.style.display ="block";
    croix1.style.width = "30px";
    croix1.style.height = "30px";
    croix1.style.cursor = "pointer";
})
croix1.addEventListener('click',()=>{
    img1.style.width = "calc(600 * var(--res))";
    img1.style.display = "block";
    croix1.style.display = "none";

})


image3.addEventListener('click',()=>{
    img2.style.width = "100%";
    img2.style.display = "flex";
    lorem3.style.margin = "auto";
    croix2.style.display ="block";
    croix2.style.width = "30px";
    croix2.style.height = "30px";
    croix2.style.cursor = "pointer";
})
croix2.addEventListener('click',()=>{
    img2.style.width = "calc(600 * var(--res))";
    img2.style.display = "block";
    croix2.style.display = "none";
})




