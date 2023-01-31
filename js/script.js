var quote = document.getElementById('text-quote');
var author = document.getElementById('text-author');
const quotes = ["\"I came, I saw, I conquered\"",
    "\"Life is what happens when you're busy making other plans.\"",
    "\"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.\"",
    "\"Whoever is happy will make others happy too.\"",
    "\"The purpose of our lives is to be happy.\"",
    "\"In the end, it's not the years in your life that count. It's the life in your years.\"",
    "\"You miss 100% of the shots you don't take.\"",
    "\"Life is either a daring adventure or nothing at all.\"",
    "\"The way to get started is to quit talking and begin doing.\"",
    "\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\""];

const authors = ["-Julius Caesar", "-John Lennon",
    "-James Cameron", "-Anne Franke", "-Dalai Lama",
    "-Abraham Lincoln", "\"-Wayne Gretszky\" -Michael Scott",
    "-Helen Keller", "-Walt Disney", "-Benjamin Franklin"];

var arrayIndex = 0;


// document.getElementById("button-click").onclick = function() {Generate()};

function Generate() {
    // if (arrayIndex >= quotes.length) {
    //     arrayIndex = 0;
    // }

    arrayIndex = Math.floor(Math.random() * (quotes.length));


    quote.innerText = quotes[arrayIndex];
    author.innerText = authors[arrayIndex];
    // arrayIndex++;
}

// var button = document.getElementById('button-click')

// button.addEventListener("click", ()=>{
//     quote = "new quote";
// });













