let arr=[];
let sum=1;
let count=0;
 while(true){
   let n=prompt("Enter number:")
   if(n==0){
   	break;
   }
   arr.push(n);
   sum*=n;
   count++;

 }
 alert((Math.pow(sum,1/count)).toFixed(3))
 