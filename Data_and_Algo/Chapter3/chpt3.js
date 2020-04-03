// Javascript Number System

31-0
001111100
//front half, eight bits representing the exponential value and then most significant bit is the sign bit leading on the far left. The rest of the 32-bit floating point representation is the fractional 23-bit segment. Which consists of 
01000000000000000000000000
//this entire value is equal to .15625
Math.floor   // rounds down
Math.round   // rounds to nearest
Math.ceiling // rounds up

Math.floor(0.9); //0
Math.round(1.1); //1
Math.round(.5);  //1
Math.ceil(0.1);  //1

// Exponents
var x = 1;
var y = 10;
Math.pow(x,y);

// Number.EPSILON
function numberEquals(x, y){
	return Math.abs(x -y) < Number.EPSILON;
}
numberEquals(0.1 + 0.2, 0.3); //true

// Maximum number values
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // TRUE
Number.MAX_SAFE_INTEGER + 1.11 === Number.MAX_SAFE_INTEGER + 2.022; // FALSE
Number.MAX_VALUE // returns largest floating point number possible
Number.MAX_VALUE // is equal to 1.7976931348623157e+308
Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true
Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; //true

// Minimum number values
Number.MIN_SAFE_INTEGER //returns the smalllest integer
Number.MIN_SAFE_INTEGER //=== -9007199254740991;
Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022;//false
Number.MIN_VALUE // returns smallest floating point number possible
Number.MIN_VALUE // is equal to 5e-324
Number.MIN_VALUE - 1 == -1; // true because its handling min_value as integer 0 - 1 == -1

//Infinity
Infinity > Number.MAX_VALUE; // true
Infinity > Number.MAX_SAFE_VALUE; // true
-Infinity < Number.MIN_VALUE; // true
-Infinity < Number.MIN_SAFE_VALUE; // true

-Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity

// Primality Test
// isPrime2 - time complexity O(sqrt(n)
// isPrime1 - time complexity O(n)
function isPrime1(n) {
	if (n <= 1) {
		return false;
	}
	for (var i = 2; i < n; i++) {
		if (n % i == 0) {
			return false;
		}
	}
return true;
}
function isPrime2(n){
	if (n <= 1) return false;
	if (n <= 3) return true;

	// This is checked so that we can skip
	// middle five numbers in below loop
	if(n % 2 == 0 || n % 3 == 0)
		return false;

	for(var i = 5; i*i <= n; i = i + 6){
		if(n % i  == 0 || n % (i + 2) == 0){
			return false;
		}
	}
	return true;
}
// Prime Factoriztion
function primeFactors(n){
	while (n%2 ==0){
		console.log(n);
		n /= 2;
	}

	//n must be odd at this point 
	for(var i = 3; i*i <= n; i += 2){
		while (n%i == 0){
			console.log(i);
			n /= i;
		}
	}
}


//Random number generator
Math.random();            //returns a float between 0 and 1
Math.random() * 100;      //floats between 0 and 100
Math.random() * 25 + 5;   // floats between 5 and 30 because "order of operations"
Math.random() * 10 - 100; // floats between -100 and -90

Math.floor(Math.random() * 100);     // integer between 0 and 99
Math.round(Math.random() * 25) + 5;  // intger between 5 and 30
Math.ceil(Math.random() * 10) - 100; // integer between -100 and -90


