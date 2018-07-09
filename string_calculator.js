var input_value;
var input_array = [];
var input_length;
var result;

var cal_num = function() {
	var input_val = document.getElementById('input_num');
    input_value = input_val.value;
    input_array = input_value.split(" ");
    input_length = input_array.length;
    result = Number(input_array[0]);

    main();
};

var calculate = function(input_array, input_length) {
    for(var i = 1; i < input_length; i=i+2){
        var obj = Number(input_array[i+1]);
        switch(input_array[i]){
            case '+': result = result + obj; break;
            case '-': result = result - obj; break;
            case '*': result = result * obj; break;
            case '/': result = result / obj; break;
        }
    }
}

var print = function(){
    var output_box = document.getElementById('output_num');
    output_box.value = result;
}

var main = function(){
    calculate(input_array, input_length);
    print();
}

