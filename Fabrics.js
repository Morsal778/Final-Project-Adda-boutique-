const grid = document.querySelector(".fabric-grid");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");


function scrollCards(direction) {

const amount = grid.clientWidth * 0.85;

grid.scrollBy({

left: direction * amount,

behavior: "smooth"

});

}


nextBtn.addEventListener("click", function () {

scrollCards(1);

});


prevBtn.addEventListener("click", function () {

scrollCards(-1);

});
