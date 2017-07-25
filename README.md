# flashcard-generator
A Node script for constructing two types of flashcards.

The first, a Basic Card, has a front containing the question for the card  and a back containing the answer.

The second, a Cloze Card, contains a fullText property containing a sentence stating a fact, a cloze property containing a subsection of the text from the fullText sentence, and a partial property containing the same text as the fullText property but with the cloze text removed.

When constructing a Cloze Card, if the cloze text is not found within the fullText, the constructor will log an error, set all properties of the object to null, and continue running your script. If the cloze text is found, it is removed using a global regular expression containing the text from cloze, which is then replaced with blanks using Javascript's replace function.
