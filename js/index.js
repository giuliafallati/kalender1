var body = document.getElementById('calendar');
var dateInput = document.getElementById('date-input');
var goButton = document.getElementById('go-button');

// function als vereinfachung von: myDate.setDate(myDate.getDate() + 1);
function incrementDate(date) {
    date.setDate(date.getDate() + 1);
}

goButton.onclick = function () {

    // Table Element dem Body hinzufügen
    const tableElement = document.createElement('table');
    body.appendChild(tableElement);

    // Titelzeile (Monat + Jahr) erstellen
    var tableRowElement = document.createElement('tr');
    const tableHeadElement = document.createElement('th');
    tableHeadElement.setAttribute('colspan', '7');

    const date = new Date(dateInput.value);
    const monthAndYear = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    var textElement = document.createTextNode(monthAndYear);

    tableHeadElement.appendChild(textElement);
    tableRowElement.appendChild(tableHeadElement);
    tableElement.appendChild(tableRowElement);

    // Zeile mit den Wochentagen erstellen
    let myDate = new Date(dateInput.value);

    //den nächsten Montag suchen
    do {

        // function als vereinfachung von: myDate.setDate(myDate.getDate() + 1);
        incrementDate(myDate);
    }
    while (myDate.getDay() != 1);

    tableRowElement = document.createElement('tr');
    tableElement.appendChild(tableRowElement);

    do {

        var tableCellElement = document.createElement('td');
        tableCellElement.id = 'id-weekday';
        textElement = document.createTextNode(myDate.toLocaleString('de', { weekday: 'long' }));
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild(tableCellElement);
        myDate.setDate(myDate.getDate() + 1);

    }
    while (myDate.getDay() != 1);

    // Kalendertage auffüllen
    myDate = new Date(dateInput.value);

    // letzten Montag vor dem 1. suchen
    var firstDay = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
    while (firstDay.getDay() != 1) {
        firstDay.setDate(firstDay.getDate() - 1);

    }

    // nächsten Sonntag nach dem letzten Tag des Monates (ultimo) suchen
    var lastDay = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0);
    while (lastDay.getDay() != 0) {
        lastDay.setDate(lastDay.getDate() + 1);
    }

    // Tage auffüllen
    // myDate = firstDay;
    var tableCellElement = null;
    var currentDay = firstDay;

    while (firstDay <= lastDay) {

        // Am Montag eine neue Zeile einfügen
        if (firstDay.getDay() == 1) {

            tableRowElement = document.createElement('tr');
            tableElement.appendChild(tableRowElement);
        }

        tableCellElement = document.createElement('td');
        textElement = document.createTextNode(firstDay.toLocaleString('de', { day: 'numeric' }));
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild(tableCellElement);

        // Wenn der Monat nicht stimmt eine andere Formatierung wählen
        var currentMonth = myDate.getMonth();
        var monthOfDay = currentDay.getMonth();

        if (currentMonth != monthOfDay) {
            tableCellElement.id = 'id-notThisMonth';
        }

        firstDay.setDate(firstDay.getDate() + 1);
    }
}

window.onload = function () {
}

