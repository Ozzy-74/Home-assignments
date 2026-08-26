
//! 1.---------grouping using REDUCE
const students = [
    { name: "Krishna", course: "Playwright" },
    { name: "Arun", course: "Java" },
    { name: "Priya", course: "Playwright" },
    { name: "Rahul", course: "Java" }
];
const employees = [
    { name: "John", department: "IT", salary: 50000 },
    { name: "Priya", department: "HR", salary: 45000 },
    { name: "David", department: "IT", salary: 60000 },
    { name: "Sneha", department: "HR", salary: 48000 }
];

//group of course

const grouped1 = students.reduce((result,student) =>{

    const key1 = student.course;

    if(!result[key1]){
        result[key1] = []
    }

    result[key1].push(student)

    return result;
    
}, {});

const grouped2 = employees.reduce((start, now) =>{
    const key2 = now.department

    if(!start[key2]){
        start[key2] = []
    }
    
    start[key2].push(now)
    return start
},{})
    

console.log(grouped1)
console.log(grouped2)
//----------------------------

//! 2.check if two array have same elements

/*const arr1 = ["Java", "Python", "Playwright"];

const arr2 = ["Playwright", "Java", "Python"];

function checkSameArray(a,b) {
    if(a.length !== b.length){
        return false
    }
    return[...a].sort().join() === [...b].sort().join()        
}

console.log(checkSameArray(arr1,arr2))*/

//--------------------------------------

//! 3.ind the first duplicate value in an array

/*const arr = [10, 20, 30, 20, 40, 30];

function firstDuplicate (arr){

    const seen = new Set()

    for(let value of arr){

        if(seen.has(value)){
            return value
        }
        else{
            seen.add(value)
        }
    }

    return undefined

}

console.log(firstDuplicate(arr)) */

//! 4. print all duplicate

/*const seen = new Set();

const newVal = []

for(let value of arr){

    if(seen.has(value)){
        newVal.push(value) 
    }
    else{
        seen.add(value)
    }

}

console.log(newVal) */

//! 5.