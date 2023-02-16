//Pobranie elementow do edycji
const btnsA = document.querySelectorAll('.js-btn-a');
const btnsZ = document.querySelectorAll('.js-btn-z');
// console.log(btns);

const ilosc = document.querySelectorAll('.ilosc');
const nazwa = document.querySelectorAll('.nazwa');

// console.log(ilosc)

const rows = document.querySelectorAll('.row1');


//Funkcja sprawdzajaca wartosc komorki w tabeli
function check(){
    for(let i = 0; i < ilosc.length; i++){
        const valueIle = ilosc[i].innerHTML;
    
        if(valueIle == 0){
            ilosc[i].style.backgroundColor = 'red';
        }else if(valueIle > 1 && valueIle < 5){
            ilosc[i].style.backgroundColor = 'yellow';
        }else if(valueIle >= 5 || nowaIlosc >= 5){
            ilosc[i].style.backgroundColor = 'honeydew';
        }
    }
}

//Wywolanie funkcji
check();


//Przycik zmieniajacy wartosc w tabeli i wywolanie funkcji sprawdzajacej
for(let a = 0; a<btnsA.length; a++){
    btnsA[a].addEventListener('click', () => {
        // console.log('dziala');
        let nowaIlosc = prompt('Podaj nową ilość:');

        if(isNaN(nowaIlosc) || nowaIlosc == null || nowaIlosc == ""){
            alert('Wprawadź wartość liczbową');
        }else{
            ilosc[a].innerHTML = nowaIlosc;
        }
        // console.log(nowaIlosc);
        
        check();
    });
}


// Przycisk umozliwiajacy zoabczyc czy zamowienia zostalo zlozone i jego numer
let num = 0;

for(let b = 0; b<btnsZ.length; b++){
    // console.log(btnsZ[b]);
    btnsZ[b].addEventListener('click', () => {
        num += 1;
        confirm('Zamówienie nr: ' + num + ' Produkt: ' + nazwa[b].innerHTML)
    });
};