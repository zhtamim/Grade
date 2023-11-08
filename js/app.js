let num = Number (prompt("Enter Your Number"));

if(num>=80 && num<=100){
    document.querySelector('h1').innerText = 'A+'
}else if(num>=70 && num<80){
    document.querySelector('h2').innerText = 'A'
}else if(num>=60 && num<70){
    document.querySelector('h3').innerText = 'A-'
}else if(num>=50 && num<60){
    document.querySelector('h4').innerText = 'B'
}else if(num>=40 && num<50){
    document.querySelector('h5').innerText = 'C'
}else if(num>=33 && num<40){
    document.querySelector('h6').innerText = 'D'
}else if(num>=0 && num<33){
    document.querySelector('p').innerText = 'F'
}else{
    document.querySelector('b').innerText = 'Please check your number again.'
}
