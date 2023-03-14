const div = document.querySelector('.sort');
const divSec = document.querySelector('.sorted');
const num1 = document.querySelector('.num1').value;
const num2 = document.querySelector('.num2').value;
const num3 = document.querySelector('.num3').value;
const num4 = document.querySelector('.num4').value;
const num5 = document.querySelector('.num5').value;
const num6 = document.querySelector('.num6').value;
const btn = document.querySelector('.sortBtn');
const wyn = document.querySelector('.wyn');

let tab = [num1, num2, num3, num4, num5, num6];

var arr = [43, 31, 88, 13, 97, 34];

btn.addEventListener('click', () => {
  //console.log(tab);
  bblSort(arr);
})




function bblSort(arr){
for(var i = 0; i < arr.length; i++){
  for(var j = 0; j < (arr.length - i - 1); j++){
    if(arr[j] > arr[j+1]){
       var temp = arr[j]
       arr[j] = arr[j+1]
       arr[j+1] = temp
     }
   }
 }
 console.log(arr);
}



