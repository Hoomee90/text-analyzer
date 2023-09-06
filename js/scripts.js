// Business Logic (BS)

function wordCounter(text) {
  if (text && text.trim().length > 0){
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(element => {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }
  return 0;
}

function wordOccurrenceCounter(word, text) {
  const textArray = text.toLowerCase().split(" ");
  return word ? textArray.filter((element) => element.includes(word.toLowerCase())).length : 0;
}

function wordOmitFilter(text) {
  const textArray = text.toLowerCase().split(" ");
  const bannedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const filteredArray = textArray.filter((element) => {
    return !bannedWords.includes(element);
  });
  return filteredArray.join(" ");
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.querySelector("#text-passage").value;
  const word = document.querySelector("#word").value;
  const wordCount = wordCounter(passage);
  const wordOccurrences = wordOccurrenceCounter(word, passage);
  document.querySelector("#total-count").innerText = wordCount;
  document.querySelector("#selected-count").innerText = wordOccurrences;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});