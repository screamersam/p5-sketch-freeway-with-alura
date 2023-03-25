//variaveis
let street; // rodovia

let actor; // ator

let soundTrack; // musica de trilha
let soundColision; // som de colisão
let soundPoint; // som de ponto

function preload(){  
  
  //imagem representando um treicho de rodovia
  street = loadImage("img/estrada.png");  
  
  //ator representado pela imagem de uma vaca?
  actor = loadImage("img/ator-1.png");
  
  //vetor de veiculos vindo da direita
  cars = [
    loadImage("img/carro-1.png"),
    loadImage("img/carro-2.png"),
    loadImage("img/carro-3.png")
  ]
  
  //vetor de veiculos vindo da esquerda
  leftCars = [
    loadImage("img/carro-1.png"),
    loadImage("img/carro-2.png"),
    loadImage("img/carro-3.png")
  ]
  
  //som para trilha do jogo
  soundTrack = loadSound("sons/trilha.mp3");
  
  //som para colisão com veiculos
  soundColision = loadSound("sons/colidiu.mp3");
  
  //som para acumulo de pontos
  soundPoint = loadSound("sons/pontos.wav");  
}