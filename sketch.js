const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, stand2, polygon, polygonimage, slingShot1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, 
box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, 
box24, box25;

var gameState = "onSling";
var engine, world;

function preload()
{

}

function setup()
{
    createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

    //polygon = new Polygon(150,500,60);

    //slingShot1 = new SlingShot(this.polygon,{x:100,y:200});

    stand1 = new Ground(630,600,300,15);
    stand2 = new Ground(1150,300,280,15);

    //level1 - tower1
    box1 = new Box(270,285,30,40);
    box2 = new Box(285,285,30,40);
    box3 = new Box(300,285,30,40);
    box4 = new Box(315,285,30,40);
    box5 = new Box(330,285,30,40);
    box6 = new Box(345,285,30,40);
    box7 = new Box(360,285,30,40);

    //level2 - tower1
    box8 = new Box(285,265,30,40);
    box9 = new Box(300,265,30,40);
    box10 = new Box(315,265,30,40);
    box11 = new Box(330,265,30,40);
    box12 = new Box(345,265,30,40);

    //level3 - tower1
    box13 = new Box(300,245,30,40);
    box14 = new Box(315,245,30,40);
    box15 = new Box(330,245,30,40);

    //top - tower1
    box16 = new Box(315,225,30,40);


    //level1 - tower2
    box17 = new Box(540,135,30,40);
    box18 = new Box(555,135,30,40);
    box19 = new Box(570,135,30,40);
    box20 = new Box(585,135,30,40);
    box21 = new Box(600,135,30,40);

    //level2 - tower2
    box22 = new Box(555,115,30,40);
    box23 = new Box(570,115,30,40);
    box24 = new Box(585,115,30,40);

    //top - tower2
    box25 = new Box(570,95,30,40);


	//Engine.run(engine);
}

function draw()
{
    background("black");

    Engine.update(engine);
  
    //polygon.display();
    //slingShot1.display();
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}

//function mouseReleased(){
    //slingShot.fly();
    //gameState = "launched";
//}

function keyPressed(){
    if(keyCode === 32){
       slingShot1.attach(polygon.body);
       polygon.trajectory=[];
       Matter.Body.setPosition(polygon.body,{x:200, y:50});
       slingShot1.attach(polygon.body);
    }
}