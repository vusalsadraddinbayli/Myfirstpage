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

console.log(ikinciDeger)