let n =prompt("Enter number:");
let arr=prompt("Insert numbers:").split(" ");

let m=prompt("Enter m number ");
let find=true;
for (var i = 0; i < arr.length; i++) {
	if(arr[i]==m){
		find=false;
		alert(`Yes + ${i}`)
		break;
	}
}
     if(find){
     	alert("NO")
     }
