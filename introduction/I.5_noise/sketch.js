function setup() {
  createCanvas(640, 360)
  //background(50, 89, 100)


}

t = 0
function draw() {
  background(50, 89, 100)

  n = noise(t)
  x = map(n,0,1,0,width)

  noStroke()
  ellipse(x,180,16,16)

  t += 0.01

}
