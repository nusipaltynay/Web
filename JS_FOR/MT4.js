let n=prompt("Insert n number?")
let arr=[];
for(let i=0; i<n;i++){
	arr.push(prompt("Enter number?"))
}
for(let i=0; i<n;i++){
 arr[i]=parseInt(arr[i])*parseInt(arr[i]);
}
 let ans=""
 for( let i=0; i<n; i++){
 	ans+=arr[i]+" "
 }
 alert(ans)