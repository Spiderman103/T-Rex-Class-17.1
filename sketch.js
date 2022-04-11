var shape;

function setup() 
{
  createCanvas(400, 400);
  shape = new Box(100,200,20,20,2,1);
  edges = createEdgeSprites();

}
function draw() 
{
  background(220);
  shape.show();
  shape.moveup();
  shape.bounceOff(topEdge);
  shape.bounceOff(bottomEdge);
}