const btnPlayGame = document.querySelector('.btn-play-game')
const colectionBtnPedra = document.querySelectorAll('.pedra')
const colectionBtnPapel = document.querySelectorAll('.papel')
const colectionBtnTesoura = document.querySelectorAll('.tesoura')
const resultShow = document.querySelector('.result')

let playerOne = ''
let playerTwo = ''
let resultGame = ''

const gamingComparation = () => {
    if (playerOne === playerTwo) {
        resultGame = "Empate"
    }

    if (playerOne === 'papel' && playerTwo === 'pedra') {
        resultGame = "Player 1 ganhou"
    }

    if (playerOne === 'pedra' && playerTwo === 'papel' ) {
        resultGame = "Player 2 ganhou"
    }


    if (playerOne === 'tesoura' && playerTwo === 'pedra') {
        resultGame = "Player 1 ganhou"
    }

    if (playerOne === 'pedra' && playerTwo === 'tesoura') {
        resultGame = "Player 2 ganhou"
    }

    if (playerOne === 'tesoura' && playerTwo === 'papel') {
        resultGame = "Player 1 ganhou"
    }

    if (playerOne === 'papel' && playerTwo === 'tesoura') {
        resultGame = "Player 2 ganhou"
    }
}

colectionBtnPedra.forEach((pedra) => {
    pedra.addEventListener('click', ({target}) => {
        const player = target.name
   
        if (player === 'player-one') {
            playerOne = 'pedra'
            console.log(playerOne)
        }

        if (player === 'player-two') {
            playerTwo = 'pedra'
        }
    })
})

colectionBtnPapel.forEach((papel) => {
    papel.addEventListener('click', ({target}) => {
        const player = target.name

        if (player === 'player-one') {
            playerOne = 'papel'
            
        }

        if (player === 'player-two') {
            playerTwo = 'papel'
            
        }
    })
})

colectionBtnTesoura.forEach((tesoura) => {
    tesoura.addEventListener('click', ({target}) => {
        const player = target.name

        if (player === 'player-one') {
            playerOne = 'tesoura' 
        }

        if (player === 'player-two') {
            playerTwo = 'tesoura'
        }
    })
})


btnPlayGame.addEventListener('click', () => {
    gamingComparation()
    resultShow.textContent = resultGame
})


