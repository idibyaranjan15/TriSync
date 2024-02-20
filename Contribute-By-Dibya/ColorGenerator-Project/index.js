const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

let randomColor=()=>{
    let hexCode='abcde1234567890';
    let genColor='#';
    for(let i=0;i<6;i++){
        genColor+=hexCode[Math.floor(Math.random()*16)]
    }
    return genColor;
}
let intervalId;
const startChange=()=>{
    if(!intervalId){
        intervalId=setInterval(()=>{
            document.body.style.backgroundColor=randomColor()
        },100)
    }
   intervalId=setInterval(()=>{
        document.body.style.backgroundColor=randomColor()
    },100)
}
const stopChange=()=>{
    clearInterval(intervalId);
    intervalId=null;
}


start.addEventListener('click',startChange)
stop.addEventListener('click',stopChange)