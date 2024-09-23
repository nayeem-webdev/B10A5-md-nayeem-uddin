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
function openModal(modalID, closeButtonID,) {
  let modal = document.getElementById(modalID)
  let closeModal = document.getElementById(closeButtonID)

  modal.classList.remove("hidden")
  // close
  closeModal.addEventListener("click", function () {
      modal.classList.add("hidden")
  })
}