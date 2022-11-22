function buttonDec(){
	const number=document.getElementById("p_text");
	let count=number.innerHTML
	number.innerHTML=parseInt(count)-1;
	console.log(number.innerHTML);
}
function buttonInc(){
	const number=document.getElementById("p_text");
	let count=number.innerHTML
	number.innerHTML=parseInt(count)+1;
	console.log(number.innerHTML);
}