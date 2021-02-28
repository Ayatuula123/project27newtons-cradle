class  Bob{
    
    Constructor(x,y) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.body=Bodies.ciscle(x,y,25,options)
        World.add(world, this.body);

        console.log(this.body);

    }

    display(){
        Push();
        ellipseMode(RADIUS);
        Fill(254,0,255);
        ellipse(this.body.position.x,thia.body.position.y,25,25);
        Pop();
    }

}