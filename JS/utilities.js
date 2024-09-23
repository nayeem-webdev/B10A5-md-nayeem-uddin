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

// Clear Input Fill
function clearInput(id) {
    document.getElementById(id1).value = '';
    document.getElementById(id2).value = '';
    document.getElementById(id3).value = '';
  }