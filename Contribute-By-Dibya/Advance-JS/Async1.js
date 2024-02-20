// 




const textChange=()=>{
    document.querySelector('h1').innerHTML="dibya ranjan "
}




const changeMe =setTimeout(textChange,1000)

document.querySelector('button').addEventListener('click',()=>{
    clearTimeout(changeMe)
    console.log("STOPPED")
})
