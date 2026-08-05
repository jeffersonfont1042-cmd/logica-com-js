let l1 = Number(prompt("lado1:"));
let l2 = Number(prompt("lado2:"));
let l3 = Number(prompt("lado3:"));

if(l1+l2>=l3 && l1+l3>=l2 && l2+l3>=l1){ 
   
 if (l1==l2 && l2==l3){
    console.log("equilatero");
} else if (l1==l2 || l2==l3 || l1==l3){
    console.log("isosceles");
} else {
console.log("escaleno");    
};
}else {
     console.log("Não é um triangulo")
}