// Global scope
test = "sss";
console.log(test);

function scope1(){
	var top = "top";
	bottom = "bottom";
	console.log(bottom);
	 var bottom;
}
scope1();
//prints bottom
//no errors - because var declaration floats to the top

function scope2(){
	var top = "top";
	var bottom = "bottom";
	console.log(bottom);
}
scope2();
//prints bottom - no error

function scope2(print){
	if(print){
		var insideIF = '12';
	}
	console.log(insideIF);
}
scope3();
//prints 12 - no error

function scope4(print){
	var insideIF;
	if(print)
	{
		insideIF = '12';

	}
	console.log(insideIF);
}
scope4();

var a = 1;
function four(){
	if(true){
		var a = 4;
	}
	console.log(a); //prints 4
}
function scope5(print){
	if(print){
		let insideIF = '12';
	}
	console.log(insideIF);
}
scope5(true);


