// https://css-tricks.com/understanding-javascript-constructors/

function BasicCard(front, back) {
  if (!(this instanceof ClozeCard)) {
    return new Book(name, year);
  }
  this.front = front;
  this.back = back;
}

module.exports = BasicCard;
