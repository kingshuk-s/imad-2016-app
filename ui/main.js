console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML="new value";
var img = document.getElementById('me');
marginright=0;
function moveright(){
    marginright= marginright + 10;
    img.style.marginright= marginright + 'px' ;
}
img.onclick=function(){
    var interval= setInterval(moveright,200);
    img.style.marginright='200px';
};