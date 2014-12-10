function Calculator(){
    var stack=[];
    var total=0;

    this.push = function(x){
        stack.push(x);
    };

    this.value = function(){
        return total;
    };
    this.plus = function(y){
        if (stack.length<2){
            throw "calculator is empty";
        }
        total=stack[stack.length-1]+stack[stack.length-2];
        stack.pop();
        stack.pop();
        stack.push(total);
    };
    this.minus = function(z){
        if (stack.length<2){
            throw "calculator is empty";
        }
        total=stack[stack.length-2]-stack[stack.length-1];
        stack.pop();
        stack.pop();
        stack.push(total);
    };
    this.times = function(a){
        if (stack.length<2){
            throw "calculator is empty";
        }
       total=stack[stack.length-2]*stack[stack.length-1];
        stack.pop();
        stack.pop();
        stack.push(total); 
    };
    this.divide = function(b){
        if (stack.length<2){
            throw "calculator is empty";
        }
        total=stack[stack.length-2]/stack[stack.length-1];
        stack.pop();
        stack.pop();
        stack.push(total);
    };
}
