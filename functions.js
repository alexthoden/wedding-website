
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

// splits plus ones
function checkAndSplitString(inputString) {
    // Check if the string contains the substring "|"
    if (inputString.includes('|')) {
        // Split the string on "|"
        const splitArray = inputString.split('|');
        console.log("The string contains '|' and has been split:", splitArray);
        return splitArray; // Return the split array
    } else {
        console.log("The string does not contain '|'.");
        return inputString; // Return the original string if no "|" is found
    }
}

// Function to update the CSV
function updateCsv(userName, responses) {
    fetch('guest-list-test.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').map(row => row.trim());
            const headers = rows[0].split(',');

            // Find the row matching the user
            const dataRows = rows.slice(1);
            const targetIndex = dataRows.findIndex(row => {
                const columns = row.split(',');
                const nameIndex = headers.indexOf('guest');
                return columns[nameIndex] === userName;
            });

            if (targetIndex === -1) {
                console.error(`Name "${userName}" not found in the CSV.`);
                return;
            }

            // Update the row with the responses
            const targetRow = dataRows[targetIndex].split(',');
            targetRow[3] = responses.guestAttending; // Column 4
            targetRow[4] = responses.plusOneAttending || ''; // Column 5
            targetRow[5] = responses.guestLodging; // Column 6
            targetRow[6] = responses.listAllergies || ''; // Column 7

            // Reassemble the CSV
            const updatedRows = [headers.join(','), ...dataRows];
            const updatedCsv = updatedRows.join('\n');

            // Download the updated CSV
            const blob = new Blob([updatedCsv], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'updated-guest-list.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error updating CSV:', error));
}


// This function handles the RSVP form page
function handleRsvpForm() {
    const userName = localStorage.getItem('userName');
    const nameField = document.getElementById('name');
    const plusOneSelect = document.getElementById('plus-one-attending');
    const form = document.getElementById('rsvp-form');
    const plusOneName = document.getElementById("plus1");
    const guestAttendingField = document.getElementById('guest-attending');
    const plusOneAttendingField = document.getElementById('plus-one-attending');
    const guestLodgingField = document.getElementById('guest-lodging');
    const listAllergiesField = document.getElementById('list-allergies');

    // Pre-fill the user's name in the form
    nameField.value = userName;
    console.log(userName);

    // Check if the user has a plus one based on the guest list
    fetch('guest-list-test.csv')
    .then(response => response.text())
    .then(data => {
        // Split the CSV file into rows
        const rows = data.split('\n').map(row => row.trim());
        
        // Extract the header row
        const headers = rows[0].split(',');

        // Process the data rows
        const dataRows = rows.slice(1);

        // Find the row where the "Name" column matches the target name
        const targetRow = dataRows.find(row => {
            const columns = row.split(',');
            const nameIndex = headers.indexOf('guest'); // Get the index of the "guest" column
            return columns[nameIndex] === userName;
        });

        if (!targetRow) {
            window.location.href = "index.html"; // Redirect to RSVP page
            console.log(`Name "${userName}" not found in the CSV.`);
            return null; // Return null if no match is found
            const hasPlusOne = false;
        }

        else {
            // Split the matching row into columns
            const columns = targetRow.split(',');
            const bool = columns[1];
            if (bool === "TRUE") {
                // Get the value from the third column (index 2)
                const valueFromColumn3 = columns[2].replace('"', ''); // Index 2 corresponds to column 3

                // Update form with plus ones if applicable
                plusOneName.innerHTML = `Will ${valueFromColumn3} be attending?`
                const hasPlusOne = true;
            }
            else {
                plusOneName.remove();
                plusOneSelect.remove();
                const hasPlusOne = false;
            }

            return valueFromColumn3; // Return the value
        } 

    })
    .catch(error => console.error('Error loading CSV:', error));

    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form responses
        const responses = {
            guestAttending: guestAttendingField.value,
            plusOneAttending: plusOneAttendingField ? plusOneAttendingField.value : null,
            guestLodging: guestLodgingField.value,
            listAllergies: listAllergiesField.value,
        };

        // Update the CSV
        updateCsv(userName, responses);

        // Provide feedback to the user
        alert('Thank you for your response!');
        window.location.href = "index.html"; // Redirect to RSVP page

    });

}

// Determine which page to load the appropriate functionality for
if (window.location.pathname.endsWith('rsvp.html')) {
    handleNameInputForm(); // If it's the name input page
} else if (window.location.pathname.endsWith('response.html')) {
    handleRsvpForm(); // If it's the RSVP form page
}
