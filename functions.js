// import Papa from 'papaparse';
// var csv = require('jquery-csv');
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
                $('#csv-data').append(`
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
    csvData(userName, function(hasPlusOne) {
        if (hasPlusOne) {
            plusOneSelect.style.display = 'block';
        } else {
            plusOneSelect.style.display = 'none';
        }
    })
}







// This function handles the RSVP form page
function handleRsvpForm() {
    const userName = localStorage.getItem('userName');
    const nameField = document.getElementById('name');
    const plusOneSelect = document.getElementById('plus-one-attending');
    const form = document.getElementById('rsvp-form');
    const plusOneName = document.getElementById("doodoo");

    // Pre-fill the user's name in the form
    nameField.value = userName;

    // Check if the user has a plus one based on the mock table
    const hasPlusOne = plusOneTable[userName];
    
    fetch('guest-list-test.csv')
    .then(response => response.text())
    .then(data => {
        // Split the CSV file into rows
        const rows = data.split('\n').map(row => row.trim());
        
        // Extract the header row
        const headers = rows[0].split(',');

        // Process the data rows
        const dataRows = rows.slice(1);

        // Define the name to search for
        const targetName = "Beth";

        // Find the row where the "Name" column matches the target name
        const targetRow = dataRows.find(row => {
            const columns = row.split(',');
            const nameIndex = headers.indexOf('guest'); // Get the index of the "Name" column
            return columns[nameIndex] === targetName;
        });


        if (targetRow) {
            // Split the matching row into columns
            const columns = targetRow.split(',');

            // Get the value from the third column (index 2)
            const valueFromColumn3 = columns[2]; // Index 2 corresponds to column 3

            // Update form with plus ones if applicable
            plusOneName.innerHTML = valueFromColumn3

            return valueFromColumn3; // Return the value
        } else {
            console.log(`Name "${targetName}" not found in the CSV.`);
            return null; // Return null if no match is found
        }

    })
    .catch(error => console.error('Error loading CSV:', error));

    

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
