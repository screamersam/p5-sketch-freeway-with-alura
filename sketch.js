/*
  this code is part of Alura course concepts of JS
*/
function setup() {
  
  createCanvas(400, 400);
  
  // inicia trilha sonora
  noCursor();
  soundTrack.loop();
  cool();
}

function draw() {  
  
  background(street); // exibe a imagem da rodovia
  actorShow(); // exibe o ator
  carShow(); // exibe os veiculos
  actorMoviment(); // movimenta o ator na tela
  carMoviment(); // movimenta os veiculos da direita na tela
  carLeftMoviment(); // movimenta os veiculos da esquerda na tela
  reloadCarPosition(); // renova os veiculos da direita à posição inicial
  reloadCarLeftPosition(); // renova os veiculos da esquerda à posição inicial
  colisionVerify(); // verifica colisão do ator com veiculos
  pointsPreview();
  lifePreview(); // exibe quantidade de vidas
  makePoints(); // exibe quantidade de pontos
  endGame(); // verifica se o jogo acabou
}