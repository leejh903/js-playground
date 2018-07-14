var str = document.getElementById('word1').innerHTML;
var str_array = str.split("");
var word2 = document.getElementById('word2');

var create_btn = function(){
    for(var i=0; i<str.length; i++){
        var btn = document.createElement('button');
        btn.innerHTML = str[i];
        word2.appendChild(btn);
    }
}

var change_btn = function(){
    var child = document.getElementById("word2").firstChild;
    for(var i=0; i<str.length; i++){
        child.innerHTML = str[i];
        child = child.nextSibling;
    }
}

var swap = function(event){
    var temp_array = [];
    var temp;
    for(var i=str.length-1; i>=0; i--){
        temp = str_array.pop();
        temp_array.push(temp);
    }
    str_array = temp_array;
    str = str_array.join("");
    
    change_btn();
    check_str();
}

var shift = function(){
    var temp = str_array.pop();
    str_array.unshift(temp);
    str = str_array.join("");
    change_btn();
    check_str();
}

var check_str = function(){
    var target = document.getElementById('word1').innerHTML;
    var display_check = document.getElementById('check');
    if(str === target){
        display_check.innerHTML = "일치합니다";
    }else{
        display_check.innerHTML = "일치하지 않습니다";
    }
}

var main = function(){
    create_btn();
}

main();