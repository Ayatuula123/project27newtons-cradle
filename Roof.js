class  Roof {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(X,Y,width,height,{isStatic:true});
    this.width = width;
    this.height = height;
    World.add(World,this.body);
}
display(){
    Push();
    recMode(CENTER);
    Fill(128,128,128);
    rect(this.body.position.X,this.body.position.Y,this.width,this,height);
    Pop();
  }

}