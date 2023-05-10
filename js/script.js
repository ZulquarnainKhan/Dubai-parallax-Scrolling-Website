let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
// let building = document.getElementById('building');
let stars = document.getElementById('stars');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if(value <= 195){
        dubaiText.style.left = value *  -2 + 'px';
        burjkhalifa.style.top = value *  0.7 + 'px';
        stars.style.top = value *  1.5 + 'px';
    }
    if(value <= 500){
        burjkhalifa.style.top = value *  0.7 + 'px';
        stars.style.top = value *  1 + 'px';
    }
    
});