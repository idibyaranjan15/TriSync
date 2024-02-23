const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height==='' || height < 0 || isNaN(height)){
  results.innerHTML = `please give a valid height ${height}`
} else if(weight==='' || weight < 0 || isNaN(weight)){
  results.innerHTML = `please give a valid weight ${weight}`
}else {
    let heightInMeter = height/100
   const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2)
   
   if(bmi < 18.4){
     results.innerHTML = `<span> ${bmi} <- Under Weight</span>`
   }
   if(18.4 <= bmi < 24.9){
     results.innerHTML = `<span> ${bmi} <- Normal Weight</span>`
   }
   if( bmi >= 24.9){
    results.innerHTML = `<span> ${bmi} <- Overweight Weight</span>`
   }
}


})