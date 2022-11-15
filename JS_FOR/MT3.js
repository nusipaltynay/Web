let n=prompt("Insert n number?")
let arr=[]
for( let i=0; i<n;i++){
	arr.push(prompt("Insert number?"))
}

let sum=0;
function arraySum(array){
	for( let i=0; i<n;i++){
		 sum+= parseInt(arr[i]);
	}
	alert(sum+" "+sum/n);

}
arraySum(arr);
