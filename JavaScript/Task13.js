let a =prompt("Choose your branch:\n 1 - Science\n 2 - Humanitarian subjects\n 3 - Art\n 4 - Sport")
if(a==1){
	let one=prompt("1 - Math, 2 - Physics:")
	if(one==1){
		alert("You are Financier")
	}else{
		alert("You are Engineer")
	}
}else if(a==2){
	let two=prompt("1 - History, 2 - Foreign Languages:")
	if(two==1){
		alert("You are Historic or Diplomat " )
	}else{
		alert("You are Translator")
	}
}else if(a==3){
	let tree=prompt("1 - Drawing, 2 -Singing:")
	if(tree==1){
		alert("You are Painter or Architect")
	}else{
		alert("You are Singer or Tamada")
	}
}else if(a==4){
	let four=prompt("1 - Team, 2 - Individual:")
	if(four==1){
		alert("You are footballer or Basketball player")
	}else{
		alert(" You are boxer or tennis player")
	}
}