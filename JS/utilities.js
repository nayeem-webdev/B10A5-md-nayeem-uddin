// COMMON VARS

// ID TO NUMBER
function idToNum(id) {
  let i = document.getElementById(id).innerText;
  return Number(i);
}

// INPUT VALUE TO NUMBER
function inputToNum(id) {
  let i = document.getElementById(id).value;
  return Number(i);
}

// Toggle Button Show / Hide
function showHide(id1, id2) {
  document.getElementById(id1).classList.add("hidden");
  document.getElementById(id1).classList.remove("block");
  document.getElementById(id2).classList.add("block");
  document.getElementById(id2).classList.remove("hidden");
}

// History Backward
let lastTransElement = null;
function lastTrans(container, element) {
  let historyBox = document.getElementById(container);
  if (lastTransElement) {
    historyBox.insertBefore(element, lastTransElement);
  } else {
    historyBox.appendChild(element);
  }
  lastTransElement = element;
}

// MODAL OPEN CLOSE
function openModal(modalID, closeButtonID) {
  let modal = document.getElementById(modalID);
  let closeModal = document.getElementById(closeButtonID);

  modal.classList.remove("hidden");
  // close
  closeModal.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
}

// Recharge Blank Input Validate
function inputValidate(id1, id2, id3, id4) {
  let q = document.getElementById(id1).value;
  let qn = Number(q);
  let w = document.getElementById(id2).value;
  let e = document.getElementById(id3).value;
  let r = document.getElementById(id4).value;

  if (q === "" || w === "" || e === "" || r === "") {
    return 1;
  } else if (qn > 0 && w.length === 16 && e.length === 3) {
    return 2;
  } else {
    return 0;
  }
}

// Donation Process
function donationProcess(DonationAmountId, DonationTotalId, donationTitleId) {
  const DonationAmount = inputToNum(DonationAmountId);
  const DonationTotal = idToNum(DonationTotalId);
  const accountBalance = idToNum("accountBalance");
  const donationTitle = document.getElementById(donationTitleId).innerText;

  if (DonationAmount <= 0) {
    openModal("invalidAmountModal", "closeInvalidAmount"); //same for all
    return;
  } else if (accountBalance < DonationAmount) {
    openModal("insufficientAmountModal", "closeInsufficientAmount"); //same for all
    return;
  }
  document.getElementById(DonationTotalId).innerText =
    DonationAmount + DonationTotal;
  document.getElementById("accountBalance").innerText =
    accountBalance - DonationAmount;
  document.getElementById(DonationAmountId).value = "";

  let newHistory = document.createElement("div");
  newHistory.classList.add("p-8", "border-2", "mt-4", "rounded-xl");
  newHistory.innerHTML = `
              <p class="text-xl font-bold"><span class="text-lime-500">
              ${DonationAmount} Taka </span>is Donated for - ${donationTitle}</p>
              <p class="text-textSec mt-3">Date: ${new Date().toString()}</p>`;

  lastTrans("historyContainer", newHistory);

  openModal("donationModal", "closeDonationConfirm");
}
