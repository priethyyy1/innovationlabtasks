let choice;

do {
    
    choice = prompt(
        "MENU:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit\n\nEnter your choice (1-5):"
    );

    
    choice = parseInt(choice);

    if (choice >= 1 && choice <= 4) {
        
        let num1 = parseFloat(prompt("Enter first number:"));
        if (isNaN(num1)) {
            alert("Invalid input! Re-enter from menu.");
            continue;
        }

        let num2 = parseFloat(prompt("Enter second number:"));
        if (isNaN(num2)) {
            alert("Invalid input! Re-enter from menu.");
            continue;
        }

        
        switch (choice) {
            case 1:
                alert(`Result: ${num1 + num2}`);
                break;
            case 2:
                alert(`Result: ${num1 - num2}`);
                break;
            case 3:
                alert(`Result: ${num1 * num2}`);
                break;
            case 4:
                if (num2 === 0) {
                    alert("Cannot divide by zero!");
                } else {
                    alert(`Result: ${num1 / num2}`);
                }
                break;
        }

    } else if (choice === 5) {
        alert("Exiting calculator. Thank you!");
        break;

    } else {
        alert("Invalid choice! Please enter a number between 1 and 5.");
        continue;
    }

} while (true);