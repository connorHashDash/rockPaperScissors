//DECLARING VARS
let rock = document.querySelector('#rock')
let paper= document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

let uScoreP = document.createElement('p')
let cScoreP = document.createElement('p')
let gameInfo = document.createElement('p')

let uScoreDiv = document.querySelector('.uScore')
let cScoreDiv = document.querySelector('.cScore')
let gameInfoDiv = document.querySelector('.gameInfo')

let userScore = 0
let compScore = 0
let message 

//DECLARING FUNCTIONS
function playRound(U, C) {
let bothPlays = U + C;

switch(bothPlays) {                                             //adds the two numbers together to decide winner/increment score
    case '12':
        ++compScore;
        message = 'computer played paper, you lose!'
    break;
    case '13':
        ++userScore
       message = 'computer played scissors, you win!'
    break
    case '21':
        ++userScore
        message = 'computer played rock, you win!'
    break
    case '23':
        ++compScore;
        message ='computer played scissors, you lose!'
    break
    case '31':
        ++compScore;
        message = 'computer played rock, you lose!'
    break
    case '32':
        ++userScore
        message = 'computer played paper, you win!'
    break
    default:
        message = `Draw!`
}
}

function computerPlay(){                                        //gives randomly generated play from computer in '1' '2' or '3'
    let randomN = Math.random();
    if (randomN <= 0.33){
        return '1'    
    } else if (randomN >= 0.66){
        return '2'
    } else {
        return '3'
    }
}

function endChecker(){
if (userScore == 5) {
    userScore = 0;
    compScore = 0;
    message =  `YOU WIN!!!!` 
    uScoreP.textContent = `YOU: ${userScore}`
    cScoreP.textContent = `COMP: ${compScore}`
    gameInfo.textContent = `${message}`
}else if (compScore== 5){
    userScore = 0;
    compScore = 0;
    message =  `YOU LOSE HAHAHAHAHAHA!!!!` 
    uScoreP.textContent = `YOU: ${userScore}`
    cScoreP.textContent = `COMP: ${compScore}`
    gameInfo.textContent = `${message}`
}
}
//Buttons being pressed
rock.addEventListener('click', function(){
    let userPlay = '1'
    playRound(userPlay, computerPlay())
    uScoreP.textContent = `YOU: ${userScore}`
    cScoreP.textContent = `COMP: ${compScore}`
    gameInfo.textContent = `${message}`
    endChecker()
});
paper.addEventListener('click', function(){
    let userPlay = '2'
    playRound(userPlay, computerPlay())
    uScoreP.textContent = `YOU: ${userScore}`
    cScoreP.textContent = `COMP: ${compScore}`
    gameInfo.textContent = `${message}`
    endChecker()
});
scissors.addEventListener('click', function(){
    let userPlay = '3'
    playRound(userPlay, computerPlay())
    uScoreP.textContent = `YOU: ${userScore}`
    cScoreP.textContent = `COMP: ${compScore}`
    gameInfo.textContent = `${message}`
    endChecker()
});

//Score Declaration
uScoreP.textContent = `YOU: ${userScore}`
cScoreP.textContent = `COMP: ${compScore}`
uScoreDiv.appendChild(uScoreP)
cScoreDiv.appendChild(cScoreP)
gameInfoDiv.appendChild(gameInfo)


