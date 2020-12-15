class Polygon
{
    constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.5,
			friction:0.5,
		};
		this.r=r;
        this.body=Bodies.circle(x, y, this.r/2, options);
        this.image = loadImage("polygon.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var polygonPos=this.body.position;		

			push();
			translate(polygonPos.x, polygonPos.y);
			rectMode(CENTER);
			imageMode(CENTER); 
			image(this.image, 0, 0,this.r,this.r);
			pop();
			
	}

}