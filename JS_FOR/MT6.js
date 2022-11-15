let book=[
{"Name":"Abay zholy1","Author":"Mukhtar Auezov","ISBN":"12134","Price":"3500"},
{"Name":"1984","Author":"George Orwell","ISBN":"4567","Price":"3900"},
{"Name":"Marten Iden","Author":"Dzhek london","ISBN":"121212","Price":"3700"},
{"Name":"Financist","Author":"Teodor drajzer","ISBN":"158967","Price":"3800"},
{"Name":"Marten Iden","Author":"Dzhek london","ISBN":"121212","Price":"3700"},
];
let Author=prompt("Enter author:");
let ans="";
let EnterAuthor=false;
for(let i=0; i<book.length;i++){
	if(book[i].Author==Author){
		EnterAuthor=true;
		 ans+=book[i].Name+" "+book[i].Author+" "+book[i].ISBN+" "+book[i].Price+"\n";
		
	}

}
alert(ans)
