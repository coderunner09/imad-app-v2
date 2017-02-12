console.log('Loaded!');
var img=document.getElementById('Madi');

var marginRight=0;

function moveRight() {
marginRight = marginRight + 1;
img.style.marginRight = marginRight + 'px';
}

img.onclick = function(){

    var interval = setInterval(moveRight, 50);
}