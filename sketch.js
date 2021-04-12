var dots = {    
    x:40,
    y:100,
  }
  var col ={
    r:255,
    g:204,
    b:255,
  }
  var col2 ={
    r:204,
    g:255,
    b:255,
  }
var blackButton;
var grayButton;
var yellowButton;
var greenButton;
function setup() {
  createCanvas(400, 400);
  background(255);
  
text("choose a color", 3, 14); 
  
  blackButton = createButton ('Black')
  blackButton.position(100,0)
  blackButton.style('background-color', 'black')
  blackButton.mousePressed(turnblack)
  
  grayButton = createButton ('Gray')
  grayButton.position(150,0)
  grayButton.style('background-color', 'gray')
  grayButton.mousePressed(turngray)
  
  yellowButton = createButton ('Yellow')
  yellowButton.position(200,0)
  yellowButton.style('background-color', 'yellow')
  yellowButton.mousePressed(turnyellow)
  
  greenButton = createButton ('Green')
  greenButton.position(250,0)
  greenButton.style('background-color', 'green')
  greenButton.mousePressed(turngreen)
}

function draw() {
  //text("choose a color", 3, 14); 
  fill(0,208,219)
  fill(0,55,66)
  noStroke()
  fill(91,0,204)
  ellipse(70,100,80,80);//head
  fill(206,151,0)
  triangle(30,75,48,20,86,60);//hat
  fill(0,0,0)
  ellipse(110,110,20,10);//lip
  ellipse(75,100,10,10);//eye
  fill(0,0,0)
  ellipse(330,100,80,80);//head
  fill(86,0,1)
  triangle(310,60,355,20,375,85);//hat
  fill(50,50,50)
  ellipse(290,110,20,10);//lip
  fill(255,255,255)
  ellipse(325,100,10,10);//eye
  fill(0,22,150)
  ellipse(325,115,5,15);//tear
  ellipse(325,135,5,15);//tear
  fill(180,180,180)
  rect(45,140,50,80);//body
  rect(45,220,15,10);//leg
  rect(80,220,15,10);//leg
  fill(0,0,0);
  ellipse(70,190,5,5);//button
  ellipse(70,180,5,5);//button
  ellipse(70,170,5,5);//button
  fill(70,70,70)
  rect(305,140,50,80);//body
  rect(305,220,15,10);//leg
  rect(340,220,15,10);//leg
  fill(255,255,255);
  ellipse(330,190,5,5);//button
  ellipse(330,180,5,5);//button
  ellipse(330,170,5,5);//button
  fill(250,250,250,250,50)
  //ellipse(mouseX,200,150,400)
  line(200,0,200,400);//division
  dots.x = random(0,190)
  dots.y = random(0,400)
  fill(col.r,col.g,col.b)
  ellipse(dots.x,dots.y,10,10)
  dots.x = random(210,400)
  dots.y = random(0,400)
  fill(col2.r,col2.g,col2.b)
  ellipse(dots.x,dots.y,10,10)
  
  fill(random(100,255),random(0,0),random(0,255),150);
  stroke(random(100,255),random(0,0),random(0,255));
  strokeWeight(random(0.1,5))
  rect(mouseX,mouseY,30,30)
  
}
  function turnblack() {
  background('black');
}

function turngray() {
  background('gray');
}

function turngreen() {
  background('green');
}
function turnyellow() {
  background('yellow');
}

