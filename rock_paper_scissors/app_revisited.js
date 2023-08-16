


let playerScore = 0
let compScore = 0
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return arrOfChoices[randomNum]
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = `You tied! You both picked ${playerSelction}`
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        // compScore = compScore + 1, compScore--, compScore = compScore - 1
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You won! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Paper covers rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You won! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You lost! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You won! Paper covers rock'
        outcomeDiv.appendChild(p)
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore}! Great job beating the computer!`
        outcomeDiv.append(h2)
    }

    if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `You lost ${playerScore} to ${computerScore}. Back to the starting line.`
        outcomeDiv.append(h2)
    }
}


const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}


rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkForWinner(playerScore, compScore)
})

/*     console.log('1', playerSelection, '2', computerSelection)
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lost! Rock crushes scissors'

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won! Scissors cuts paper'

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper covers rock'

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! Rock crushes scissors'

    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cuts paper'

    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper covers rock'
    } */
        
 

/* const game = () => {
    for (let i=0; i<5; i++) {
        const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors')
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }

    if (playerScore > compScore) {
        return 'You beat the computer! You are a genius!'

    } else if (playerScore < compScore) {
        return 'You got beaten by the computer! Practice your throws!'

    } else {
        return 'You tied with the computer! Not too shabby.'
    }
}

console.log(game()) */