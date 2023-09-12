// new Date('01.09.2023');
// date.toLocaleString('default', { month: 'long', year: 'numeric'});
// console.log(month);

var body = document.getElementById( 'calendar');
var dateInput= document.getElementById( 'date-input');
var goButton= document.getElementById( 'go-button');

goButton.onclick= function() {
//alert( "Das Datum ist: " + dateInput.value);

// Table Element dem Body hinzufügen
const tableElement= document.createElement( 'table');
body.appendChild( tableElement);

var tableRowElement = document.createElement( 'tr');
const tableHeadElement = document.createElement( 'th');
tableHeadElement.setAttribute( 'colspan', '7');

const date= new Date(dateInput.value);
const monthAndYear= date.toLocaleString('default', { month: 'long', year: 'numeric'});
var textElement= document.createTextNode( monthAndYear);

tableHeadElement.appendChild( textElement);
tableRowElement.appendChild( tableHeadElement);
tableElement.appendChild(tableRowElement);


let myDate= new Date( dateInput.value);

do{
//console.log( myDate.toLocaleString('en', { weekday: 'long'}));
myDate.setDate(myDate.getDate() + 1);

tableRowElement = document.createElement( 'tr');
var tableCellElementMo = document.createElement( 'td');
/*textElementMo = document.createTextNode( myDate.toLocaleString('de', { weekday: 'long'}));

tableCellElementMo.appendChild( textElementMo);
tableRowElement.appendChild( tableCellElementMo);*/




}
while( myDate.getDay() != 1);

//tableElement.appendChild(tableRowElement);

 do{

var tableCellElement = document.createElement( 'td');
textElement = document.createTextNode(myDate.toLocaleString('de', { weekday: 'long'}));
tableCellElement.appendChild( textElement);
tableRowElement.appendChild( tableCellElement);
myDate.setDate(myDate.getDate() + 1);
tableElement.appendChild(tableRowElement);

}
while ( myDate.getDay() != 1);

var dayOfMonth = 1;
tableRowElement = document.createElement('tr');

do{

    
    var tableCellElement = document.createElement('td');
    textElement = document.createTextNode(dayOfMonth);
    tableCellElement.appendChild(textElement);
    tableRowElement.appendChild( tableCellElement);
    var dayOfMonth = dayOfMonth + 1;
    tableElement.appendChild(tableRowElement);

    if (dayOfMonth === 7 || 14 || 21 || 28){
        var tableRowElement = document.createElement('tr');
    }

}
while ( dayOfMonth <= 31);

/*var tableCellElementDi = document.createElement( 'td');
textElementDi = document.createTextNode("Dienstag");
tableCellElementDi.appendChild( textElementDi);
tableRowElement.appendChild( tableCellElementDi);

var tableCellElementMi = document.createElement( 'td');
textElementMi = document.createTextNode("Mittwoch");
tableCellElementMi.appendChild( textElementMi);
tableRowElement.appendChild( tableCellElementMi);

var tableCellElementDo = document.createElement( 'td');
textElementDo = document.createTextNode("Donnerstag");
tableCellElementDo.appendChild( textElementDo);
tableRowElement.appendChild( tableCellElementDo);

var tableCellElementFr = document.createElement( 'td')
textElementFr = document.createTextNode("Freitag");
tableCellElementFr.appendChild( textElementFr);
tableRowElement.appendChild( tableCellElementFr);

var tableCellElementSa = document.createElement( 'td');
textElementSa = document.createTextNode("Samstag");
tableCellElementSa.appendChild( textElementSa);
tableRowElement.appendChild( tableCellElementSa);

var tableCellElementSo = document.createElement( 'td');
textElementSo = document.createTextNode("Sonntag");
tableCellElementSo.appendChild( textElementSo);
tableRowElement.appendChild( tableCellElementSo);*/

}

window.onload= function() {
}

