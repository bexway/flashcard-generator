// https://css-tricks.com/understanding-javascript-constructors/

function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze);
  }
  this.fullText = text;
  this.cloze = cloze;
  // this.partial = this.getPartialText();
  try {
    this.partial = this.getPartialText();
  } catch (e) {
    console.log(e.name + ': ' + e.message);
    this.fullText = null;
    this.cloze = null;
    this.partial = null;
  }
}
  // https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript
ClozeCard.prototype.getPartialText = function() {
  // Create a new regex, global so it finds all instances of the cloze
  var re = new RegExp(this.cloze, 'g');
  var match, matches = [];
  // If no match is found, throw an error
  if(!re.exec(this.fullText)){
    throw new Error("Cloze not found in text");
  }
  return this.fullText.replace(re, "___");
};

// new ClozeCard("I think George Washington is George Washington", "George");

module.exports = ClozeCard;
