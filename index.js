"use strict";

const account1 = {
  userName: "sc",
  pin: 1111,
  fullName: "Subash Chandra",
  transactions: [
    5000, -300, 60000, -1200, 900, -43434, 54323, 5678, 23232, -890
  ]
};

const account2 = {
  userName: "pc",
  pin: 2222,
  fullName: "Prem Chandra",
  transactions: [
    5000, -300, 60000, -1200, 900, -343434, 54323, 5678, 23232, -890
  ]
};

const transactionsContainer = document.querySelector(".transactions");
const closingBalance = document.getElementById("closingBalance");

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
            <div class="transaction__amount">&#8377; ${txn}</div>
        </li>
        `;
    })
    .join("");

  str += `</ul>`;

  transactionsContainer.insertAdjacentHTML("afterbegin", str);
};

const calculateClosingBalance = transactions => {
  return transactions.reduce((sum, next) => sum + next, 0);
};

const transferMoney = (amount, userFrom, userTo) => {
  // check balance of from account
  // if balance is greater than requestedAmount, reduce from fromAccount and deposite to toAccount
  // if no sufficient balance, show error
};

displayTransactions(account1.transactions);
closingBalance.innerHTML =
  "&#8377;" + calculateClosingBalance(account1.transactions);
