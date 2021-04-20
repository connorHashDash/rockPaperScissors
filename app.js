
alert(`please open console (F12) to see the results of the game`)
let userScore = 0
let compScore = 0

for(i = 0; i <= 5; i++){                                        //loops for five times

console.log('You: ' + userScore)
console.log('comp: '+ compScore)

let userInput = prompt('rock paper or scissors?')               //asks user of rock paper or scissors
let userPlay = function(){                                      //converts input to '1' '2' '3' 
                    userInput.toLowerCase()
                    if (userInput == 'rock'){
                        return '1'
                    } else if (userInput == 'paper'){
                        return '2'
                    } else if (userInput == 'scissors'){
                       return  '3' 
                    } else {
                        return 0                                //returns 0 if invalid input is recieved 
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


let bothPlays = userPlay() + computerPlay()
console.log(bothPlays)

switch(bothPlays) {                                             //adds the two numbers together to decide winner/increment score
    case '12':
        ++compScore;
        console.log('computer played paper, you lose!')
    break;

    case '13':
        ++userScore
        console.log('computer played scissors, you win!')
    break

    case '21':
        ++userScore
        console.log('computer played rock, you win!')
    break

    case '23':
        ++compScore;
        console.log('computer played scissors, you lose!')
    break

    case '31':
        ++compScore;
        console.log('computer played rock, you lose!')
    break

    case '32':
        ++userScore
        console.log('computer played paper, you win!')
    break
    default:
        console.log(`Draw!`)
}
}
console.log(`five rounds over final score
you: ${userScore}
comp ${compScore}`)

