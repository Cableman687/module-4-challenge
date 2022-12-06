// ----------------Countdown--------------------------

//Timer Countdown variables
var timerEl = document.getElementById('countdown');

var carousel = document.querySelector(".carousel");
var startButton = carousel.querySelector("#startbutton");



//------------------Homepage---------------------
//1/When the user clicks on the "Start Quiz" button
//1/Then the user will be taken to the next page

//assign pages to variables as objects
var homePage = document.querySelector("#homepage");
var firstQuestion = document.querySelector("#firstquestion");
var secondQuestion = document.querySelector("#secondquestion");
var thirdQuestion = document.querySelector("#thirdquestion");
var fourthQuestion = document.querySelector("#fourthquestion");
var fifthQuestion = document.querySelector("#fifthquestion");

var pages = [
  homePage,
  firstQuestion,
  secondQuestion,
  thirdQuestion,
  fourthQuestion,
  fifthQuestion
]



startButton.addEventListener("click", function(event){
  event.stopPropagation();
})




//DONE//1/When the user clicks on the "Start Quiz" button
//DONE//1/Then the timer starts from 75 counting down
//DONE//-- this timer will persist, and continue to countdown through all pages until endpage or '0'
//DONE//3/In the top left corner, the timer for the webpage can be seen as its starting value of "0"
timerEl.textContent = 'Time: 0';

function countdown() {
    var timeLeft = 75;
  
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
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = 'Time Finished!';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }

  // startButton.addEventListener("click", countdown);

  

  //2/When the user clicks the "View High Scores" button
//2/Then the user is able to see all scores saved in the window memory


//------------------Question Pages-------------
//When the User picks an answer from one of 4 options
//ANY answer will progress to the next question

//establish counter that responds to button element clicks.
var count = 0;

var midcontainer = document.querySelector(".mid");

midcontainer.addEventListener("click", function(event){
  var element = event.target;
  console.log("Button Clicked!");
  console.log(element);



  if(element.matches(".btn")){
    count++;
  }
})



if(count === 0){

  pages[1].setAttribute("style", "display: none");
  pages[2].setAttribute("style", "display: none");
  pages[3].setAttribute("style", "display: none");
  pages[4].setAttribute("style", "display: none");
  pages[5].setAttribute("style", "display: none");

  console.log("0 reached! All except Homepage Hidden!");
}


  function hideOtherPages(){   
    if ( count === 1){
      
      pages[0].setAttribute("style", "display: none");
      pages[1].setAttribute("style", "#firstquestion");
      pages[2].setAttribute("style", "display: none");
      pages[3].setAttribute("style", "display: none");
      pages[4].setAttribute("style", "display: none");
      pages[5].setAttribute("style", "display: none");

      console.log("1 reached! All except Q1 Hidden!");

    } else if ( count === 2){

      pages[0].setAttribute("style", "display: none");
      pages[1].setAttribute("style", "display: none");
      pages[2].setAttribute("style", "#firstquestion");
      pages[3].setAttribute("style", "display: none");
      pages[4].setAttribute("style", "display: none");
      pages[5].setAttribute("style", "display: none");

      console.log("2 reached! All except Q2 Hidden!");

    } else if ( count === 3){

      pages[0].setAttribute("style", "display: none");
      pages[1].setAttribute("style", "display: none");
      pages[2].setAttribute("style", "display: none");
      pages[3].setAttribute("style", "#firstquestion");
      pages[4].setAttribute("style", "display: none");
      pages[5].setAttribute("style", "display: none");

      console.log("3 reached! All except Q3 Hidden!");

    } else if ( count === 4){

      pages[0].setAttribute("style", "display: none");
      pages[1].setAttribute("style", "display: none");
      pages[2].setAttribute("style", "display: none");
      pages[3].setAttribute("style", "display: none");
      pages[4].setAttribute("style", "#firstquestion");
      pages[5].setAttribute("style", "display: none");

      console.log("4 reached! All except Q4 Hidden!");

    } else if ( count === 5){

      pages[0].setAttribute("style", "display: none");
      pages[1].setAttribute("style", "display: none");
      pages[2].setAttribute("style", "display: none");
      pages[3].setAttribute("style", "display: none");
      pages[4].setAttribute("style", "display: none");
      pages[5].setAttribute("style", "#firstquestion");

      console.log("5 reached! All except Q5 Hidden!");

    }
  }
  
  //Attach event listener to increment button element
  
  


//pass display:none stlyes to inactive pages





//When the next question is presented
//Then the outcome of the previous question is displayed underneath the new list of options
//The WRONG answer will deduct 10 seconds from the timer
//The RIGHT answer will not have any effect on the timer


//-----------------Endpage-----------------------
//When all questions are answered, the time-left is presented as the 'final score'
//--- When the timer reaches '0', the time left is presented as the 'final score'
//Then the user can enter their initials in a textbox
//Then the user can click the 'submit' button to save their result in the window memory.


//----To be used for page incrementing




// ----To be used for endpage:
{/* <div class="container">
    <h1>Tip Calculator</h1>
    <h3>Enter the total price of your meal below</h3>
    <form id="form">
      <input type="text" id="total" placeholder="total price of meal" />
      <input type="text" id="tip-percentage" placeholder="tip percentage" />
      <button id="submit">Calculate Tip</button>
    </form>
    <div class="tip-area">
      <h2>Tip amount: <span id="tip-amount"></span></h2>
      <h2>Total: <span id="new-total"></span></h2>
    </div>
  </div> */}





