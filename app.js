let dimension = 16;
let backgroundColor = "#ada1eb"
// Create a 16x16 grid of square divs

const pressEvent = (e) => {
	e.stopPropagation();
	document.getElementById(e.target.id).style.backgroundColor =
		`${backgroundColor}`;
};

const setDimensions = (newNumber = 16) => {
	dimension = newNumber;
	const board = document.querySelector("div#board");
	board.innerHTML = "";
	board.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;
	for (let i = 0; i < dimension; i++) {
		for (let j = 0; j < dimension; j++) {
			const newCell = document.createElement("div");
			const newId = i * dimension + j;
			newCell.className = "cell";
			newCell.id = `cell-${newId}`;
			newCell.addEventListener("mouseover", pressEvent);

			if (newId === 0) {
				newCell.style.borderRadius = "0.3vh 0px 0px 0px";
			}

			if (newId === dimension - 1) {
				newCell.style.borderRadius = "0vh 0.3vh 0px 0px";
			}

			if (newId === dimension * (dimension - 1)) {
				newCell.style.borderRadius = "0px 0px 0.3vh 0px";
			}

			if (i === dimension * dimension - 1) {
				newCell.style.borderRadius = "0px 0px 0px 0.3vh";
			}
			board.appendChild(newCell);
		}
	}
};

const onChange = (e) => {
	newDimension = e.target.value;
	const label = document.querySelector("label#range-text");
	label.innerText = `Dimension: ${newDimension} x ${newDimension}`;
	setDimensions(newDimension);
};

const onChangeColor = (e) => {

    const input = document.querySelector("input#fill-color");
    backgroundColor = input.value;
    console.log(input.value);
}

const onClick = (e) => {
    backgroundColor = "#FFFFFF"
}

const initialize = () => {
	const slider = document.querySelector("input#range-slider");
    const eraser = document.querySelector("button#eraser");
    const colorWheel = document.querySelector("input#fill-color");
	slider.addEventListener("change", onChange);
    colorWheel.addEventListener("change", onChangeColor);
    eraser.addEventListener("click", onClick);

	setDimensions();
};
//Initialize the board

initialize();
