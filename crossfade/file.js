
(function(){
    "use strict";
let currentImg= 0; 
const myphotos= ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"]

const container = document.getElementById('content');
const nextBtn = document.getElementById('next')
const  prevBtn = document.getElementById('previous')

function changeImg(){
const newSlide= document.getElementById('myimage');
newSlide.src=`slides/${myphotos[currentImg]}`;
newSlide.className = 'fadeinimg'
container.appendChild(newSlide);
if (container.children.length > 2){
    container.removeChild(container.children[0])
}
}
nextBtn.addEventListener('click',function(e){
e.preventDefault();
currentImg++;
if(currentImg > myphotos.length-1){
    currentImg = 0 
}
changeImg()
})

prevBtn.addEventListener('click' , function(e){
e.preventDefault()
currentImg--;
if(currentImg < 0) {
    currentImg = myphotos.length-1
}
changeImg()
})


}())
