# Text Analyzer

#### By **Samantha Callie**, with code from [Epicodus](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-at-epicodus/learn-how-to-program)

#### A site for finding wordcounts and occurrences

## Technologies Used

* HTML
* CSS
* BootStrap
* JS

## Description

This browser page is a form that be inputted with text. Upon submission, it will tell the user the wordcount of the text passage, as well as the number of occurrences of another inputted word. It bolds them too!

## Setup/Installation Requirements

* Clone repository
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* There are no known bugs on the site

## License

[GNU GPLv3](https://choosealicense.com/licenses/agpl-3.0/)

Copyright (c) 2023 Samantha Callie

## Test Used During Development

#### For some strange reason this is where we're supposed to store our pseudocode tests for review  
Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: wordOccurrenceCounter()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
wordOccurrenceCounter(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
wordOccurrenceCounter(word, text);
Expected Output: 1

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
wordOccurrenceCounter(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
wordOccurrenceCounter(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
wordOccurrenceCounter(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordOccurrenceCounter(word, text);
Expected Output: 0

Describe: wordOmitFilter()

Test: "It should return null if there is no text in the array"
Code:
const text = "";
wordOmitFilter(text);
Expected Output: "null"

Test: "It should return the passage with the first instance of one of the banned words removed"
Code:
const text = "zoinks zoinks hello muppeteer";
wordOmitFilter(text);
Expected Output: "zoinks hello muppeteer"

Test: "It should return the passage with all instances of one of the banned words removed"
Code:
const text = "zoinks zoinks hello muppeteer";
wordOmitFilter(text);
Expected Output: "hello muppeteer"

Test: "It should return the passage with all instances of all of the banned words removed"
Code:
const text = "zoinks zoinks hello muppeteer";
wordOmitFilter(text);
Expected Output: "hello"

Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Test: "It should return a matching word in a strong tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong></p>

Test: "It should wrap words that match in strong tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: <p><strong>hello</strong> there</p>

Test: "It should wrap matching parts of words in strong tags and not the parts that don't
Code:
const word = "hi";
const text = "hi, this is very high in the air";
boldPassage(word, text);
Expected Output: <p><strong>hi</strong>, t<strong>hi</strong>s is very <strong>hi</strong>gh in the air</p>

Describe: pigLatin()

Test: "It should return null if no text is entered."
Code:
const text = [""];
pigLatin(text);
Expected Output: null

Test: "It should return the string with 'way' added to all words that start with vowels."
Code:
const text = ["an", "excellent", "pig", "latin", "ovation", "queue"];
pigLatin(text);
Expected Output: "anway excellentway pig latin ovationway queue"