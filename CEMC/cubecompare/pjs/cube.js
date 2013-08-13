/* @pjs preload="bricks.jpg"; */
 
PImage img;
 
void setup(){
  size(400, 400, P3D);
  img = loadImage("bricks.jpg"); 
  textureMode(NORMALIZED);
  noStroke();
}

void draw(){
  background(200);
  translate(width/2, height/2, 200);
  rotateX(-frameCount/200);
  scale(50);
  
  beginShape(QUADS);
  texture(img);
  vertex(-1, -1, 0, 0, 0);
  vertex( 1, -1, 0, 1, 0);
  vertex( 1,  1, 0, 1, 1);
  vertex(-1,  1, 0, 0, 1);  
  endShape();
}
