const listBox = document.querySelector('.list-cont');
const tabBox = document.querySelector('.table-cont');

fetch('data.json')
.then(res => res.json())
.then(data => {
    const liczba = data.length;
    //console.log(liczba);

    const list = document.createElement('ul');
    list.classList.add('lista');

    for(let i = 0; i < liczba; i++){
        const listElem = document.createElement('li');
        listElem.classList.add(data[i].Imie)

        listElem.innerHTML = `${data[i].Imie} - ${data[i].Miasto}`

        list.appendChild(listElem);
    }

    listBox.appendChild(list);


    const table = document.createElement('table');
    table.classList.add('tabela');

    const tabHead = document.createElement('tr');
    tabHead.innerHTML = `<th>Imie</th><th>Nazwisko</th><th>Miasto</th><th>Wiek</th><th>Płeć</th>`
    table.appendChild(tabHead);

    for(let i = 0; i < liczba; i++){
        const tabElem = document.createElement('tr');
        tabElem.classList.add(data[i].Imie)

        tabElem.innerHTML = `<td>${data[i].Imie}</td><td>${data[i].Nazwisko}</td><td>${data[i].Miasto}</td><td>${data[i].Wiek}</td><td>${data[i].Plec}</td>`

        table.appendChild(tabElem);
    }

    tabBox.appendChild(table);
});