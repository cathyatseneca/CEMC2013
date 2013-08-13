/* @pjs preload= "aqueous.jpg,carden.jpg,continuum.jpg, electro.jpg, faa.jpg, grass.jpg,
		 haohao.jpg, jellyfish.jpg, letterpairs.gif, liquid.jpg, mitidentity.jpg,
		 mz.png, papa.jpg, pond.gif, skyline.gif, stateoftheunion.gif, strata.jpg, suzung.jpg,
		 thinking.jpg, aeolab.jpg, balldroppings.gif, branching.jpg, camp.jpg, cho.jpg, 
		cop15.jpg, foxmovies.jpg, golan_cards.jpg, golberg.jpg, intheair.jpg, mit.jpg, 
		mos.gif, mtv.gif, mud.jpg, mycelium.png, nervous.jpg, npz.gif, platonic.jpg, 
		proximity.gif, realtime.jpg, silica.jpg, simdiv.jpg, terre.jpg, wf3.png"
	transparent="true"

*/

int numImages=40;
PImage images[]=new PImage[43];
int curr;
int maxHeight=500;
int maxWidth=500;
float rotateAmt=0;
float x=0;
float y=0;
float xinc=0.25;
float yinc=0.25;
void setup(){
  int i;
  background(255,0);
  images[0] = loadImage("aqueous.jpg");
  images[1] = loadImage("carden.jpg");
  images[2] = loadImage("continuum.jpg");
  images[3] = loadImage("electro.jpg");
  images[4] = loadImage("faa.jpg");
  images[5] = loadImage("grass.jpg");
  images[6] = loadImage("haohao.jpg");
  images[7] = loadImage("jellyfish.jpg");
  images[8] = loadImage("letterpairs.gif");
  images[9] = loadImage("liquid.jpg");
  images[10] = loadImage("mitidentity.jpg");
  images[11] = loadImage("mz.png");
  images[12] = loadImage("papa.jpg");
  images[13] = loadImage("strata.jpg");
  images[14] = loadImage("suzung.jpg");
  images[15] = loadImage("thinking.jpg");  

  images[16] = loadImage("aeolab.jpg");
  images[17] = loadImage("branching.jpg");
  images[18] = loadImage("camp.jpg");
  images[19] = loadImage("cho.jpg");
  images[20] = loadImage("cop15.jpg");
  images[21] = loadImage("foxmovies.jpg");
  images[22] = loadImage("golan_cards.jpg");
  images[23] = loadImage("golberg.jpg");
  images[24] = loadImage("intheair.jpg");
  images[25] = loadImage("mit.jpg");
  images[26] = loadImage("mud.jpg");
  images[27] = loadImage("mycelium.png");
  images[28] = loadImage("nervous.jpg");
  images[29] = loadImage("platonic.jpg");
  images[30] = loadImage("realtime.jpg");
  images[31] = loadImage("silica.jpg");
  images[32] = loadImage("simdiv.jpg");
  images[33] = loadImage("terre.jpg");
  images[34] = loadImage("wf3.png");

  images[35] = loadImage("npz.gif");
  images[36] = loadImage("proximity.gif");
  images[37] = loadImage("mos.gif");
  images[38] = loadImage("mtv.gif");
  images[39] = loadImage("balldroppings.gif");

  curr=0;
  size(maxWidth,maxHeight);
  frameRate(10);
}
void draw(){
/*  int x=int(random (50.0,maxWidth-50.0));
  int y=int(random(50.0, maxHeight-50.0));
  float rotateAmt=random(0.0,20.0);*/
  rotateAmt+=(0.1);
  pushMatrix();
  translate(maxWidth/2, maxHeight/2);
  rotate(rotateAmt);
  image(images[curr],x,y);
  popMatrix();
  curr++;
  x=x+xinc;
  y=y+yinc;
  if(curr==numImages){
    curr=0;
  }
  if(x>200)
    xinc=-0.25;
  if(x< 0)
    xinc=0.25;
  if(y>100)
    yinc=-0.25;
  if(y < 200)
    yinc=0.25;
}
