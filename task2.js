const bookTicket = async () => {
    try {
        // --- Login Check ---
        if (loginSuccessful) {
            printMessage("Login successful! 🎉", 3000); // 3000ms duration
        }

        // --- Payment Initiation (Simulated wait) ---
        printMessage("Payment has been initiated. Check for payment.", 3000);
        await wait(5000); // Wait for 5 seconds to simulate payment processing

        // --- Payment Confirmation Check ---
        if (paymentHasBeenDone && isPaid) {
            printMessage("Payment has been done. Enjoy! 🎟️", 3000);
        }

        // --- Final message ---
        printMessage("Thank you for visiting our site. 🙏", 3000);

        // Assume there's a return value or navigation here
        // return true;

    } catch (error) {
        console.error("An error occurred during booking:", error);
        // printMessage("Booking failed. Please try again.", 3000);
    }
};

// --- Outer Promise Wrapper (Partial view) ---
// This part is less clear but shows the function being wrapped in a Promise
// It might be a utility function or an earlier part of the same logic.
// return new Promise((resolve, reject) => {
//     // ... logic using await bookTicket() ...
//     resolve(data);
//     // ...
// });