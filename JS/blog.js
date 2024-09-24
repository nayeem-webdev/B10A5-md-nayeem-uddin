function openAccordion(element){
const parent = element.parentElement
parent.children[1].classList.toggle("hidden")
}

// * home Page Re-Direct
document.getElementById("homePage").addEventListener("click", function (event) {
    window.location.href = "index.html";
  });