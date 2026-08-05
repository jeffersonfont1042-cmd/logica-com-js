let ano = Number(prompt("digite um ano:"));
let formula =((ano % 4 == 0 && ano % 100 != 0) || (ano%400==0));
if (formula = true) {
status='ano bissexto'}
else {
status='não é ano bissexto'
}
console.log(status)
