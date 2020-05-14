class SlingShot{
    //creates a slingshot from the slingshot class.
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    //makes the slingshot's rubberband disappear when the ball is released from the slingshot.
    fly(){
        this.sling.bodyA = null;
    }

    //attaches the ball to the slingshot when the SPACE key is pressed.
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        //positions the slingshot and give the direction of pull when the ball is pulled in either forward or backward direction.
        image(this.sling1, 200,40);
        image(this.sling2, 170,40);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3, pointA.x+25, pointA.y-10, 15, 30);
            }
            pop();
        }
    }
}