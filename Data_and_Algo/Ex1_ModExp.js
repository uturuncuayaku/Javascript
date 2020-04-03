// Modular Exponentiation
// Given three numbers x, y and p
// Compute (x^y) % p

function modExp(x, y, p) {
	return Math.pow(x,y)%p;
}

// X is the base
// Y is the exponent
// P is the modulus

// Modular exponentiation is a type of exponentiation performed
// over a modulus, which is useful in computer science and used in
// the field of public-key encryption algorithms.

// For arbitrary a and b,
c % m = (a b) % m
c % m = [(a % m) (b % m)] % m

function modularExpn(base, exponent, modulus) {
	if (modulus == 1)
		return 0;
	var value = 1;
	for(var i = 0; i < exponent; i++) {
		value = (value * base) % modulus;
	}
	return value;
}
// Time Complexity: O(n)
// When n is equal to exponent


