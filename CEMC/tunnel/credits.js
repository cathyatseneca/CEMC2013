/* @pjs preload = "img.jpg"; */

NameParticle lastName = null;
boolean ranSetup = false;

PFont font;
ArrayList renderedNames = new ArrayList();
int currNameIndex = 0;
NameParticle particle;
boolean namesSetup = false;

PImage vortexImage;
float vortexRot = 0;
float texTop = 0;
float texBottom = 200;
float SPEED = 1;

// Vortex rotation speed
float RAD_PER_SECOND = PI/10;

// Vortex is a cylinder.
int CYLINDER_RES = 10;
float[] tubeX = new float[CYLINDER_RES];
float[] tubeY = new float[CYLINDER_RES];

int NUM_STARS = 250;
ArrayList stars;

float lastTime;

int deltaTimer = 0;

float getDelta(){
  float millisElapsed = millis() - deltaTimer;
  deltaTimer = millis();
  return millisElapsed;
}

class Star{
  PVector pos;
  PVector vel;

  Star(){
    reset();
  }

  void reset(){
    pos = new PVector(random(-width*2, width*2),random(-height*2, height*2),0);
    vel = new PVector(pos.x,pos.y, pos.z);
    vel.normalize();
    vel.mult(random(5,15));
  }

  void update(float secondsElapsed){
    pos.x += vel.x * secondsElapsed;
    pos.y += vel.y * secondsElapsed;
    pos.z += vel.z * secondsElapsed;

    // If the name went out of bounds
    if(abs(pos.x) > width*2 || abs(pos.y) > height*2){
      reset();
    }
  }

  void render(){
    stroke(255);
    strokeWeight(1);
    pushMatrix();
    translate(width/2,height/2, 0);
    point(pos.x, pos.y, 0);
    popMatrix();
  }
}

//
class NameParticle{
  String str;
  PVector pos;
  PVector vel;
  float life;
  PVector col;
  boolean redIncreasing;
  float red;

  NameParticle(){
    reset();
  }

  void update(secondsElapsed){
    pos.x += vel.x;
    pos.y += vel.y;
    pos.z += vel.z * secondsElapsed * 40;

    pos.x -= 5;

    if(pos.z > life){
      reset();
    }
  }

  float getZ(){
    return pos.z;
  }

  void reset(){
    str = getNextName();

    pos = new PVector();
    pos.x = -textWidth(str)/2;
    pos.y = 0;
    pos.z = -3000;

    if(lastName != null){
      pos.z = lastName.getZ() - 3000;
    }

    vel = new PVector();
    vel.x = random(-10,10);
    vel.y = random(-10,10);
    vel.z = 25;

    life = 400;
    lastName = this;
  }

  void draw(){
    fill(255);
    text(str, pos.x, pos.y, pos.z);
  }
}

void setup(){
  size(900, 600, P3D);

  vortexImage = loadImage("img.jpg");


  
  font = createFont("Verdana", 150);
  textFont(font);
  textSize(200);

  // don't want to care about drawing stars over vortex
  hint(DISABLE_DEPTH_TEST);

  stars = new ArrayList();
  for(int i = 0; i < NUM_STARS; i++){
    stars.add(new Star());
  }

  float angle = 360.0 / CYLINDER_RES;
  for (int i = 0; i <= CYLINDER_RES; i++) {
    tubeX[i] = cos(radians(i * angle));
    tubeY[i] = sin(radians(i * angle));
  }
}

String getNextName(){
  String ret = names[currNameIndex++];
  if(currNameIndex >= names.length){
    currNameIndex = 0;
  }
  return ret;
}

void draw(){
  float secondsElapsed = getDelta()/1000.0f;

  if(!ranSetup && millis() > 6000){
    // two names at a time
    for(int i = 0; i < 2; i++){
      renderedNames.add(new NameParticle());
    }
    ranSetup = true;
  }

  // stretch the vortex to hide the small circle at the end.
  float fov = PI/1.5;
  float cameraZ = (width/2.0) / tan(fov/2.0);
  perspective(PI/1.5, float(width)/float(height), cameraZ/10.0, cameraZ*100.0);

  background(0);

  noStroke();
  noFill();
  pushMatrix();
  translate(width/2, height/2, -1000);

  scale(1, 1, 50);
  rotateZ(vortexRot += RAD_PER_SECOND * secondsElapsed);
  rotateX(PI/2);

  // Draw the Vortex
  beginShape(QUAD_STRIP);
  texture(vortexImage);

  for(int i = 0; i <= CYLINDER_RES; i++) {
    float x = tubeX[i] * 360;
    float z = tubeY[i] * 360;
    float u = vortexImage.width / CYLINDER_RES * i;

    vertex(x, -100, z, u, texBottom);
    vertex(x, 100, z, u, texTop);
  }
  endShape();

  texTop += SPEED/2;
  texBottom += SPEED/2;

  if(texBottom >= vortexImage.height){
    texTop = 0;
    texBottom = 200;
  }
  popMatrix();


  // Draw Stars
  Star s; 
  for(int i = 0; i < NUM_STARS; i++){
    s = (Star)stars.get(i);
    s.render();
  }

  // Draw Names
  pushMatrix();
  translate(width/2, height/2, 100);
  for(int i = 0; i < renderedNames.size(); i++){
    NameParticle np = (NameParticle)renderedNames.get(i);
    np.update(secondsElapsed);
    np.draw();
  }
  
  popMatrix();
}
