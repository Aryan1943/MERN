console.log("hey harry you are nice!")
console.log("hey harry you are good!")
console.log("hey harry your tshirt is good")

function nice(name)
{
    console.log("hey"+name+"you are nice!")
    console.log("hey harry you are good!")
    console.log("hey harry your tshirt is good")
}


nice ("rohan");
nice ("SHivam");
function sum(a,b)
{
    //console.lof(a+b)
    return a+b;
}
result=sum(3,5);
console.log(result);

function sum(a,b,c=3)
{
    console.log(a,b,c)
    return a+b+c;
}
result=sum(3);

console.log(result);
const funct1=(x)=>{
    console.log("hey harry you are nice!",x)
}
funct1(34);
