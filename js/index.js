'use strict';
/*JSON*/

var jsonPracownicy = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
    },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
    },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
    }
]
};


//var test = '{ "employees" : [' +
//'{ "firstName":"John" , "lastName":"Doe" },' +
//'{ "firstName":"Anna" , "lastName":"Smith" },' +
//'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//
//console.log(test);

console.log(jsonPracownicy);

//var obj = JSON.parse(test);
//
//console.log(obj);

//for ( var i=0; i < imiona.length; i++ ) {
//console.log( 'Imię numer ' + i + ': ' + imiona[ i ] );
//}


jsonPracownicy.pracownicy.forEach( function( element, i ) {
console.log('Imię:'+element.firstName, 'Nazwisko:'+ element.lastName,'Index:', i );
} );