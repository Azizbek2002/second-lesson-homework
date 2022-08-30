let number = document.querySelector('#number1');
document.querySelector('#submit').addEventListener('click', function (evt) {
    evt.preventDefault()
  let num = +number.value;
    if (num % 2) {
           document.querySelector('#result1').innerHTML = 'Result: Toq'
        }else{
            document.querySelector('#result1').innerHTML = 'Result: Juft'
        } 
        
});

// ============================================2-MASALA===
let ages = document.querySelector('#number2');

document.querySelector('#submit1').addEventListener('click', function (evt) {
    evt.preventDefault()
  let age = +ages.value;
if (age <= 16) {
    document.querySelector('#result2').innerHTML = 'Result: Oquvchi'
} else if(age > 16 && age <= 25) {
    document.querySelector('#result2').innerHTML = 'Result: Student'
} else if(age > 25 && age <= 60){
    document.querySelector('#result2').innerHTML = 'Result: Ishchi'
}else{
    document.querySelector('#result2').innerHTML = 'Result: Nafaqaxo`r'
}
})

// ============================3-MASALA======================
let numb = document.querySelector('#number3');
let numb1 = document.querySelector('#number4');
let numb2 = document.querySelector('#number5');


document.querySelector('#submit2').addEventListener('click', function (evt) {
    evt.preventDefault()

    let num1 = +numb.value;
    let num2 = +numb1.value;
    let num3 = +numb2.value;
    let total1 = num1 + num2;
    let total2 = num2 + num3;
    let total3 = num1 + num3;
    
if (total2 < total1 &&  total1 > total3 ) {
    document.querySelector('#result3').innerHTML = 'Result: 1chi va 2chi sonlar yig`indisi katta ';
}else if (total1 < total2 && total2 > total3 ) {
    document.querySelector('#result3').innerHTML = 'Result: 2chi va 3chi sonlar yig`indisi katta';
}else if (total2 < total3 && total3 > total1 ) {
    document.querySelector('#result3').innerHTML = 'Result: 1chi va 3chi sonlar yig`indisi katta';
}
})
// =============================================================
let years = document.querySelector('#number6');
let months = document.querySelector('#number7');



document.querySelector('#submit3').addEventListener('click', function (evt) {
    evt.preventDefault()
    let year = years.value;
    let res = year % 4;
    let month = months.value;
    let day;

switch (month) {
    case 'yanvar':
        day = 31;
        break;
    case 'fevral':
        day = 28;
         break;
    case 'mart':
        day = 31;
         break;
    case 'aprel':
        day = 30;
         break;
    case 'may':
        day = 31;;
         break;
    case 'iyun':
        day = 30;
         break;
    case 'iyul':
        day = 31;
         break;
    case 'avgust':
        day = 31;
         break;
    case 'sentabr':
        day = 30;
         break;
    case 'oktabr':
        day = 31;
         break;
    case 'noyabr':
        day = 30;
         break;
    case 'dekabr':
        day = 31;
         break;
    default:
        day ='Bunaqa oy yuq dovdir';
        break;
}

if (month === 'fevral' && res == 0) {
   day = 29
}
document.querySelector('#result4').innerHTML = `${year} yilning ${month} oyi ${day} kundan iborat`;;
let result = `${year} yilning ${month} oyi ${day} kundan iborat`;
})



























