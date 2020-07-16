class Chain {
    constructor(body1, body2){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: 10
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        var point1 = this.body.bodyA.position;
        var point2 = this.body.bodyB.position;
        line(point1.x, point1.y, point2.x, point2.y);
    }
}