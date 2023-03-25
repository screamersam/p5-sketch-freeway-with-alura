let cars = [0, 1, 2];

//dimensão dos veiculos
let cars_length = 50; 
let cars_height = 30;

// posição inicial veiculos direita
let cars_x_init = [450, 450, 450];
let cars_y_init = [45, 100, 155];

// posição inicial veiculos esquerda
let cars_l_x_init = [-50, -50, -50];
let cars_l_y_init = [210, 265, 330];

// posição dos veiculos da direita
let cars_x = cars_x_init;
let cars_y = cars_y_init;

// posição dos veiculos da esquerda
let cars_l_x = cars_l_x_init;
let cars_l_y = cars_l_y_init;

// velocidade do veiculo 1 2 e 3
let cars_velocity = [3, 3.5, 4];

// define uma nova velocidade
function newVelocity() {
  return random(5) / 10;
}

// movimenta veiculos da direita para esquerda
function carMoviment() {
    
  for(let car in cars){
    
    cars_x[car] -= cars_velocity[car] +newVelocity(); 
  }  
}

//movimenta veiculos da direita para direita
function carLeftMoviment() {
  
  for(let car in leftCars){
    
    cars_l_x[car] += cars_velocity[car] +newVelocity(); 
  }
}

//exibe os veiculos
function carShow() {  
  
  //direita
  for(let car in cars){
    
    image(cars[car], 
          cars_x[car], 
          cars_y[car], 
          cars_length,
          cars_height);
  }
  
  //esquerda
  for(let car in leftCars){
    
    image(leftCars[car], 
          cars_l_x[car], 
          cars_l_y[car], 
          cars_length,
          cars_height);
  }
}

// reinicia a posição dos veiculos da direita
function reloadCarPosition() {  
  
  for(let car in cars) {
   
    if(cars_x[car] < -cars_length) {
    
      cars_x[car] = 400 +cars_length;
      
    }
  }
}

// reinicia a posição dos veiculos da esquerda
function reloadCarLeftPosition() { 
  
  for(let car in leftCars) {
   
    if(cars_l_x[car] > 400 +cars_length) {
    
      cars_l_x[car] = 0 -cars_length;
      
    }
  }
}