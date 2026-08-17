var n=[[Number(prompt("digite primeiro numero:")),
Number(prompt("digite o segundo numero:")),
Number(prompt("digite o terceiro numero:"))],[
Number(prompt("digite o quarto numero:")),
Number(prompt("digite quinto numero:")),
Number(prompt("digite sexto numero:"))],

]
let cont = 0;
for (valor of n){
    for (num of valor){
        if (num>0) {
            cont++;
    }}
}
console.log("Quantidade de numeros positivos: ", cont)
