# DOM Manipulation Checkpoint - Shopping Cart

This folder contains my solution for the DOM Manipulation workshop checkpoint. The goal of this assignment was to take a pre-built static HTML and CSS shopping cart and make it fully interactive using pure JavaScript.

### What I Implemented:
Inside `js/script.js`, I added event listeners and logic to handle all the required functionalities:

1. **Adjusting Quantities:** The `+` and `-` buttons increase or decrease the quantity of an item. I also added a simple check so the quantity cannot go below 0 (no negative items in a cart).
2. **Deleting Items:** The trash can icon successfully removes the entire product card from the page when clicked by targeting its parent container.
3. **Liking Items:** Clicking the heart icon toggles its color to red to simulate "liking" an item, and clicking it again reverts it back.
4. **Total Price Calculation:** I created a function that dynamically recalculates the total price of the cart based on the current quantities and the unit prices. This function runs every time a quantity changes or an item is deleted so the total is always accurate.

### Notes
I made sure to include clear comments throughout my code in `script.js` to explain my logic and how I navigated the DOM structure. I stuck to fundamental JavaScript concepts to demonstrate my problem-solving skills!

To test the cart, simply open `index.html` in your browser (or use a tool like Live Server).
