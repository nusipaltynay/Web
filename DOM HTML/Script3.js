 let cards=[
 {"CARD":"4444555566667777" ,"name":"Nusip Altynai","CVV":321},
 {"CARD":"4441556566667778" ,"name":"Kyrykbai Erasyl","CVV":725},
 {"CARD":"4442555766667779" ,"name":"Musa Aida","CVV":721},
 {"CARD":"4440550066667777" ,"name":"Muratkyzy Aiaru","CVV":555},
 {"CARD":"4431555566667777" ,"name":"Nusip Aruzhan","CVV":759},
 ];
 let card1=document.getElementById('card_num_1');
 let card2=document.getElementById('card_num_2');
 let card3=document.getElementById('card_num_3');
 let card4=document.getElementById('card_num_4');
 let cvv=document.getElementById('card_cvv');
function checkCard(){
	let cardnum=card1.value+card2.value+card3.value+card4.value;
	for (var i = 0; i < cards.length; i++) {
		if(cardnum==cards[i].CARD && cvv.value==cards[i].CVV){
			console.log("Transaction completed")
			return;
		}
		
	}
	console.log( "Invalid Data");

}