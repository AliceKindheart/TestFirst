var Mammal = function(name) {
    this.name = name;
    this.offspring = [];
};

Mammal.prototype = {
    haveBaby :  function(){
        var child = new Mammal("Baby " + this.name);
        this.offspring.push(child);
        return child;
    } , 
    sayHello : function(){
        return "My name is " + this.name +", I'm a Mammal";
    }
};

Cat.prototype = new Mammal();

function Cat(name,color){
    this.name=name;
    this.color=color;
}
    

Cat.prototype.haveBaby=function(color){
    var kitten = new Cat (color + "_cat", color);
        kitten.name = "Baby " + this.name;
        this.offspring.push(kitten);
        return kitten;
    };

