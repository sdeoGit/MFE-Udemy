import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  products = `<h4>Welcome to Prodcut MFE</h4> ${products}`;
  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  /** Assuming dev-products element is not included in container app */
  if (el) {
    mount(el);
  }
}

export { mount };
