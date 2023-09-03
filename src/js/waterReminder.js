// // Function to set a reminder
// function setReminder() {
//     // Add logic here to schedule reminders for drinking water.
//     // You can use browser notifications or other methods.

//     // For example, schedule a reminder every 30 minutes:
//     setInterval(function () {
//         if ('Notification' in window) {
//             Notification.requestPermission().then(function (permission) {
//                 if (permission === 'granted') {
//                     new Notification('Water Reminder', {
//                         body: 'It\'s time to drink water!',
//                     });
//                 }
//             });
//         }
//     }, 30 * 60 * 1000); // 30 minutes in milliseconds
// }


// Function to set a reminder with a custom interval
function setReminder(customInterval = 30 * 60 * 1000) {
    // Clear any existing reminders
    clearInterval(window.reminderInterval);

    // Add logic here to schedule reminders for drinking water using the customInterval
    window.reminderInterval = setInterval(function () {
        if ('Notification' in window) {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    new Notification('Water Reminder', {
                        body: 'It\'s time to drink water!',
                    });
                }
            });
        }
    }, customInterval/10);
}
