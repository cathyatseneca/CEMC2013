int brickHeight = 10;
int brickWidth = 30;

int x = -brickWidth;
int drawingAtY = 400 - brickHeight;
boolean done = false;
boolean oddLayer = false;

void setup(){
  size(400, 400);
  background(255);
  noStroke();
}

color getRandomColor(){
  
  int r = (int)random(5);
  if(r == 1) return color(128, 80, 45);
  if(r == 2) return color(111, 95, 52);
  if(r == 3) return color(101, 78, 39);
  if(r == 4) return color(128, 70, 50);
  else return color(120, 100, 50);
}

void drawBrick(){
  x += brickWidth;
      
  fill(getRandomColor());
  rect(x, drawingAtY, brickWidth-1, brickHeight-1);
      
  if(x > width){
    x = -brickWidth;
    drawingAtY -= brickHeight;        
    oddLayer = !oddLayer;
        
    if(oddLayer){
      x -= brickWidth/2;
    }
  }
  
  if(drawingAtY < -brickHeight){
    done = true;
  }
}

void draw(){
  if(!done){
    drawBrick();
  }  
}