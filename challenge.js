var shades = [160,70,90,10,20,45,25,60,];
var rect=[];
  colorMode(HSB);
  noStroke();

function setup() {
  createCanvas(600, 400);
	for (var i = 0; i< 8; i++) {
		rect[i]={
			x:i*width/9,
			y:0,
			w:width/9,
			h:height,
			s:shades[i],
			drawRect:function(){
			fill(this.s,100,100);
			rect(this.x,this.y,this.w,this.h);
		},
			slide:function(){
				this.x=this.x+5;
				if(this.x>width){
					this.x=0;
				}
			},
	}
}
}


function draw() {
	for (var i = 0; i< 8; i++) {
		rect[i].drawRect();
		rect[i].slide();
	}
}
		
