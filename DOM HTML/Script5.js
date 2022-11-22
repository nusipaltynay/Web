let images=[
{"id":1,"src":"image/Photo1.jpg"},
{"id":2,"src":"image/Photo2.jpg"},
{"id":3,"src":"image/Lat1.jpg"},
{"id":4,"src":"image/Photo3.jpg"},
{"id":5,"src":"image/Lat2.jpg"},
{"id":6,"src":"image/Photo4.jpg"},
];

function clickImage(id){
	let image=document.getElementById('main_img');
   for (var i = 0; i < images.length; i++) {
   	if(id==images[i].id){
   		image.src=images[i].src;
   	}
   	
   }
}