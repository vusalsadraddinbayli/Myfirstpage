function changeColor(color) { /*burda color yerine istenilen ad yazmaq olar*/
            document.bgColor = color;
        }

        
var firstname, secondname, fullname
firstname = prompt("Adınız")
secondname = prompt("Soyadınız")
fullname = firstname + " " + secondname;
alert("Xoş gəlmisən" + " " + fullname);


var number1, number2, sum;
number1 = prompt("ilk rəqəmi daxil edin")
number2 = prompt("ikinci rəqəmi daxil edin")
sum = parseInt(number1) + parseInt(number2) /* parseint funksiyasi reqemlerin toplanmasini bize gosterecek(mes:6+3=9, yoxsa netice 63 cixacaq*/
alert("Toplam = " + sum);
