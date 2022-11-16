 let students=[
 {"Name":"Altynai","Surname":"Nusip","GPA":3.4},
 {"Name":"Aiaru","Surname":"Muratkyzy","GPA":3.1},
 {"Name":"Sultan","Surname":"Muratuly","GPA":3.3},
 {"Name":"Aida","Surname":"Musa","GPA":4},
 {"Name":"Samat","Surname":"Omir","GPA":2.7},
 ]; 
 while(true){
 let a=prompt("Choose your branch:\n PRESS 1 TO ADD STUDENT\n PRESS 2 TO LIST STUDENT\n PRESS 0 TO EXIT");
  if(a==1){
  	let name=prompt("Insert name:")
  	let surname=prompt("Insert surname:")
  	let gpa=prompt("Insert gpa:")
  	students.push({Name:name,Surname:surname,GPA:gpa});
  }
  else if(a==2){
  	let ans="";
  	for (var i = 0; i < students.length; i++) {
  		ans+=students[i].Name+" "+students[i].Surname+" "+students[i].GPA+"\n"    
  	}
  	alert(ans);
  }
  else if(a==0){
  	break;
  }
}