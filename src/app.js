
let dimension = 16
// Create a 16x16 grid of square divs

const hoverEvent = (e) => {
    e.stopPropagation()
    console.log(e);
    document.getElementById(e.target.id).style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
}

const setDimensions = (newNumber = 16) => {
    
    dimension = newNumber
    const board = document.querySelector('div#board')
    board.innerHTML = ''
    board.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    board.style.gridTemplateRows = `repeat(${dimension}, 1fr)`
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const newCell = document.createElement('div')
            const newId = i * dimension + j
            newCell.className = 'cell'
            newCell.id = `cell-${newId}`
            newCell.addEventListener('mouseover', hoverEvent)
            board.appendChild(newCell)
        }
    }
}

//Initialize the board

setDimensions() 

