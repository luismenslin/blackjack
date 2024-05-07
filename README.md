# BLACKJACK

![image](https://github.com/luismenslin/blackjack/assets/104454182/bc757657-4187-4d60-9723-79f7ebe6f3ef)

## Sobre o projeto
O projeto foi desenvolvido com ReactJS, utilizando o conceito de componentização, hooks e context API. O jogo é um blackjack, onde o jogador pode apostar e jogar contra o dealer. 

O objetivo do blackjack é vencer o dealer obtendo uma mão que seja mais próxima de 21 do que a do dealer, sem exceder esse valor.

### Valor das Cartas
  - As cartas numéricas (2 a 10) valem seu valor nominal.
  - As cartas de figura (Valete, Dama, Rei) valem 10 pontos cada.
  - O Ás vale 01 ponto ou 11 pontos (Dependendo da soma do valor das cartas na mão do player).

### Jogo em ação!
  - Pré Jogo: O player recebe R$1000,00 para apostar no jogo, ele deve escolher a quantia que deseja apostar na primeira rodada, e a cada rodada subsequente deverá fazer a sua escolha de aposta.
  - Início do Jogo: Cada jogador recebe duas cartas. As cartas do player são mostradas viradas para cima. O dealer mostra apenas uma de suas cartas, deixando a outra em segredo.
  - Jogada do Jogador: Durante a rodada, o player pode optar por "permanecer" (stand), ou seja, não receber mais cartas, ou "comprar carta" (hit), recebendo uma carta adicional.
  - Jogada do Dealer: Depois que o player toma sua decisão, o dealer realiza a sua ação, sempre sacando cartas até que sua mão some 17 ou mais.

### Determinação do Vencedor
  - Se a mão do jogador for mais próxima de 21 do que a do dealer e não ultrapassar 21, o jogador vence.
  - Se a mão do jogador ultrapassar 21, ele perde automaticamente, independentemente da mão do dealer.
  - Se a mão do dealer ultrapassar 21, o player irá ganhar a rodada.

### Fim do Jogo
  - Pagamento: Se o jogador vencer, ele recebe uma quantia igual à sua aposta.
  - Empate: Se a mão do jogador e a do dealer tiverem o mesmo valor, é considerado um empate, e o jogador mantém sua aposta.


## Como rodar

O primeiro passo para rodar o projeto, é ter o NodeJS instalado na máquina. Caso não tenha, você pode baixar o NodeJS [aqui](https://nodejs.org/en/).

Clonar este repositório, com o comando abaixo:
### `git clone https://github.com/luismenslin/blackjack.git`

Após isso, é necessário instalar as dependências do projeto, para isso, execute o comando abaixo:
### `npm install`

Após a instalação das dependências, execute o comando abaixo para rodar o projeto:
### `npm start`

O projeto será executado na porta 3000, então acesse [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

