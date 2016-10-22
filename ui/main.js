console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="new value";
var img = document.getElementById('me');
img.onclick=function(){
    var interval= setInterval(moveleft,200);
    img.style.marginright='200px';
};