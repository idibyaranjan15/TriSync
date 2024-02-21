

let clock=document.querySelector('#clock')
const updateTime=()=>{
    let currentDate=new Date();
    let hr=currentDate.getHours();
    let min=currentDate.getMinutes();
    let sec=currentDate.getSeconds();
    

 hr = hr < 10 ? '0' + hr : hr;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
    clock.textContent=`${hr}:${min}:${sec}`

}
updateTime()
setInterval(updateTime,1000)