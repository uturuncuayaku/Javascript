// Linear time example.
function exampleLinear(n){
	for(var i = 0; i < n; i++){
		console.log(i);
	}
}

// Quadratic time example.
function exampleQuadratic(n){
	for(var i = 0; i < n; i++){
		console.log(i);
		for(var j = 0; j < n; j++){
			console.log(i);
		}
	}
}

// Cubic.
function exampleQuadratic(n){
	for(var i = 0; i < n; i++){
		console.log(i);
		for(var j = 0; j < n; j++){
			console.log(j);
		
			for(var k = 0; k < n; k++){
				console.log(k);
			}
		}

	}
}
// Logarithmic
function exampleLogarithmic(n){
	for(var i = 2; i <= n; i = i * 2){
		console.log(i);
	}

}
function someFunc(n){
	for(var i = 0; i < n; i*2)
	{
		console.log(n);
	}
}

