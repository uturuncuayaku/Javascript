//w3schools
//arrays
var car1 = "Saab";
var car2 = "Nissan";
var car3 = "Nissan";
var car4 = "Oldsmobile";

var arr_name = ["Saab", "NissanAlt", "NissanMax", "Oldsmobile"];
var arr_new = new Array("Saab", "NissanAlt", "NissanMax", "Oldsmobile");
document.getElementById("mycarlist").innerHTML = cars[0];
//document.getElementByID("mycarlist").innerHTML = cars;
cars[1] = "Saab9000";

var last = cars[cars.length -1];

var myCars, text, len;
len = cars.length;
text = "<ul>";
for(i = 0; i < len; i++)
{
	text += "<ul>" + cars[i] + "</li>";
	
}
text += "</ul>";

var text1;
text1 = "<ul>";

cars.forEach(myFunction);

text1 = "</ul>";

function myFunction(value){
	text1 += "<li>" + value + "</li>";
}

function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
} 

document.getElementById("mycarlist").innerHTML = cars.toString();

//splice
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
cars.splice(2,0, "Bugatti","F1");
