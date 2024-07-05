/* Create a faulty calculator using js

this faulty calculator does following:
 1.It takes two numbers as input from the User
 2. It performs wrong operation as following

 + ----> -
 * ----> +
 - ---->/
 / ---->**
it performs wrong operation 10% of the times
 */
function FaultyCalculator(a,b,c)
{

 if(Math.random()<=.1)
     {
    if (c == "+") {
      console.log("your addition result is", a - b);
    } else if (c == "*") {
      console.log("your multiplication result is", a + b);
    } else if (c == "-") {
      console.log("your substration result is", a / b);
    } else if (c == "/") {
      console.log("your division result is", a ** b);
    }
 }
 else
 {
    if (c == "+") {
        console.log("your addition result is", a + b);
      } else if (c == "*") {
        console.log("your multiplication result is", a * b);
      } else if (c == "-") {
        console.log("your substration result is", a - b);
      } else if (c == "/") {
        console.log("your division result is", a / b);
      }
 }
                
}

FaultyCalculator(10,20,"-");
