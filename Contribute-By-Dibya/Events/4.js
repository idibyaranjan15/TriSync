let email=document.querySelector('#email')
console.log(email)
let pw=document.querySelector('#password')
console.log(pw)
let pwPattern='~!@$%^&*()_+'

let btn=document.querySelector('.form')
console.log(btn);
btn.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e.target.value);
})