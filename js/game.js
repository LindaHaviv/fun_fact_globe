
// add counter of right or wrong questions
// check if asked all questions so it doesn't crash
// summary need 2 variables for correct and incorrect answers
// set counters to zero in beginning of game 

var currentCapitalIndex;
var shuffledCapitals;

function askForCapital(){
  $(".state").text(shuffledCapitals[currentCapitalIndex].state);
  $(".correct").hide();
  $(".incorrect").hide();
  $(".next_question").hide();
}

function correctAnswer(){

}

function incorrectAnswer(){
  
}

function checkCapital(capital){
  var currentCapital = shuffledCapitals[currentCapitalIndex];
  if (currentCapital === capital){
    $(".correct").show();
    $(".incorrect").hide();
      if (currentCapitalIndex < capitals.length){
        $(".next_question").show();
      } else {
        // write another function that will show your summary and button that will say start new game
      }
  } else {
    $(".correct").hide();
    $(".incorrect").show();
    $(".next_question").hide();
  }
}

function nextQuestion(){
  currentCapitalIndex++;
  askForCapital();
}

function startGame(){
  currentCapitalIndex = 0;
  shuffledCapitals = _.shuffle(capitals);
  askForCapital();

}

