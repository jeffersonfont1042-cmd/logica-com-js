let matriz = [];
for (let i=0; i<5; i++){
    let produto = prompt("Digite o nome do produto: ");
    let preco = (Number(prompt("Digite o preço unitario: ")));
    let quantidade =(Number(prompt("digite a quantidade em estoque do produto ")));
    matriz.push([produto, preco, quantidade])   
 };
let valor_total = 0;
for (let valores of matriz){
    valor_total += valores[1]*valores[2];
}
console.log(valor_total)

for (let valores of matriz){
    console.log("\nProduto:", valores[0], "\nPreço:",valores[1], "\nQuantidade:",valores[2], "\nTotal:", (valores[1]*valores[2]));
}

