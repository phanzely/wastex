const dairyLink = document.querySelector("#dairy-link");
const meatLink = document.querySelector("#meat-link");
const fruitVeggiesLink = document.querySelector("#fruit-veggies-link");
const otherLink = document.querySelector("#other-link");
const dataTable = document.querySelector("#data-table");

dairyLink.addEventListener("click", function () {
  loadData("dairy");
});

meatLink.addEventListener("click", function () {
  loadData("meat");
});

fruitVeggiesLink.addEventListener("click", function () {
  loadData("fruit-veggies");
});

otherLink.addEventListener("click", function () {
  loadData("other");
});

function loadData(category) {
  const data = [
    ["1", "7.0", "50%", "Soft", "", "", "", "", "", ""],
    ["2", "6.5", "60%", "Firm", "", "", "", "", "", ""],
    ["3", "6.0", "70%", "Hard", "", "", "", "", "", ""],
    ["4", "5.5", "80%", "Crisp", "", "", "", "", "", ""],
    ["5", "5.0", "90%", "Juicy", "", "", "", "", "", ""],
    ["6", "4.5", "95%", "Tender", "", "", "", "", "", ""],
    ["1", "7.0", "50%", "Soft", "", "", "", "", "", ""],
    ["1", "7.0", "50%", "Soft", "", "", "", "", "", ""],
    ["1", "7.0", "50%", "Soft", "", "", "", "", "", ""],
    ["1", "7.0", "50%", "Soft", "", "", "", "", "", ""],
  ]
}
