let curPlayer="X";
const heading=document.querySelectorAll('.heading')

let arr=Array(9).fill(null);

const checkWinner=()=>{
    if(
    (arr[0]!==null && arr[0]===arr[1]&&arr[1]===arr[2])||
    (arr[3]!==null && arr[3]===arr[4]&&arr[4]===arr[5])||
    (arr[6]!==null && arr[6]===arr[7]&&arr[7]===arr[8])||
    (arr[0]!==null && arr[0]===arr[3]&&arr[3]===arr[6])||
    (arr[1]!==null && arr[1]===arr[4]&&arr[4]===arr[7])||
    (arr[2]!==null && arr[2]===arr[5]&&arr[5]===arr[8])||
    (arr[0]!==null && arr[0]===arr[4]&&arr[4]===arr[8])||
    (arr[2]!==null && arr[2]===arr[4]&&arr[4]===arr[6])
    )
    {
        // document.write(`Winner is ${curPlayer}`)
        heading[0].innerText +=' '+curPlayer;
        return;
    }
    if(!arr.some((e)=>e===null)){
        heading[0].innerText +=" "+"Drawed !";
        return;
    }
}

const handleClick=(ele)=>{
    const id=Number(ele.id);
    arr[id]=curPlayer;
    ele.innerText=curPlayer;
    checkWinner();

    curPlayer=curPlayer==="X"?"0":"X";
    console.log(arr)
    
}