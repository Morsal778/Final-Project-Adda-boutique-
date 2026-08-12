const products = [

    {
        name: "Bangladeshi Saree",

        price: "$75",

        image: "sareee.jpg",

        material: "Silk & Cotton",

        color: "Green & Red",

        size: "Free Size",

        suitable: "Cultural Events & Festivals",

        description:
        "A beautiful Bangladeshi traditional saree inspired by Bengali culture, featuring elegant colors and a comfortable fabric."
    },


    {
        name: "Jamdani Saree",

        price: "$95",

        image: "jamdani.jpg",

        material: "Fine Cotton",

        color: "White & Gold",

        size: "Free Size",

        suitable: "Weddings & Special Events",

        description:
        "A graceful Jamdani-inspired saree with delicate patterns and a traditional Bengali look."
    },


    {
        name: "Traditional Bengali Dress",

        price: "$85",

        image: "traditioal.jpg",

        material: "Silk",

        color: "Red & Gold",

        size: "S, M, L, XL",

        suitable: "Festivals & Cultural Events",

        description:
        "An elegant traditional Bengali outfit designed with beautiful colors and classic cultural details."
    },


    {
        name: "Embroidered Bangladeshi Outfit",

        price: "$110",

        image: "emmor.jpg",

        material: "Silk & Embroidery",

        color: "Blue & Gold",

        size: "S, M, L, XL",

        suitable: "Weddings & Parties",

        description:
        "A luxurious Bangladeshi-inspired outfit with detailed embroidery, perfect for special occasions."
    },


    {
        name: "Bengali Festive Saree",

        price: "$80",

        image: "fmor.jpg",

        material: "Cotton Silk",

        color: "Pink & White",

        size: "Free Size",

        suitable: "Festivals",

        description:
        "A colorful festive saree inspired by Bengali traditions and celebrations."
    },


    {
        name: "Royal Bengali Saree",

        price: "$125",

        image: "roy.jpg",

        material: "Premium Silk",

        color: "Maroon & Gold",

        size: "Free Size",

        suitable: "Wedding & Formal Events",

        description:
        "A luxurious traditional saree with rich colors and elegant details for formal occasions."
    }

];

const container =
    document.getElementById(
        "productsContainer"
    );

products.forEach(function(product, index) {


    const card =
        document.createElement("div");


    card.className =
        "product-card";


    card.innerHTML = `

        <img
            src="${product.image}"
            alt="${product.name}"
        >


        <h3>
            ${product.name}
        </h3>


        <p class="price">
            ${product.price}
        </p>


        <p>
            <strong>Material:</strong>
            ${product.material}
        </p>


        <p>
            <strong>Color:</strong>
            ${product.color}
        </p>


        <button
            onclick="showDetails(${index})">

            View Details

        </button>

    `;


    container.appendChild(card);

});


function showDetails(index) {


    const product =
        products[index];

    document.querySelector(
        ".products-section"
    ).style.display = "none";

    document.getElementById(
        "detailsSection"
    ).style.display = "block";

    document.getElementById(
        "detailsImage"
    ).src = product.image;


    document.getElementById(
        "detailsImage"
    ).alt = product.name;

    document.getElementById(
        "detailsCategory"
    ).innerText =
        "Bangladeshi Cultural Wear";


    document.getElementById(
        "detailsName"
    ).innerText =
        product.name;


    document.getElementById(
        "detailsPrice"
    ).innerText =
        product.price;


    document.getElementById(
        "detailsMaterial"
    ).innerText =
        product.material;


    document.getElementById(
        "detailsColor"
    ).innerText =
        product.color;


    document.getElementById(
        "detailsSize"
    ).innerText =
        product.size;


    document.getElementById(
        "detailsSuitable"
    ).innerText =
        product.suitable;


    document.getElementById(
        "detailsDescription"
    ).innerText =
        product.description;


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function closeDetails() {


    document.getElementById(
        "detailsSection"
    ).style.display = "none";


    document.querySelector(
        ".products-section"
    ).style.display = "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function orderProduct() {


    alert(
        "Thank you for your interest! " +
        "Please contact Adda Boutique to order this item."
    );

}