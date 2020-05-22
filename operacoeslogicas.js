var nota1, nota2, nome, media, passou;
passou = false;
nome = prompt("Digite o seu nome do aluno")
nota1 = prompt("Digite a nota 1 ")
nota2 = prompt("Digite a nota 2 ")
media = (parseInt (nota1) +parseInt (nota2)) / 2;
if (media >= 50)
   passou = true;
if (passou)
   alert("APROVADO" + nome)    
else
   alert("Reprovado " + nome)