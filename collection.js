
document.getElementById("exploreBtn").addEventListener("click", function() {

    var home = document.getElementById("layout");

    var collection = document.getElementById("collection");


    home.style.display = "none";

    collection.style.display = "block";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

document.getElementById("homeBtn").addEventListener("click", function(event) {

    event.preventDefault();


    var home = document.getElementById("layout");

    var collection = document.getElementById("collection");


    collection.style.display = "none";

    home.style.display = "block";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


var buttons = document.querySelectorAll(".viewBtn");

var popup = document.getElementById("popup");

var popupDetails = document.getElementById("popupDetails");



buttons.forEach(function(button, index) {


    button.addEventListener("click", function() {


        var productName;

        var price;

        var description;



        if (index == 0) {

            productName = "Floral Cotton Dress";

            price = "$45";

            description =
                "Lightweight and comfortable for warm summer days.";

        }


        else if (index == 1) {

            productName =
                "Embroidered Traditional Dress";

            price = "$85";

            description =
                "Elegant traditional wear inspired by different cultures.";

        }

        else if (index == 2) {

            productName =
                "Classic Casual Outfit";

            price = "$60";

            description =
                "Modern and comfortable style for everyday wear.";

        }

        else if (index == 3) {

            productName =
                "Elegant Evening Dress";

            price = "$95";

            description =
                "A stylish outfit for parties and special occasions.";

        }

        else if (index == 4) {

            productName =
                "Warm Woolen Outfit";

            price = "$75";

            description =
                "Warm, comfortable and stylish for colder days.";

        }

        else if (index == 5) {

            productName =
                "International Fashion Outfit";

            price = "$90";

            description =
                "Fashion inspired by different countries around the world.";

        }

        popupDetails.innerHTML = `

            <h3>
                ${button.parentElement.querySelector("h3").innerText}
            </h3>

            <p>
                <strong>${productName}</strong>
            </p>

            <p>
                Price: ${price}
            </p>

            <p>
                ${description}
            </p>

            <button id="orderBtn">
                Order Now
            </button>

        `;


        popup.style.display = "flex";



       

        document.getElementById("orderBtn").addEventListener("click", function() {


            popupDetails.innerHTML = `

                <h3>
                    Place Your Order
                </h3>


                <p>
                    Please enter your details below.
                </p>


                <input
                    type="text"
                    id="customerName"
                    placeholder="Your Name"
                >


                <br>


                <input
                    type="email"
                    id="customerEmail"
                    placeholder="Your Email"
                >


                <br>


                <input
                    type="number"
                    id="quantity"
                    placeholder="Quantity"
                    min="1"
                    value="1"
                >


                <br>


                <button id="placeOrderBtn">
                    Place Order
                </button>


                <div id="orderMessage"></div>

            `;




            document.getElementById("placeOrderBtn").addEventListener("click", function() {


                var name =
                    document.getElementById("customerName").value;

                var email =
                    document.getElementById("customerEmail").value;

                var quantity =
                    document.getElementById("quantity").value;



               

                if (name == "" || email == "" || quantity == "") {

                    alert("Please fill in all the fields.");

                    return;

                }



              

                var orderData = new FormData();


                orderData.append(
                    "Customer Name",
                    name
                );


                orderData.append(
                    "Customer Email",
                    email
                );


                orderData.append(
                    "Product",
                    productName
                );


                orderData.append(
                    "Category",
                    button.parentElement.querySelector("h3").innerText
                );


                orderData.append(
                    "Quantity",
                    quantity
                );


                orderData.append(
                    "Price",
                    price
                );




                fetch(
                    "https://formspree.io/f/moeadkka",

                    {

                        method: "POST",

                        body: orderData,

                        headers: {

                            "Accept":
                                "application/json"

                        }

                    }

                )


                .then(function(response) {


                    if (response.ok) {


                        document.getElementById("orderMessage").innerHTML = `

                            <p style="color: green; font-weight: bold;">

                                ✓ Your order has been placed successfully!

                            </p>

                        `;


                        document.getElementById("placeOrderBtn").style.display =
                            "none";


                    }

                    else {


                        document.getElementById("orderMessage").innerHTML = `

                            <p style="color: red;">

                                Something went wrong. Please try again.

                            </p>

                        `;

                    }

                })


                .catch(function(error) {


                    document.getElementById("orderMessage").innerHTML = `

                        <p style="color: red;">

                            Unable to place order. Please check your connection.

                        </p>

                    `;

                });


            });


        });


    });


});





document.getElementById("closeBtn").addEventListener("click", function() {

    popup.style.display = "none";

});

