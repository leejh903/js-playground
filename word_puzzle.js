game = {};
game.answer;
game.answer_array;
game.progress = "";
game.progress_num = 0;
var progress = document.getElementById('progress');
var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var word = ['apple','pineapple','puppy','javascript','iloveyou','bradlee','davidchoi','whiteboard','internet','ipadstand'];

game.select_word = function(){
    var num = Math.floor(Math.random()*word.length);
    var selected_word = word[num];
    word1.innerHTML = selected_word;
    this.answer = word1.innerHTML;
    this.answer_array = this.answer.split("");
};

game.shuffle = function(){
    var toggle = Math.floor(Math.random() * 2) === 1;
    if(toggle) game.swap();

    var n = Math.floor(Math.random() * this.answer.length)

    for(var i=0; i<n; i++) game.right_shift();
};

game.create_btn = function(){
    for(var i=0; i<this.answer.length; i++){
        var btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
        word2.appendChild(btn);
    }
};

game.remove_btn = function(){
for(var i=0; i<this.answer.length; i++){
    word2.removeChild(word2.childNodes[0]);
}
};

game.change_btn = function(){
    var child = document.getElementById("word2").firstChild;
    for(var i=0; i<this.answer.length; i++){
        child.innerHTML = this.answer[i];
        child = child.nextSibling;
    }
};

game.swap = function(){
    var temp_array = [];
    var temp;
    for(var i=this.answer.length-1; i>=0; i--){
        temp = this.answer_array.pop();
        temp_array.push(temp);
    }
    this.answer_array = temp_array;
    this.answer = this.answer_array.join("");
    
    game.change_btn();
    game.check_str();
};

game.left_shift = function(){
    var temp = this.answer_array.shift();
    this.answer_array.push(temp);
    this.answer = this.answer_array.join("");
    game.change_btn();
    game.check_str();
};
game.right_shift = function(){
    var temp = this.answer_array.pop();
    this.answer_array.unshift(temp);
    this.answer = this.answer_array.join("");
    game.change_btn();
    game.check_str();
};

game.check_str = function(){
    var target = document.getElementById('word1').innerHTML;
    var display_check = document.getElementById('check');
    if(this.answer === target){
        display_check.innerHTML = "일치합니다";
        game.game_progress();
    }else{
        display_check.innerHTML = "일치하지 않습니다";
    }
};

game.game_progress = function(){
    game.progress_num++;
    game.progress += "O "
    progress.innerHTML = game.progress;
    if(game.progress_num < 3){
        game.remove_btn();
        NewGame();
    } else {
        game.progress = "Thank you for playing!"
        progress.innerHTML = game.progress;
    }
}

var NewGame = function(){
    game.select_word();
    game.create_btn();
    game.shuffle();
}

NewGame();