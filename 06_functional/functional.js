var countWords = function(str){
    var words = str.split(" ");
    return words.length;
};

var makeAdder = function(A){
    return function(B){
        return(A+B);
    };
    
};

var forEach = function(arr,fnct){
    for (var i=0; i<arr.length; i++){
        fnct(arr[i]);
    }
};

var map = function(arr, fnct){
    var answer=[];
    for (var j=0; j<arr.length; j++){
        answer.push(fnct(arr[j]));    
    }
    return answer;
    
};

var filter = function(arr, fnct){
    var answer=[];
    for (var i=0; i<arr.length; i++){
        if (fnct(arr[i]===true)){
            answer.push(fnct(arr[i]));
        }
    }
    return answer;
};

var filter = function(arr, fnct){
    var answer=[];
    for (var i=0; i<arr.length; i++){
        if ( fnct( arr[i] ) ){
            answer.push(arr[i]);
        }
    }
    return answer;
};

var contains =  function(arr,x){
  
  if (Object.prototype.toString.call(arr)=='[object Object]'){ 
          for (prop in arr){
              if (arr[prop]==x){
               return true;
              }
          }
    return false;      
  }
      
  for(i=0; i<arr.length; i++){
      if(arr[i]==x){
          return true;
      } 
  }  
  return false;
    
};

var reduce = function(arr,x,fnct){
    
    if (typeof arr[0] == "string"){
        var total = 0;
        for (var i=x; i<arr.length; i++){
            total+=fnct(arr[1]);
        }
        return total;
    }
    
    if (arr.length==x+1){
        return arr[x];
    } else {
        var temp = fnct(arr[x],arr[x+1]);
        arr.shift();
        arr.shift();
        arr.push(temp);
        reduce(arr,x,fnct);
    }
   
};

var every = function (arr,fnct) {
    var getValue = function(x) { return x; }; 
    var isEven = function(num) { return num % 2 === 0; }; 
    
    if (arr == []) {
        return true;
    }
    
    if (typeof arr[0]=== "boolean")
        for (var j=0; j<arr.length; j++){
            if (arr[j]===false){
                return false;
            }
        }
      
       if (typeof arr[0]=== "boolean") return true;
    
    for (var i=0; i<arr.length; i++){
        if (fnct(arr[i])===false){
            return false;
        }
    }
    return true;
    
    
    
};
    
var any = function (arr) {
    var isEven = function(num) { return num % 2 === 0; }; 
    
    if (arr == []) {
        return false;
    }
    
    if (typeof arr[0]=== "boolean")
        for (var j=0; j<arr.length; j++){
            if (arr[j]===true){
                return true;
            }
        }
      
       if (typeof arr[0]=== "boolean") return false;
    
    for (var i=0; i<arr.length; i++){
        if (isEven(arr[i])===true){
            return true;
        }
    }
    return false;  
};


var once = function(fnct){
    var num = 0;
    var random = true  ;  
    
    if (random===true){
        num++;
    }
    random = false;
     
};
var increment = once(function() { 
       num++; 
     }); 