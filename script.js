document.addEventListener("DOMContentLoaded", () => {

    console.log("SK Collection Website Loaded Successfully");

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            alert("✨ Collection Coming Soon");

        });

    });

});
