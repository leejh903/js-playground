var input = {};
input.array = [];
input.parsing = [];

var output = {};
output.display = document.getElementById('output');
output.result = 0;

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
    if(input.array.length === 0) output.display.innerHTML = "no value"; 
    else {
        // input.array.unshift(0);
        input.parsing = input.array.join("").split(" ");
        output.result = Number(input.parsing.shift());
        while(input.parsing.length !== 0){
            output.op = input.parsing.shift();
            if(input.parsing.length !== 0 && (output.next = Number(input.parsing.shift())) != "") {
                // output.next = Number(input.parsing.shift());
                switch(output.op){
                    case '+': output.result = output.result + output.next; break;
                    case '-': output.result = output.result - output.next; break;
                    case '*': output.result = output.result * output.next; break;
                    case '/': output.result = output.result / output.next; break;
                }
        }
        }
        output.display.innerHTML = output.result;
        input.array = [];
        input.array.push(output.result);
    }
}