class Ball{

	constructor(x, y, r=16, path, delay = 10){

		this.pos = createVector(x,y)
		this.r = r
		this.path = path
		this.delay = delay
		this.indeXX = 0
	}


	goDown(){
		this.pos.y-=1
		this.pos.y = this.pos.y<0?height:this.pos.y
	}

	goUp(){
		this.pos.y+=1
		this.pos.y = this.pos.y>height?0:this.pos.y
	}

	goLeft(){
		this.pos.x-=1
		this.pos.x = this.pos.x<0?width:this.pos.x
	}

	goRight(){
		this.pos.x+=1
		this.pos.x = this.pos.x>width?0:this.pos.x
	}


	update(){
		
		let el = this.path[this.indeXX]
		// console.log(el, this.indeXX)

		// text(el + ' ' + this.pos.x + ' ' + this.pos.y, el*10, 50)
		
		if (el == 1) {
			this.goUp();
		}
		if (el == 2) {
			this.goLeft();
		}
		if (el == 3) {
			this.goRight();
		}

		this.indeXX += 1
		if (this.indeXX === this.path.length) {
			this.indeXX = 0
		}
	}

	render(){
		push()
		fill(255)
		noStroke()
		ellipse(this.pos.x,this.pos.y, this.r, this.r)
		pop()
	}

}
