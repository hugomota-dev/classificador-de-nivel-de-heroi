# 1️⃣ Desafio Classificador de nível de Herói - GFT Start #6 - Lógica de Programação

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

1. Se XP for menor do que 1.000 = Ferro
2. Se XP for entre 1.001 e 2.000 = Bronze
3. Se XP for entre 2.001 e 5.000 = Prata
4. Se XP for entre 5.001 e 7.000 = Ouro
5. Se XP for entre 7.001 e 8.000 = Platina
6. Se XP for entre 8.001 e 9.000 = Ascendente
7. Se XP for entre 9.001 e 10.000= Imortal
8. Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## Requisitos Adicionais

Além do objetivo principal, o código foi atualizado para permitir a entrada de dados através do terminal([utilizando o prompt-sync](https://www.dio.me/articles/como-executar-um-arquivo-js-pelo-terminal)), tornando os testes mais rápidos e dinâmicos. Dessa forama, o usuário pode inserir o nome e a quantidade de experiência do herói diretamente no momento da execução do programa.

Além disso, utilizei o ["Template strings" do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals), uma funcionalidade para colocar variáveis dentro das mensagens, substituindo a necessidade de usar o sinal de "+" para concatenar. A sintaxe utilizada é a seguinte:

~~~javascript
console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
~~~

### Pré-requisitos para executar o projeto

1. Clone este repositório para sua máquina local:

~~~bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
~~~

2. Instale as depedências: 

~~~bash
npm install prompt-sync
~~~

3. Execute o projeto:

~~~bash
node index.js
~~~

