const login=document.getElementById('login');
const password=document.getElementById('password');
const retype_pass=document.getElementById('retype_pass');
const loginError=document.getElementById('loginError');
const passwordError=document.getElementById('passwordError');
const retypeError=document.getElementById('retypeError');

function checkUser(){
	if(login.value==''){
        loginError.innerHTML='Current email is already in use'
        login.classList.add('invalid' ,'error');
	}
	if(password.value.length<=6){
		passwordError.innerHTML='Password length at least must bt 6 symbols'
		password.classList.add('invalid','error');
	}
	if(password.value!=retype_pass.value){
		retypeError.innerHTML='Password are not same'
		retype_pass.classList.add('invalid','error');
	}
  }
