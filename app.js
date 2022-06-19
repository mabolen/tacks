//for beginning each game
$('#alert').hide()
let turn = 'X'
let started = false
const startGame = () => {
    if (!started) {
        started = true
        $('#turn').text(`It's ${turn}'s turn`)
        $('#start-button').hide()
    }
}
//selected square combos and combos for winning
let xCombos = []
let oCombos = []
let winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
//checks to see if there is a winner
const checkWin = (letter) => {
    for (let set of winningCombos) {
        if (letter.includes(set[0]) && letter.includes(set[1]) && letter.includes(set[2])) {
            $('#turn').text('Game Over')
            endGame()
        }
    }
    if (xCombos.length + oCombos.length === 9) {
        started = false
        $('#turn').text("Game Over")
        $('#alert').show().text(`It's a draw!`)
    }
}
//ends game displays winner alert
const endGame = () => {
    started = false
    $('#alert').show().text(`${turn} wins!`)
}
//reset game
const resetGame = () => {
    location.reload()
}
//handles user clicking on a square
const clickedSquare = (id) => {
    if (!$(`#${id}`).hasClass('selected') && started) {
        $(`#${id}`).addClass('selected')
        if (turn === 'X') {
            $(`#${id}x`).addClass('show')
            xCombos.push(parseInt(id.substring(7,8)))
            checkWin(xCombos)
        } else {
            $(`#${id}o`).addClass('show')
            oCombos.push(parseInt(id.substring(7,8)))
            checkWin(oCombos)
        }
        if (started) {
            turn = turn === 'X' ? 'O' : 'X'
            $('#turn').text(`It's ${turn}'s turn`)
        }
    }
}