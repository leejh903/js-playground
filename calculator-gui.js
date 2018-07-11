var input = {};
input.array = [];

var output = {};
output.display = document.getElementById('output');

var click_num = function(event){
    var target = event.target.innerHTML;
    switch(target){
        // 사칙연산의 경우
        case '+': case '-': case '*': case '/':
        target = ' ' + target + ' ';  // 공백 단위로 받아주기 위해 일부러 삽입
        input.array.push(target);
        break;
        // 지우기 경우
        case 'BS':
        input.array.pop();
        break;
        // 일반 수의 경우
        default:
        input.array.push(target);
    }
    if(input.array.length === 0) output.display.innerHTML = "empty";
    else output.display.innerHTML = input.array.join("");
}

var click_other = function(event){
    console.log(event.target.innerHTML);
    console.log("click_other");
}