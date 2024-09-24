// * NK DONATION
document.getElementById("nkDonationBtn").addEventListener("click", function () {
  const nkDonationAmount = inputToNum("nkDonationAmount");
  const nkDonationTotal = idToNum("nkDonationTotal");
  const accountBalance = idToNum("accountBalance");

  if (nkDonationAmount <= 0) {
    openModal("invalidAmountModal", "closeInvalidAmount");
    return;
  } else if (accountBalance < nkDonationAmount) {
    openModal("insufficientAmountModal", "closeInsufficientAmount");
    return;
  }
  document.getElementById("nkDonationTotal").innerText =
    nkDonationAmount + nkDonationTotal;
  document.getElementById("accountBalance").innerText =
    accountBalance - nkDonationAmount;
  document.getElementById("nkDonationAmount").value = "";

  let newHistory = document.createElement("div");
  newHistory.classList.add("p-8", "border-2", "mt-4", "rounded-xl");
  newHistory.innerHTML = `
            <p class="text-xl font-bold"><span class="text-lime-500">${nkDonationAmount} Taka </span>is Donated for - Donate for Flood at Noakhali, Bangladesh
</p>
            <p class="text-textSec mt-3">Date: ${new Date().toString()}</p>`;

  lastTrans("historyContainer", newHistory);

  openModal("donationModal", "closeDonationConfirm");
});

// * FENI DONATION
document
  .getElementById("feniDonationBtn")
  .addEventListener("click", function () {
    const feniDonationAmount = inputToNum("feniDonationAmount");
    const feniDonationTotal = idToNum("feniDonationTotal");
    const accountBalance = idToNum("accountBalance");

    if (feniDonationAmount <= 0) {
      openModal("invalidAmountModal", "closeInvalidAmount");
      return;
    } else if (accountBalance < feniDonationAmount) {
      openModal("insufficientAmountModal", "closeInsufficientAmount");
      return;
    }
    document.getElementById("feniDonationTotal").innerText =
      feniDonationAmount + feniDonationTotal;
    document.getElementById("accountBalance").innerText =
      accountBalance - feniDonationAmount;
    document.getElementById("feniDonationAmount").value = "";

    let newHistory = document.createElement("div");
    newHistory.classList.add("p-8", "border-2", "mt-4", "rounded-xl");
    newHistory.innerHTML = `
            <p class="text-xl font-bold"><span class="text-lime-500">${feniDonationAmount} Taka </span>is Donated for - Donate for Flood Relief in Feni,Bangladesh</p>
            <p class="text-textSec mt-3">Date: ${new Date().toString()}</p>`;

    lastTrans("historyContainer", newHistory);

    openModal("donationModal", "closeDonationConfirm");
  });

// * QUOTA DONATION
document
  .getElementById("quotaDonationBtn")
  .addEventListener("click", function () {
    const quotaDonationAmount = inputToNum("quotaDonationAmount");
    const quotaDonationTotal = idToNum("quotaDonationTotal");
    const accountBalance = idToNum("accountBalance");

    if (quotaDonationAmount <= 0) {
      openModal("invalidAmountModal", "closeInvalidAmount");
      return;
    } else if (accountBalance < quotaDonationAmount) {
      openModal("insufficientAmountModal", "closeInsufficientAmount");
      return;
    }
    document.getElementById("quotaDonationTotal").innerText =
      quotaDonationAmount + quotaDonationTotal;
    document.getElementById("accountBalance").innerText =
      accountBalance - quotaDonationAmount;

    document.getElementById("quotaDonationAmount").value = "";

    let newHistory = document.createElement("div");
    newHistory.classList.add("p-8", "border-2", "mt-4", "rounded-xl");
    newHistory.innerHTML = `
            <p class="text-xl font-bold"><span class="text-lime-500">${quotaDonationAmount} Taka </span>is Donated for - Aid for Injured in the Quota Movement</p>
            <p class="text-textSec mt-3">Date: ${new Date().toString()}</p>`;

    lastTrans("historyContainer", newHistory);

    openModal("donationModal", "closeDonationConfirm");
  });
