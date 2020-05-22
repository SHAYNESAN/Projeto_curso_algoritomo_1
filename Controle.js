var nota1, nota2, nome, media;
nome = prompt("Digite o seu nome do aluno")
nota1 = prompt("Digite a nota 1 ")
nota2 = prompt("Digite a nota 2 ")
media = (parseInt (nota1) +parseInt (nota2)) / 2;
if (media >= 5)
   alert("Aprovado "+ nome)
else
   alert("Reprovado " + nome)
