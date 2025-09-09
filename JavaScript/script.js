let data = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        imgurl: "https://example.com/mandela.jpg",
        birthPlace: "Mvezo, South Africa"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        imgurl: "https://example.com/disney.jpg",
        birthPlace: "Chicago, Illinois, USA"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
        imgurl: "https://example.com/jobs.jpg",
        birthPlace: "San Francisco, California, USA"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
        imgurl: "https://example.com/roosevelt.jpg",
        birthPlace: "New York City, New York, USA"
    },
    {
        quote: "If you look at what you have in life, you'll always have more.",
        author: "Oprah Winfrey",
        imgurl: "https://example.com/winfrey.jpg",
        birthPlace: "Kosciusko, Mississippi, USA"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        imgurl: "https://example.com/lennon.jpg",
        birthPlace: "Liverpool, England"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
        imgurl: "https://example.com/teresa.jpg",
        birthPlace: "Skopje, North Macedonia"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt",
        imgurl: "https://example.com/froosevelt.jpg",
        birthPlace: "Hyde Park, New York, USA"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead",
        imgurl: "https://example.com/mead.jpg",
        birthPlace: "Philadelphia, Pennsylvania, USA"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
        imgurl: "https://example.com/stevenson.jpg",
        birthPlace: "Edinburgh, Scotland"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        imgurl: "https://example.com/roosevelt2.jpg",
        birthPlace: "New York City, New York, USA"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
        imgurl: "https://example.com/franklin.jpg",
        birthPlace: "Boston, Massachusetts, USA"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller",
        imgurl: "https://example.com/keller.jpg",
        birthPlace: "Tuscumbia, Alabama, USA"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
        imgurl: "https://example.com/aristotle.jpg",
        birthPlace: "Stagira, Greece"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
        imgurl: "https://example.com/frank.jpg",
        birthPlace: "Frankfurt, Germany"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
        imgurl: "https://example.com/emerson.jpg",
        birthPlace: "Boston, Massachusetts, USA"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
        imgurl: "https://example.com/angelou.jpg",
        birthPlace: "St. Louis, Missouri, USA"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
        imgurl: "https://example.com/lincoln.jpg",
        birthPlace: "Hodgenville, Kentucky, USA"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
        imgurl: "https://example.com/ruth.jpg",
        birthPlace: "Baltimore, Maryland, USA"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
        imgurl: "https://example.com/keller2.jpg",
        birthPlace: "Tuscumbia, Alabama, USA"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison",
        imgurl: "https://example.com/edison.jpg",
        birthPlace: "Milan, Ohio, USA"
    },
    {
        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
        imgurl: "https://example.com/tracy.jpg",
        birthPlace: "Charlottetown, Canada"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        imgurl: "https://example.com/troosevelt.jpg",
        birthPlace: "New York City, New York, USA"
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
        imgurl: "https://example.com/james.jpg",
        birthPlace: "New York City, New York, USA"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        imgurl: "https://example.com/churchill.jpg",
        birthPlace: "Woodstock, England"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        imgurl: "https://example.com/lewis.jpg",
        birthPlace: "Belfast, Ireland"
    },
    {
        quote: "At any given moment you have the power to say: this is not how the story is going to end.",
        author: "Christine Mason Miller",
        imgurl: "https://example.com/miller.jpg",
        birthPlace: "Unknown"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar",
        imgurl: "https://example.com/ziglar.jpg",
        birthPlace: "Coffee County, Alabama, USA"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
        imgurl: "https://example.com/edison2.jpg",
        birthPlace: "Milan, Ohio, USA"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        imgurl: "https://example.com/levenson.jpg",
        birthPlace: "New York City, New York, USA"
    }
];

let str = '';
data.forEach((data) => {
    str += ` <div class="col-3"> 
                <div class="frame">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTny0dIohlmltr2VyR7Ca-hfa-i__3s2QzvLA&s" alt="Nelson Mandela">
                    <p>${data.quote}</p>
                    <p>${data.author}</p>
                    <p>${data.birthPlace}</p>
                </div>
            </div>`;
});

// let uot = Document.getElementById("Quote");
// quote.innerHTML = str;

let q = document.getElementById("Quote");
q.innerHTML = str;
