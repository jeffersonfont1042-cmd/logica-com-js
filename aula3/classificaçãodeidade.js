let idade = Number(prompt("idade:"))
let status;
if ( 0<= idade && idade <=12) {
    status ='criança';
    } else if ( 13<= idade && idade <=17) {       
    status ='adolescente';
} else if (idade >=60) {
    status ='idoso';
} else if ( 18<= idade && idade <=59) {
    status ='adulto';
}
 console.log (status)   