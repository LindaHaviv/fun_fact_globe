// add counter of right or wrong questions
// check if asked all questions so it doesn't crash
// summary need 2 variables for correct and incorrect answers
// set counters to zero in beginning of game 

var currentCapitalIndex;
var shuffledCapitals;
var correct_number;
var incorrect_number;


$(document).ready(function() {
    $("#new_game").click(function() {
        startGame();
        $(".start_game").dialog('close');
    });
});

function askForCapital() {
    $(".state").text(shuffledCapitals[currentCapitalIndex].state);
    $(".correct").hide();
    $(".incorrect").hide();
    $(".next_question").hide();
    $(".scoreboard").show();
}

function correctAnswer() {
    correct_number++;
    $(".correctNum").text(correct_number);
}

function incorrectAnswer() {
    incorrect_number++;
    $(".incorrectNum").text(incorrect_number);

    resetGame();
}

function checkCapital(capital) {
    var currentCapital = shuffledCapitals[currentCapitalIndex];
    if (currentCapital === capital) {
        $(".correct").show();
        $(".incorrect").hide();
        correctAnswer();
        if (currentCapitalIndex < capitals.length) {
            $(".next_question").show();
        }
    } else {
        $(".correct").hide();
        $(".incorrect").show();
        $(".next_question").hide();
        incorrectAnswer();
    }
}

function resetGame() {
    if (incorrect_number > 4) {
        $(".page_quiz").hide();
        $(".start_game").show();
        $(".correct_score_count").html(correct_number);
        $(".incorrect_score_count").html(incorrect_number);
        $(".start_game").dialog({
            modal: true,
            height: 500,
            width: 800,
            open: function() {
                $('.ui-widget-overlay').addClass('custom-overlay');
            }
        });
    }
}

function nextQuestion() {
    currentCapitalIndex++;
    askForCapital();
}

function startGame() {
    currentCapitalIndex = 0;
    shuffledCapitals = _.shuffle(capitals);
    askForCapital();
    correct_number = 0;
    incorrect_number = 0;
    $(".start_game").hide();
    $(".page_quiz").show();
    $(".incorrectNum").text(incorrect_number);
    $(".correctNum").text(correct_number);
    $(".we-pp-close").click();
}
