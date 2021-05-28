var add =document.querySelector('increment');
var num =document.querySelector('number');
var sub =document.querySelector('decrement');

 var temp;


function addbutton(){
	temp=add++;
	document.getElementById("number").innerHTML=temp;

}

function subbutton(){
	
	temp=add--;

		document.getElementById("number").innerHTML=temp;
	
		
}