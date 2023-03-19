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

function showBuyPopup(quantity, price, seller, sku) {
  const message = `Successfully bought ${quantity} at $${price} from ${seller} with SKU ${sku}.`;
  alert(message);
}

const tableBody = document.querySelector('table tbody');

const newRow = document.createElement('tr');

const skuCell = document.createElement('td');
skuCell.textContent = 'N16a727n82Sdf2t';
newRow.appendChild(skuCell);

const quantityCell = document.createElement('td');
quantityCell.textContent = '1.5 metric tons';
newRow.appendChild(quantityCell);

const sellerCell = document.createElement('td');
sellerCell.textContent = 'Cayuga Medical Ingredients';
newRow.appendChild(sellerCell);

const priceCell = document.createElement('td');
priceCell.textContent = '$312.41';
newRow.appendChild(priceCell);

const buyCell = document.createElement('td');
const buyButton = document.createElement('button');
buyButton.textContent = 'BUY';
buyButton.addEventListener('click', () => {
  showBuyPopup(quantityCell.textContent, priceCell.textContent.slice(1), sellerCell.textContent, skuCell.textContent);
});
buyCell.appendChild(buyButton);
newRow.appendChild(buyCell);

tableBody.appendChild(newRow);
