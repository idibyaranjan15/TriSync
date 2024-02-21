// const promiseOne = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("async task is completed");
//     resolve()
// },2000)
// })

// promiseOne.then(()=>{
//     console.log('promise consumed')
// })

// new Promise((resolve,reject)=>{
// setTimeout(()=>{console.log('async task 2 done : ');resolve()},1500)
// }).then(()=>{
//     console.log('Async 2 resolved')
// })

// const promiseThree=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve({userName:"Chai",email:'dibyaranjansahoo696@gmail.com'})
// },1000)
// }).then((user)=>{
// console.log(user)
// })
// const promiseFour=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     let error=false;
//     if(!error){
//         resolve({username:"dibya",password:"123"})
//     }else{
//         reject('ERROR: Something went wrong ')
//     }
// },1000)
// })
// promiseFour
// .then((user)=>{
// console.log(user);
// return user.username;
// })
// .then((username)=>{
// console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })


// const promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username:"javascript",password:"12345"})
//         }else{
//             reject('ERROR: JS went wrong ')
//         }
//     },1000)
//     })
//    async function consumePromiseFIve(){
//    try{
// const response=await promiseFive
// console.log(response)
//    }catch(error){
// console.log(error)
//    }
//    }
//    consumePromiseFIve()

//    async function getAllUsers(){
// try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response)
//     const data=await response.json();
//     console.log(data)
// }catch(error){
//     console.log("error:",error)
// }
//    }
//    getAllUsers()


   fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
return response.json()
   }).then((data)=>{console.log(data)}).catch((error)=>{
    console.log('error',error)
   }).finally(()=>{
    console.log('finall statement')
   })