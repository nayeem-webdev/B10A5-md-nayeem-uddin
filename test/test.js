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
              <p class="text-xl font-bold"><span class="text-lime-500">${DonationAmount} Taka </span>is Donated for - ${donationTitle}</p>
              <p class="text-textSec mt-3">Date: ${new Date().toString()}</p>`;

  lastTrans("historyContainer", newHistory);

  openModal("donationModal", "closeDonationConfirm");
}
