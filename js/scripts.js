// Utility Logic

function isEmpty(...args) {
  for (let i=0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      return args[i].length === 0; 
    } 
    else if (Array.isArray(args[i])) {
      return (args[i].some(element => element.length === 0));
    }
    return true;
  }
  return false;
}

// Business Logic (BS)

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  return text.filter(element => element && !Number(element)).length;
}

function wordOccurrenceCounter(word, text) {
  if (isEmpty(text)) {
    return 0;
  }
  return text.filter(element => element.includes(word.toLowerCase())).length;
}

//Unused

function wordOmitFilter(text) {
  const bannedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const filteredArray = text.filter(element => !bannedWords.includes(element));
  return filteredArray.join(" ");
}

function firstWordInstance(word, text) {
  for (let i = 0; i < text.length; i++) {
    console.log(i);
    if (word === text[i]) {
      return i;
    }
  }
  return -1;
}

function pigLatin(text) {
  if (isEmpty(text)) {
    return 0;
  }
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.querySelector("#text-passage").value.trim();
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
  if (isEmpty(substring, text)) {
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