var matriz = [];

for (let i=0;i<5;i++) {
    let linha=[];
    for (let j=0;j<5;j++)   {
        if (i==j){
            linha.push(1);
        } else {
           linha.push(0); 
        }
    } matriz.push(linha);
}

console.log(matriz)

