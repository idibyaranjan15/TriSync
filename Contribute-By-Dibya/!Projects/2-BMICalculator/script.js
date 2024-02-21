let height=document.querySelector('#height')
let weight=document.querySelector('#weight')
let btn=document.querySelector('button')
let res=document.querySelector('#result')



btn.addEventListener('click',(e)=>{
    let heightValue=parseFloat(height.value)
    let weightValue=parseFloat(weight.value)
    e.preventDefault();
    if (!isNaN(heightValue) && !isNaN(weightValue) && heightValue > 0 && weightValue > 0) {
        heightValue /= 100;
        let final=weightValue/(heightValue*heightValue)
    res.textContent=`${final.toFixed(1)}`
 }else{
    res.textContent="check the number is valid or not"
 }
})