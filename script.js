let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxwordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1"; // Change opacity to 1 initially

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxwordIndex ? words[0] : words[currentWordIndex + 1];

  // Add transitions for opacity
  currentWord.style.opacity = "0";
  nextWord.style.opacity = "1";

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  Array.from(nextWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = currentWordIndex === maxwordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);
//mixup portfolio--------------///////////////
var mixer = mixitup('.portfolio-gallery');





//circl skill--------------///////////////
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
