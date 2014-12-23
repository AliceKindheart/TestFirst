
  var f2c = function(x){
     return Math.floor((x-32)*0.5556);
  };

  var c2f =  function(x){
    return ((9*x)/5)+32;
};



function Temperature(x) {
    fahrenheit = 0;
    this.fahrenheit = function(){
        return fahrenheit;
    };
    this.setFahrenheit = function(x){
          fahrenheit= x ;
    };
    
    celsius = 0;
    this.celcius = function(){
        return celsius;
        };
    this.setCelcius = function(x){
        fahrenheit = c2f(x);
        celsius =f2c(fahrenheit);
    };

}