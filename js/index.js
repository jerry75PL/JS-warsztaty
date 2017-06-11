'use strict';
/*JSON*/

//var jsonPracownicy = {
//    "pracownicy": [
//        {
//            "firstName": "Krystian",
//            "lastName": "Dziopa"
//    },
//        {
//            "firstName": "Anna",
//            "lastName": "Szapiel"
//    },
//        {
//            "firstName": "Piotr",
//            "lastName": "Żmuda"
//    }
//]
//};
//
//
////var test = '{ "employees" : [' +
////'{ "firstName":"John" , "lastName":"Doe" },' +
////'{ "firstName":"Anna" , "lastName":"Smith" },' +
////'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
////
////console.log(test);
//
//console.log(jsonPracownicy);
//
////var obj = JSON.parse(test);
////
////console.log(obj);
//
////for ( var i=0; i < imiona.length; i++ ) {
////console.log( 'Imię numer ' + i + ': ' + imiona[ i ] );
////}
//
//
//jsonPracownicy.pracownicy.forEach(function (element, i) {
//    console.log('Imię:' + element.firstName, 'Nazwisko:' + element.lastName, 'Index:', i);
//});
//


//var red = document.getElementsByClassName('czerwony');
//var green = document.getElementsByClassName('zielony');
//var blue = document.getElementsByClassName('niebieski');
//console.log(red);
//console.log(green);
//console.log(blue);


//function changeColor() {
//    document.getElementsByClassName('czerwony')[0].style.backgroundColor = "green";
//    document.getElementsByClassName('zielony')[0].style.backgroundColor = "red";
//}

//function changeColor() {
//    
//    document.getElementsByClassName('zielony')[0].className = "czerwony";
//    document.getElementsByClassName('czerwony')[0].className = "zielony";
//}

function changeColor() {

    document.getElementsByTagName('p')[0].className = "czerwony";
    document.getElementsByTagName('p')[1].className = "zielony";
}

var test = document.getElementsByTagName('p');
console.log(test);

document.getElementsByClassName('niebieski')[0].onclick = changeColor;






