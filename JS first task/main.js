// task 1
var x = 21;
var y = 7;
var toplama = x + y;
var cixma = x - y;
var vurma = x * y;
var bolme = x / y;
console.log(x);
console.log(y);
console.log(toplama);
console.log(cixma);
console.log(vurma);
console.log(bolme);

let bolmeninisaresi = "/";
console.log(bolmeninisaresi);
console.log(typeof bolmeninisaresi);

var arry = ["A", "B", "C", "D"];
console.log(arry);
console.log(arry.length);
console.log(arry[0]);
console.log(arry[1]);
console.log(arry[2]);
console.log(arry[3]);
// task 2
let yazi1 = "Yazi";
console.log(yazi1)
let kicikyazi = yazi1.toLocaleLowerCase()
console.log(kicikyazi)
let boyukyazi = yazi1.toLocaleUpperCase()
console.log(boyukyazi)

var reqem = "bir"
console.log(reqem)
var tekrarla = reqem.repeat(3)
console.log(tekrarla)

var bosluqlu = "  Bosluq  "
console.log(bosluqlu)
var bosluqsuz = bosluqlu.trim()
console.log(bosluqsuz)

var numberceil = Math.ceil(2.5)
console.log(numberceil)

var numberfloor = Math.floor(2.5)
console.log(numberfloor)

var arrayRandom = [1, 2, 4, 16, 18, 22, "vusal", "rahide", true, false]
var randomValue = arrayRandom[Math.ceil(arrayRandom.length * Math.random())]

console.log(randomValue)