// =========================================
// EPHTEE — SHOPPING CART & CHECKOUT
// Quality You Can Taste. Value You Can Trust.
// =========================================


// =========================================
// GET SAVED CART
// =========================================

let cart =
    JSON.parse(localStorage.getItem("ephteeCart")) || [];



// =========================================
// CART COUNTER
// =========================================

const cartCounter =
    document.querySelector(".cart-count");


function updateCartCounter() {

    if (!cartCounter) {
        return;
    }


    const totalItems =
        cart.reduce(function (total, item) {

            return total + item.quantity;

        }, 0);


    cartCounter.textContent =
        totalItems;

}



// =========================================
// ADD TO CART
// =========================================

const cartButtons =
    document.querySelectorAll(".btn-product");


cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard =
            button.closest(".product-card");


        const productName =
            productCard
                .querySelector("h3")
                .textContent
                .trim();


        const priceText =
            productCard
                .querySelector(".product-price")
                .textContent
                .trim();


        const productPrice =
            Number(
                priceText.replace(/[₦,]/g, "")
            );


        const existingProduct =
            cart.find(function (item) {

                return item.name === productName;

            });


        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({

                name: productName,

                price: productPrice,

                quantity: 1

            });

        }


        localStorage.setItem(
            "ephteeCart",
            JSON.stringify(cart)
        );


        updateCartCounter();


        const originalText =
            button.textContent;


        button.textContent =
            "Added ✓";


        setTimeout(function () {

            button.textContent =
                originalText;

        }, 1200);

    });

});



// =========================================
// DISPLAY CART
// =========================================

const cartItemsContainer =
    document.querySelector("#cart-items");


function displayCart() {

    if (!cartItemsContainer) {
        return;
    }


    if (cart.length === 0) {

        cartItemsContainer.innerHTML = `

            <div class="empty-cart">

                <h2>
                    Your cart is empty
                </h2>

                <p>
                    Looks like you haven't added
                    anything yet.
                </p>

                <a
                    href="index.html#shop"
                    class="btn btn-primary">

                    Start Shopping

                </a>

            </div>

        `;


        updateCartSummary();

        return;

    }


    cartItemsContainer.innerHTML = "";


    cart.forEach(function (item, index) {

        const itemTotal =
            item.price * item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ₦${item.price.toLocaleString()}
                </p>

            </div>


            <div class="cart-item-controls">

                <button
                    class="quantity-btn"
                    data-action="decrease"
                    data-index="${index}">

                    −

                </button>


                <span class="cart-quantity">
                    ${item.quantity}
                </span>


                <button
                    class="quantity-btn"
                    data-action="increase"
                    data-index="${index}">

                    +

                </button>


                <strong class="cart-item-total">

                    ₦${itemTotal.toLocaleString()}

                </strong>


                <button
                    class="remove-btn"
                    data-action="remove"
                    data-index="${index}">

                    Remove

                </button>

            </div>

        `;


        cartItemsContainer.appendChild(cartItem);

    });


    addCartControlEvents();

    updateCartSummary();

}



// =========================================
// CART CONTROLS
// =========================================

function addCartControlEvents() {

    const controlButtons =
        document.querySelectorAll(
            ".quantity-btn, .remove-btn"
        );


    controlButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const index =
                    Number(button.dataset.index);


                const action =
                    button.dataset.action;


                if (action === "increase") {

                    cart[index].quantity++;

                }


                if (action === "decrease") {

                    cart[index].quantity--;


                    if (
                        cart[index].quantity <= 0
                    ) {

                        cart.splice(index, 1);

                    }

                }


                if (action === "remove") {

                    cart.splice(index, 1);

                }


                localStorage.setItem(
                    "ephteeCart",
                    JSON.stringify(cart)
                );


                displayCart();

                updateCartCounter();

            }
        );

    });

}



// =========================================
// CART SUMMARY
// =========================================

function updateCartSummary() {

    const subtotalElement =
        document.querySelector("#cart-subtotal");


    const totalElement =
        document.querySelector("#cart-total");


    if (
        !subtotalElement ||
        !totalElement
    ) {

        return;

    }


    const subtotal =
        cart.reduce(function (total, item) {

            return total +
                (item.price * item.quantity);

        }, 0);


    subtotalElement.textContent =
        `₦${subtotal.toLocaleString()}`;


    totalElement.textContent =
        `₦${subtotal.toLocaleString()}`;

}



// =========================================
// CHECKOUT PAGE
// =========================================

const checkoutItems =
    document.querySelector("#checkout-items");


function displayCheckout() {

    if (!checkoutItems) {
        return;
    }


    checkoutItems.innerHTML = "";


    if (cart.length === 0) {

        checkoutItems.innerHTML = `

            <p>
                Your cart is empty.
            </p>

            <a
                href="index.html#shop"
                class="btn btn-primary">

                Start Shopping

            </a>

        `;


        updateCheckoutTotal();

        return;

    }


    cart.forEach(function (item) {

        const itemTotal =
            item.price * item.quantity;


        const checkoutItem =
            document.createElement("div");


        checkoutItem.className =
            "checkout-item";


        checkoutItem.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    ${item.quantity} ×
                    ₦${item.price.toLocaleString()}
                </p>

            </div>


            <strong>
                ₦${itemTotal.toLocaleString()}
            </strong>

        `;


        checkoutItems.appendChild(
            checkoutItem
        );

    });


    updateCheckoutTotal();

}



// =========================================
// CHECKOUT TOTAL
// =========================================

function updateCheckoutTotal() {

    const checkoutTotal =
        document.querySelector("#checkout-total");


    if (!checkoutTotal) {
        return;
    }


    const total =
        cart.reduce(function (sum, item) {

            return sum +
                (item.price * item.quantity);

        }, 0);


    checkoutTotal.textContent =
        `₦${total.toLocaleString()}`;

}



// =========================================
// CHECKOUT FORM
// =========================================

const checkoutForm =
    document.querySelector("#checkout-form");


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product before checkout."
                );

                return;

            }


            alert(
                "Your order details have been received. Payment integration will be connected next."
            );

        }
    );

}



// =========================================
// INITIALIZE
// =========================================

updateCartCounter();

displayCart();

displayCheckout();
// =========================================
// CUSTOM ORDER FORM
// =========================================

const customOrderForm =
    document.querySelector("#custom-order-form");


if (customOrderForm) {

    customOrderForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            alert(
                "Thank you! Your custom order request has been received. We will contact you shortly."
            );


            customOrderForm.reset();

        }
    );

}
// =========================================
// SHOP CATEGORY FILTER
// =========================================

const shopFilters =
    document.querySelectorAll(".shop-filter");

const shopProducts =
    document.querySelectorAll(".shop-product-grid .product-card");


shopFilters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        const selectedCategory =
            filter.dataset.category;


        // Update active button

        shopFilters.forEach(function (button) {

            button.classList.remove("active");

        });


        filter.classList.add("active");


        // Filter products

        shopProducts.forEach(function (product) {

            const productCategory =
                product.dataset.category;


            if (
                selectedCategory === "all" ||
                productCategory === selectedCategory
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

});