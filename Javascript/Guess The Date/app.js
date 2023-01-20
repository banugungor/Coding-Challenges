const allQuestions = [
  {
    question: "Alexander Graham Bell invented the telephone",
    hint: "between 1800-1900",
    answer: 1876,
  },
  {
    question: "Alexander dies at Babylon",
    hint: "between 300-400",
    answer: 323,
  },
  // {
  //   question: "Julius Ceasar attacks Great Britain",
  //   hint: "between 50-60",
  //   answer: 55,
  // },
  // {
  //   question: "Spanish Armada defeated",
  //   hint: "between 1500-1600",
  //   answer: 1588,
  // },
  // {
  //   question: "Turkey has confirmed its first COVID-19 case,",
  //   hint: "between 2000-2100",
  //   answer: 2020,
  // },
  // { question: "French Revolution", hint: "between 1700-1800", answer: 1789 },
  // { question: "Death of Napolean", hint: "between 1800-1900", answer: 1821 },
  // {
  //   question: "Queen Victoria's accession to the throne of England",
  //   hint: "between 1800-1900",
  //   answer: 1837,
  // },
  // {
  //   question: "Slavery abolished in USA",
  //   hint: "between 1800-1900",
  //   answer: 1863,
  // },
  // {
  //   question: "Assassination of Abraham Lincoln",
  //   hint: "between 1800-1900",
  //   answer: 1865,
  // },
  // { question: "Death of Stalin", hint: "between 1900-1990", answer: 1953 },
  // {
  //   question: "Chinese explode hydrogen bomb",
  //   hint: "between 1900-2000",
  //   answer: 1967,
  // },
  // {
  //   question: "William Shakespeare is born",
  //   hint: "between 1500-1600",
  //   answer: 1564,
  // },
  // {
  //   question: "End of the First World War",
  //   hint: "between 1900-200",
  //   answer: 1918,
  // },
  // {
  //   question: "Conquest of Cyprus by Piyale Pasha",
  //   hint: "between 1500-1600",
  //   answer: 1570,
  // },
  // {
  //   question:
  //     "Turkish women were granted the right to vote and be elected in Turkish parliamentary elections",
  //   hint: "between 1900-2000",
  //   answer: 1934,
  // },
  // {
  //   question: "The Cyprus Peace Operation",
  //   hint: "between 1900-2000",
  //   answer: 1974,
  // },
  // {
  //   question: "Mustafa Kemal Atatürk was born",
  //   hint: "between 1800-1900",
  //   answer: 1881,
  // },
  // {
  //   question: "Date for the Trojan War which was fought in northwest Turkey",
  //   hint: "between 1200-1300",
  //   answer: 1250,
  // },
  // {
  //   question:
  //     "The Ottomans conquer Constantinople bringing an end to the Byzantium Empire",
  //   hint: "between 1400-1500",
  //   answer: 1453,
  // },
  // {
  //   question: "The first war between Russia and Turkey",
  //   hint: "between 1500-1600",
  //   answer: 1568,
  // },
  // {
  //   question: "The Battle of Gallipoli begins",
  //   hint: "between 1900-2000",
  //   answer: 1915,
  // },
  // {
  //   question: "The Republic of Turkey is founded by Ataturk",
  //   hint: "between 1900-2000",
  //   answer: 1923,
  // },
  // {
  //   question: "World Wide Web invented",
  //   hint: "between 1900-2000",
  //   answer: 1990,
  // },
  // {
  //   question: "Fukushima Daiichi Nuclear Disaster",
  //   hint: "between 2000-2100",
  //   answer: 2011,
  // },
  // {
  //   question: "9/11 attack on World Trade Center",
  //   hint: "between 2000-2100",
  //   answer: 2001,
  // },
  // { question: "Chernobyl disaster", hint: "between 1900-2000", answer: 1986 },
];

let input = document.querySelector(".inpt");
let hint = document.querySelector(".hint");
let nextQuestion = document.querySelector(".next-btn");
let myQuestion = document.querySelector(".question");
let checkButton = document.querySelector(".check-btn");
let questionMark = document.querySelector(".question--mark");
let rectangle = document.querySelector(".rectangle");
let circle = document.querySelector(".circle");

function randomQuestion() {
  let randomObj = allQuestions[Math.floor(Math.random() * allQuestions.length)];
  // let questions = randomObj.question;
  myQuestion.innerHTML = randomObj.question;
  hint.innerHTML = randomObj.hint;
}
randomQuestion();
nextQuestion.addEventListener("click", randomQuestion);

// myQuestion.addEventListener("click", randomQuestion);

function result() {
  let randomObj = allQuestions[Math.floor(Math.random() * allQuestions.length)];
  if (input.value == randomObj.answer) {
    circle.style.background = "#599916";
    questionMark.style.fontSize = "5rem";
  } else if (input.value !== randomObj.answer) {
    questionMark.style.color = "#AA1945";
  }
}

checkButton.addEventListener("click", result);

// checkButton.addEventListener("check", () => {
//   questionMark.style.color = "#AA1945";
//   // console.log(+input.value);
//   // if (input.value === randomObj.answer) {
//   //   questionMark.style.color = "#AA1945";
//   //   questionMark.style.fontSize = "2rem";
//   //   questionMark.textContent = "You lose!";
//   // }else{
//   //   questionMark.style.color = "#AA1945";
//   //   questionMark.style.fontSize = "2rem";
//   //   questionMark.textContent = "You lose!";
//   // }
// });
// console.log(allQuestions.findIndex(x=>x.answer === 323));
// allQuestions.findIndex((x) => x.answer === x.question)
//inputtan alınan bir değer nasıl stringten numbera çevrilir
