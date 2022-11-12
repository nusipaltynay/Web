let a=prompt("Insert a number?")
if(a%60==0){
	alert(" ONLY "+(a/60)+" HOURS ")
}else {
	alert((parseInt (a/60))+" HOURS and "+(a%60)+" MINUTES ")
}