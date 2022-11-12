let amount=prompt("Enter the amount?")
alert("1- CONVERT TO USD\n 2- CONVERT TO EUR\n 3- CONVERT TO GBP");
let currencies=prompt("Choose currency?")
if(currencies==1){
	alert(amount+"KZT="+ (amount/380).toFixed(2)+"USD")
}

else if (currencies==2){
	alert(amount+"KZT="+  (amount/430).toFixed(2)+"EUR")
}


else if(currencies==3){
 alert(amount+"KZT="+  (amount/480).toFixed(2)+"GBP")

}


