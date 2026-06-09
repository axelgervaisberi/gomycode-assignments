// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all the necessary elements from the DOM
  const plusBtns = document.querySelectorAll(".fa-plus-circle");
  const minusBtns = document.querySelectorAll(".fa-minus-circle");
  const trashBtns = document.querySelectorAll(".fa-trash-alt");
  const heartBtns = document.querySelectorAll(".fa-heart");

  // Function to calculate and update the total price
  function updateTotal() {
    const cards = document.querySelectorAll(".card");
    let total = 0;

    // Loop through all product cards to calculate the overall sum
    cards.forEach((card) => {
      // Extract the unit price (remove the '$' sign and trim any spaces)
      let priceText = card.querySelector(".unit-price").innerText;
      let price = parseFloat(priceText.replace("$", "").trim());

      // Extract the current quantity of the item
      let quantity = parseInt(card.querySelector(".quantity").innerText);

      // Add the subtotal for this item to the main total
      total += price * quantity;
    });

    // Update the total price displayed on the page
    document.querySelector(".total").innerText = total + " $";
  }

  // 1. Adjust the quantity through "+" buttons
  plusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Find the specific quantity span right next to the clicked plus button
      let quantityElement = e.target.nextElementSibling;
      let quantity = parseInt(quantityElement.innerText);
      
      // Increment the quantity
      quantity++;
      quantityElement.innerText = quantity;

      // Make sure to update the total price after changing the quantity
      updateTotal();
    });
  });

  // 2. Adjust the quantity through "-" buttons
  minusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Find the specific quantity span right before the clicked minus button
      let quantityElement = e.target.previousElementSibling;
      let quantity = parseInt(quantityElement.innerText);

      // We only decrement if the quantity is greater than 0 (no negative items in a cart!)
      if (quantity > 0) {
        quantity--;
        quantityElement.innerText = quantity;

        // Make sure to update the total price after changing the quantity
        updateTotal();
      }
    });
  });

  // 3. Delete items from the cart
  trashBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Find the closest '.card' wrapper, then get its parent which wraps the whole product block
      // and remove it completely from the DOM
      let productWrapper = e.target.closest(".card").parentElement;
      productWrapper.remove();

      // Recalculate the total since an item was removed from the cart
      updateTotal();
    });
  });

  // 4. Like items through a clickable heart-shaped button
  heartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Toggle the heart color. If it's already red, change it back to black. Otherwise, make it red.
      if (e.target.style.color === "red") {
        e.target.style.color = "black";
      } else {
        e.target.style.color = "red";
      }
    });
  });
});
