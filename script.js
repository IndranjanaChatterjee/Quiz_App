const questions = [
  {
    question: "Who was the first President of the United States?",
    answers: [
      { value: "Joe Biden", correct: "false" },
      { value: "George Washington", correct: "true" },
      { value: "Donald Trump", correct: "false" },
      { value: "Thomas Jefferson", correct: "false" },
    ],
  },
  {
    question:
      "Which ancient wonder of the world was located in Egypt and is known for its colossal size?",
    answers: [
      { value: "The Great Pyramid of Giza", correct: "true" },
      { value: "Great Sphinx of Giza", correct: "false" },
      { value: "Valley of the Kings", correct: "false" },
      { value: "Karnak", correct: "false" },
    ],
  },
  {
    question:
      "Who wrote the “I Have a Dream” speech delivered during the March on Washington in 1963?",
    answers: [
      { value: "Jane Austen", correct: "false" },
      { value: "Ernest Hemingway", correct: "false" },
      { value: "Mark Twain", correct: "false" },
      { value: "Martin Luther King Jr", correct: "true" },
    ],
  },
  {
    question:
      "What event marked the beginning of the Great Depression in the United States?",
    answers: [
      { value: "Stock market crash", correct: "false" },
      { value: "Farming In 1935", correct: "false" },
      { value: "The Wall Street Crash of 1929", correct: "true" },
      { value: "The New Deal", correct: "false" },
    ],
  },
  {
    question:
      "Which river is the longest in the world?",
    answers: [
      { value: "Amazon River", correct: "false" },
      { value: "Mississippi River", correct: "false" },
      { value: "The Nile River", correct: "true" },
      { value: "Mekong River", correct: "false" },
    ],
  },
];
const ques = document.getElementById("question");
const ans = document.getElementById("answer");
const next=document.getElementById("next-button");
const count=document.getElementById("number");
let score=0;
let button;
let index=0;
const startquiz = () => {
  count.style.display="block";
  next.style.display="none";
  let get_question = questions[index];
  index = index + 1;
  ques.innerHTML = get_question.question;
  count.innerHTML=`${index} out of 5 questions`;
  get_question.answers.forEach((answer) => {
    button = document.createElement("button");
    button.innerHTML=answer.value;
    button.classList.add("btn");
    ans.appendChild(button);
    button.dataset.correct=answer.correct;
    button.addEventListener("click",checkAnswer);
    
    
  });
  
  

};
const checkAnswer=(e)=>
{
    
    let check=e.target;
    let checkcorrect=check.dataset.correct==='true';
    if(checkcorrect)
    {
        check.classList.add("correct");
        score=score+1;
    }
    else
    {
        check.classList.add("wrong");
    }
    console.log("jil");
    Array.from(ans.children).forEach((ele)=>
    {
        console.log(ele);
        if(ele.dataset.correct==="true")
        {
            ele.classList.add("correct");
            
        }
        ele.disabled='true';
        
    });
    if(index<questions.length)
    {
        next.innerHTML="Next";
        next.style.display="block";
        next.addEventListener("click",nextquestion);
    }
    else
    {
        next.innerHTML="Show Score";
        next.style.display="block";
        next.addEventListener("click",showScore);
    }
    


};
const nextquestion=()=>
{
    
        reset();
        startquiz();
    
};
const showScore=()=>
{
    reset();
    count.style.display="none";
    ques.innerHTML=`Your score :`;
    
    ans.innerHTML=`Score - ${score}/5 ✌️✌️`
    ans.classList.add("style")
    next.innerHTML="Play Again";
    next.style.display="block";
    
    next.addEventListener("click",playAgain);
};
const reset=()=>
{
    while(ans.firstChild)
        {
            ans.removeChild(ans.firstChild);
        }

}
const playAgain=()=>
{
  index=0;
  reset();
  startquiz();
}
startquiz();
