class Drop{

    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution: 0.1,
            friction:0.001,
        
        }

        
        this.r=r;
        this.body= Bodies.circle(x,y,5,options);
       
        World.add(world,this.body);
    }


    display(){

        var paperpos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(paperpos.x,paperpos.y);
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
     ellipse(paperpos.x,paperpos.y,5,5);
        pop();
        
        
    }
    updateY(){

    
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
    }
}