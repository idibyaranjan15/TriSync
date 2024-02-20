// used in array

//rest & spread OPT.

//Exmaple of Rest

// const addNumbers =(a,b,c,...other)=>{
//     console.log(other)
// return a+b+c;
// } 
// // console.log(addNumbers(1,2,3,4,5))


// var names=['ajay','amit','ajit','vivek']
// const getNames=(name1,name2,name3)=>{
// console.log(name1,name2,name3)
// }
// getNames(names[0],names[1],names[2],names[3])
// getNames(names)
// getNames(...names)




//using objects 

 var students={
    name:"Dibya",
    age:28,
    hobbies:["cricket","badminton","bgmi"]
 }
 const {...rest}=students;
//  console.log(rest)
var newStudents={
    ...students,age:30
}
console.log(newStudents)