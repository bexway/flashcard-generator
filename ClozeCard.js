// https://css-tricks.com/understanding-javascript-constructors/

function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze);
  }
  this.fullText = text;
  this.cloze = cloze;
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
  // If no match is found, throw an error
  if(!re.exec(this.fullText)){
    throw new Error("Cloze not found in text");
  }
  // otherwise, replace every instance of the cloze with a blank
  return this.fullText.replace(re, "___");
};

module.exports = ClozeCard;
