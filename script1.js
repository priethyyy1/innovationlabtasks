let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    alert("Positive");
} else if (num < 0) {
    alert("Negative");
} else {
    alert("Zero");
}

let day = parseInt(prompt("Enter day number (1-7):"));

switch (day) {
    case 1:
        alert("Sunday");
        break;
    case 2:
        alert("Monday");
        break;
    case 3:
        alert("Tuesday");
        break;
    case 4:
        alert("Wednesday");
        break;
    case 5:
        alert("Thursday");
        break;
    case 6:
        alert("Friday");
        break;
    case 7:
        alert("Saturday");
        break;
    default:
        alert("Invalid day");
}