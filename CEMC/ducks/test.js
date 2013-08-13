float z  = 0.0;
float r = 0;

OBJModel model;

int rows = 4;
int cols = 4;

float zoom = 150;

void setup() {
  size(450, 450, P3D);

  model = new OBJModel();
  model.load("duck.obj");

  PFont font = loadFont("Arial");
  textFont(font, 20);
}

void draw(){
  background(128);

  text("FPS: " + Math.floor(frameRate), 0, 0, -50);
  if(zoom > -1900){
    zoom -= z;
  }

  translate(width/2 , height/2);
  
  int x;
  int y;
  
  for(x= -cols; x <= cols; x++){
    for(y = -rows; y <= rows; y++){
      pushMatrix();
      
      translate(0, 80, 0);
      translate(x * 250, y * 253, zoom);

      rotateZ(PI);
      rotateY(PI + (sin(x + y)* 10 + frameCount/200) * 10);
      
      model.drawMode(POLYGON);
      popMatrix();
    }
  }
}

void mouseReleased(){
  z = 5;
}