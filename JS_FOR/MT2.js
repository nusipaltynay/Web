let n=prompt("Insert n number?")
let array=[]
for( let i=0; i<n;i++){
	array.push(prompt("Insert number?"))
}
  let max =array[0]
for( let i=0;i<n;i++){
	max=Math.max(array[i],max)
}
alert(max) 
