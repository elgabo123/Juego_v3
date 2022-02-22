class madera{
    constructor(x,y,r){
        var options={
            density:1,
            isStatic:false,
            restitution:0.3
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Madera.png");
        this.body= Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);

    }


   display(){
       var maderapos= this.body.position;
       push();
       translate(maderapos.x, maderapos.y);
       imageMode(CENTER);
       image(this.image, 0,0,this.r,this.r);
       pop();
   }
}