// *******************TEST**********************
const titleElem = document.querySelector("#board");
console.log("board", titleElem);

// Stage 1 - Game State and Rendering
// ******************** STATE ***********************
// Create an initial state
const state = {};

// build initial state which is going to populate our board
function buildInitialState() {
  state.board = [
    "car",
    "bus",
    "car",
    "cat",
    "dog",
    "cat",
    "dog",
    "hat",
    "hat",
    "bus",
    "mit",
    "mit",
  ];
}

// ************************ DOM SELECTORS ****************
const boardElem = document.querySelector("#board");
function renderBoard() {
  // empty the element
  boardElem.innerHTML = "";
  for (let i = 0; i < state.board.length; i++) {
    // card for each board
    const card = state.board[i];
    // create div tag for each cell
    const cellElem = document.createElement("div");
    // create class for each cell so we can style it and target
    // it in the click listener
    cellElem.classList.add("cell");
    // add the word of the current card
    cellElem.innerText = card;
    // keep track of the index for future play
    cellElem.dataset.index = i;
    // add the cellElem to board
    boardElem.appendChild(cellElem);
  }
}

// *********************EVENT LISTENERS *****************
boardElem.addEventListener("click", function (event) {
  console.log("this", this);
  if (event.target.className === "cell") {
    console.log("event", event.target);
    const cellIdx = event.target.dataset.index;
    state.board[cellIdx] = "";
    renderBoard();
  }
});

// ********************** BOOTSTRAPPING *****************
buildInitialState();
renderBoard();
