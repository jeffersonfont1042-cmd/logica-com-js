let peso = Number(prompt("peso:"));
let altura = Number(prompt("altura:"));
let imc = (peso/(altura*altura));
if (imc <=18.5 ){
status='abaixo do peso'}
else if  ( imc >=18.5 && imc <= 24.9){
status='peso normal';
}
else if  ( imc >=25 && imc <= 29.9){
status='sobrepeso';
} 
else if  ( imc >=30){
status='obeso';
} 

 console.log(imc)
 console.log(status)