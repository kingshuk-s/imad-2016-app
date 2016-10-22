console.log('Loaded!');
//var element = document.getElementById('main-text');
//element.innerHTML="new value";
var img = document.getElementById('me');
marginright=0;
function moveleft(){
    marginright= marginright + 10;
    img.style.marginright= marginright + 'px' ;
}
img.onclick = function(){
    var interval= setInterval(moveleft,20);
};
var img = document.getElementById('me');
img.onclick = function(){
    img.style.marginleft='100px';
};