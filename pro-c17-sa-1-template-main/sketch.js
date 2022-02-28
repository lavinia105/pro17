var box;
function setup() 
{
  createCanvas(400, 400);
  box = new Box (48,85,10,10,2,2);
}

function draw() 
{
  background(220);
  box.show();
  box.movey();
}

