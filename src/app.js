let dimension = 16;
// Create a 16x16 grid of square divs

const pressEvent = (e) => {
	e.stopPropagation();
	document.getElementById(e.target.id).style.backgroundColor =
		"#ada1eb";
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

const initialize = () => {
	const slider = document.querySelector("input#range-slider");
	slider.addEventListener("change", onChange);

	setDimensions();
};
//Initialize the board

initialize();
