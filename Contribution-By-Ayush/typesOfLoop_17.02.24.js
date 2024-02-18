// for of loop

const arr = [1, 2, 3, 4, 5]


for (const num of arr ) {
    // console.log(num);
}

const greetings = "Hello Ayush"
for (const greet of greetings) {
    // console.log(`Each character is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
     game1 : "San Andreas",
     game2 : "Call of duty",
     game3 : "Valorant",
     game4 : "Palworld"
}

for (const key in   myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "py", "rb", "java", "cpp"]

for (const key in programming) {
//    console.log(`${key} shortcut for language is ${programming[key]}` );
}




const map2 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

for (const key in map2) {
    console.log(key);
}








