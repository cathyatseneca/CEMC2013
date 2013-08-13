/* @pjs preload="data/1.jpg,data/2.jpg"; */

int c = 1;
PImage flowers, pottery;
int step = 1;

void setup(){
  size(400, 300);
  pottery = loadImage("data/1.jpg");
  flowers = loadImage("data/2.jpg");
  image(pottery, 0, 0);
}

void draw(){
  if(step == 1){
     blend(flowers, 0, 0, 
            width, c+1, 
            0, 0, 
            width, c+1, LIGHTEST);
      c+=4;
      if(c >= height){
        step++;
        c = 0;
      }
  }
   else if(step == 2){
     blend(pottery, 0, 0, 
            width, c+1, 
            0, 0, 
            width, c+1, DARKEST);
      c+=4;
      if(c >= height){
        step++;
        c = 0;
      }
  } else {
    step = 1;
  }
}
