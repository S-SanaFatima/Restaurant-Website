// Function to validate the order form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("quantity").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;

    // Check if any field is empty
    if (name === "" || email === "" || quantity === "" || contact === "" || address === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Validate email format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate contact number (assuming it should be numeric and 10 digits)
    if (isNaN(contact) || contact.length !== 10) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // If all validations pass, return true
    return true;
}

// Event listener for form submission
document.getElementById("orderForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Validate form
    if (validateForm()) {
        // If form is valid, submit it (you can replace this with your actual form submission code)
        alert("Your order has been placed successfully!");
        this.reset(); // Reset the form after submission
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const orderNowButtons = document.querySelectorAll('.order-now-btn');
    const orderForm = document.getElementById('Order');

    orderNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            orderForm.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

