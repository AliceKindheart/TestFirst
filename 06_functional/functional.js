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
        if (fnct(arr[i])===true){
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

var reduce =  function(arr, x, fnct){
    if (isNaN(arr[0])===false){
        for (var i=x; i<arr.length-1; i++){
            arr[i+1]+=arr[i];
        }
        return arr[arr.length-1];
    } else {
        var total =0;
        for (var j=x; j<arr.length; j++){
            total+=countWords(arr[j]);
        }
        return total;
    }
};
var add = function(a, b) { 
       return a+b; 
     }; 
     
var countWordsInReduce = function(str){
    var words = str.split(" ");
    return words.length;
};

var sum =  function(arr){
  return reduce(arr,0,sum);   
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
  var runOnce =  false;  
  return function(){
      if (runOnce===false){
          fnct();
      }
      runOnce =  true;
    };
  };
    
var num =0;     
var increment = once(function() { 
       num++; 
     }); 
     