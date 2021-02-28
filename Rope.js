class  rope{
    constructor(body1,body2,offsetX,MoffsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var OP = {
            bodyA:body1,
            bodyB:body2,
            pointB:{X:offsetX,Y:this.offsetY}
        }

        this.rope = Matter.constraint.crate(op);
        World.add(World,this.rope);
    }
    display(){
        var point1 =this.rope.bodyA.position;
        var point2 =this.rope.bodyB.position;

        STROKEWEIGHT(2);

        var Anchor1X = point.B;
        var Anchor1Y = point.Y;

        var Anchor2X = point2.X+this.offsetX;
        var Anchor2Y = point2.Y+this.offsetY;

        Line(Anchoe1X,Anchoe1Y,Anchor2X,Anchor2Y);

    }

}