let nota = Number(prompt("nota:"))
if (nota >=7 ){
status='Aprovado'}
else if  (nota >=5 && nota <=6.9){
status='Recuperação';
}
else if  (nota <5){
status='Reprovado';
}
 console.log(status)