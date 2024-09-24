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
  let w = document.getElementById(id2).value;
  let e = document.getElementById(id3).value;
  let r = document.getElementById(id4).value;

  if (q === "" || w === "" || e === "" || r === "") {
    return true;
  } else {
    return false;
  }
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
