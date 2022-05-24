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
// task 3
let arraycolor = ["red", "green", "yellow", "pink"]
console.log(arraycolor)
if (arraycolor= "black"){
    console.log("duzgun deyil")
}
else{
    console.log("duzgundur")
}

var x = (a, b, c) => a*b*c
console.log(x(4, 2, 5))

let arraymethods = ["bir", "iki", "uc"]
console.log(arraymethods)
var pushmethod = arraymethods.push("dord")
console.log(pushmethod)
var popmethod = arraymethods.pop()
console.log(popmethod)
var shiftmethod = arraymethods.shift()
console.log(shiftmethod)
var unshiftmethod = arraymethods.unshift("sifir")
console.log(unshiftmethod)
var sortmethod = arraymethods.sort()
console.log(sortmethod)


let arraynumber = [25, 36, 17, 3, 11, 52, 29, 5]
console.log(arraynumber)
let filtermethod = arraynumber.filter(e=>e>20)
console.log(filtermethod)

// task 4
let numbers = [4, 5, 6, 7, 8];
for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  } 

var a= ["grey", "white", "black"];
for (var element of a) {
    console.log(element);
}

/*task 5*/
const deleteddocument = document.querySelector('.mylist')
deleteddocument.addEventListener('click', function(e) {
    if (e.target.className === 'fa-solid fa-xmark') {
        e.target.parentElement.remove();
        e.preventDefault();
    }
}
)
document.getElementById("click").style.backgroundColor = "red";

const changecolor = document.querySelector('.li')
changecolor.addEventListener('click', function(e){
    if(e.target.className=== 'li'){
        e.style.backgroundColor = 'green'
    }
    
})

let employeeName = [
    { "name": "Akif", "email": "Akif@gmail.com", "age": "20" },
    { "name": "Senan", "email": "Senan@gmail.com", "age": "25" },
    { "name": "Rahide", "email": "Senan@gmail.com", "age": "27" },
    { "name": "Arzu", "email": "Arzu@gmail.com", "age": "22" },
    { "name": "Hemid", "email": "Hemid@gmail.com", "age": "23" }
];
console.log(employeeName)
let filtertask = employeeName.filter(e=>e.age>25)
console.log(filtertask)
let maptask = employeeName.map(e=>e.email)
console.log(maptask)

let employeeName1 = [
    { "name": "Akif", "email": "Akif@gmail.com", "age": "20",
    'olkeler':{'olke1':"az","olke2":"turk"}
    },
    { "name": "Senan", "email": "Senan@gmail.com", "age": "25" },
    { "name": "Rahide", "email": "Senan@gmail.com", "age": "27" },
    { "name": "Arzu", "email": "Arzu@gmail.com", "age": "22" },
    { "name": "Hemid", "email": "Hemid@gmail.com", "age": "23" }
];
let maptask2 = employeeName1.map(e=>e.olkeler)
console.log(maptask2)

/*task6*/
var ShoppingItems = {
    phone: 400,
    notebook: 600,
    charger: 200,
    nameofModel: "Lenova"
};
var sum = 0;
for (var price of Object.values(ShoppingItems)){
    if(Number.isFinite(price))(
        sum -= price
    )
}
console.log(sum)