var n=[Number(prompt("digite primeiro numero:")),
Number(prompt("digite o segundo numero:")),
Number(prompt("digite o terceiro numero:")),
Number(prompt("digite o quarto numero:")),
Number(prompt("digite quinto numero:")),
Number(prompt("digite sexto numero:")),
Number(prompt("digite setimo numero:")),
Number(prompt("digite oitavo numero:")),
]
let cont = 0;
for (valor of n){
    if (valor%2==0) {
        cont++;
    }
}
console.log(n%2==0)

console.log("Quantidade de pares: ", cont)