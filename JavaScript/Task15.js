 let a=prompt("Insert a number?")
 if(a%380==0){
 	alert(" ONLY "+(a/380)+" USD ")
 }else{
 	alert((parseInt(a/380))+" USD and "+((a/380).toFixed(2)*100%100)+"cents")
 }