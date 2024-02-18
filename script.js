const question = [
  {
    que: "Which of the following is markup language",
    a: "HTML",
    b: "CSS",
    c: "javaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was javaScript launch",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of these",
    correct: "b",
  },
  {
    que: "What does CSS stand For",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheets",
    c: "Jason Object",
    d: "Document Object Model ",
    correct: "b",
  },
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const questionBox = document.getElementById("question-Box");
const sumbit = document.getElementsByClassName("btn");
const optionInput = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = question[index];
  questionBox.innerText = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};
const sumbitQuiz = () => {
  const data = question[index];
  const ans = getAns();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAns = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `<h3>Thanks you for Playing</h3>
    <h2> Right=${right} Wrong=${wrong}</h2>
  `;
};

loadQuestion();
