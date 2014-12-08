function repeat(str, x){
  var answer = "";
  if (x===0 || x===undefined){
      return answer;
  } else {
     for (var i=0; i<x; i++){
         answer+=str;
	}
  }
	return answer;
}

var join = function(arr, x){
  var answer =""; 
  for (var i=0; i<arr.length; i++){
    answer+=arr[i];
    if (x!==undefined && i<arr.length-1){
        answer+=x;
    }
  }
  return answer;
};

var sum = function(arr){
  var sum = 0;
  for (var i=0; i<arr.length; i++){
	 sum+=arr[i];
  }
  return sum;
};

var paramify =  function(obj){
  var array=[];
  if (obj=={}){
    return("");
  }
  
  for (key in obj){
    if (obj.hasOwnProperty(key)){
      array.push(key + "=" + obj[key]);
      }
    }
  var alpha = array.sort();
  return(alpha.join("&"));    
};   




var factorial = function(x){
  var sum=1;
  if (x >1 ) {    
    for (i=1; i <= x; i++) {
      sum = sum*i;
    }  
  }
  return sum;          
};


var concat_string = function(){
  var args = Array.prototype.slice.call(arguments);
  var answer = args.join("");
  return answer;
};



