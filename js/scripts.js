// Business Logic (BS)

function wordCounter(text) {
  if (text && text.trim().length > 0){
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(element => {
      if (!Number(element)) {
        wordCount++ ;
      }
    });
    return wordCount;
  }
  return 0;
}

function wordOccurrenceCounter(word, text) {
  const textArray = text.toLowerCase().split(" ");
  return textArray.filter((element) => element.includes(word.toLowerCase())).length;
}