// // Function to initialize the app
// function initializeApp() {
//     // Add event listeners or any other setup here
//     console.log('Water Reminder App initialized.');

//     // Call the setReminder function from the waterReminder module
//     setReminder();
// }

// // Execute the initializeApp function when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', initializeApp);

// Function to initialize the app
function initializeApp() {
    // Add event listeners or any other setup here
    console.log('Water Reminder App initialized.');

    // Call the setReminder function from the waterReminder module
    setReminder();

    // Add an event listener to the "Set Reminder" button
    const remindButton = document.querySelector('.remind-button');
    remindButton.addEventListener('click', updateReminderInterval);
}

// Function to update the reminder interval
function updateReminderInterval() {
    const customIntervalInput = document.getElementById('customInterval');
    const customInterval = parseInt(customIntervalInput.value, 10);

    if (!isNaN(customInterval) && customInterval > 0) {
        // Call the setReminder function with the custom interval in milliseconds
        setReminder(customInterval * 60 * 1000);
    } else {
        console.error('Invalid custom interval. Please enter a positive number.');
    }
}

// Execute the initializeApp function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);
