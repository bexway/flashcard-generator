// var ClozeCard = function(){
//
// };
//
// //

// https://css-tricks.com/understanding-javascript-constructors/

function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new Book(name, year);
  }
  this.fullText = text;
  // this.cloze = cloze;
  var re = new RegExp(cloze, 'g');
  console.log(re);

  // var match = re.exec(this.fullText);
  var match, matches = [];
  // console.log(match);
  while ((match = re.exec(this.fullText))) {
    matches.push(match.index);
  }
  console.log(matches);
  // https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript
}

ClozeCard.prototype.getClozeMatches = function(searchStr, str, caseSensitive) {
  var searchStrLen = searchStr.length;
  if (!searchStrLen) {
      return [];
  }
  var startIndex = 0, index, indices = [];
  if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
  }
  return indices;
};

//
// var person1 = new Book("js book", 2014);
// var person2 = Book("js book", 2014);
// console.log(person1);    // true
// console.log(person2);    // true

new ClozeCard("I think George Washington is George Washington", "g");

module.exports = ClozeCard;
