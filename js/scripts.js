// Utility Logic

function isEmpty(testVar) {
  if (typeof testVar === "string") {
    return testVar.length === 0; 
  } 
  else if (Array.isArray(testVar)) {
    return (testVar.some(element => element !== ""));
  }
  return false;
}

// Business Logic (BS)

function wordCounter(text) {
  return isEmpty(text) ? 0 
  : text.filter(element => element && !Number(element)).length;
}

function wordOccurrenceCounter(word, text) {
  return isEmpty(word) ? 0 
  : text.filter(element => element.includes(word.toLowerCase())).length;
}

function wordOmitFilter(text) {
  const bannedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const filteredArray = text.filter(element => !bannedWords.includes(element));
  return filteredArray.join(" ");
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.querySelector("#text-passage").value;
  const passageArray = passage.toLowerCase().split(" ");
  const word = document.querySelector("#word").value.trim();
  const wordCount = wordCounter(passageArray);
  const wordOccurrences = wordOccurrenceCounter(word, passageArray);
  const boldedContainer =  document.querySelector("div#bolded-passage");
  
  document.querySelector("#total-count").innerText = wordCount;
  document.querySelector("#selected-count").innerText = wordOccurrences;
  boldedContainer.innerHTML = "";
  let boldedPassage = boldPassage(word, passageArray);
  if(boldedPassage) { 
    boldedContainer.append(boldedPassage);
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

function boldPassage(substring, text) {
  if (isEmpty(substring) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  text.forEach((element, index) => {
    while (element) {
      if (element.startsWith(substring)) {
        const bold = document.createElement("strong");
        bold.append(substring);
        p.append(bold);
        element = element.slice(substring.length);
      } else {
        p.append(element[0]);
        element = element.slice(1);
      }
    }
    if (index !== (text.length - 1)) {
        p.append(" ");
      }
  });
  return p;
}