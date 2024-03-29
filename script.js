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
  },
  {
    id: 4,
    name: "Sale Product 1",
    description: "This is sale product 1",
    price: 29.99
  },
  {
    id: 5,
    name: "Sale Product 1",
    description: "This is sale product 2",
    price: 39.99
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
  let productElement = document.querySelector(`#product-${id}, #sale-${id}`);
  productElement.querySelector(".price").textContent = `$${newPrice}`;
  productElement.querySelector(".description").textContent = newDescription;
}

// Initialize cart total
let cartTotal = 0;

// Function to add to cart
function addToCart(price) {
  cartTotal += price;
  document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Add event listeners to "Add to Cart" buttons
let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    let price = parseFloat(this.parentElement.querySelector('.price').textContent.slice(1));
    addToCart(price);
  });
});
