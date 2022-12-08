

//HTML ELEMENTS
var timerEl = document.getElementById('countdown');
var startButton = document.querySelector("#startbutton");

//PAGES
var homePage = document.querySelector("#homePage-Section");
var firstQuestion = document.querySelector("#firstQuestion-Section");
var secondQuestion = document.querySelector("#secondQuestion-Section");
var thirdQuestion = document.querySelector("#thirdQuestion-Section");
var fourthQuestion = document.querySelector("#fourthQuestion-Section");
var fifthQuestion = document.querySelector("#fifthQuestion-Section");
var endPage = document.querySelector("#endPage-Section");
var scorePage = document.querySelector("#scorePage-Section");

//OUTCOME FIELDS
var outcomeFirst = document.querySelector("#firstOutcome-Div");
var outcomeSecond = document.querySelector("#secondOutcome-Div");
var outcomeThird = document.querySelector("#thirdOutcome-Div");
var outcomeFourth = document.querySelector("#fourthOutcome-Div");
var outcomeFifth = document.querySelector("#fifthOutcome-Div");

//List & List Elements
var scoreList = document.querySelector("#highscore-List");
var firstScore = document.querySelector("#firstScore-Li");
var scoreInput = document.querySelector("#initial-input");

//Buttons
var submitButton = document.querySelector("#submit-Button");
var scoreButton = document.querySelector("#scoreButton");


//------------------Homepage---------------------
//When the user clicks on the "Start Quiz" button
//Then the user will be taken to the next page

//assign pages to variables as objects

var pages = [
  homePage,     //0
  firstQuestion, //1
  secondQuestion, //2
  thirdQuestion,  //3
  fourthQuestion,//4
  fifthQuestion,//5
  endPage,     //6
  scorePage   //7
  
]

var outcomes = [
  outcomeFirst, //0
  outcomeSecond, //1
  outcomeThird, //2
  outcomeFourth, //3
  outcomeFifth //4
]


//When the user clicks on the "Start Quiz" button
//Then the timer starts from 75 counting down
//-- this timer will persist, and continue to countdown through all pages until endpage or '0'
//In the top left corner, the timer for the webpage can be seen as its starting value of "0"
timerEl.textContent = 'Time: 0';
var timeLeft = 75;

//Establish counter variable that responds to button element clicks.
var count = 0;

