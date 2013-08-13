/* @pjs preload="test.jpg,test2.jpg"; */

int c = 0;
PImage img;
int step = 1;

void setup(){
  size(200, 200);
  background(loadImage("test.jpg")); 
  img = loadImage("test2.jpg");
  image(img, 0, 0);
}

void draw(){
  if(step == 1){
     blend(img, 0, 0, 
            width, c, 
            0, 0, 
            width, c, MULTIPLY);
      c++;
      if(c >= height){
        step++;
        c = 0;
      }
  }
  else if(step == 2){
    blend(img, 0, 0, 
            width, c,
            0, 0, 
            width, c, DIFFERENCE);
    c++;
    if(c >= height){
      step++;
      c = 0;
    }
  }
  else if(step == 3){
    blend(img, 0, 0, 
            width, c,
            0, 0, 
            width, c, ADD);
    c++;
    if(c >= height){
      step++;
      c = 0;
    }
  }

  else if(step == 4){
    blend(img, 0, 0, 
            width, c,
            0, 0, 
            width, c, SUBTRACT);
    c++;
    if(c >= height){
      step++;
      c = 0;
    }
  }


}