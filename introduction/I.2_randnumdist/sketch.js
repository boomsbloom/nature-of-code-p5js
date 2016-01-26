function setup() {
  createCanvas(640, 240)

  this.randomCounts = []
  this.randomCountLength = 20
  for (i = 0; i < this.randomCountLength; i++) {
    this.randomCounts[i] = 0
  }
}

function draw() {
  background(50, 89, 100)

  stroke(119, 79, 98)
  fill(219, 79, 98)

  index = int(random(20))
  this.randomCounts[index]++

  w = width/this.randomCountLength

  for (i = 0; i < this.randomCountLength; i++) {
    rect(i*w, height-this.randomCounts[i], w-1, this.randomCounts[i])
  }
}
