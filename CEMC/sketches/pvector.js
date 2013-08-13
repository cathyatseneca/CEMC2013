void setup(){
  size(400, 400);
}
void draw(){
    
  // partially clear
  fill(255, 5);
  noStroke();
  rect(0, 0, width, height);
  translate(width/2, height/2);
  
  rotate(frameCount/100.0);
  translate( sin(frameCount/120.0) * 15,  cos(frameCount/100.0) * 40);
  scale( 0.5 + abs(sin(frameCount/100.0)) , 1 );
  
  stroke(0);
  strokeWeight(10);
  line(0,0, 100, 0);
  line(100, 0, 90, 10);
  line(100, 0, 90,-10);
  strokeWeight(6);
  stroke(255);
  line(0,0, 100, 0);
  line(100, 0, 90, 10);
  line(100, 0, 90,-10);
}
