var modal = document.getElementById('mainModal');
var close = document.getElementById('close');
var modalImg = document.getElementById('modalImg');
var img = document.getElementsByClassName("smlImg");
var thumbNail = document.getElementById('thumbNail');
var pos = document.getElementById('pos');
var left = document.getElementById('left');
var right= document.getElementById('right');

left.addEventListener('click' ,leftArrow);

right.addEventListener('click' ,rightArrow);
//left
document.getElementById('left');
//right
document.getElementById('right');
//Closing the modal
close.addEventListener('click', function(){
	if (modal.style.display = "block") {
		modal.style.display = "none";
	}else{
		modal.style.display = "block";
	}
});

//Displying the pic on modal when cliked
for(var i = 0; i<img.length;i++){
		
	img[i].addEventListener('click', modalFunction);

	var tImg = document.createElement('img');
	tImg.src = img[i].src;
	tImg.className ='thumbImg';
	thumbNail.appendChild(tImg);
    tImg.addEventListener('click', modalFunction);
}
function modalFunction(){
	if (modal.style.display = "none"){
		modal.style.display = "block";
	}
	modalImg.src= this.src;
}
var thumbImg = document.getElementsByClassName("thumbImg");
var counter = 0;
function leftArrow(){
 for(var i =0; i< thumbImg.length;i++){
	if (thumbImg[i].src == modalImg.src) {
		 modalImg.src = thumbImg[i-1].src;
		}
	 }
  }
function rightArrow(){
 for(var i =0; i< thumbImg.length;i++){
	if (thumbImg[i].src == modalImg.src) {
		modalImg.src = thumbImg[i+=1].src;
		}
	 }
}
