let users=[
 {"login":"ilyas", "password": "qwerty"},
 {"login":"eldar", "password": "qqqqq"},
 {"login":"assylkhan", "password": "qweqwe"},
 {"login":"anel", "password": "asdasd"},
 {"login":"alibek", "password": "aaaaaa"}
    ];
const login=document.getElementById('login')
const password=document.getElementById('password')

function checkUser(){
	for (var i = 0; i < users.length; i++) {
		if(login.value==users[i].login && password.value==users[i].password){
			console.log("You are authenticated")
			return;
		}
	}
	login.classList.add('invalid');
	password.classList.add('invalid');
	login.value="";
	password.value="";
}







 