"use strict";

const account1 = {
  pin: 1111,
  fullName: "Subash Chandra",
  transactions: [
    { amount: 5000, date: new Date() },
    { amount: -300, date: new Date(2023, 0, 9) },
    { amount: 60000, date: new Date(2023, 0, 8) },
    { amount: -1200, date: new Date(2023, 0, 7) },
    { amount: 900, date: new Date(2023, 0, 6) },
    { amount: -43434, date: new Date(2023, 0, 5) },
    { amount: 54323, date: new Date(2023, 0, 4) },
    { amount: 5678, date: new Date(2023, 0, 3) },
    { amount: 23232, date: new Date(2023, 0, 2) },
    { amount: -890, date: new Date(2023, 0, 1) }
  ],
  rate: 0.8
};

const account2 = {
  pin: 2222,
  fullName: "Prem Chandra",
  transactions: [
    { amount: 5000, date: new Date(2023, 0, 9) },
    { amount: -300, date: new Date(2023, 0, 9) },
    { amount: 60000, date: new Date(2023, 0, 9) },
    { amount: -1200, date: new Date(2023, 0, 9) },
    { amount: 900, date: new Date(2023, 0, 9) },
    { amount: -12, date: new Date(2023, 0, 9) },
    { amount: 54323, date: new Date(2023, 0, 9) },
    { amount: 5678, date: new Date(2023, 0, 9) },
    { amount: 23232, date: new Date(2023, 0, 9) },
    { amount: -890, date: new Date(2023, 0, 9) }
  ],
  rate: 0.8
};

const account3 = {
  pin: 2222,
  fullName: "Subash Chandra Boss",
  transactions: [
    { amount: 5000, date: new Date(2023, 0, 9) },
    { amount: -300, date: new Date(2023, 0, 9) },
    { amount: 60000, date: new Date(2023, 0, 9) },
    { amount: -1200, date: new Date(2023, 0, 9) },
    { amount: 900, date: new Date(2023, 0, 9) },
    { amount: -12, date: new Date(2023, 0, 9) },
    { amount: 54323, date: new Date(2023, 0, 9) },
    { amount: 5678, date: new Date(2023, 0, 9) },
    { amount: 23232, date: new Date(2023, 0, 9) },
    { amount: -890, date: new Date(2023, 0, 9) }
  ],
  rate: 0.8
};

const account4 = {
  pin: 2222,
  fullName: "Vartika Nirmal",
  transactions: [
    { amount: 5000, date: new Date(2023, 0, 9) },
    { amount: -300, date: new Date(2023, 0, 9) },
    { amount: 60000, date: new Date(2023, 0, 9) },
    { amount: -1200, date: new Date() },
    { amount: 900, date: new Date(2023, 0, 9) },
    { amount: -12, date: new Date(2023, 0, 9) },
    { amount: 54323, date: new Date(2023, 0, 9) },
    { amount: 5678, date: new Date(2023, 0, 9) },
    { amount: 23232, date: new Date(2023, 0, 9) },
    { amount: -890, date: new Date(2023, 0, 9) }
  ],
  rate: 0.8
};

const accounts = [account1, account2, account3, account4];
const transactionsContainer = document.querySelector(".transactions");
const closingBalance = document.getElementById("closingBalance");
const main = document.querySelector(".main");
const timer = document.getElementById("timer");
const interestContainer = document.querySelector(".interest__amount");
const depositContainer = document.querySelector(".deposit__amount");
const withdrawalContainer = document.querySelector(".withdrawal__amount");
const header = document.querySelector(".heading--primary");
let currentAccount;

