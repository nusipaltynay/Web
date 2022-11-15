let n=prompt("Insert n number?")
let array=[]
let mass=false;
for( let i=0; i<n;i++){
	array.push(prompt("Insert number?"))
}
for(let i=n-1; i>0; i--){
	alert(array[i]+" ")
}
// let ans = ""
// for(let i=n-1; i>=0; i--){ 
//  ans += array[i] + " "
// }
// alert(ans)