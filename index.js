"use strict";

const account1 = {
  pin: 1111,
  fullName: "Subash Chandra",
  transactions: [
    5000, -300, 60000, -1200, 900, -43434, 54323, 5678, 23232, -890
  ]
};

const account2 = {
  pin: 2222,
  fullName: "Prem Chandra",
  transactions: [
    5000, -300, 60000, -1200, 900, -343434, 54323, 5678, 23232, -890
  ]
};

const account3 = {
  pin: 2222,
  fullName: "Subash Chandra Boss",
  transactions: [
    5000, -300, 60000, -1200, 900, -343434, 54323, 5678, 23232, -890
  ]
};

const account4 = {
  pin: 2222,
  fullName: "Vartika Nirmal",
  transactions: [
    5000, -300, 60000, -1200, 900, -343434, 54323, 5678, 23232, -890
  ]
};

const accounts = [account1, account2, account3, account4];

const transactionsContainer = document.querySelector(".transactions");
const closingBalance = document.getElementById("closingBalance");
const main = document.querySelector(".main");
const timer = document.getElementById("timer");

document.querySelector(".login").addEventListener("click", function () {
  main.classList.add("app");
  let tenMinutesInSeconds = 10 * 60;

  setTimeout(() => {
    main.classList.remove("app");
  }, 1000 * tenMinutesInSeconds);

  const intervalId = setInterval(() => {
    if (tenMinutesInSeconds <= 0) {
      clearInterval(intervalId);
      return;
    }

    timer.innerHTML = "";
    const remainingSeconds = tenMinutesInSeconds--;
    timer.insertAdjacentHTML(
      "afterbegin",
      `${parseInt(remainingSeconds / 60)}:${remainingSeconds % 60}`
    );
  }, 1000);
});

const displayTransactions = transactions => {
  let str = `<ul class="card list">`;

  str += transactions
    .map((txn, i) => {
      return `
        <li class="list__item">
            <div class="badge badge--${
              txn > 0 ? "green" : "red"
            } transaction__type">${
        txn > 0 ? `${i + 1} Deposite` : `${i + 1} Withdrawal`
      }
            </div>
            <div class="transaction__date">Today</div>
            <div class="transaction__amount">&#8377; ${Math.abs(txn)}</div>
        </li>
        `;
    })
    .join("");

  str += `</ul>`;

  transactionsContainer.insertAdjacentHTML("afterbegin", str);
};

const createUserName = function (accs) {
  accs.forEach(account => {
    account.userName = computeUserName(account.fullName);
  });
};

const computeUserName = function (fullName) {
  return fullName
    .toLowerCase()
    .split(" ")
    .map(name => name.at(0))
    .join("");
};

createUserName(accounts);

console.log(accounts);

const calculateClosingBalance = transactions =>
  transactions.reduce((sum, next) => sum + next, 0);
const transferMoney = (amount, userFrom, userTo) => {
  // check balance of from account
  // if balance is greater than requestedAmount, reduce from fromAccount and deposite to toAccount
  // if no sufficient balance, show error
};

displayTransactions(account1.transactions);
closingBalance.innerHTML =
  "&#8377;" + calculateClosingBalance(account1.transactions);

const deposites = function (transactions) {
  return transactions
    .filter(txn => txn > 0)
    .reduce((sum, curr) => sum + curr, 0);
};

const withdrawals = function (transactions) {
  return transactions
    .filter(txn => txn < 0)
    .reduce((sum, curr) => sum + curr, 0);
};

const interest = function (transactions, rate) {
  return transactions
    .filter(txn => txn > 0)
    .map(txn => (txn * rate) / 100)
    .reduce((sum, curr) => sum + curr, 0);
};

function displayAnalytics(account) {}
