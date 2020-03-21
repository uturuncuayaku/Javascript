// Filter unique values
const ar = [ 1,1,2,2,3,3,4,5,5,1,2,3,4,3]
const uniqar = [...new Set(array)];

console.log(uniqar); // Prints unique elements
//---------

// Every and some
const random = [12,43,5,6,76,7,3];
const morandm = [ -1,4,5,6,47,-1,43,-35];

const isPositive = (number) => { return number > 0 }
random.every(isPositive); // returns true
morandm.every(isPositive); // returns false

// anon function
random.every((number) => { return number > 0 })

random.some(isPositive); // returns true
morandm.some(isPositive); // returns true
//----------

// Short circuit evaluation
x > 100 ? 'Above 100' : 'Below 100';
x > 100 ? (x >200 ? 'Above 200' : 'Between 100-200) : 'Below 100';
// we can use the ‘and’ && and ‘or’ || logical operators to evaluate 
// certain expressions in an even more concise way. This is often called
// ‘short-circuiting’ or ‘short-circuit evaluation’.
let one = 1, two = 2, three = 3;
console.log(one && two && three);//result 3
console.log(0 && null) //result 0
//----------
// Conditionally set a variable
const timezone = user.preferred_timezone || 'America/New_York'
//---------

//Convert to string
const va = 1 + "";
console.log(val);
console.log(typeof val); //result string
//----------

// Convert to number
let int = "15"
int = +int;
console.long(int); //result 15 of type number
console.log(+true);  // Return: 1
console.log(+false); // Return: 0
//-------

// Power
console.log(2 ** 3); // Result: 8
// The following expressions are equivalent:

Math.pow(2, n);
2 << (n - 1);
2**n;

// Quick float to integer
console.log(23.9 | 0); // result 23
// negative numbers round up and positive numbers round down
//----------

// Remove final digits
console.log(1553 / 10   | 0)  // Result: 155
console.log(1553 / 100  | 0)  // Result: 15
console.log(1553 / 1000 | 0)  // Result: 1




