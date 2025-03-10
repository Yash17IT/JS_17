let userScore =0;
let compScore =0;


const choices = document.querySelectorAll(".choice");
// we are getting all 3 images div by these 

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//2 for comp---------------------------------------------
const playGame =(userChoice) =>{
    console.log("user choice=", userChoice);
    //Generate comp choice -> modular
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);
   if(userChoice === compChoice)
   {
    //draw
    drawGame();
   } else{
    let userWin= true;
    if(userChoice==="rock")
    {
        //sci,paper
        userWin = compChoice=== "paper" ? false : true ;
    } else if(userChoice === "paper" )
    {  //rock ,scissor
        userWin = compChoice=== "scissor" ? false : true;

    } else{
        //rock,paper
       userWin= compChoice==="rock"? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
}
//--------------------------------------------------------------


//5
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };





//3 ------------------------------------------------------------
const genCompChoice =() =>{
    const options = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
//----------------------------------------------------------------

//4
const drawGame =()=>{
    console.log("game was draw");
 msg.innerText = "Game was Draw. Play again";
 msg.style.backgroundColor = "#081b31";
}








//-----------------------------------------------------------------
// 1 we are adding event listner on each choice
choices.forEach((choice)=> {
    // console.log(choice); 
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
// console.log("choice was clicked",choiceId);
playGame(userChoice);
    });
});

//------------------------------------------------------------------