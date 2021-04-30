class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2,

            
			}
            this.image=loadImage("paper.png");
            this.body=Bodies.circle(x, y, w, h);
            
            
    function keyPressed() {
        if(keyCode === UP_ARROW){
           Matter.Body.applyForce(paperObject.body.position,{x:130,y:145});
        }
    }
	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}