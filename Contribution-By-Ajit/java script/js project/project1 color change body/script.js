const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const text = document.querySelectorAll('.text')
buttons.forEach((button)=>{
  
  button.addEventListener('click', function(event){
    if(event.target.id === 'grey'){
      body.style.backgroundColor = "grey"
      text.forEach((element) => {
        element.style.color = "white";
      });
    }else if(event.target.id === 'white'){
      body.style.backgroundColor = "white"
      text.forEach((element) => {
        element.style.color = "blue";
      });
    }else if(event.target.id === 'blue'){
      body.style.backgroundColor = "blue"
      text.forEach((element) => {
        element.style.color = "yellow";
      });
    }else if(event.target.id === 'yellow'){
      body.style.backgroundColor = "yellow"
      text.forEach((element) => {
        element.style.color = "purple";
      });
    }else if(event.target.id === 'purple'){
      body.style.backgroundColor = "purple"
      text.forEach((element) => {
        element.style.color = "grey";
      });
    }
  })
});