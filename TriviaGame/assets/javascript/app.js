//make a game with multiple questions that each are answered in the form of mulitple guess.
//the whole game is timed and when the timer runs out the game is over or when the player answers all the questions
//at the end of the game display the score of correct and incorrect guesses

$("#start").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Alert #2: Called 3 seconds after the start button is clicked.");
    }, 3000);
  });

  function setup() {
    counter = 20;
    document.querySelector("#timer").innerHTML = "Time: " + counter;
    console.log('workin');
    var timer = setInterval(timeIt, 1000);

    
    function timeIt() {
        if (counter < 0) {
            console.log("stop")
            stopTime();

        }
         else {
            document.querySelector("#timer").innerHTML = "Time: " + counter--;
            console.log('work')

         }
          
    };

    function stopTime() {
        clearInterval(timer);
    }
    
};


//Setup for questions
var counter;
var stepNumber = 0;
var right = 0;
var wrong = 0;
var timeUp = 0;
var x1, x2, x3, x4;

var questions = [
    { q:"What is George's go-to alter ego?", a:"Art Vandelay", d1:"Rusty Shackleford", d2:"Chuck Finley", d3:"Seymour Butz"},
    { q:"What is 'little Jerry'?", a:"A cockfighting chicken", d1:"Jerry's son", d2:"Kramers midget friend", d3:"Jerry's dog"},
    { q:"What did Poppy do to Jerry's counch?", a:"Sat on it and peed himself", d1:"Wiped boogers on the armrest", d2:"Spilled a drink", d3:"Threw it out the window"},
    { q:"Who was the man in the cape?", a:"Frank's Lawyer", d1:"Superman", d2:"Larry David", d3:"Lloyd Braun"},
    { q:"Where did J. Peterman go?", a:"Burma", d1:"Arazona", d2:"Mexico", d3:"Canada"},
    { q:"Who stole Elaine's armoire", a:"Gay street thugs", d1:"Newman", d2:"The Soup Nazi", d3:"Russell Dowripple"},
    { q:"what magizine was George looking at when his mom came home?", a:"Glamour", d1:"Mad", d2:"Sports Illustrated", d3:"TV guide"},
    { q:"What did Elaine call David Putty when he wore his fur coat?", a:"Dr.Zaius", d1:"Curt Russell", d2:"Furbaby", d3:"Boytoy"},
    { q:"What is Davids Putty's money with a hole in it?", a:"Kroner", d1:"Bitcoin", d2:"Dinar", d3:"Eurotrash"},
    { q:"What was on the $20 George thought the cashier stole?", a:"Red lipstick on the president", d1:"Lotto Number", d2:"Uma Thurman's number", d3:"A coffee stain"},
    { q:"Who was not 'sponge-worthy'?", a:"Jerry", d1:"Newman", d2:"Kramer", d3:"David Putty"},
    { q:"What was Kenny Bania's favorite resturant?", a:"Mendy's", d1:"Applebees", d2:"Monks", d3:"Poconos Pizza"},
    
];
var computerObject = questions[stepNumber];


function renderQuestion(stepNumber){
  
    var computerObject = questions[stepNumber];
    
     
    document.querySelector('#question').innerHTML = computerObject.q;
    
    console.log(computerObject);
};

function randomAnswer(){
     randomNumber = Math.floor(Math.random() * 8) + 1;
     var computerObject = questions[stepNumber];
     console.log(randomNumber);
     console.log(stepNumber);
     console.log(computerObject);
     if(randomNumber === 1){
         x1=computerObject.a;
         x2=computerObject.d1;
         x3=computerObject.d2;
         x4=computerObject.d3;

     }
     if(randomNumber === 2){
        x1=computerObject.d1;
        x2=computerObject.a;
        x3=computerObject.d2;
        x4=computerObject.d3;

    }
    if(randomNumber === 3){
        x1=computerObject.d1;
        x2=computerObject.d2;
        x3=computerObject.a;
        x4=computerObject.d3;

    }
    if(randomNumber === 4){
        x1=computerObject.d1;
        x2=computerObject.d2;
        x3=computerObject.d3;
        x4=computerObject.a;

    }
    if(randomNumber === 5){
        x1=computerObject.d2;
        x2=computerObject.d1;
        x3=computerObject.d3;
        x4=computerObject.a;

    }
    if(randomNumber === 6){
        x1=computerObject.d2;
        x2=computerObject.d3;
        x3=computerObject.d1;
        x4=computerObject.a;

    } if(randomNumber === 7){
        x1=computerObject.d3;
        x2=computerObject.d2;
        x3=computerObject.a;
        x4=computerObject.d1;

    } if(randomNumber === 8){
        x1=computerObject.d1;
        x2=computerObject.d3;
        x3=computerObject.d2;
        x4=computerObject.a;
        

    }
    document.querySelector('#choice1').innerHTML = x1;
    document.querySelector('#choice2').innerHTML = x2;
    document.querySelector('#choice3').innerHTML = x3;
    document.querySelector('#choice4').innerHTML = x4;
};
   


   $(document).on('click', '.option', function (){
    var computerObject = questions[stepNumber];
    console.log(this)
    console.log(computerObject)
    if(this.innerHTML === computerObject.a){
        alert("Good Job")
        
        $("#question").empty();
        $("#choice1").empty();
        $("#choice2").empty();
        $("#choice3").empty();
        $("#choice4").empty();
        
        counter = 20;
        stepNumber = ++stepNumber;
        renderQuestion(stepNumber);
        randomAnswer(stepNumber);
        console.log(stepNumber);
    }
    else{
        alert("Dummy")
    }
    
    });

    var answerTimeout = setTimeout(function() {
        
      }, 5000);

 

 
 
 //this is where the game starts
console.log(stepNumber);
 renderQuestion(stepNumber);
 randomAnswer();
 setup();
 
 

