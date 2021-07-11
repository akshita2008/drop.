class Umbrella{

    constructor(x,y,r){

        var options={
            isStatic:true
            
        
        }

        
        this.r=r;
        this.body= Bodies.circle(x,y,r,options);
       this.image= loadImage("images/Walking Frame/walking_2.png");
        World.add(world,this.body);
    }


    display(){

        var pos= this.body.position;
        //var angle= this.body.angle;
        //push();
        //translate(pos.x,paperpos.y);
       // rotate(angle);
        //fill("blue");
        imageMode(CENTER);
    image(this.image,pos.x,pos.y+70,300,300);
    
        //pop();
        
        
    }
   
}