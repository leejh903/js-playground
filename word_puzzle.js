var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

for(var i=0; i<str.length; i++){
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
}

var swap = function(event){
    console.log("swap");
}
var shift = function(){
    console.log("shift");
}