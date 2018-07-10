var input = {};
input.input_value;
input.input_array = [];
input.input_length;
input.input_val = document.getElementById('input_num');

var cal = {};
cal.result;
cal.cal_num = function() {
    input.input_value = input.input_val.value;
    input.input_array = input.input_value.split(" ");
    input.input_length = input.input_array.length;
    this.result = Number(input.input_array[0]);

    main();
};

cal.calculate = function(input_array, input_length) {
    for(var i = 1; i < input_length; i=i+2){
        var obj = Number(input_array[i+1]);
        switch(input_array[i]){
            case '+': this.result = this.result + obj; break;
            case '-': this.result = this.result - obj; break;
            case '*': this.result = this.result * obj; break;
            case '/': this.result = this.result / obj; break;
        }
    }
}

var output = {};
output.output_box = document.getElementById('output_num');
output.print = function(){
    output.output_box.value = cal.result;
}

var main = function(){
    cal.calculate(input.input_array, input.input_length);
    output.print();
}

