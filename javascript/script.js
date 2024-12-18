let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let resetbtn = document.querySelector(".reset");
let count = 0;

let winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turnO) {
        box.innerText = "O";
        turnO = false;
      } else {
        box.innerText = "X";
        turnO = true;
      }
      count++;
      box.disabled = true;

      let iswinner = checkwinner();

      // Check for a draw only if there's no winner
      if (count === 9 && !iswinner) {
        gamedraw();
      }
    }
  });
});

const gamedraw = () => {
  msg.innerText = "Game was a draw";
  msgcontainer.classList.remove("hide");
  disabledbox();
};

const showwinner = (pos1) => {
  msg.innerText = `Congratulations, the winner is ${pos1}`;
  msgcontainer.classList.remove("hide");
  disabledbox();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showwinner(pos1);
      return true; // Return true if there's a winner
    }
  }
  return false; // Return false if no winner
};

const disabledbox = () => {
  boxes.forEach((box) => (box.disabled = true));
};

const enabledbox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const reset = () => {
  turnO = true;
  count = 0;
  enabledbox();
  msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
