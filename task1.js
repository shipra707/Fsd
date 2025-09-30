const bookTicket = () => {
    printMessage("Welcome!");
    setTimeout(() => {
        printMessage("Login successfully");
        setTimeout(() => {
            printMessage("Seat has been selected successfully.");
            setTimeout(() => {
                printMessage("Your seat has been confirmed. Proceed for payment.");
                setTimeout(() => {
                    printMessage("Payment has been done.");
                    setTimeout(() => {
                        printMessage("Ticket has been issued.");
                        printMessage("Thank you for visiting our site.");
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}
