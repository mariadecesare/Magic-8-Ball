/* 
 * mouse_over.js
 * Author: Maria DeCesare 
 */

// function called once the page DOM is ready for JavaScript code to execute
$(document).ready(function() {

    // variable for the answers the 8 ball could give
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams."];
  
    // makes answer hidden at first
    $("#answer").hide();
  
    // function for the asking and answering of the a question
    magic8Ball.askQuestion = function(question) {
        
        // makes the 8 ball shake when a question is asked
        $("#8ball").effect("shake");

        // picture of the 8 ball with the triangle the answer goes in
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        // makes the answer fade in
        $("#answer").fadeIn(4000);

        // create variable of a random number 
        var randomNumber = Math.random();

        // create variable of a random number times the list of possible answers
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

        // create a variable for the random index number to get random answer
        var randomIndex = Math.floor(randomNumberForListOfAnswers);

        // create a variable for the answer based on the random index number
        var answer = this.listOfAnswers[randomIndex];

        // put the answer in the element with id "answer"
        $("#answer").text(answer);

        // print the question and answer in the console
        console.log(question);
        console.log(answer);
    };
  
    // on click function
    var onClick = function() {
  
        // hides answer before the new one appears (if there was a question/answer prior)
        $("#answer").hide();

        // 8 ball with 8 in the middle instead of triangle in which the answer goes
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

        // function to prompt for and save the given question
        setTimeout(function() {
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
        }, 500);
  
    };
  
    // create click event for when question button is clicked, calling onClick function
    $("#questionButton").click(onClick);
  
  });