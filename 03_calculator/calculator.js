function Calculator(){
    total=0;
    this.value = function(){
        return total;
    },
	this.add = function(y){
		total+=y;
	};
	this.subtract = function(z){
		total-=z;
	};
}

var myCalc= new Calculator();