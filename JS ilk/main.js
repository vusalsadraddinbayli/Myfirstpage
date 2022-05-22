// let
// var

// const

//PRIMITE DATATYPES==============================================================================
// //number
// let vusal = 3;
// var rahide = 8;
// const error = 14;

// var topla = vusal + rahide + " " + "toplandim";
// var cix = rahide - vusal + " " + "cixildim";
// vurma *
// bolme /
//qaliq %
//opeartorlar
// var bolme = rahide % vusal;

// const error = 15;//constda eyni adi cagirmaq olmaz consta mudaxile etmek olmaz

// var rahide = 12;

// console.log(typeof vusal);
// console.log(rahide);
// console.log(error);

// console.log(topla)
// console.log(cix)
// console.log(bolme)

// //string
// let rahideniAdi = "rahide";
// console.log(typeof rahideniAdi);

// let vusalinAdi = "Vusal";
// console.log(vusalinAdi);



//boolean
// var dogrudumu = false;

// console.log(typeof dogrudumu);

//undifind

// var val;
// console.log(val)

//====================================================================================================




//None PRIMITE DATA TYPES============================================================================

// var arry = ["BWM", "MERCEDES", "VOLVO"];
// var arry2 = ["Vusal", "Rahide", "Nuray"];
// var arryToplam = arry + arry2;
// console.log(arry);
// console.log(arry.length);
// console.log(arry[0]);
// console.log(arry[1]);
// console.log(arry[2]);
// console.log(arryToplam)
//array function()



//===================================================================================================


//Ders 2============================================================================================

//compare operatorlar
//>, <, >=, <= ,==,===,!===

//string method primitive

let menimAdim = "rahide";
var degerim = menimAdim.toUpperCase()
console.log(degerim)


let VusalinAdi = "VUSAL";
let kicikHerf = VusalinAdi.toLowerCase()

console.log(kicikHerf)

//trim

var myinput = "     menim inputum     "
var trim = myinput.trim() //sagdan ve soldan bosluqlari yox edir
console.log(trim.length)


var myRpeat = "hello my friend"
var tekrarla = myRpeat.repeat(2)
console.log(tekrarla)

var replace = "My car is blue"
var myReplace = replace.replace("blue", "red")
console.log(myReplace)

var replaceAll = "Myyyyyyyyy car is blue"
var myReplaceAll = replaceAll.replaceAll("y", "s")
console.log(myReplaceAll)

//number methods

var numberCeil = Math.ceil(8.9999999)
console.log(numberCeil) //yuxariya dogru yuvarlaqlasdirir

var NumberFlorr = Math.floor(8.99999)
console.log(NumberFlorr) //asagiya dogru yuvarlaqsdirir

var arrayRandom = [1, 2, 4, 16, 18, 22, "vusal", "rahide", true, false]
var randomValue = arrayRandom[Math.floor(arrayRandom.length * Math.random())]

console.log(randomValue)


var arrayValue = [1, 99, 101, 5, 72]
var ikinciDeger = Math.max(...arrayValue) ///...spread operatorlar

function function1(a, b, c, d) {
    return a + b + c + d
}
// console.log(function1(...arraYyMethod))

console.log(ikinciDeger)

//IF Else

var age = 19;
if (age <= 18) {
    console.log("giris icazeniz yoxdu")
} else {
    console.log("girisinize icaze verildi")
}


let x = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}

//arrow function
// let y = (a, b) => a * b;
// console.log(y(7, 8))

// var y = vusalinFuntionu(10, 2);

// vusalinFuntionu(c, d) {
//     return c / d
// }


// let multiplys = (x, y) => x * y;
// console.log(multiplys(5, 6));


//push
// var arraYyMethod = [4, 18, 19, 22, 35, 23]
// console.log(arraYyMethod)
//push sondan elave edir
// var pushMethod = arraYyMethod.push("vusal")
//onden elave edir datalari
// console.log(pushMethod)
// var unShift = arraYyMethod.unshift("emil", "nuray")

// console.log(unShift)
//pop so9nuncu elementi sene getirir
// var popMthod = arraYyMethod.pop()
// console.log(popMthod)

//shift
//ilk elementi gertirr
// var shifMt5hod = arraYyMethod.shift()
// console.log(shifMt5hod)


//sort elifba sirasina gore duzur
// var sortMethod = arraYyMethod.sort()
// console.log(sortMethod)

// filter
// var filterMethod = arraYyMethod.filter(e => e > 19)
// console.log(typeof filterMethod.sort())

// var age = 19;
// if (age < 18 && age<=18) {//ikisidee ya tru dondermelidi ya false,biri tru olsa bele bu islem true donmur
//     console.log("giris icazeniz yoxdu")
// } else {
//     console.log("girisinize icaze verildi")ve opetaroru
// }

// var age = 19;
// if (age < 18 || age<=18) {
//     console.log("giris icazeniz yoxdu")
// } else {
//     console.log("girisinize icaze verildi")
// }
// if (a > b && a < c)


// var data = [1, 2, 3, 4, 5]
for (i = 0; i < 10; i++) {
    document.write(i)
}

// function sumESC6(...arr) {
//     let result = 0;
//     arr.forEach(item => result += item);
//     return result;
// }
// console.log(sumESC6(14, 17, 19, 44, 27));

var degerim = 17;
if (degerim === true) {
    console.log("true")
} else {
    console.log("false deyil")
}

//== degerin beraber olub olmadigin yoxxlayir

//===degerin hemde novun yoxluyur



//LOOP
// for
//for-in
//foreach

var myArrays = ['rahide', 'vusal', 'nezrin']
    // console.log(myArrays[0])
    // console.log(myArrays[1])
    // console.log(myArrays[2])


//for
for (i = 0; i < myArrays.length; i++) {
    console.log(myArrays[i])
}

//for-in
var myArrays2 = ['mahmuova.rahide@gmail.com', 'hak', 'vusal.seeddar@gmail.com', 'sdfdvhz', 'hak', 'doIHoSGS', 'sdfdvhz', 'hak', 'doIHoSGS', 'sdfdvhz', 'hak', 'doIHoSGS']
for (var i in myArrays2) {
    console.log(myArrays2[i])
}
var myArrays3 = ['forEach', 1, 2, 3, 18, 22, 25]
    //forEach

myArrays3.forEach(function(e) {
    return console.log(e)
})

//function

function myFunction(a, b) {
    return a + b;
}

console.log(myFunction(3, 5))

//filter tekrar
var myfilter = myArrays3.filter((e) => e > 18)
console.log(myfilter)

//map

var mymap = myArrays2.map((e) => e)
console.log(mymap.splice(7, 11))

//Dom elements
//document-object-model

document.querySelector('#vusal').innerHTML = 'vusal' //id
document.querySelector('.rahide').innerHTML = 'rahide' //class

document.getElementById("vusal").style.width = '100px';
document.getElementById("vusal").style.height = '100px';
document.getElementById("vusal").style.backgroundColor = 'red';


// element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }

// document.getElementById('mybutton').addEventListener('click', myFuctions);

// function myFuctions() {
//     return alert(myfilter);
// }


document.querySelectorAll("#credit").forEach(e => e.click())