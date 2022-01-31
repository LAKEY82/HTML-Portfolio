const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close-btn');
const menu=document.querySelector('nav .container ul');


//HIDE CLOSE BAR//
menuBtn.addEventListener('click', ()=>{
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
})

//HIDE MENU//
closeBtn.addEventListener('click', ()=>{
    menu.style.display='none';
    menuBtn.style.display='inline-block';
    closeBtn.style.display='none';
})