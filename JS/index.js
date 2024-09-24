// Close Welcome
document.getElementById("closeWelcome").addEventListener("click", function(){
  document.getElementById("welcomeModal").classList.add("hidden")
})

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
  donationProcess("nkDonationAmount", "nkDonationTotal", "nkDonationTitle");
});

// * FENI DONATION
document
  .getElementById("feniDonationBtn")
  .addEventListener("click", function () {
    donationProcess(
      "feniDonationAmount",
      "feniDonationTotal",
      "feniDonationTitle"
    );
  });

// * QUOTA DONATION
document
  .getElementById("quotaDonationBtn")
  .addEventListener("click", function () {
    donationProcess(
      "quotaDonationAmount",
      "quotaDonationTotal",
      "quotaDonationTitle"
    );
  });

// * Recharge Modal
document
  .getElementById("rechargeAmountBtn")
  .addEventListener("click", function () {
    openModal("rechargeModal", "rechargeModalClose");
  });
// * Recharge Modal
document
  .getElementById("floatingRecharge")
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


