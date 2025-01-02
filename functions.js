
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
    const plusOneName = document.getElementById("plus1");


    // Pre-fill the user's name in the form
    nameField.value = userName;

    // Check if the user has a plus one based on the mock table
    
    
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


        if (targetRow) {
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
        } else {
            console.log(`Name "${userName}" not found in the CSV.`);
            plusOneName.innerHTML = "You're not invited get out of here!"
            return null; // Return null if no match is found
            const hasPlusOne = false;

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
