// Bouncing Triangle
// Andor Salga
void setup(){
    size(400, 400);
}
void draw(){
  background(0);
  translate(width/2, height/2);
  float x = cos(frameCount/10) * 40;
  float y = -150 + abs(sin(frameCount/10)) * 35;
  
  strokeWeight(5);
  stroke(128);

  fill( abs(cos(frameCount/50)) * 150, 70, sin(frameCount/100)*100);
  
  triangle(   -150, 50, 
               x, y,
              150, 50);


  pushMatrix();
  fill(0);
  stroke(255);
  translate(0, 150);
  rotate(frameCount/20);
  translate(0, -20);
    triangle( -40, 0, 
               0, 50,
              40, 00);
  point(-10, 20);
  point(10, 20);
  line(-15, 10, 15, 10);
  popMatrix();


  pushMatrix();
  fill(0);
  stroke(255);
  translate(-150, -150);
  rotate((-frameCount+150)/20);

  translate(0, -20);
    triangle( -40, 0, 
               0, 50,
              40, 00);
  point(-10, 20);
  point(10, 20);
  line(-15, 10, 15, 10);
  popMatrix();

  pushMatrix();
  fill(0);
  stroke(255);
  translate(150, -150);
  rotate((-frameCount+100)/20);
  translate(0, -20);
    triangle( -40, 0, 
               0, 50,
              40, 00);
  point(-10, 20);
  point(10, 20);
  line(-15, 10, 15, 10);
  popMatrix();

}
