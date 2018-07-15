// html element
var progress = document.getElementById('progress');
var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');

// game object
game = {'answer':"", 'answer_array':[], 'progress':"", 'progress_num':0, 'max_play':3, 'start_time':0, 'end_time':0};
game.word = ['apple','pineapple','puppy','javascript','iloveyou','bradlee','davidchoi','whiteboard','internet','ipadstand'];

// choose 1 word from words
game.select_word = function(){
    var num = Math.floor(Math.random()*this.word.length);
    var selected_word = this.word[num];
    word1.innerHTML = selected_word;
    this.answer = word1.innerHTML;
    this.answer_array = this.answer.split("");
};

// shuffle word arragement
game.shuffle = function(){
    var toggle = Math.floor(Math.random() * 2) === 1;
    if(toggle) game.swap();

    var n = Math.floor(Math.random() * this.answer.length)

    for(var i=0; i<n; i++) game.right_shift();
};

// create button on html element('word2')
game.create_btn = function(){
    for(var i=0; i<this.answer.length; i++){
        var btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
        word2.appendChild(btn);
    }
};

// remove button on html element('word2')
game.remove_btn = function(){
for(var i=0; i<this.answer.length; i++){
    word2.removeChild(word2.childNodes[0]);
}
};

// update button on html element('word2')
game.update_btn = function(){
    var child = document.getElementById("word2").firstChild;
    for(var i=0; i<this.answer.length; i++){
        child.innerHTML = this.answer[i];
        child = child.nextSibling;
    }
};

// event handler for swap button
game.swap = function(){
    var temp_array = [];
    var temp;
    for(var i=this.answer.length-1; i>=0; i--){
        temp = this.answer_array.pop();
        temp_array.push(temp);
    }
    this.answer_array = temp_array;
    this.answer = this.answer_array.join("");
    
    game.update_btn();
    game.check_str();
};

// event handler for left_shift button and right_shift button
game.left_shift = function(){
    var temp = this.answer_array.shift();
    this.answer_array.push(temp);
    this.answer = this.answer_array.join("");
    game.update_btn();
    game.check_str();
};
game.right_shift = function(){
    var temp = this.answer_array.pop();
    this.answer_array.unshift(temp);
    this.answer = this.answer_array.join("");
    game.update_btn();
    game.check_str();
};

// compare answer word with btn words
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

// show progress_status
game.game_progress = function(){
    game.progress_num++;
    game.progress += "O "
    progress.innerHTML = game.progress;
    if(game.progress_num < game.max_play){
        game.remove_btn();
        game.init();
    } else {
        game.end_time = Date.now();
        alert("총 결과시간: " + (game.end_time - game.start_time)/1000 + "초, Thank you for playing!!");
    }
}

// init function for game start
game.init = function(){
    game.select_word();
    game.create_btn();
    game.shuffle();
}

game.init();
game.start_time = Date.now();