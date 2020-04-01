//create class for the constraint

class Joint 
{
    //create the constructor function
    constructor(bodyA, bodyB) 
    {

        var options = 
        {

            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.07,
            length: 100

        }
        this.joint = Constraint.create(options);
        World.add(world, this.joint);


    }

     //create the display function
    display() 
    {
        var pointA = this.joint.bodyA.position;
        var pointB = this.joint.bodyB.position;

        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }





};