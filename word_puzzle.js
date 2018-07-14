var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var str;
var str_array;
var word = ['apple','pineapple','puppy','javascript','iloveyou','bradlee','davidchoi','whiteboard','internet','ipadstand'];

var select_word = function(){
    var num = Math.floor(Math.random()*word.length);
    var selected_word = word[num];
    word1.innerHTML = selected_word;
    str = word1.innerHTML;
    str_array = str.split("");
    check_str();
}

var shuffle = function(){
    var toggle = Math.floor(Math.random() * 2) === 1;
    if(toggle) swap();

    var n = Math.floor(Math.random() * str.length)

    for(var i=0; i<n; i++) right_shift();
}

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

var left_shift = function(){
    var temp = str_array.shift();
    str_array.push(temp);
    str = str_array.join("");
    change_btn();
    check_str();
}
var right_shift = function(){
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
    select_word();
    create_btn();
    shuffle();
}

main();