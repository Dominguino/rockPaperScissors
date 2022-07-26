console.log("Hello Welcome to Rock Scissors Paper - Game")




let playerOption = "";
let computerSelection="";
var playerWins = 0;
var computerWins = 0; 

//creado variables para los botones

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const marcadorPlayer = document.querySelector('.marcadorPlayer');
const marcadorComputer = document.querySelector('.marcadorComputer');
const aviso = document.querySelector('.aviso');


/* WE CAN CHOOSE BY TYPING IN OUR CHOICE 
function playersChoiceWritten(){
    playerOption= prompt("type here your option: rock, paper or scissors");
    playerOption = playerOption.toLowerCase();

    if (playerOption== "rock" || playerOption =="scissors" || playerOption=="paper" )
    {
        console.log("you have choose " + playerOption)
    }
    else
    {
       alert("You choose a wrong word, it has to be 'rock', 'scissors' or 'paper'");
       playerOption = playersChoiceWritten();
    }
    return playerOption;
}
*/




function getComputerChoice(){
    let numOpc = Math.floor(Math.random()*3)+1;
    let choice =""; 
    if (numOpc==1) {
        choice = "rock"; 
    }
    else if (numOpc==2){
        choice ="paper";
    }
    else if (numOpc==3){
        choice ="scissors"
    }
    return choice;
}


function playRound(playerOption, computerSelection)
{

    playerOption= this.id;
   // playerOption = playersChoiceButton();
     computerSelection = getComputerChoice();
    //console.log("the computers choice is: " + computerSelection);

    
if (playerOption== "rock") {
    if (computerSelection =="rock"){
        //console.log("You both choose rock, it's a tie");
        result.innerHTML="You both choose rock, it's a tie";
    }
    else if(computerSelection=="paper"){
        //console.log("You loose. Paper beats rock!"); 
        result.innerHTML="You loose. Paper beats rock!";
        computerWins = computerWins+1; 
        marcadorComputer.innerHTML="Computer: "+ computerWins;

    }
    else if(computerSelection=="scissors"){
        //console.log("You win!! Rock beats the scissors");
        result.innerHTML="You win!! Rock beats the scissors";
        playerWins= playerWins + 1;
        marcadorPlayer.innerHTML="Player: " + playerWins;
    }
}
if (playerOption=="paper") {
    if (computerSelection =="paper"){
        //console.log("You both choose paper, it's a tie");
        result.innerHTML="You both choose paper, it's a tie";
    }
    else if(computerSelection=="scissors"){
       //console.log("You loose. Scissors beats paper!"); 
        result.innerHTML="You loose. Scissors beats paper!";
        computerWins = computerWins+1; 
        marcadorComputer.innerHTML="Computer: "+ computerWins;


    }
    else if(computerSelection=="rock"){
        //console.log("You win!! Paper beats the rock");
        result.innerHTML="You win!! Paper beats the rock";
        playerWins= playerWins + 1;
        marcadorPlayer.innerHTML="Player: " + playerWins;


    } 
}
if (playerOption=="scissors") {
    if (computerSelection =="scissors"){
        //console.log("You both choose paper, it's a tie");
        result.innerHTML="You win!! Paper beats the rock";
        playerWins= playerWins + 1;
        marcadorPlayer.innerHTML="Player: " + playerWins;


    }
    else if(computerSelection=="rock"){
        //console.log("You loose. Rock beats scissors!"); 
        result.innerHTML="You loose. Rock beats scissors!";
        computerWins = computerWins+1; 
        marcadorComputer.innerHTML="Computer: "+ computerWins;


    }
    else if(computerSelection=="paper"){
        //console.log("You win!! Scissors beats the paper");
        result.innerHTML="You win!! Scissors beats the paper";
    } 



}
    if(playerWins==5){
         aviso.innerHTML="Has ganado!!"
        console.log("has ganado, se ha acabado");
      }
    if(computerWins==5){
          aviso.innerHTML="Has perdido!!"
      }


}


/*  THIS FUNCTION MAKES IT PLAY 5 TIMES
function game(){
    for (let i=0; i<5; i++){
        playRound(playerOption, computerSelection);
    }
}
*/



buttons.forEach(button =>button.addEventListener('click', playRound))







