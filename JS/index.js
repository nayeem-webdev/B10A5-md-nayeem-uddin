// alert("hello world")
// * Donation History Button Toggle
document.getElementById("donateBtn").addEventListener("click", function () {
  const donateBtn = document.getElementById("donateBtn");
  const historyBtn = document.getElementById("historyBtn");
  if (donateBtn.classList.contains("text-primary")) {
    donateBtn.classList.add("bg-primary", "text-gray-800");
    donateBtn.classList.remove("text-primary");
    historyBtn.classList.remove("bg-primary", "text-gray-800");
    historyBtn.classList.add("text-primary");
  }
  showHide("historyDiv", "donationDiv");
});

document.getElementById("historyBtn").addEventListener("click", function () {
  const donateBtn = document.getElementById("donateBtn");
  const historyBtn = document.getElementById("historyBtn");
  if (historyBtn.classList.contains("text-primary")) {
    historyBtn.classList.add("bg-primary", "text-gray-800");
    historyBtn.classList.remove("text-primary");
    donateBtn.classList.remove("bg-primary", "text-gray-800");
    donateBtn.classList.add("text-primary");
  }
  showHide("donationDiv", "historyDiv");
});

// * Blog Page Re-Direct
document.getElementById("blogPage").addEventListener("click", function (event) {
  window.location.href = "blog.html";
});

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

// * Recharge Modal
document
  .getElementById("rechargeAmountBtn")
  .addEventListener("click", function () {
    openModal("rechargeModal", "rechargeModalClose");
  });

// * Recharge
document
  .getElementById("rechargeNowBtn")
  .addEventListener("click", function () {
    const accountBalance = idToNum("accountBalance");
    const rechargeAmount = inputToNum("rechargeAmount");
    if (
      inputValidate("rechargeAmount", "cardNumber", "vcc", "expiryDate") === 1
    ) {
      openModal("rechargeFieldModal", "closeRechargeField");
    } else if (
      inputValidate("rechargeAmount", "cardNumber", "vcc", "expiryDate") === 2
    ) {
      document.getElementById("accountBalance").innerText =
        accountBalance + rechargeAmount;

      let newHistory = document.createElement("div");
      newHistory.classList.add("p-8", "border-2", "mt-4", "rounded-xl");
      newHistory.innerHTML = `
            <p class="text-xl font-bold"><span class="text-lime-500">${rechargeAmount} Taka</span> has been recharged to your account</p>
            <p class="text-textSec mt-3">Date: ${new Date().toString()}</p>`;

      document.getElementById("rechargeModal").classList.add("hidden");
      document
        .getElementById("insufficientAmountModal")
        .classList.add("hidden");

      lastTrans("historyContainer", newHistory);

      openModal("rechargeConfirmModal", "closeRechargeConfirm");
    } else {
      openModal("rechargeInvalidModal", "closeRechargeInvalid");
    }
  });

// document.getElementById("rechargeNowBtn").addEventListener("click", function(){
//   let rechargeAmount = document.getElementById("rechargeAmount")
//   let rechargeAmountNum = Number(rechargeAmount.value)
//   let cardNumber = document.getElementById("cardNumber").value
//   let vcc = document.getElementById("vcc").value

//   if(inputValidate("rechargeAmount", "cardNumber", "vcc", "expiryDate")){
//     console.log("fill")
//   } else if(rechargeAmountNum > 0 && cardNumber.length === 16 && vcc.length === 3){
//     console.log("success")
//   } else {
//     console.log("vul")
//   }
// });
