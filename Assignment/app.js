//declear variables - retrive value later
const userElement = document.getElementById("person");
let userCreditElement = document.getElementById("userCredit");
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

const repayButtonElement = document.getElementById("repayLoan");
repayButtonElement.setAttribute("hidden", "hidden");

const userLoanDivElement = document.getElementById("userLoan");
userLoanDivElement.style = "display: none";

const currentLoanElement = document.getElementById("currentLoan");

//Get a loan - PROMPT
// let getLoan = loanButtonElement;
// prompt("Please enter an amount");
// let loan = Number(getLoan);
// let feedback = loan >= " loan >= amount";
// (" You are not eligibale to take a loan");
// alert(feedback);
// loanButtonElement.addEventListener("click", amount);

//1) Get a loan button
let credit = 200;
let loan = 0;
userCreditElement.innerHTML = credit.toLocaleString("no-NO", {
  style: "currency",
  currency: "Nok",
});

let gotLoan = false;

function takeLoan() {
  let amount = parseInt(prompt("Enter an amount:"), 0);

  amount = Number(amount);
  let possibleLoan = credit * 2;
  if (!isNaN(amount) && amount <= possibleLoan && !gotLoan) {
    credit += amount;
    loan += amount;
    gotLoan = true;
    console.log(amount);
    userCreditElement.innerHTML = credit.toLocaleString("no-No", {
      style: "currency",
      currency: "Nok",
    });
    repayButtonElement.removeAttribute("hidden");
    userLoanDivElement.style = "display: static";
    currentLoanElement.innerText = loan.toLocaleString("no-No", {
      style: "currency",
      currency: "Nok",
    });
  } else if (gotLoan) {
    alert("You already have a loan");
  }
}

function payLoan() {
  if (income >= loan);
  currentLoanElement.innerText = "";
  income = income - loan;
  gotLoan = false;
  loan = 0;
  balanceElement.innerHTML = income + " NOK";
  userLoanDivElement.style = "display: none";

  console.log("bwhahahaha");
}

//2) Work button - add 100 each click
let income = 0;

function workWage() {
  income += 100;
  balanceElement.innerHTML = income + " NOK";
}
console.log(income);

// 2.1) Bank button - transfer deposits from wage to balance and reset

let add = function () {
  if (gotLoan) {
    let deductionAmount = income / 10;
    let transferAmount = income - deductionAmount;

    credit += transferAmount;
    gotLoan -= deductionAmount;
  } else {
    credit += income;
  }
  document.getElementById("userCredit").innerHTML = credit.toLocaleString(
    "no-No",
    {
      style: "currency",
      currency: "Nok",
    }
  );
};

let reset = function () {
  income = 0;
  document.getElementById("balance").innerHTML = income;
};

const addMoney = document.getElementById("wage");
const resetButton = document.getElementById("resetbtn");

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
  priceElement.innerHTML = selectedComputer.price + " kr";
  descriptionElement.innerHTML = selectedComputer.description;
  imgElement.src =
    "https://noroff-komputer-store-api.herokuapp.com/" + selectedComputer.image;
  typeElement.innerHTML = selectedComputer.title;
};

//3.1) Buy Button

const handleCheckOut = document.getElementById("buybtn");

function checkOut() {
  credit = credit;
  let price = parseInt(priceElement.innerText);
  if (price > credit) {
    alert("You don't have enough money 🥹 ");
  } else {
    credit -= price;
    document.getElementById("userCredit").innerHTML = credit.toLocaleString(
      "no-No",
      {
        style: "currency",
        currency: "Nok",
      }
    );

    alert("Hurray!! You are now the owner of this PC. 🥳 ");
  }
}
// Eventlistners here !!
loanButtonElement.addEventListener("click", takeLoan);
transferfromBankElement.addEventListener("click", function () {
  add();
});
resetButton.addEventListener("click", function () {
  reset("workWage");
});
computerElement.addEventListener("change", handleComputerDisplayChange);
handleCheckOut.addEventListener("click", checkOut);
wageButtonElement.addEventListener("click", workWage);
repayButtonElement.addEventListener("click", payLoan);
