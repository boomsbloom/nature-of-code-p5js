function setup() {
  createCanvas(640, 360)
  background(50, 89, 100)
}

function draw() {

  xPos = randomGaussian()
  yPos = randomGaussian()
  r = randomGaussian()
  g = randomGaussian()
  b = randomGaussian()
  sd = 60
  mean = 320

  colMean = 255/2
  colSd = 255/2

  x = sd * xPos + mean
  y = 50 * yPos + height/2

  r = colSd * r + colMean
  g = colSd * g + colMean
  b = colSd * b + colMean

  noStroke()
  fill(r, g, b, 127) //display at half intensity
  ellipse(x,y,16,16)

}
