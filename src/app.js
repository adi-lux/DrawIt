
let dimension = 16
// Create a 16x16 grid of square divs

const container = document.querySelector('div.container')

for (let i = 0; i < dimension; i++) {
    const newRow = document.createElement('div')
    newRow.className = 'row'

    for (let j = 0; j < dimension; j++) {
        const newCell = document.createElement('div')
        const newId = i * dimension + j
        newCell.className = 'cell'
        newCell.id = `cell-${newId}`
        newRow.appendChild(newCell)
    }
    container.appendChild(newRow)
}

