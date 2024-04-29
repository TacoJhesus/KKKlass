class Board {
  constructor() {
    console.log("Ohio");
    this.fields = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log("Grimace shake");
  }
  show() {
    //Tegner min spilleplade
    strokeWeight(7);
    line(width / 3, 0, width / 3, height);
    line((width / 3) * 2, 0, (width / 3) * 2, height);
    line(0, height / 3, width, height / 3);
    line(0, (height / 3) * 2, width, (height / 3) * 2);
  }
  //Her logger jeg positionen konstant
  update() {
    for (let i = 0; i < 9; i++) {
      if (
        mouseX > 0 + (width / 3) * (i % 3) &&
        mouseX < width / 3 + (width / 3) * (i % 3) &&
        mouseY > 0 + (height / 3) * floor(i / 3) &&
        mouseY < height / 3 + (height / 3) * floor(i / 3)
      ) {
        position = i;
      }
    }
  }
  //Her tegner jeg bollen
  Bolle() {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i] == 2) {
        if (i < 3) {
          circle(height / 6 + (height / 3) * i, height / 6, (height / 3) * 0.9);
        }
        if (i > 2 && i < 6) {
          circle(
            height / 6 + (height / 3) * (i - 3),
            height / 6 + height / 3,
            (height / 3) * 0.9
          );
        }
        if (i > 5) {
          circle(
            height / 6 + (height / 3) * (i - 6),
            height / 6 + (height / 3) * 2,
            (height / 3) * 0.9
          );
        }
      }
    }
  }
  Tur() {
    if (this.fields[position] == 0) {
      if (player == 1) {
        player = 2;
      } else {
        player = 1;
      }
      this.fields[position] = player;
      console.log(this.fields);
    }
    for (let i = 0; i < 9; i = i++) {
      if (this.fields[i] && this.fields[i + 1] && this.fields[i + 2] == 1) {
      }
    }
  }
}
