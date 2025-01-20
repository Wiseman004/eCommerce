const tabs = document.querySelectorAll(".category");
const announcementBlock = document.querySelector(".announcement-block");

function displayProducts(category) {
  announcementBlock.innerHTML = "";

  const products = data.newArrivals[category] || [];

  products.forEach((product) => {
    const availabilityClass = product.availability === "available" ? "available availability-green-text" : "sold-out availability-red-text";

    const productHTML = `
      <div class="announcement-box">
        <img src="${product.imageUrl}" alt="${product.productName}">
        <div class="title-and-stars">
          <h2 class="product-name-title">${product.productName}</h2> 
          <div class="rating">Rating: ${product.rating} ★ </div>
        </div>
        <p class="product-name-subtitle-dark-grey">(${product.reviewCount}) Customer Reviews</p>
        <div class="price-and-availability">
          <h2 class="value-text">${product.price} грн</h2>
          <p class="${availabilityClass}">${product.availability}</p>
        </div>
      </div>`;
    announcementBlock.innerHTML += productHTML;
  });
}

function hideEmptyCategories() {
  tabs.forEach((tab) => {
    const category = tab.getAttribute("data-category");
    const products = data.newArrivals[category] || [];
    if (products.length === 0) {
      tab.classList.add("hide");
    } else {
      tab.classList.remove("hide");
    }
  });
}


hideEmptyCategories();

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.getAttribute("data-category");

    tabs.forEach((t) => t.classList.remove("active"));

    tab.classList.add("active");

    displayProducts(category);
  });
});

const defaultCategory = tabs[0].getAttribute("data-category");
displayProducts(defaultCategory);
