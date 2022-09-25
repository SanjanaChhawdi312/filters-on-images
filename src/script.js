var iimage=null;
var oimage=null;
var iCanvas;
var oCanvas;
//function to upload input and output image
function loadImage() {
  var ifile=document.getElementById("ifile");
  iimage= new SimpleImage(ifile);
  iCanvas=document.getElementById("ican");
  iimage.drawTo(iCanvas);
}
//------------------GRAY----------------//function to call composite gray function
function changeGray() {
  //check that images are loaded
  if (iimage == null  || ! iimage.complete()) {
    alert("Image not loaded");
  }
  var finalImage = createCompositeGray();
  finalImage.drawTo(oCanvas);
}
//function to compose gray color
function createCompositeGray() {
  //composing gray screen
  var output=new SimpleImage(iimage.getWidth(),iimage.getHeight());
  for(var pix of iimage.values()) {
      var avg=((pix.getRed())+(pix.getBlue())+(pix.getGreen()))/3;
    pix.setGreen(avg);
    pix.setBlue(avg);
    pix.setRed(avg);
    var x=pix.getX();
    var y=pix.getY();
    oCanvas=document.getElementById("ocan");
    var pixel = iimage.getPixel(x,y);
    output.setPixel(x,y,pixel);
    }
  return output;
}
//------------------RAINBOW-------------
//function to call composite rainbow function
function changeRainbow() {
  if (iimage == null  || ! iimage.complete()) {
    alert("Image not loaded");
  }
  var finalImage = createCompositeRainbow();
  finalImage.drawTo(oCanvas);
}
//function to compose rainbow color
function createCompositeRainbow() {
  var output=new 
SimpleImage(iimage.getWidth(),iimage.getHeight());
  var h=iimage.getHeight();
  for(var pix of iimage.values()) {
    if(pix.getY()<1/7*h)
    {
      pix.setRed(148);
      pix.setBlue(211);
    }
    if((pix.getY()>=1/7*h)&&(pix.getY()<2/7*h))
    {
       pix.setRed(75);
       pix.setBlue(130);
    }
    if((pix.getY()>=2/7*h)&&(pix.getY()<3/7*h))
    {
        pix.setBlue(255);  
    }
    if((pix.getY()>=3/7*h)&&(pix.getY()<4/7*h))
    {
        pix.setGreen(255);
    }
    if((pix.getY()>=4/7*h)&&(pix.getY()<5/7*h))
    {
        pix.setRed(255);
        pix.setGreen(255);
    }
    if((pix.getY()>=5/7*h)&&(pix.getY()<6/7*h))
    {
        pix.setRed(255);
        pix.setGreen(127);
    }
    if((pix.getY()>=6/7*h)&&(pix.getY()<=h))
    {
        pix.setRed(255);
    }
    var x=pix.getX();
    var y=pix.getY();
    oCanvas=document.getElementById("ocan");
    var pixel = iimage.getPixel(x,y);
    output.setPixel(x,y,pixel);
  }
return output;
}

//------------------BLUR----------------
//function to call composite blur
function changeBlur() {
  if (iimage == null  || ! iimage.complete()) {
    alert("Image not loaded");
  }
  var finalImage = createCompositeBlur();
  finalImage.drawTo(oCanvas);
}
//function to compose blur output
function createCompositeBlur() {
var output=new SimpleImage(iimage.getWidth(),iimage.getHeight());
var randomInt = (Math.random()*10)-10;
for(var pix of iimage.values()) {
  if(Math.random() < 0.5){
    var otherX=pix.getX() + randomInt;
    var otherY=pix.getY() + randomInt;
    if (otherX < 0) {
        otherX = pix.getX();
    }
    if (otherY < 0) {
        otherY = pix.getY();
     }
     if (otherX > output.getWidth() - 1) {
         otherY = output.getWidth() - 1;
     }
     if (otherY > output.getHeight() - 1){
        otherY = output.getHeight() - 1; 
     }
  }
  oCanvas=document.getElementById("ocan");
  output.setPixel( pix.getX(), pix.getY(), iimage.getPixel(otherX, otherY));
  }
  return output;
}
//------------------RED-----------------
//function to call composite red function
function changeRed() {
  //check that images are loaded
  if (iimage == null  || ! iimage.complete()) {
    alert("Image not loaded");
  }
  var finalImage = createCompositeRed();
  finalImage.drawTo(oCanvas);
}
//function to compose red color
function createCompositeRed() {
  var output=new SimpleImage(iimage.getWidth(),iimage.getHeight());
  for(var pix of iimage.values()) {
    pix.setRed(255);
    var x=pix.getX();
    var y=pix.getY();
    oCanvas=document.getElementById("ocan");
    var pixel = iimage.getPixel(x,y);
    output.setPixel(x,y,pixel);
    }
  return output;
}
//-----------------------HUE----------------
//function to call composite hue
function changeHue() {
  //check that images are loaded
  if (iimage == null  || ! iimage.complete()) {
    alert("Image not loaded");
  }
  var finalImage = createCompositeHue();
  finalImage.drawTo(oCanvas);
}
function createCompositeHue() {
  //composing gray screen
  var output=new SimpleImage(iimage.getWidth(),iimage.getHeight());
  for(var pix of iimage.values()) {
      var avg=((pix.getRed())+(pix.getBlue())+(pix.getGreen()))/3;
    if(avg<128)
    {
      pix.setGreen(2*avg);
      pix.setBlue(0);
      pix.setRed(0);
    }
    else
    {
      pix.setGreen(255);
      pix.setBlue((2*avg)-255);
      pix.setRed((2*avg)-255);
    }
    var x=pix.getX();
    var y=pix.getY();
    oCanvas=document.getElementById("ocan");
    var pixel = iimage.getPixel(x,y);
    output.setPixel(x,y,pixel);
    }
  return output;
}
//-----------------CREATOR'S CHOICE-----------
//function to call creator choice program
function change() {
  if (iimage == null || ! iimage.complete()) {
    alert("Image not loaded");
  }
  var finalImage=createComposite();
  finalImage.drawTo(oCanvas);
}
//function to compose creator choice output
function createComposite() {
  var output=new SimpleImage(iimage.getWidth(),iimage.getHeight());
oCanvas=document.getElementById("ocan");
var context = oCanvas.getContext("2d"); 
  context.beginPath();
  context.rect(20,20,480,480);
  context.stroke();
  for(var pix of iimage.values()) {
    if(pix.getX()<=20||pix.getX()>=iimage.getWidth()-20){
      pix.setGreen(0);
      pix.setRed(0);
      pix.setBlue(0);
    }
    else if(pix.getY()<=20||pix.getY()>=iimage.getHeight()-20){
      pix.setGreen(0);
      pix.setRed(0);
      pix.setBlue(0);
    }
    var x=pix.getX();
    var y=pix.getY();
    var pixel = iimage.getPixel(x,y);
    output.setPixel(x,y,pixel);
  }
  return output;
}


//function to compose hue filter
//function to rest
function reset() {
  var ifile=document.getElementById("ifile");
  oimage=new SimpleImage(ifile);
  oimage.drawTo(oCanvas);
  iimage=new SimpleImage(ifile);
}
//function to call do clear in both input and output
function clearCanvas() {
  doClear(iCanvas);
  doClear(oCanvas);
}

//function to clear canvas
function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
  return;
}