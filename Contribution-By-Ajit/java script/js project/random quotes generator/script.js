const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to create it. - Peter Drucker"
  ];
  
  const quoteDisplay = document.getElementById('quoteDisplay');
  const newQuoteBtn = document.getElementById('newQuoteBtn');
  
  newQuoteBtn.addEventListener('click', displayNewQuote);
  
  function displayNewQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomNumber];
  }
  