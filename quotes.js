const quotes =[
    {
        quote : "The important thing is not to stop questioning. Curiosity has its own reason for existing. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery every day. Never lose a holy curiosity.",
        author : 'Albert Einstein',
    },
    {
        quote : "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
        author : "Abraham Lincoln",
    },
    {
        quote : "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        author : 'Thomas A. Edison',
    },
    {
        quote : "Let us make one point, that we meet each other with a smile, when it is difficult to smile. Smile at each other, make time for each other in your family.",
        author : "Mother Teresa",
    },
    {
        quote : "Focusing your life solely on making a buck shows a certain poverty of ambition. It asks too little of yourself. Because it's only when you hitch your wagon to something larger than yourself that you realize your true potential.",
        author : 'Barack Obama',
    },
    {
        quote : "Ability is of little account without opportunity.",
        author : "Napoleon Bonaparte",
    },
    {
        quote : "A mind troubled by doubt cannot focus on the course to victory.",
        author : 'Arthur Golden',
    },
    {
        quote : "The ideal man bears the accidents of life with dignity and grace, making the best of circumstances.",
        author : "Aristotle",
    },
    {
        quote : "Innovation has nothing to do with how many R&D dollars you have. When Apple came up with the Mac, IBM was spending at least 100 times more on R &D. It's not about money. It's about the people you have, how you're led, and how much you get it.",
        author : 'Steve Jobs',
    },
    {
        quote : "Success is never final.",
        author : "Sir Winston Churchill",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todayQuote.quote;
author.innerText = `By ${todayQuote.author}`;