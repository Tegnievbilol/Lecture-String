// Task-1
// function sum(a,b){
//     return `${a}${a.at(-1).repeat(b-1)}`
// }
// console.log(sum("Hello",5));


// Task-2
// function sum(a){
//     return `"${a.at(0)}${a.at(-1)}"`
// }
// console.log(sum("Hello"));


// Task-3
// function sum(a){
//     if(typeof(a)=="string"){
//         return Number(a)
//     }
//     if(typeof(a)=="number"){
//         return `"${a.toString()}"`
//     }
// }
// console.log(sum("77"));


// Task-4
// function sum(a){
//     return a.at(-1)=="s" ? true : false
// }
// console.log(sum("fdsjkfhdkj"));


// Task-5
// function sum(a){
//     let cnt = ""
//     for(let i=a.length-1;i>=0;i--){
//         cnt+=a[i].toUpperCase()
//     }
//     return cnt
// }
// console.log(sum("Abc"));



let cnt = NaN
console.log(isNaN(cnt));
