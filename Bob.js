class Bob{

    constructor(x,y,r){
  
var options={
    restitution:1.0,
    friction:1.0,
    density:1.0
}
this.x=x;
this.y=y;
this.r=r;
        this.body=Bodies.circle(x,y,20,options)
        this.radius=20;
        World.add(world,this.body);
    }
display(){
    
    var pos=this.body.position;
      push()
      translate(pos.x,pos.y);
   ellipseMode(CENTER);
    strokeWeight(4)
    stroke("pink")
    ellipse(0,0,this.width,this.height);
    pop()
}


}