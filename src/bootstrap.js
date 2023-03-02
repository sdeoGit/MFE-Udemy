import faker from 'faker';

let products = '';

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}
products = `<h4>Welcome to Prodcut MFE</h4> ${products}`
document.querySelector("#dev-products").innerHTML = products;