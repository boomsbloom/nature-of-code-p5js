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
    stepx = random(-1, 1)
    stepy = random(-1, 1)

    this.x += stepx
    this.y += stepy
  }

}
