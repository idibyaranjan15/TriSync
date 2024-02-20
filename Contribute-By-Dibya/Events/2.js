let form=document.querySelector('#signin')
// console.log(form)
let email=document.querySelector(".email")
console.log(email)
let password=document.querySelector('.password')
console.log(password)

form.addEventListener('submit',(e)=>{
    e.preventDefault();
console.log(e.target)
})