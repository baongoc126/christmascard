var container = document.getElementById('tuyet');
var bordersArray = ['50%', '80%', '40%'];
var blursArray = ['0', '5px']
var colorsArray = ['#FAFAD2', '#FFFAFA', '#F5FFFA', '#F8F8FF', '#F5F5F5', '#FFFFFF']
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var count = 100;

function creatElementRandom(params) {
    for(var i=0 ; i<count ; i++){
        var randomleft = Math.floor(Math.random()*width);
        var randomtop = Math.floor(Math.random()*height);
        var color = Math.floor(Math.random()*6);
        var border = Math.floor(Math.random()*3);
        var blur = Math.floor(Math.random()*2);
        var widthElement = Math.floor(Math.random()*5) + 5;
        var timeAnimation = Math.floor(Math.random()*8) + 3; 
        var div = document.createElement("div");
        div.style.backgroundColor = colorsArray[color];
        div.style.position = 'absolute'
        div.style.width = widthElement + 'px';
        div.style.height = widthElement + 'px';
        div.style.marginLeft = randomleft + 'px';
        div.style.marginTop = randomtop + 'px';
        div.style.borderRadius = bordersArray[border];
        div.style.filter = 'blur(' + blursArray[blur] + ')';
        div.style.animation = ' move ' + timeAnimation + 's ease-in infinite';
        container.appendChild(div);
        
    }
    
}