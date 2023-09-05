// Business Logic (BS)

function wordCounter(text) {
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.array.forEach(word => {
    wordCount++;
  });
  return wordCount;
}