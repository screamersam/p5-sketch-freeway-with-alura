// posição inicial do ator
let actor_x_init = 200; 
let actor_y_init = 5;

// posição do ator
let actor_x = actor_x_init;
let actor_y = actor_y_init;

// quantidade de vidas inicial do jogador
let life_init = 5;

// velocidade de movimento do jogador
let actor_velocity = 2.2;

let colision = false; // estado de colisão
let limitArea = false; // estado de limite para marcar ponto

let points = 0; // acumula pontos do jogador
let lifes = life_init; // quantidade de vidas do jogador

let canMove = false;

// movimentos do ator
function actorMoviment() {  

  //tecla a
  /*
  if(keyIsDown(65)){
    
    actor_x -= actor_velocity;
  }
  */
  
  //tecla d
  /*
  if(keyIsDown(68)){
    
    actor_x += actor_velocity;
  }
  */
  
  //tecla w
  if(keyIsDown(87) & canMove){
    
    actor_y -= actor_velocity;
  }
  
  //tecla s
  if(keyIsDown(83) & canMove){
    
    actor_y += actor_velocity;
  }
  
  //tecla f5
  if(keyIsDown(32) & canMove){
    
    print('espaço precionado!')
    preload();
  }
}
  
// exibe o personagem do jogador
function actorShow() {
  
  image(actor, actor_x, actor_y, 25, 25);
}

// verifica colisão com veiculos da direita e esquerda
function colisionVerify() {
  
  for(let car in cars) {
    
    colision = collideRectRect(
      cars_x[car], 
      cars_y[car], 
      cars_length, 
      cars_height,
      actor_x, 
      actor_y, 
      25, 
      25
    );
    
    if(colision) {
      
      //print('colidiu');
      resetActorPosition();
      soundColision.play();
      removeLife();
    }
  }
  
  for(let car in cars) {
    
    colision = collideRectRect(
      cars_l_x[car], 
      cars_l_y[car], 
      cars_length, 
      cars_height,
      actor_x, 
      actor_y, 
      25, 
      25
    );
    
    if(colision) {
      
      //print('colidiu');
      resetActorPosition();
      soundColision.play();
      removeLife();
    }
  }
}

// redefine a posição do jogador
function resetActorPosition() {

  actor_x = actor_x_init;
  actor_y = actor_y_init;
  cool();
}

// exibe os pontos do jogador na tela
function pointsPreview() {
  
  textSize(18);
  textAlign(CENTER);
  fill(color(220,30,30))
  text('PONTOS '+points, width/5, 28);
}

// exibe a quantidade de vida do jogador
function lifePreview() {
  
  textSize(18);
  textAlign(CENTER);
  fill(color(235,201,090))
  text('VIDAS '+lifes, width/5 * 4, 28);
}

// marca ponto para o jogador de 10 em 10
function makePoints() {
  
  //rect(0, 400 -5, width, 30);
  colision = collideRectRect(
      0, 
      400 -5, 
      width, 
      30,
      actor_x, 
      actor_y, 
      25, 
      25
    );
  if(colision) {    
    
    points += 10;
    soundPoint.play();
    resetActorPosition();
  }
}

// retira uma vida se a vida for maior que 0
function removeLife() {
  
  if(lifes > 0) {
    
    lifes -= 1;
  }  
}

// termina o jogo se vida for igual a 0
function endGame(){
  
  if(lifes == 0) {
    
    textSize(18);
    fill(color(220,30,30))
    textAlign(CENTER);    
    text('FIM DE JOGO', width/2, height/2);
    text('PONTOS '+points, width/2, height/2 +28);
    text('Inicie o navegador novamente', width/2, height/2 +60);
    
    soundTrack.stop();
    noLoop();
    
    //doScheduleThings();
    //doAsyncAwaitThings();
    
    setTimeout(reloadGame, 5000);
  }  
}

// reinicia o jogo
function reloadGame() {  
  
  print('reload!');
  resetLife();
  loop();
  soundTrack.loop();
}

// reinica a vida
function resetLife() {
  
  lifes = life_init;
}

// trava o jogador por 1 segundo para que ele nao se movimente
function cool() {
  
  canMove = false;
  setTimeout(() =>{
    canMove = true;
  }, 1000);
}