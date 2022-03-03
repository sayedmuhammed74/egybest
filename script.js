// window.onload = alert(' هل تريد استقبال اشعارات عن الافلام و المسلسلات الجديدة فور اضافتها على ايجي بست؟');
window.addEventListener('scroll', function() {
    document.querySelector('section .left-side .bottom').classList.toggle('fixed' , window.scrollY > 292);
})

// function after(){
//     document.querySelector('i.fad.fa-apple-alt').classList.toggle('after');
// }
// onclick.document.querySelector('section .right-side ul li') = function(){

//     document.querySelector('section .right-side ul li').classList.toggle('active');
    
// }
var navbar = document.querySelector('nav'),
    leftSide = document.querySelector('section .left-side .top');
    

function show(){
    document.querySelector('.fas.fa-cog ul').classList.toggle('show');
}
function changeParent(){
    document.querySelector('.fas.fa-cog ul li .parent').classList.toggle('background');
    document.querySelector('.fas.fa-cog ul li .parent .child').classList.toggle('translateX');
}
// function lightMood(){
//     if (navbar.style.backgroundColor = '#061528'){
//         navbar.style.backgroundColor = '#f9f9f9';
//     } else {
//         navbar.style.backgroundColor = '#061528';
//     }
//     if (leftSide.style.backgroundColor = '#0b1016'){
//         leftSide.style.backgroundColor = '#FFF';
//     } else {
//         leftSide.style.backgroundColor = '#0b1016';
//     }
// }