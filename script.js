const quoteElement = document.getElementById('quote');
const inputElement = document.getElementById('input');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const restartButton = document.getElementById('restart');
const toggleTheme = document.getElementById('toggle-theme');

let startTime, timerInterval, quoteText, typedText = "";

const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing is a fundamental skill in the digital age.",
  "Practice makes perfect, especially in typing.",
  "Coding is best when you type fast and accurately.",
  "Never stop learning and improving your skills.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "In the middle of every difficulty lies opportunity, waiting to be discovered.",
  "Typing efficiently is not just about speed, but about accuracy and rhythm.",
  "With enough practice, your fingers will start dancing across the keyboard effortlessly.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things are not done by impulse, but by a series of small things brought together.",
  "It does not matter how slowly you go, as long as you do not stop.",
  "Programming isn’t about typing, it’s about thinking — but typing helps you get there faster.",
  "The best way to predict the future is to create it, one keystroke at a time.",
  "When you feel like quitting, think about why you started learning to type in the first place.",
  "A well-typed line of code is a small work of art in a vast universe of logic.",
  "Let your fingers tell the story while your mind weaves the plot.",
  "Type as if your thoughts depend on the rhythm, because sometimes they do.",
  "Fluency in typing is fluency in thought, action, and communication.",
  "Even the slowest typist is miles ahead of the person who never begins.",
  "Learning to type is like learning to play an instrument patience, practice, and persistence.",
  "Accuracy is the twin brother of speed never sacrifice one for the other.",
  "The keyboard is mightier than the sword when used with intention and clarity.",
  "Behind every great writer is a keyboard that has seen countless drafts and rewrites.",
  "Every expert was once a beginner fumbling through the first few lines."
];


function setQuote() {
  quoteText = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = quoteText;
}

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    timerElement.textContent = elapsed;
  }, 1000);
}

function calculateResults() {
  const words = inputElement.value.trim().split(/\s+/).length;
  const time = Math.max((new Date() - startTime) / 1000, 1);
  const wpm = Math.round((words / time) * 60);
  wpmElement.textContent = wpm;

  const correctChars = [...inputElement.value].filter((ch, i) => ch === quoteText[i]).length;
  const accuracy = Math.round((correctChars / quoteText.length) * 100);
  accuracyElement.textContent = accuracy;
}

function resetTest() {
  inputElement.value = "";
  timerElement.textContent = 0;
  wpmElement.textContent = 0;
  accuracyElement.textContent = 0;
  typedText = "";
  clearInterval(timerInterval);
  setQuote();
}

inputElement.addEventListener('input', () => {
  if (!startTime) {
    startTimer();
  }
  typedText = inputElement.value;
  if (typedText.length >= quoteText.length) {
    clearInterval(timerInterval);
    calculateResults();
  }
});

restartButton.addEventListener('click', () => {
  resetTest();
});


// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    setQuote();
  }, 2000); // Set to 2000ms for demo. You can set to 20000 (20s) in production.
});
