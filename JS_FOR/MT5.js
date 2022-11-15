let users=[
{"login":"Ilyas","password":"aaaaaa"},
{"login":"Eldar","password":"qwerty"},
{"login":"Altyn","password":"altynka"},
{"login":"Anel","password":"qwertyA"},
];
let data=prompt("Enter login and password:");
const login=data.split(" ")[0];
const  password=data.split(" ")[1];

let userCanEn=false;
for(let i=0;i<users.length;i++){
	if(users[i].login==login && users[i].password==password){
		userCanEn=true;
		alert("Welcome, you are authenticated");
		break;
	}
}
if(!userCanEn){
	alert("User not found")
}
