let matriz_turma = {};
for (let i=0; i<4; i++){
   let nome = prompt("Digite o nome: ");
   let notas = [];
   for (let j=0; j<3; j++){
       notas.push(Number(prompt("Digite a nota: ")));
   };
   let media;
   let soma = 0;
   for (let valor of notas){
       soma += Number(valor);   
   };
   media = Number(soma/3);
   matriz_turma[nome] = {nota:notas, medias:media}
};
for (nomeAluno in matriz_turma){
   console.log("Nome:", nomeAluno);
   for (dados in matriz_turma[nomeAluno]){
       let notas_str = "";
       if (dados == "nota"){
           for (notaAluno of matriz_turma[nomeAluno][dados]){
               notas_str += (String(notaAluno) + " ")
           }
           console.log("Notas: ", notas_str);
       } else {
       console.log("Media: ", matriz_turma[nomeAluno][dados]);
       };
   }
}
