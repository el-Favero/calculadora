// colocando os alertas

var nome = prompt("digite seu Nome");
alert("seja bem vindo, " + nome);
document.getElementById("conteudo").innerHTML = "Ola, aluno(a) "+ nome;

function media(){
  // Obtendo os valores das entradas
  var nota1 = parseFloat(document.getElementById("cx1").value);
  var nota2 = parseFloat(document.getElementById("cx2").value);
  var nota3= parseFloat(document.getElementById("cx3").value);
  
  // Calculando a média
  var media = (nota1 + nota2 + nota3) / 3;
 var participou = parseFloat(document.getElementById("cx4").value);
  var frequencia = (participou/10)*100

if(media>= 7 && frequencia >= 75){
 alert  ("você foi Aprovado, parabéns " + nome)
}
else if(media <7 && frequencia  >75 ){
  alert (" voce está de exame " + nome)
}
else {
  alert (" voce está reprovado " + nome)
}

}

