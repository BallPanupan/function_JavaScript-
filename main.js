function greet(name){
  return "Hello, i'm " + name;
}

console.log(greet("panupan"));


function makeaAdjectifier(adjective){
  return function (string){
    return adjective + " " + string;
  };
}

var coolifier = makeaAdjectifier("cool");
console.log(coolifier("congerence"));

//result
//Hello, i'm panupan
//cool congerence
