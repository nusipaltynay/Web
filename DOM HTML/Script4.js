let images=[
{"id":1, "src":"image/Photo1.jpg"},
{"id":2, "src":"image/Photo2.jpg"},
{"id":3, "src":"image/Photo3.jpg"},
{"id":4, "src":"image/Photo4.jpg"},
];
let currentImage=1;
 function next(){
 	let image=document.getElementById('image')
 	currentImage+=1;
 	if(images.length==currentImage){
 		currentImage=0;
 	}
 	image.src=images[currentImage].src;
 	console.log(currentImage);
 }
  function back(){
 	let image=document.getElementById('image')
 	currentImage-=1;
 	if(currentImage<0){
 		currentImage=images.length-1;
 	}
 	image.src=images[currentImage].src;
 		console.log(currentImage);
 }

