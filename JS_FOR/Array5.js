let cars=[
{"Name":"Toyota","price":"12000000","year":"2019","volume":"2.2"},
{"Name":"Kia Serato","price":"9000000","year":"2015","volume":"2.2"},
{"Name":"Hundai Accent","price":"11000000","year":"2018","volume":"1.8"},
{"Name":"Toyota","price":"15000000","year":"2020","volume":"3.2"},
{"Name":"Mercedes","price":"50000000","year":"2012","volume":"3.8"},
{"Name":"BMW", "price": "11000000", "year": "2011", "volume": "3.0"},
 {"Name":"Lexus", "price":"60000000", "year": "2017" ,"volume": "5.7"}
];
while(true){
let avtosalon=prompt( "Choose your branch:\n INSERT [1] TO SEARCH BY NAME\n INSERT [2] TO SEARCH BY YEAR\n INSERT [3] TO SEARCH BY ENGINE VOLUME\n INSERT [4] TO SEARCH BY PRICE\n INSERT [5] TO EXIT");
if(avtosalon==1){
	let Name=prompt("INSERT NAME OF CAR:");
	let ans="";
	let Entername=false;
	for (var i = 0; i < cars.length; i++) {
		if(cars[i].Name==Name){
			Entername=true;
			ans+=cars[i].Name+" - "+cars[i].price+" - "+cars[i].year+" - "+cars[i].volume+"\n"
		}
	}

    alert(ans);
}
else if(avtosalon==2){
	let yearstart=prompt("INSERT YEAR START FROM:");
	let yearends=prompt("INSERT YEAR ENDS FROM:");
	let ans1="";
	for (var i = 0; i < cars.length; i++) {
		if(cars[i].year>=yearstart && yearends>=cars[i].year){
			ans1+=cars[i].Name+" - "+cars[i].price+" - "+cars[i].year+" - "+cars[i].volume+"\n"
		}

	}
        alert(ans1);
}
else if (avtosalon==3){
	let volumestart=prompt("INSERT ENGINE VOLUME START FROM:")
	let volumeends=prompt("INSERT ENGINE VOLUME ENDS FROM:")
	 let ans2="";
	for (var i = 0; i < cars.length; i++) {
		if(cars[i].volume>=volumestart && volumeends>=cars[i].volume){
			ans2+=cars[i].Name+" - "+cars[i].price+" - "+cars[i].year+" - "+cars[i].volume+"\n"
		}
	}
	alert(ans2);
}
else if(avtosalon==4){
	let pricestart=prompt("INSERT PRICE START FROM:")
	let priceends=prompt("INSERT PRICE ENDS FROM:")
	 let ans3="";
	for (var i = 0; i < cars.length; i++) {
	      if(parseInt(cars[i].price)>=parseInt(pricestart) && parseInt(priceends)>= parseInt(cars[i].price)){
	      	ans3+=cars[i].Name+" - "+cars[i].price+" - "+cars[i].year+" - "+cars[i].volume+"\n"
	      }
	}
	alert(ans3);
}
else if(avtosalon==5){
	break;
}

}