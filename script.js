/* Targeting all the divs with class name "rating" inside the document using querySelectorAll */
const ratingEls = document.querySelectorAll(".rating");

/* declaring the button element */
const btnEl = document.getElementById('btn');

/* declaring the div with class container */
const containerEl = document.getElementById('container');

/* Creating a variable */
let selectedRating = "";

/* Lookingt thru all the elements we found */
ratingEls.forEach((ratingEl) => {
    /* for each element we add an event listener */
    ratingEl.addEventListener('click', (event) => {
        /*if we click on text, we get inner text, "|| = or" or if we click on emoji, we still get parents innertext */
        /* console.log(event.target.innerText || event.target.parentNode.innerText); */

        /* Calling the remove all active classes function */
        removeActive();
        /* Changing the selectedRating to the selected elements innerText  */
        selectedRating = event.target.innerText || event.target.parentNode.innerText;

        event.target.classList.add('active'); /*setting active when any element inside div .ratings is clicked */
        event.target.parentNode.classList.add('active'); /* setting the parent node active when any element inside div is clicked*/

    });
});

/* Adding an eventlistener on button which is going to activate when clicked */
btnEl.addEventListener("click", () =>{
    /* Adding a condition to only click the button when one of the options are selected */
    if(selectedRating !== "") /* If selectedRating is not equal to empty */ {
        /* changing everything inside div container. */ 
        /* we need to add `` back tick to make the html dynamic. inside the backtick we can write our html (`<html>`) */
        containerEl.innerHTML = 
        `
        <strong> Thank you!</strong>
        <br>
        <br>
        <strong> Feedback: ${selectedRating}</strong>
        <br>
        <br>
        <p> we will use your feedback to improve our customer support.</p>
        `
    };
});

/*Creating a function to remove all the .active classes inside div elements with class .rating */
function removeActive(){
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");
    });
};