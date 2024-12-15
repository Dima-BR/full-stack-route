const quotes = [
    {
        id: 1,
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        id: 2,
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        id: 3,
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        id: 4,
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        id: 5,
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        id: 6,
        quote: "Do not take life too seriously. You will not get out alive.",
        author: "Elbert Hubbard"
    },
    {
        id: 7,
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "Nelson Mandela"
    },
    {
        id: 8,
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        id: 9,
        quote: "Never explain―your friends do not need it and your enemies will not believe you anyway.",
        author: "Elbert Hubbard"
    },
    {
        id: 10,
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        id: 11,
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        id: 12,
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        id: 13,
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        id: 14,
        quote: "Never trust anyone who has not brought a book with them.",
        author: "Lemony Snicket"
    },
    {
        id: 15,
        quote: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway"
    },
];


const quoteButton = document.getElementById('quoteButton');
const quoteDisplay = document.getElementById('quoteDisplay');
const test = document.getElementById('test');

quoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteRandom = quotes[randomIndex];
    test.innerHTML = `" <h2 id="quoteDisplay">
            ${quoteRandom.quote.split(' ')[0]}
            <span style="color: #ffffff">${quoteRandom.quote.slice(quoteRandom.quote.indexOf(' ') + 1)}</span> 
            ${quoteRandom.quote.split(' ').pop()}
        </h2>
        <h4>
          &mdash;${quoteRandom.author}
        </h4> `;
});