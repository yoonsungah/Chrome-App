const quotes = [
  {
    quote:
      "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
    author: "Abigail Adams",
  },
  {
    quote:
      "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
    author: "Confucius",
  },
  {
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Idleness and lack of occupation tend - nay are dragged - towards evil.",
    author: "Hippocrates",
  },
  {
    quote:
      "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "The journey is the reward.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If you're never scared or embarrassed or hurt, it means you never take any chances.",
    author: "Julia Sorel",
  },
  {
    quote: "Wheresoever you go, go with all your heart.",
    author: "Confucius",
  },
  {
    quote:
      "You have to have confidence in your ability, and then be tough enough to follow through.",
    author: "Rosalynn Carter",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
