const productSearch =
    document.getElementById("productSearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const productCards =
    document.querySelectorAll(".product-card");

const noProducts =
    document.getElementById("noProducts");


function filterProducts() {

    if (!productSearch || !categoryFilter) {
        return;
    }


    const searchText =
        productSearch.value.toLowerCase().trim();


    const selectedCategory =
        categoryFilter.value;


    let visibleProducts = 0;


    productCards.forEach(function(card) {

        const productName =
            card.dataset.name.toLowerCase();


        const productCategory =
            card.dataset.category;


        const matchesSearch =
            productName.includes(searchText);


        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.style.display = "block";

            visibleProducts++;

        } else {

            card.style.display = "none";

        }

    });


    if (noProducts) {

        if (visibleProducts === 0) {

            noProducts.style.display = "block";

        } else {

            noProducts.style.display = "none";

        }

    }

}


if (productSearch) {

    productSearch.addEventListener(
        "input",
        filterProducts
    );

}


if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}


const wishlistButtons =
    document.querySelectorAll(".wishlist");


wishlistButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            button.classList.toggle("liked");


            if (
                button.classList.contains("liked")
            ) {

                button.innerHTML = "♥";

            } else {

                button.innerHTML = "♡";

            }

        }
    );

});


const orderModal =
    document.getElementById("orderModal");

const closeModal =
    document.getElementById("closeModal");

const selectedProduct =
    document.getElementById("selectedProduct");

const orderButtons =
    document.querySelectorAll(".order-button");

const formProduct =
    document.getElementById("formProduct");


let currentProduct = "";



orderButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            currentProduct =
                button.dataset.product;


            if (selectedProduct) {

                selectedProduct.textContent =
                    currentProduct;

            }


            if (formProduct) {

                formProduct.value =
                    currentProduct;

            }


            if (orderModal) {

                orderModal.classList.add("show");

            }

        }
    );

});

if (closeModal) {

    closeModal.addEventListener(
        "click",
        function() {

            if (orderModal) {

                orderModal.classList.remove("show");

            }

        }
    );

}

if (orderModal) {

    orderModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === orderModal
            ) {

                orderModal.classList.remove("show");

            }

        }
    );

}


const orderForm =
    document.getElementById("orderForm");

const orderSubmitButton =
    document.getElementById("orderSubmitButton");


if (orderForm) {

    orderForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            if (formProduct) {

                formProduct.value =
                    currentProduct;

            }


           

            if (orderSubmitButton) {

                orderSubmitButton.disabled =
                    true;

                orderSubmitButton.textContent =
                    "SENDING...";

            }


            try {

                const formData =
                    new FormData(orderForm);


                const response =
                    await fetch(
                        "https://formspree.io/f/moeadkka",
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    alert(
                        "Thank you! Your order has been sent successfully to ADDA."
                    );


                    orderForm.reset();


                    if (selectedProduct) {

                        selectedProduct.textContent =
                            "---";

                    }


                    if (formProduct) {

                        formProduct.value =
                            "";

                    }


                    if (orderModal) {

                        orderModal.classList.remove(
                            "show"
                        );

                    }


                } else {

                    alert(
                        "Sorry, your order could not be sent. Please try again."
                    );

                }


            } catch (error) {

                console.error(
                    "Formspree Order Error:",
                    error
                );


                alert(
                    "Connection error. Please check your internet and try again."
                );

            }

            if (orderSubmitButton) {

                orderSubmitButton.disabled =
                    false;

                orderSubmitButton.textContent =
                    "SEND ORDER";

            }

        }
    );

}


const contactForm =
    document.getElementById("contactForm");

const contactSubmitButton =
    document.getElementById("contactSubmitButton");

const formNote =
    document.getElementById("formNote");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            if (contactSubmitButton) {

                contactSubmitButton.disabled =
                    true;

                contactSubmitButton.textContent =
                    "SENDING...";

            }


            if (formNote) {

                formNote.textContent =
                    "Sending your message...";

            }


            const formData =
                new FormData(contactForm);


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (response.ok) {

                    contactForm.reset();


                    if (formNote) {

                        formNote.textContent =
                            "Thank you! Your message has been sent successfully to ADDA.";

                    }


                    alert(
                        "Your message has been sent successfully!"
                    );


                } else {

                    if (formNote) {

                        formNote.textContent =
                            "There was a problem sending your message. Please try again.";

                    }


                    alert(
                        "Sorry, your message could not be sent. Please try again."
                    );

                }


            } catch (error) {

                console.error(
                    "Formspree Error:",
                    error
                );


                if (formNote) {

                    formNote.textContent =
                        "There was a connection problem. Please try again.";

                }


                alert(
                    "Connection error. Please check your internet and try again."
                );

            }


            if (contactSubmitButton) {

                contactSubmitButton.disabled =
                    false;

                contactSubmitButton.textContent =
                    "SEND MESSAGE";

            }

        }
    );

}

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            orderModal
        ) {

            orderModal.classList.remove(
                "show"
            );

        }

    }
);


const currentYear =
    document.querySelectorAll(".current-year");


currentYear.forEach(function(element) {

    element.textContent =
        new Date().getFullYear();

});