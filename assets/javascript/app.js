$(document).ready(function() {
var questions = [{

    question: "Early in the series he was laid-off due to corporate mandated downsizing. Name this minor character that Michael was convinced by Creed to lay off?",
    answers: ["Toby", "Greg", "Devon", "Robert"],
    correctAnswer: 3,

    question: "What county in Pennsylvania is Dunder Mifflin Scranton branch located?",
    answers: ["Lackawanna County", "River County", "Creek County", "Creed County"],
    correctAnswer: 1,

    question: "What is the exclusive club that Pam, Oscar, and Toby establish in the episode 'Branch Wars'?",
    answers: ["Breakfast Club", "Club 33", "Finer Things Club", "Party Planning Club"],
    correctAnswer: 3,

    question: "Who started the fire?",
    answers: ["Michael", "Aaron", "Kevin", "Ryan"],
    correctAnswer: 4,

    question: "How did he start the fire?",
    answers: ["Burnt Pizza", "Fried Out Outlet", "Cigarette In Trash can", "Tipped Candle"],
    correctAnswer: 1,

    question: "Dwight owns and runs a farm in his spare time. What does his farm produce?",
    answers: ["Cannabis", "Beets", "Corn", "Pumpkins"],
    correctAnswer: 2,

    question: "Question, what kind of bear is best?",
    answers: ["Grizzly", "Pandas", "Black bears", "Polar bear"],
    correctAnswer: 3,

    question: "Who took over Pam as the receptionist after she went to art school in season 5?",
    answers: ["Ryan", "Jim", "Pam's Husband", "Aaron"],
    correctAnswer: 1,

    question: "Who plays Michael Scott, the Regional Manager of the company?",
    answers: ["Bob Odenkirk", "Steve Carell", "John Krasinski", "Ricky Gervais"],
    correctAnswer: 2,

    question: "Where does Jim tell Pam about his feelings?",
    answers: ["The Office", "The Parking Lot", "Gas Station", "The Break Room"],
    correctAnswer: 2,
  }];
  
  var userPick;

  var correctAnswer = 0;
  
  var incorrectAnswer = 0;
  
  var questionNumber = 0;
  
  var count=30;
  
  $("#start").click(function(){
  $(this).hide();
  counter = setInterval(timer, 1000); 
  displayTrivia();
  }); 
  
  
  function timer(){
  count--;
  if (count <= 0) {
   clearInterval(counter);
   return;
  }
  
   $("#timer").html("Time remaining: " + "00:" + "count");
  }
  
  
  function displayTrivia() { 

  });
  

