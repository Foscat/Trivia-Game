function wait() {
    if (questionCounter < 7) {
    questionCounter++;
    generateHTML();
    counter = 30;
    timerWrapper();
    }
    else {
        finalScreen();
    }
}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

//catimage from today12 

var catImage = $("<img>");

          //
          catImage.attr("src", imageUrl);
          catImage.attr("alt", "cat image");

          //
          $("#images").prepend(catImage);

          //   function generateLoss() {
//     incorrectTally++;
//     gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + 
//     "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter]
//      + "</p>" + "<img class='center-block img-wrong' src='Assets/images/x.png'>";
//     $(".mainArea").html(gameHTML);
//     setTimeout(wait, 4000);
 
// wait = 