let board;
let position = 1;
let player = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  board = new Board();
}
function draw() {
  background(220);
  board.show();
  board.update();
  //console.log(position)
  board.Bolle();
  board.Tur();
  console.log(this.fields);
}
