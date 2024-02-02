//your JS code here. If required.
let count=0;
document.getElementById("incrementBtn").onclick=function(){
	count+=1;
	document.getElementById("counter").innerHTML=count;
	alert(count);
}
