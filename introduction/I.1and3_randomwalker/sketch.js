function setup() {
  createCanvas(480, 270)
  background(50, 89, 100)
  walker = new walker()
}

function draw() {
  walker.display()
  walker.step()
}

//walker class
function walker() {
  this.x = width/2
  this.y = height/2

  this.display = function() {
    stroke(219, 79, 98)
    point(this.x, this.y)
  }

  tx = 0
  ty = 10000
  this.step = function() {
    //up, down, left, right
    //choice = int(random(4))
    // if (choice == 0) {
    //   this.x++
    // } else if (choice == 1) {
    //   this.x--
    // } else if (choice == 2) {
    //   this.y++
    // } else {
    //   this.y--
    // }

    //nine choice
    //stepx = int(random(3)) - 1
    //stepy = int(random(3)) - 1

    //floats
    // stepx = random(-1, 1)
    // stepy = random(-1, 1)
    //
    // this.x += stepx
    // this.y += stepy

    //tending down and (mostly) toward the right
    // choice = random(1)
    // if (choice <= 0.6) {
    //   this.x++
    // } else if (chioce <= 0.7) {
    //   this.x--
    // } else if (choice <= 0.8) {
    //   this.y
    // } else {
    //   this.y++
    // }

    //50% chance of moving toward mouse, else normal random movement
    // choice = random(1)
    // if (choice <= 0.5) {
    //   if (mouseX > this.x) {
    //     this.x++
    //   } else {
    //     this.x--
    //   }
    //   if (mouseY > this.y) {
    //     this.y++
    //   } else {
    //     this.y--
    //   }
    // } else {
    //   //floats
    //   stepx = random(-1, 1)
    //   stepy = random(-1, 1)
    //
    //   this.x += stepx
    //   this.y += stepy
    // }

    //Gaussian random walk
    //xChoice = randomGaussian()
    //yChoice = randomGaussian()

    //floats
    //custom distribution of random numbers
    //stepsize = montecarlo()
    //stepx = random(-stepsize, stepsize)
    //stepy = random(-stepsize, stepsize)

    //perlin noise step map
    noiseStepX = map(noise(tx), 0, 1, 0, 4)
    noiseStepY = map(noise(ty), 0, 1, 0, 4)

    stepx = random(-noiseStepX, noiseStepX)
    stepy = random(-noiseStepY, noiseStepY)

    this.x += stepx
    this.y += stepy

    tx += 0.01
    ty += 0.01

  }

}

function montecarlo() {
  r1 = random(-1, 1)
  p = r1^2
  r2 = random(1)
  if (r2 < p) {
    return r1
  } else {
    montecarlo()
  }
}
