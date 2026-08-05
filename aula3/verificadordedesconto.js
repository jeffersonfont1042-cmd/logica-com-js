let valor = Number(prompt("valor:"))
let status;
if (valor <=100) {
    status ='sem desconto';
    console.log (valor, status);   
} else if (valor >=101 && valor <= 500 ) {       
    status ='10% de desconto';
    console.log((valor * 10)/100 , status);
} else if (valor > 500) {
    status =' 20%';
    console.log((valor * 20)/100 , status);
}
 