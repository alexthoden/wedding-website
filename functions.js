var csv = require('jquery-csv');

// $(document).ready(function () {
//     $.get('guest-list-test.csv', function (data) {
//         const parsedData = $.csv.toObjects(data);
//         parsedData.forEach(row => {
//             const { guest, plusOne, children} = row;
//             $('#csv-data').append('<p> Name: ${guest}, Plus One: ${children}</p>')
//         })
//     })
// })

$.get( "guest-list-test.csv", function( CSVdata) {
    // CSVdata is populated with the file contents...
    // ...ready to be converted into an Array
     data = $.csv.toArray(CSVdata);
     console.log(data)
 });

$.csv.toArray("guest-list-test.csv")

// Mock database 
const plusOneTable = {
    'Alice': true,  // Alice has a plus one
    'Bob': false,   // Bob does not have a plus one
    'Charlie': true // Charlie has a plus one
};

// This function handles the first page (name input)
function handleNameInputForm() {
    const form = document.getElementById('name-form');
    const nameInput = document.getElementById('name');
    
    // Store the name in localStorage and redirect to RSVP form page
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = nameInput.value;
        localStorage.setItem('userName', name); // Store the name
        window.location.href = "response.html"; // Redirect to RSVP page
    });
}

// This function handles the RSVP form page
function handleRsvpForm() {
    const userName = localStorage.getItem('userName');
    const nameField = document.getElementById('name');
    const plusOneSelect = document.getElementById('plus-one-attending');
    const form = document.getElementById('rsvp-form');

    // Pre-fill the user's name in the form
    nameField.value = userName;

    // Check if the user has a plus one based on the mock table
    const hasPlusOne = plusOneTable[userName];

    // Show or hide the plus one question based on the database check
    if (hasPlusOne) {
        plusOneSelect.style.display = 'block';
    } else {
        plusOneSelect.style.display = 'none';
    }

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const plusOneAttending = plusOneSelect.value;

        // Provide feedback to the user based on their response
        if (hasPlusOne && plusOneAttending) {
            alert(`Thank you, ${userName}! Your plus one will be attending.`);
        } else if (!hasPlusOne) {
            alert(`Thank you, ${userName}! You will be attending alone.`);
        } else {
            alert('Please indicate if your plus one will be attending.');
        }
    });
}

// Determine which page to load the appropriate functionality for
if (window.location.pathname.endsWith('rsvp.html')) {
    handleNameInputForm(); // If it's the name input page
} else if (window.location.pathname.endsWith('response.html')) {
    handleRsvpForm(); // If it's the RSVP form page
}
