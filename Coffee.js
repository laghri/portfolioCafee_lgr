let cartitem=document.querySelector('.cart-container');
let cart=document.querySelector('#cart-btn');
cart.addEventListener('click',function(){
    cartitem.classList.toggle('active');
    
})
// Saerch 
let search=document.querySelector('.search');
let searchbtb=document.querySelector(' .icons #search-btn');
searchbtb.addEventListener('click',function(){
    search.classList.toggle('active');
    console.log("clicked");
})
let btnmenu=document.querySelector("  #menu-btn");
btnmenu.addEventListener("click",function(){
    document.querySelector(".header .container-tele").classList.toggle("active");
})
// // random images
//  let imagesArray=["about-img.jpg",]



// scrool to element

const alllinks =document.querySelectorAll(".footer .navbar .nav ");
function scrollTo(elements){
    elements.forEach(ele=>{
       ele.addEventListener("click",(e)=>{
           e.preventDefault();
          handleActive(e);
       
      
       document.querySelector(e.target.dataset.s).scrollIntoView({
           behavior:'smooth'
       })
    });
})}

scrollTo(alllinks);
