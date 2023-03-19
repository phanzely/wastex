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


const tableBody = document.querySelector('table tbody');

const newRow = document.createElement('tr');


function showBuyPopup(sku, quantity, seller, price) {
  var popup = document.getElementById("buy-popup");
  popup.innerHTML = "Successfully bought 1.5 mega tons at price $312.41 from Cayuga Medical Ingredients with SKU N16a727n82Sdf2t";
  popup.classList.add("show"); // add the 'show' class to make the popup visible
}
