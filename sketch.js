let cw = console.log;
let ang = 0;
let balls = [];
let my_path = [];
let myFont = [];
let fontIncIndex = 0

let jsonFonts=[
'ABeeZee-Regular.ttf',
'beyond-wonderland.regular.ttf',
'Discipuli Britannica Bold.ttf',
'fofbb_reg.ttf',
'KGSecondChancesSketch.ttf',
'trench100free.ttf'
]

let y_text = 0

function generateballs(){
	// generating balls

	// make ball each 10 ms
	let geranrator = setInterval(()=>{
		balls.push(new Ball(random(0,width), random(0,height), 16, my_path))
	},10)

	// 900ms later -> kill generator
	setTimeout(()=>{
		clearInterval(geranrator)
	},900)

}

function preload(){
	jsonFonts.forEach( some_font=>{
		myFont.push(loadFont('fonts/' + some_font))
	})
}

function setupFont(){
	textSize(width/14)
	textAlign(CENTER);
	fill(255, 20, 147, 100)
	stroke(255, 215, 0, 20)
	strokeWeight(2)

	setInterval(()=>{

		fontIncIndex+=1
		if (fontIncIndex >= myFont.length) {
			fontIncIndex = 0
		}
		textFont(myFont[fontIncIndex])
	},1500)
}

function setup(){
	
	let x_size = 1280
	let y_size = 720

	createCanvas(x_size*.8,(y_size*.5)*.8);
	
	// setting my path
	my_path = builder("11111221111133331111122")

	setupFont()
	generateballs()

}

let builder = str => {return str.split('').map(x => Number(x))}

let inRange = (num, start, stop) => {

	return num <= stop && num>= start
}

function mouseClicked(){

	balls.push(new Ball(mouseX, mouseY, 16, my_path))
}


function draw(){
	y_text+=.03

	background(200,frameCount+40%255,frameCount%255)

	text('Gogol snow', width/2, height/2-sin(y_text)*10)
	balls.forEach( x=>{
		x.update()
		x.render()
	})

}

