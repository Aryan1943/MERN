let arr=[1,13,5,7,11];
// let newArr=[];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element**2);

//     }
// console.log(newArr);

let newArr = arr.map((e,index,array)=> {
  return e**2;

})
console.log(newArr);

const GreaterThanSeven=(e) => {
    if(e>7)
    {
    return true;
    }
    return false;
}

console.log(newArr.filter(GreaterThanSeven));

let arr2=[1,2,3,4,5,6]
const red=(a,b)=>{

    return a*b;
}
console.log(arr2.reduce(red));

let arr3=Array.from("harry");  // used to create the array from object
console.log(arr3)