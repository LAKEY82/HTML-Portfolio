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


const navItems =menu.querySelectorAll('li');


const changeActiveItem=()=>{
    navItems.forEach(item =>{
        const link =item.querySelector('a'); 
        link.classList.remove('active'); 
    })
}

navItems.forEach(item =>{
    const link =item.querySelector('a'); 
    link.addEventListener('click', ()=>{
        changeActiveItem();
        link.classList.add('active');
    })
})


//READMORE CONTENT
const ReadMoreBtn =document.querySelector('.read-more');
const ReadMoreContent=document.querySelector('.read-more-content');

ReadMoreBtn.addEventListener('click', ()=>{
    ReadMoreContent.classList.toggle('show-content'); 
    if (ReadMoreContent.classList.contains('show-content')){
        ReadMoreBtn.textContent="Show less";
    }else{
        ReadMoreBtn.textContent="Show More";
    }
})


//box shadow on scroll

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY>0)
})