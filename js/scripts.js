// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic (BS)

function wordCounter(text) {
  if (isEmpty(text)){
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(element => {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function wordOccurrenceCounter(word, text) {
  const textArray = text.toLowerCase().split(" ");
  return !isEmpty(word) ? textArray.filter((element) => element.includes(word.toLowerCase())).length : null;
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

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach((element, index) => {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}