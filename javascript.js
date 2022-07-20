console.log("Hello Welcome to Rock Scissors Paper - Game")




let playerOption = "";
let computerSelection="";



function playersChoice(){
    playerOption= prompt("type here your option: rock, paper or scissors");
    playerOption = playerOption.toLowerCase();

    if (playerOption== "rock" || playerOption =="scissors" || playerOption=="paper" )
    {
        console.log("you have choose " + playerOption)
    }
    else
    {
       alert("You choose a wrong word, it has to be 'rock', 'scissors' or 'paper'");
       playerOption = playersChoice();
    }
    return playerOption;
}





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


    playerOption = playersChoice();
     computerSelection = getComputerChoice();
    console.log("the computers choice is: " + computerSelection);

    
if (playerOption== "rock") {
    if (computerSelection =="rock"){
        console.log("You both choose rock, it's a tie")
    }
    else if(computerSelection=="paper"){
        console.log("You loose. Paper beats rock!"); 
    }
    else if(computerSelection=="scissors"){
        console.log("You win!! Rock beats the scissors")
    }
}
if (playerOption=="paper") {
    if (computerSelection =="paper"){
        console.log("You both choose paper, it's a tie")
    }
    else if(computerSelection=="scissors"){
        console.log("You loose. Scissors beats paper!"); 
    }
    else if(computerSelection=="rock"){
        console.log("You win!! Paper beats the rock")
    } 
}
if (playerOption=="scissors") {
    if (computerSelection =="scissors"){
        console.log("You both choose paper, it's a tie")
    }
    else if(computerSelection=="rock"){
        console.log("You loose. Rock beats scissors!"); 
    }
    else if(computerSelection=="paper"){
        console.log("You win!! Scissors beats the paper")
    } 
}
}

function game(){
    for (let i=0; i<5; i++){
        playRound(playerOption, computerSelection);
    }
}



game();
//playRound(playerOption, computerSelection);











