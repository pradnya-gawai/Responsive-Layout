//select div with id canvas
var canvas=document.getElementById('canvas');
console.log("canvas selected");
 //adding Event Listner to cnvas vriable
canvas.addEventListener("click",mybg)
// function defination 
function mybg(event) {
	//preventing default event
	event.preventDefault();
	// stroing colors in array
	 var colors = [ 'red', 'blue', 'green', 'orange', 'purple', 
	 'black', 'yellow','pink','lime','olive','aqua','gold','geenyellow','forestgreen','forestgreen'];
	 	//use random number function 
	   var index = parseInt((Math.random()*colors.length)+1);
	   var index2 = parseInt((Math.random()*colors.length)+1);

	   //use liner-gradient 
	 canvas.style.background = "linear-gradient(to right," + colors[index] + "," + colors[index2] + ")";
}