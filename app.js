// *******************TEST**********************
const titleElem = document.querySelector("#board");
console.log("board", titleElem);

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
console.log("boardElem", boardElem);
function renderBoard() {
  boardElem.innerHTML = "";
  for (let i = 0; i < state.board.length; i++) {
    // card for each board
    const card = state.board[i];
    // create div tag for each cell
    const cellElem = document.createElement("div");
    // create class for each cell
    cellElem.classList.add("cell");
    cellElem.dataset.index = i;
    cellElem.innerText = card;
    // add the cellElem to board
    boardElem.appendChild(cellElem);
    console.log("boardElem", boardElem);
  }
  //   let randomDiv = document.createElement("div");
  //   randomDiv.innerText = "RANDOM";
  //   boardElem.appendChild(randomDiv);
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
