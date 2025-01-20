const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const discount = document.getElementById("discount");
const productName = document.getElementById("productName");
const ellipseThree = document.getElementById("ellipse-three");

const ellipses = document.querySelectorAll(".ellipse, .active-ellipse");

const sliderBlock = document.querySelectorAll(".slider-block");
const arrowBlock = document.querySelectorAll(".arrow-blocks");
const dataSliderProductsLength = Object.keys(data.slider.products).length;

let currentIndex = 0;

if (dataSliderProductsLength === 0) {
    sliderBlock.forEach((el) => {
        el.style.display = "none";
    });
}

if (dataSliderProductsLength === 1) {
    ellipses.forEach((el) => {
        el.style.display = "none";
    });
}

if (dataSliderProductsLength === 1) {
    arrowBlock.forEach((el) => {
        el.style.display = "none";
    });
}

if (dataSliderProductsLength >= 3) {
    function changeImg(direction) {
        const images = [
            data.slider.products[0].imageUrl,
            data.slider.products[1].imageUrl,
            data.slider.products[2].imageUrl
        ];
        if (direction === "left") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else if (direction === "right") {
            currentIndex = (currentIndex + 1) % images.length;
        }

        img1.src = images[currentIndex];
        img2.src = images[(currentIndex + 1) % images.length];
        img3.src = images[(currentIndex + 2) % images.length];

        ellipses.forEach((el, index) => {
            if (index === currentIndex) {
                el.classList.add("active-ellipse");
                el.classList.remove("ellipse");
            } else {
                el.classList.add("ellipse");
                el.classList.remove("active-ellipse");
            }
        });

        function changeDiscount() {
            if (currentIndex === 0) {
                discount.innerHTML = `${data.slider.products[0].discountPercentage}% OFF`;
            } else if (currentIndex === 1) {
                discount.innerHTML = `${data.slider.products[1].discountPercentage}% OFF`;
            } else if (currentIndex === 2) {
                discount.innerHTML = `${data.slider.products[2].discountPercentage}% OFF`;
            }
        }

        function changeDiscountTitle() {
            if (currentIndex === 0) {
                productName.innerHTML = `${data.slider.products[0].productName}`;
            } else if (currentIndex === 1) {
                productName.innerHTML = `${data.slider.products[1].productName}`;
            } else if (currentIndex === 2) {
                productName.innerHTML = `${data.slider.products[2].productName}`;
            }
        }
        changeDiscount();
        changeDiscountTitle()
    }
} else if (dataSliderProductsLength === 2) {
    function changeImg(direction) {
        const images = [
            data.slider.products[0].imageUrl,
            data.slider.products[1].imageUrl,
            
        ];
        if (direction === "left") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else if (direction === "right") {
            currentIndex = (currentIndex + 1) % images.length;
        }

        img1.src = images[currentIndex];
        img2.src = images[(currentIndex + 1) % images.length];

        img3.style.display = "none";
        img3.style.display = "none";
        ellipseThree.style.display = "none";
        

        ellipses.forEach((el, index) => {
            if (index === currentIndex) {
                el.classList.add("active-ellipse");
                el.classList.remove("ellipse");
            } else {
                el.classList.add("ellipse");
                el.classList.remove("active-ellipse");
            }
        });
        
        function changeDiscount() {
            if (currentIndex === 0) {
                discount.innerHTML = `${data.slider.products[0].discountPercentage}% OFF`;
            } else if (currentIndex === 1) {
                discount.innerHTML = `${data.slider.products[1].discountPercentage}% OFF`;
            }
        }

        function changeDiscountTitle() {
            if (currentIndex === 0) {
                productName.innerHTML = `${data.slider.products[0].productName}`;
            } else if (currentIndex === 1) {
                productName.innerHTML = `${data.slider.products[1].productName}`;
            }
        }
        changeDiscount();
        changeDiscountTitle()
    }
} else {
    const images = [
        data.slider.products[0].imageUrl
    ];
    img1.src = images[currentIndex];

    img2.style.display = "none";
    img3.style.display = "none";

    function changeDiscount() {
        if (currentIndex === 0) {
            discount.innerHTML = `${data.slider.products[0].discountPercentage}% OFF`;
        }

    }

    function changeDiscountTitle() {
        if (currentIndex === 0) {
            productName.innerHTML = `${data.slider.products[0].productName}`;
        }
    }
    changeDiscount();
    changeDiscountTitle()

}


function changeImage() {
    img1.src = data.slider.products[0].imageUrl;
    img2.src = data.slider.products[1].imageUrl;
    img3.src = data.slider.products[2].imageUrl;
}
changeImg()
changeImage();