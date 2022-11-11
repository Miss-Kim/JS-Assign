//declear variables - retrive value later
const userElement = document.getElementById("person");
const userCreditElement = document.getElementById("credit");
const loanButtonElement = document.getElementById("loanbtn");

const workElement = document.getElementById("work"); //
const balanceElement = document.getElementById("balance");
const transferfromBankElement = document.getElementById("resetbtn");

const wageButtonElement = document.getElementById("wage");

const selectionElement = document.getElementById("selection");

const computerElement = document.getElementById("computers");

const typeElement = document.getElementById("type");

const priceElement = document.getElementById("price");

const imgElement = document.getElementById("selectImg");

const descriptionElement = document.getElementById("description");

const buyButtonElement = document.getElementById("buybtn");

//Get a loan - PROMPT
// let getLoan = loanButtonElement;
// prompt("Please enter an amount");
// let loan = Number(getLoan);
// let feedback = loan >= " loan >= amount";
// (" You are not eligibale to take a loan");
// alert(feedback);
// loanButtonElement.addEventListener("click", amount);

//1) Get a loan button

// let loanMoneyFromBank = function (addValuetoBalance) {
//   loan += credit;
//   document.getElementById("loanbtn").innerHTML = loan;
// };

const loan = document.getElementById("loanbtn");
loan.addEventListener("click", clicked);

function clicked() {
  prompt("Please enter an amount");
  if (loan) {
    console.log("you can get loan");
  } else {
    alert("You cannot get a loan more than double of your bank balance.");
  }
}

//2) Work button - add 100 each click
let income = 0;

function workWage() {
  income += 100;
  balanceElement.innerHTML = income + " NOK";
}
console.log(income);

wageButtonElement.addEventListener("click", workWage);

// 2.1) Bank button - transfer deposits from wage to balance and reset

let add = function (valueToAdd) {
  credit += income;
  document.getElementById("credit").innerHTML = credit;
};
let reset = function () {
  income = 0;
  document.getElementById("balance").innerHTML = income;
};

const addMoney = document.getElementById("wage");
const resetButton = document.getElementById("resetbtn");

transferfromBankElement.addEventListener("click", function () {
  add();
});
resetButton.addEventListener("click", function () {
  reset("workWage");
});

//3) Computer selection
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
  .then((response) => response.json())
  .then((data) => (computers = data))
  .then((computers) => addComputerToDisplay(computers));

const addComputersToDisplay = (computers) => {
  computers.forEach((x) => addComputerToDisplay(x));
  priceElement.innerText = computers(0).price;
  descriptionElement.innterText = computers(0).description;
  imgElement.innterText = computers(0).selectImg;
  typeElement.innterText = computers(0).type;
};

const addComputerToDisplay = (computers) => {
  for (let cmp of computers) {
    let computerOption = document.createElement("option");
    computerOption.value = cmp.id;
    computerOption.innerHTML = cmp.title;
    //to apply to DOM
    computerElement.appendChild(computerOption);
  }
};

const handleComputerDisplayChange = (e) => {
  const selectedComputer = computers[e.target.selectedIndex];
  priceElement.innerText = selectedComputer.price + " kr";
  descriptionElement.innerText = selectedComputer.description;
  imgElement.src =
    "https://noroff-komputer-store-api.herokuapp.com/" + selectedComputer.image;
  typeElement.innerHTML = selectedComputer.title;
};

computerElement.addEventListener("change", handleComputerDisplayChange);

//3.1) Buy Button

const handleCheckOut = document.getElementById("buybtn");
handleCheckOut.addEventListener("click", checkOut);

let credit = 200;

function checkOut() {
  credit = credit;
  let price = parseInt(priceElement.innerText);
  if (price > credit) {
    alert("You don't have enough money 🥹 ");
  } else {
    credit -= price;
    document.getElementById("credit").innerHTML = credit;

    alert("Hurray!! You are now the owner of this PC. 🥳 ");
  }
}