const displayTransactions = (account, sort) => {
  let moves = account.transactions;

  if (sort) {
    moves = account.transactions.slice().sort((a, b) => a.amount - b.amount);
  }

  let str = `<ul class="card list">`;

  str += moves
    .reverse()
    .map((txn, i) => {
      const now = new Date(txn.date);
      const currentDate = formatDate(now);
      return `
        <li class="list__item">
            <div class="badge badge--${
              txn.amount > 0 ? "green" : "red"
            } transaction__type">${
        txn.amount > 0 ? `${i + 1} Deposit` : `${i + 1} Withdrawal`
      }
            </div>
            <div class="transaction__date">${currentDate}</div>
            <div class="transaction__amount">&#8377; ${Math.abs(
              txn.amount
            ).toFixed(2)}</div>
        </li>
        `;
    })
    .join("");

  str += `</ul>`;

  transactionsContainer.innerHTML = "";
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

const calculateClosingBalance = transactions =>
  transactions.reduce((sum, next) => sum + next, 0);

function updateUI(account) {
  displayTransactions(account);
  displayCurrentBalance(account);
  displayAnalytics(account);
}

const transferMoney = (amount, userTo) => {
  const toAccount = accounts.find(acc => acc.userName === userTo);
  // check balance of from account
  // if balance is greater than requestedAmount, reduce from fromAccount and deposit to toAccount
  if (
    amount > 0 &&
    toAccount &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== toAccount.userName
  ) {
    toAccount.transactions.push({ amount, date: new Date() });
    currentAccount.transactions.push({ amount: -amount, date: new Date() });

    // update UI
    updateUI(currentAccount);
  }

  // if no sufficient balance, show error
};

function displayCurrentBalance(account) {
  account.balance = calculateClosingBalance(
    account.transactions.map(txn => txn.amount)
  );
  closingBalance.innerHTML = "";
  closingBalance.insertAdjacentHTML(
    "afterbegin",
    "&#8377;" + account.balance.toFixed(2)
  );
}

const deposit = function (transactions) {
  return transactions
    .filter(txn => txn > 0)
    .reduce((sum, curr) => sum + curr, 0);
};

const withdrawal = function (transactions) {
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

function displayAnalytics(account) {
  const txns = account.transactions.map(txn => txn.amount);
  interestContainer.innerHTML = "";
  interestContainer.insertAdjacentHTML(
    "afterbegin",
    "&#8377;" + interest(txns, account.rate).toFixed(2)
  );

  withdrawalContainer.innerHTML = "";
  withdrawalContainer.insertAdjacentHTML(
    "afterbegin",
    "&#8377;" + Math.abs(withdrawal(txns)).toFixed(2)
  );

  depositContainer.innerHTML = "";
  depositContainer.insertAdjacentHTML(
    "afterbegin",
    "&#8377;" + deposit(txns).toFixed(2)
  );
}

function formatDate(date) {
  let formatedDate = "";
  const diffDays = Math.floor(
    Math.abs(+new Date() - new Date(date)) / (1000 * 60 * 60 * 24)
  );

  switch (diffDays) {
    case 0:
      formatedDate = "Today";
      break;
    case 1:
      formatedDate = "Yesterday";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      formatedDate = `${diffDays} days ago`;
      break;
    default:
      formatedDate = `${`${date.getDate()}`.padStart(2, 0)}/${`${
        date.getMonth() + 1
      }`.padStart(2, 0)}/${date.getFullYear()}`;
  }

  return formatedDate;
}

document.querySelector(".login").addEventListener("click", function (e) {
  e.preventDefault();

  const userName = document.getElementById("userName");
  const userPin = document.getElementById("userPin");

  const account = accounts.find(
    acc => acc.pin === Number(userPin.value) && acc.userName === userName.value
  );

  if (!account) {
    return;
  }

  currentAccount = account;
  userName.value = "";
  userPin.value = "";
  header.textContent = `Welcome back, ${account.fullName.split(" ")[0]}`;
  const now = new Date();
  const currentDate = `${`${now.getDate()}`.padStart(2, 0)}/${`${
    now.getMonth() + 1
  }`.padStart(
    2,
    0
  )}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
  const asOfNow = document.getElementById("as_of_now");
  asOfNow.innerHTML = "";
  asOfNow.insertAdjacentHTML("afterbegin", currentDate);

  updateUI(account);

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

document.querySelector(".transfer").addEventListener("click", function (e) {
  e.preventDefault();

  const transferTo = document.getElementById("transferTo");
  const transferAmount = document.getElementById("amount");

  transferMoney(Number(transferAmount.value), transferTo.value);

  transferTo.value = "";
  transferAmount.value = "";
});

document
  .querySelector(".close-account")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const user = document.getElementById("user");
    const pin = document.getElementById("pin");
    if (
      user.value === currentAccount.userName &&
      Number(pin.value) === currentAccount.pin
    ) {
      const accountIndex = accounts.findIndex(
        acc => acc.pin === Number(pin.value) && acc.userName === user.value
      );

      // remove account
      accounts.splice(accountIndex, 1);

      //clear inputs
      user.value = "";
      pin.value = "";

      //logout user
      main.classList.remove("app");

      window.location.reload();
    }
  });

document.querySelector(".request-loan").addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = document.getElementById("loanAmount");

  // loan will be granted if there is atleast one deposit
  const depositCheck = currentAccount.transactions.some(txn => txn.amount > 0);

  if (depositCheck && loanAmount.value > 0) {
    currentAccount.transactions.push({
      amount: Number(loanAmount.value),
      date: new Date()
    });

    updateUI(currentAccount);

    loanAmount.value = "";
  }
});

document
  .querySelector(".sort__transactions")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const sortTxn = this.textContent;
    let sortDir = true;
    let arrow = "&uarr;";

    if (sortTxn === "↑") {
      sortDir = false;
      arrow = "&darr;";
    }

    this.innerHTML = "";
    this.insertAdjacentHTML("afterbegin", arrow);
    displayTransactions(currentAccount, sortDir);
  });
