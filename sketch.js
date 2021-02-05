const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState="play";
var back;

function preload(){
back=loadImage("GamingBackground.png")

}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
  ground=new Ground(600,600,3000,20)
box1=new Building(700,100,70,70)
box2=new Building(700,100,70,70)
box3=new Building(700,100,70,70)
box4=new Building(700,100,70,70)
box5=new Building(700,100,70,70)
box6=new Building(700,100,70,70)
box7=new Building(600,100,70,70)
box8=new Building(600,100,70,70)
box9=new Building(600,100,70,70)
box10=new Building(600,100,70,70)
box11=new Building(600,100,70,70)
box12=new Building(600,100,70,70)
box13=new Building(500,100,70,70)
box14=new Building(500,100,70,70)
box15=new Building(500,100,70,70)
box16=new Building(500,100,70,70)
box17=new Building(500,100,70,70)
box18=new Building(500,100,70,70)
box19=new Building(500,100,70,70)
box20=new Building(500,100,70,70)
hero=new Hero(300,400,80,80)
rope=new Rope(hero.body,{x:300,y:50})
}

function draw(){
    background(back)
    Engine.update(engine)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    hero.display()
   rope.display()
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
//}


function mouseReleased(){
    rope.fly();
  
}



