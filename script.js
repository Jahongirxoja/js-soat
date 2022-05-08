

// var number = +prompt('vaqni kiritng')
// if (number < 18) {
//     alert(' kundizgi ' + (number - 12))
// }else if (number < 21) {
//     alert(' kechgi ' + (number - 12))
// }else if (number < 24) {
//     alert(' tungi ' + (number - 12))
// }else if  (isNaN(number))  {
//     alert ('soatni kirgazing')
// }




var time = +prompt('soat nechi bo\`ldi')

if(time > 0 && time <= 3) {
    alert('soat tungi ' + time)
}else if(time > 3 && time <= 7) {
    alert ('soat tongi ' + time)
}
else if(time >7 && time <= 12) {
    alert('soat kunduzgi ' +time)
}else if(time >12 && time <= 17) {
    alert('soat tushki ' +(time - 12))
}else if(time >17 && time <= 21) {
    alert('soat kechki ' +(time - 12))
}else if(time >21 && time <= 23) {
    alert('soat tungi ' +(time - 12))
}else if(time == 24 || time == 0) {
    alert('soat tungi ' +time)
}else {
    console.error('xato kiritingiz')
}



















