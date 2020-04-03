// Check for a set of prime factors.

function maxDivide(number,divisor) {
	while(number % divisor == 0) {
		number /= divisor;
	} return number;
}
function isUgly(number) {
	number = maxDivide(number, 2);
	number = maxDivide(number, 5);
	return number === 1;
}

function arrayNUglyNumbers(n){
	var counter = 0;
	var currentNumber = 1;
	uglyNumbers = [];
	while(counter != n) {
		if(isUgly(currentNumber)){
			counter++;
			uglyNumbers.push(currentNumber);
		}
		currentNumber++;
	}
	return uglyNumbers;
}

// time complexity for maxDivide(number, divisor): O(log base divisor(number))
// log function which depends on divisor and then umber when testing primes of
// 2, 3 and 5 the logbase2 of (log2(n)) yields the highest time complexity

