export default class Square {
  constructor(width) {
    this.width = width;
  }

  get height() {
    return this.width;
  }

  set height(height) {
    this.width = height;
    console.log("Set a new height of: " + this.height);
  }

  get area() {
    return this.width * this.height;
  }
}
