// Close Toggle for Navebar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var products = [
  {
    id: 1,
    image: "img/products/f1.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 150,
  },
  {
    id: 2,
    image: "img/products/f2.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 550,
  },
  {
    id: 3,
    image: "img/products/f3.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 500,
  },
  {
    id: 4,
    image: "img/products/f4.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 10,
  },
  {
    id: 5,
    image: "img/products/f5.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 50,
  },
  {
    id: 6,
    image: "img/products/f6.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 500,
  },
  {
    id: 7,
    image: "img/products/f7.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 20,
  },
  {
    id: 7,
    image: "img/products/f8.jpg",
    name: "adidas",
    t_shirts: "Cartoon T-shirts",
    price: "$2008",
    stoks: 20,
  },
];

