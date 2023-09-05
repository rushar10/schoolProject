// Intialising class as variables

const navBar = document.querySelector(".nav__hamburger");

const showNav = document.querySelector(".nav__top__bar");
const closeNav = document.querySelector(".close__button");
// catalogue images
const catalogueImages = {
  1: "./images/catalogue-1.jpeg",
  2: "./images/catalogue-2.jpeg",
  3: "./images/catalogue-3.jpeg",
};
// catalogue section selectors
const catalogueImageSlider = document.querySelector(".catalogue__image");
const catalogueLeftArrow = document.querySelector(".left__arrow");
const catalogueRightArrow = document.querySelector(".right__arrow");

//image slider
let imageSliderValue = 1;

// hamburger on check
let hamburgerOn = true;
// Products
const products = {
  product_1: {
    title:
      "Apple MacBook Pro 13-inch with M2 chip, 256GB SSD (Space Grey) [2022]",
    desc: "2022 Apple MacBook Pro laptop with M2 chip: 13-inch Retina display, 8GB RAM, 256GB SSD storage, Touch Bar, backlit keyboard, FaceTime HD camera.",
    image:
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594255-Product-0-I-637901949777334327_300x300.jpg?v=1655873751,https://cdn.shopify.com/s/files/1/0024/9803/5810/products/594255-Product-0-I-637901949777334327_450x450.jpg?v=1655873751",
  },
  product_2: {
    title: "Apple iPad 10.2-inch 64GB Wi-Fi (Space Grey) [9th Gen]",
    desc: "Powerful. Easy to use. Versatile. The new iPad has a beautiful 10.2-inch Retina display1, the powerful A13 Bionic chip, an Ultra Wide front camera with Centre Stage, and support for Apple Pencil and the Smart Keyboard.2 iPad lets you do more, more easily.",
    image:
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/535966-Product-0-I-637673115150799491_300x300.jpg?v=1648604992,https://cdn.shopify.com/s/files/1/0024/9803/5810/products/535966-Product-0-I-637673115150799491_450x450.jpg?v=1648604992",
  },
  product_3: {
    title: "Apple iPhone 14 128GB (Midnight)",
    desc: "iPhone 14. With the most impressive dual-camera system on iPhone. Capture stunning photos in low light and bright light.",
    image:
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596634-Product-0-I-637982174240799602_1b4d3a28-adb5-4818-b51d-7ae82b551206_300x300.jpg?v=1686263293,https://cdn.shopify.com/s/files/1/0024/9803/5810/products/596634-Product-0-I-637982174240799602_1b4d3a28-adb5-4818-b51d-7ae82b551206_450x450.jpg?v=1686263293",
  },
  product_4: {
    title: "Dyson Zone Air Purifying Wireless Over-Ear Headphones",
    desc: "Eight active noise cancelling microphones monitor surrounding noise 384,000 times a second, cancelling background noise",
    image:
      "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/661774-Product-0-I-638284467638350666_300x300.jpg?v=1692936139,https://cdn.shopify.com/s/files/1/0024/9803/5810/products/661774-Product-0-I-638284467638350666_450x450.jpg?v=1692936139",
  },
};

// items
const items = document.querySelector(".items");

catalogueImageSlider.innerHTML = `<img src="${catalogueImages[imageSliderValue]}" alt="catalogue images">\n`;

// Click event for navigation
navBar.addEventListener("click", () => {
  // adding show__nav class to nav__top
  hamburgerCheck = 1;
  showNav.classList.add("show__nav");

  // removing hide class from the close__button class
  closeNav.classList.remove("hide");
  closeNav.addEventListener("click", () => {
    showNav.classList.remove("show__nav");
    hamburgerCheck = false;
    closeNav.classList.add("hide");
  });
});

// Click event for arrow

// Left arrow
catalogueLeftArrow.addEventListener("click", () => {
  if (imageSliderValue == 1) {
    imageSliderValue = 3;
  } else {
    imageSliderValue--;
  }
  console.log(catalogueImages[imageSliderValue]);
  catalogueImageSlider.innerHTML = `<img src="${catalogueImages[imageSliderValue]}" alt="catalogue images">\n`;
});

// Right arrow
catalogueRightArrow.addEventListener("click", () => {
  if (imageSliderValue == 3) {
    imageSliderValue = 1;
  } else {
    imageSliderValue++;
  }
  catalogueImageSlider.innerHTML = `<img src="${catalogueImages[imageSliderValue]}" alt="catalogue images">\n`;
});

// Displaying products
for (const product in products) {
  const element = products[product];
  items.innerHTML += `
    <div class="product">
    <img src="${element.image}" class="product__image" alt=${product}></img>
    <div class="product__text">
      <p class="product__title">${element.title}</p>
      <p class="product__detail">${element.desc}</p>
      <button id="cart__button">Add to cart</button>
    </div>
  </div>`;
}
