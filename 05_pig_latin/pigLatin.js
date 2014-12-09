var translate = function(str){
 var words = str.toLowerCase().split(" ");
 var vowels= "aeiou";
 var consonants = "bcdfghjklmnpqrstvwxyz";
 var answer ="";
 var one = false;
 var two = false;
 var three = false;
 
 
 for (var i=0; i<words.length; i++){
 
    for (var j=0; j<vowels.length; j++){
        if (words[i].charAt(0)==vowels.charAt(j)){
            answer+=words[i] + "ay";
        }    
    }
    
     for (var p=0; p<consonants.length; p++){
        if (words[i].charAt(0)==consonants.charAt(p)){
            one = true;
        }
     }
        
    for (var n=0; n<consonants.length; n++){
        if (one===true && words[i].charAt(1)==consonants.charAt(n)){
            two = true;  
        }    
    }
    
    if ((one===true) && (two===false)){
        if (words[i].charAt(0)==consonants.charAt(12)){
           answer+=words[i].slice(2,words[i].length) + words[i].charAt(0) + words[i].charAt(1) + "ay"; 
        } else {
        answer+=words[i].slice(1,words[i].length) + words[i].charAt(0) + "ay";
        }
    }
    
    if (two === true) {
        for (var r=0; r<consonants.length; r++){
            if (words[i].charAt(2)==consonants.charAt(r)){
                answer+=words[i].slice(3,words[i].length) + words[i].charAt(0) + words[i].charAt(1) + words[i].charAt(2) + "ay";
                three = true;
            }
        }
    }
    
    if (two===true && three===false){
        if (words[i].charAt(1)==consonants.charAt(12)){
            answer+=words[i].slice(3,words[i].length) + words[i].charAt(0) + words[i].charAt(1) + words[i].charAt(2) + "ay";
        } else {
         answer+=words[i].slice(2,words[i].length) + words[i].charAt(0) + words[i].charAt(1) + "ay";
        }
    }

   if (i+1<words.length) {
       answer +=" ";
        one = false;
        two = false;
        three =  false; 
    }
 }
  return answer;
};