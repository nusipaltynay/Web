let sum=1;
let n=prompt("Insert number:");
let arr=prompt("Insert numbers:").split(" ");
for (var i = 0; i < arr.length; i++) {
	if(arr[i]!=0){
         sum*=arr[i];
	}
}
alert(sum)