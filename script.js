let products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 29.99
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: 19.99
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: 24.99
  }
];

function editProduct(id) {
  let product = products.find(product => product.id === id);
  let newName = prompt("Enter new name", product.name);
  let newDescription = prompt("Enter new description", product.description);
  let newPrice = prompt("Enter new price", product.price);
  product.name = newName;
  product.description = newDescription;
  product.price = newPrice;
  // Here you would also update the product's display on the page
}
