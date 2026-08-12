const search =
document.getElementById("search");


const buttons =
document.querySelectorAll(".filter");


const cards =
document.querySelectorAll(".card");


let currentStyle = "all";

const modal =
document.getElementById("productModal");


const closeModal =
document.getElementById("closeModal");


const modalImage =
document.getElementById("modalImage");


const modalTag =
document.getElementById("modalTag");


const modalTitle =
document.getElementById("modalTitle");


const modalDescription =
document.getElementById("modalDescription");


const modalPrice =
document.getElementById("modalPrice");


cards.forEach(function(card) {


const info =
card.querySelector(".info");


const image =
card.querySelector("img");


const tag =
card.querySelector(".tag");


const title =
card.querySelector("h3");


const description =
card.querySelector(".desc");


const price =
card.querySelector(".price");


const button =
document.createElement("button");


button.className =
"details";


button.innerText =
"View Details";


card.appendChild(button);

button.addEventListener(
"click",
function() {


modalImage.src =
image.src;


modalTag.innerText =
tag.innerText;


modalTitle.innerText =
title.innerText;



modalDescription.innerText =
description.innerText;


modalPrice.innerText =
price.innerText;


modal.style.display =
"flex";


}
);

});


closeModal.addEventListener(
"click",
function() {

modal.style.display =
"none";

}
);

modal.addEventListener(
"click",
function(event) {


if (
event.target === modal
) {

modal.style.display =
"none";

}

}
);


document.addEventListener(
"keydown",
function(event) {


if (
event.key === "Escape"
) {

modal.style.display =
"none";

}

}
);



buttons.forEach(
function(button) {


button.addEventListener(
"click",
function() {


buttons.forEach(
function(btn) {

btn.classList.remove(
"active"
);

}
);


button.classList.add(
"active"
);


currentStyle =
button.getAttribute(
"data-filter"
);

filterProducts();

}
);

}
);


search.addEventListener(
"input",
function() {

filterProducts();

}
);

function filterProducts() {


const searchText =
search.value.toLowerCase();



cards.forEach(
function(card) {


const style =
card.getAttribute(
"data-style"
);



const text =
card.innerText.toLowerCase();


const styleMatch =
currentStyle === "all" ||
style === currentStyle;

const searchMatch =
text.includes(searchText);


if (
styleMatch &&
searchMatch
) {

card.style.display =
"block";

}

else {

card.style.display =
"none";

}

}
);

}