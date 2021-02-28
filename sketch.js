var roof,rope,bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,bobobject6;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	world.add(world,roof);

	bobobject1 = new Bob(250,300);
	bobobject2 = new Bob(300,300);
	bobobject3 = new Bob(350,300);
	bobobject4 = new Bob(400,300);
	bobobject5 = new Bob(450,300);


	rope1 = new rope(bobobject1.body,roof.body,-100,0);
	world.add(world,rope1);

	rope2 = new rope(bobobject2.body,roof.body,50,0);
	world.add(world,rope2);

	rope3 = new rope(bobobject3.body,roof.body,00,0);
	world.add(world,rope3);

    rope4 = new rope(bobobject4.body,roof.body,+50,0);
	world.add(world,rope4);

    rope5 = new rope(bobobject5.body,roof.body,+100);
	world.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  background("white");
  engine.update(engine);

  roof.display();


  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keycode===32){
matter.body .addforce(bobobject1.body,bobobject1.body.position,{x:730,y:0});

  }

}