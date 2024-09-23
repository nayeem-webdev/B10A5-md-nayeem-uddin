// Donation History Button Toggle

document.getElementById("donateBtn").addEventListener("click", function () {
  const donateBtn = document.getElementById("donateBtn");
  const historyBtn = document.getElementById("historyBtn");
  if (donateBtn.classList.contains("text-primary")) {
    donateBtn.classList.add("bg-primary", "text-gray-800")
    donateBtn.classList.remove("text-primary")
    historyBtn.classList.remove("bg-primary", "text-gray-800")
    historyBtn.classList.add("text-primary")
  }
});

document.getElementById("historyBtn").addEventListener("click", function () {
  const donateBtn = document.getElementById("donateBtn");
  const historyBtn = document.getElementById("historyBtn");
  if (historyBtn.classList.contains("text-primary")) {
    historyBtn.classList.add("bg-primary", "text-gray-800")
    historyBtn.classList.remove("text-primary")
    donateBtn.classList.remove("bg-primary", "text-gray-800")
    donateBtn.classList.add("text-primary")
  }
  
});

// * NK DONATION
document.getElementById("nkDonationBtn").addEventListener("click", function () {
  const nkDonationAmount = inputToNum("nkDonationAmount");
  const nkDonationTotal = idToNum("nkDonationTotal");
  const accountBalance = idToNum("accountBalance");

  if (nkDonationAmount <= 0) {
    console.log("invalid Donation Amount");
    return;
  } else if (accountBalance < nkDonationAmount) {
    console.log("insufficient Amount");
    return;
  }
  document.getElementById("nkDonationTotal").innerText =
    nkDonationAmount + nkDonationTotal;
  document.getElementById("accountBalance").innerText =
    accountBalance - nkDonationAmount;
  document.getElementById("nkDonationAmount").value = "";
});

// * FENI DONATION
document
  .getElementById("feniDonationBtn")
  .addEventListener("click", function () {
    const feniDonationAmount = inputToNum("feniDonationAmount");
    const feniDonationTotal = idToNum("feniDonationTotal");
    const accountBalance = idToNum("accountBalance");

    if (feniDonationAmount <= 0) {
      console.log("invalid Donation Amount");
      return;
    } else if (accountBalance < feniDonationAmount) {
      console.log("insufficient Amount");
      return;
    }
    document.getElementById("feniDonationTotal").innerText =
      feniDonationAmount + feniDonationTotal;
    document.getElementById("accountBalance").innerText =
      accountBalance - feniDonationAmount;
    document.getElementById("feniDonationAmount").value = "";
  });

// * QUOTA DONATION
document
  .getElementById("quotaDonationBtn")
  .addEventListener("click", function () {
    const quotaDonationAmount = inputToNum("quotaDonationAmount");
    const quotaDonationTotal = idToNum("quotaDonationTotal");
    const accountBalance = idToNum("accountBalance");

    if (quotaDonationAmount <= 0) {
      console.log("invalid Donation Amount");
      return;
    } else if (accountBalance < quotaDonationAmount) {
      console.log("insufficient Amount");
      return;
    }
    document.getElementById("quotaDonationTotal").innerText =
      quotaDonationAmount + quotaDonationTotal;
    document.getElementById("accountBalance").innerText =
      accountBalance - quotaDonationAmount;
    document.getElementById("quotaDonationAmount").value = "";
  });
