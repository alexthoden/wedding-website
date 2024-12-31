// import Papa from 'papaparse';

// const csv = Papa.unparse('guest-list-test.csv')

// Function to take user input name and spit out plus ones for RSVP form
function csvData(inputName, callback) {
    // Load the CSV file
    $.get('guest-list-test.csv', function (data) {
        // Parse the CSV using jquery-csv
        const parsedData = $.csv.toObjects(data); // Convert CSV rows to an array of objects
        let hasPlusOne = false;
        // Display the data or process it further
        parsedData.forEach(row => {
            const { guest, plusOne, children } = row;
            if (guest === inputName && plusOne) {
                hasPlusOne = plusOne === "TRUE";
                $('#csv-data').html(`
                    <p>Will ${children} be attending?</p>
                `);
                }
            });
            callback(hasPlusOne);
        }).fail(function() {
        console.error('Failed to load authentication data.')
    });

};


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
    // const hasPlusOne = plusOneTable[userName];
    // const hasPlusOne = csvData(userName);
    csvData(userName, function(hasPlusOne) {
        if (hasPlusOne) {
            plusOneSelect.style.display = 'block';
        } else {
            plusOneSelect.style.display = 'none';
        }
    })

    // Show or hide the plus one question based on the database check
    

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
