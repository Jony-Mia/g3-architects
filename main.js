let btn = document.getElementById('btn');
let i = document.querySelector('#btn i');

btn.onclick=()=>{
        i.classList.add('translate-x-15')
    btn.addEventListener('mouseleave',()=>{

        i.classList.remove('translate-x-15')
        
    })
}