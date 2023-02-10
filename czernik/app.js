const btnsA = document.querySelectorAll('.js-btn-a');
const btnsZ = document.querySelectorAll('.js-btn-z');
// console.log(btns);

const ilosc = document.querySelectorAll('.ilosc');
const nazwa = document.querySelectorAll('.nazwa');

// console.log(ilosc)

const rows = document.querySelectorAll('.row1');

for(let i = 0; i < ilosc.length; i++){
    const valueIle = ilosc[i].innerHTML;

    if(valueIle == 0){
        ilosc[i].style.backgroundColor = 'red';
    }else if(valueIle > 1 && valueIle < 5){
        ilosc[i].style.backgroundColor = 'yellow';
    }else if(valueIle> 5 || nowaIlosc < 5){
        ilosc[i].style.backgroundColor = 'honeydew';
    }
}


for(let a = 0; a<btnsA.length; a++){
    btnsA[a].addEventListener('click', () => {
        // console.log('dziala');

        let nowaIlosc = prompt('Podaj nową ilość:');
        // console.log(nowaIlosc);

        const valueIle = ilosc[a].innerHTML;
        
        if(nowaIlosc == 0){
            ilosc[a].style.backgroundColor = 'red';
        }else if(nowaIlosc > 1 && nowaIlosc < 5){
            ilosc[a].style.backgroundColor = 'yellow';
        }else if(nowaIlosc < 5){
            ilosc[a].style.backgroundColor = 'honeydew';
        }

        ilosc[a].innerHTML = nowaIlosc;
    });
}

let num = 0;

for(let b = 0; b<btnsZ.length; b++){
    // console.log(btnsZ[b]);
    btnsZ[b].addEventListener('click', () => {
        num += 1;
        confirm('Zamówienie nr: ' + num + ' Produkt: ' + nazwa[b].innerHTML)
    });
};