function countdown() {
    
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = 'Time: ' + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = 'Time: ' + timeLeft;
        timeLeft--;
      } else if (timeLeft <= 0) {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = 'Time Finished!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        
      //Display highscore table if timer reaches "0"
      pages[0].classList.remove("visible");
      pages[0].classList.add("hidden");
      pages[1].classList.remove("visible");
      pages[1].classList.add("hidden");
      pages[2].classList.remove("visible");
      pages[2].classList.add("hidden");
      pages[3].classList.remove("visible");
      pages[3].classList.add("hidden");
      pages[4].classList.remove("visible");      
      pages[4].classList.add("hidden");
      pages[5].classList.remove("visible");
      pages[5].classList.add("hidden");
      pages[6].classList.add("visible");
      pages[7].classList.remove("visible");
      pages[7].classList.add("hidden");
      
      }

      // When the user reaches the endpage (index 6), capture the time as a score.
      if(count === 6){
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  startButton.addEventListener("click", countdown);

  
  

//------------------Question Pages-------------
//When the User picks an answer from one of 4 options
//ANY answer will progress to the next question

if(count === 0){

  pages[0].classList.add("visible");
  pages[1].classList.add("hidden");
  pages[2].classList.add("hidden");
  pages[3].classList.add("hidden");
  pages[4].classList.add("hidden");
  pages[5].classList.add("hidden");
  pages[6].classList.add("hidden");
  pages[7].classList.add("hidden");
  
  

  console.log("0 reached! All except Homepage Hidden!");
}


  function hideOtherPages(){   
    if ( count == 1){

      pages[0].classList.remove("visible");
      pages[0].classList.add("hidden");
      pages[1].classList.add("visible");
      pages[2].classList.add("hidden");
      pages[3].classList.add("hidden");
      pages[4].classList.add("hidden");
      pages[5].classList.add("hidden");
      pages[6].classList.add("hidden");
      pages[7].classList.add("hidden");
      

      console.log("1 reached! All except Q1 Hidden!"); 

    } else if ( count === 2){

      pages[0].classList.add("hidden");
      pages[1].classList.remove("visible");
      pages[1].classList.add("hidden");
      pages[2].classList.add("visible");
      pages[3].classList.add("hidden");
      pages[4].classList.add("hidden");
      pages[5].classList.add("hidden");
      pages[6].classList.add("hidden");
      pages[7].classList.add("hidden");
      

      console.log("2 reached! All except Q2 Hidden!");

    } else if ( count === 3){

      pages[0].classList.add("hidden");
      pages[1].classList.add("hidden");
      pages[2].classList.remove("visible");
      pages[2].classList.add("hidden");
      pages[3].classList.add("visible");
      pages[4].classList.add("hidden");
      pages[5].classList.add("hidden");
      pages[6].classList.add("hidden");
      pages[7].classList.add("hidden");
      

      console.log("3 reached! All except Q3 Hidden!");

    } else if ( count === 4){

      pages[0].classList.add("hidden");
      pages[1].classList.add("hidden");
      pages[2].classList.add("hidden");
      pages[3].classList.remove("visible");
      pages[3].classList.add("hidden");
      pages[4].classList.add("visible");
      pages[5].classList.add("hidden");
      pages[6].classList.add("hidden");
      pages[7].classList.add("hidden");
      

      console.log("4 reached! All except Q4 Hidden!");

    } else if ( count === 5){

      pages[0].classList.add("hidden");
      pages[1].classList.add("hidden");
      pages[2].classList.add("hidden");
      pages[3].classList.add("hidden");
      pages[4].classList.remove("visible");
      pages[4].classList.add("hidden");
      pages[5].classList.add("visible");
      pages[6].classList.add("hidden");
      pages[7].classList.add("hidden");
      

      console.log("5 reached! All except Q5 Hidden!");

    } else if ( count === 6){

      pages[0].classList.add("hidden");
      pages[1].classList.add("hidden");
      pages[2].classList.add("hidden");
      pages[3].classList.add("hidden");      
      pages[4].classList.add("hidden");
      pages[5].classList.remove("visible");
      pages[5].classList.add("hidden");
      pages[6].classList.add("visible");
      pages[7].classList.add("hidden");
      

      console.log("6 reached! All except endPage Hidden!");

    } else if ( count === 7){

      pages[0].classList.add("hidden");
      pages[1].classList.add("hidden");
      pages[2].classList.add("hidden");
      pages[3].classList.add("hidden");      
      pages[4].classList.add("hidden");
      pages[5].classList.add("hidden");
      pages[6].classList.remove("visible");
      pages[6].classList.add("hidden");      
      pages[7].classList.add("visible");
      

      console.log("7 reached! All except scorePage Hidden!");

    } 
  }


// Attach event listener to increment button element
document.addEventListener("click", function(event){

  event.preventDefault;

  var selection = event.target;

  if(selection.matches(".btn")){
 
    count++;
    hideOtherPages();
    
  }

  if(count === 6){
    var finishTime = timeLeft;

  }
  console.log("TIME FINISHED!: " + finishTime);


  
});

//Attach event listener to reset button to take to homepage upon completion via. Reload.
document.addEventListener("click", function(event){

  event.preventDefault;

  var selection = event.target;

  if(selection.matches(".resetbtn")){

    // console.log("Reset button selected!");
    
    this.location.reload();
         

  } 
  
});

//For each question that is presented
//present the outcome of the previous question
document.addEventListener("click", function(event){

  var selection = event.target;

  var state = selection.getAttribute("data-state");

  var outcomeCounter = count-2;

  console.log(outcomes[outcomeCounter]);

  if(state === "correct"){
    outcomes[outcomeCounter].textContent = "Correct!";

    // outcomes[count] = outcomes[outcomeCounter];
  } else if (state === "incorrect"){
    outcomes[outcomeCounter].textContent = "Incorrect!";

  } else {
    null;
  }
  //The WRONG answer will deduct 10 seconds from the timer
  //The RIGHT answer will not have any effect on the timer
  if(state === "incorrect"){
    timeLeft = timeLeft - 10;

  }

})


//-----------------Endpage & Scorepage-----------------------

//When all questions are answered, the time-left is presented as the 'final score'

// The highscores will consist of the initials, and the 'time-remaining' for each user
// who has pressed submit
// When the user clicks submit, their score is added to the list of scores 
// and they are taken to the high-scores page.
var scores = [];
var times = [];

function renderScores(){

  scoreList.innerHTML = "";
  for(var i = 0; i < scores.length; i++){
    var score = scores[i];
    var time = times[i];

    var li = document.createElement("li");
    li.textContent = score + time;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }

}

// Retrieve scored objects (scores/times) from local storage, and render result
function init() {
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  var storedTimes = JSON.parse(localStorage.getItem("times"));

  if(storedScores !== null){
    scores = storedScores;
  }

  if(storedTimes !== null){
    times = storedTimes;
  }

  renderScores();
}



function storeScores() {
  localStorage.setItem("scores", JSON.stringify(scores));
  localStorage.setItem("times", JSON.stringify(times));
}


//When the user presses submit
//Then their initials and time-remaining on the previous slide will be sent to local storage.
submitButton.addEventListener("click", function(event){
  event.preventDefault;

  var scoreText = scoreInput.value.trim();
  var timeText = timeLeft;

  if(scoreText === ""){
    return;
  }

  if(timeText === ""){
    return;
  }

  scores.push(scoreText + ": ");
  times.push(timeText + " Seconds");

  scoreInput.value="";

  


  storeScores();
  renderScores();
})


init();



// when the user clicks either "View High Scores" or "Submit" they will see the
// highscores page.
scoreButton.addEventListener("click", function(event){

  renderScores();

  pages[0].classList.remove("visible");
  pages[0].classList.add("hidden");
  pages[1].classList.add("hidden");
  pages[2].classList.add("hidden");
  pages[3].classList.add("hidden");      
  pages[4].classList.add("hidden");
  pages[5].classList.add("hidden"); 
  pages[6].classList.add("hidden");      
  pages[7].classList.add("visible");       
  
})
























