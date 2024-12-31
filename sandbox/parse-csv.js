$(document).ready(function () {
    // Load the CSV file
    $.get('guest-list-test.csv', function (data) {
        // Parse the CSV using jquery-csv
        const parsedData = $.csv.toObjects(data); // Convert CSV rows to an array of objects

        // Display the data or process it further
        parsedData.forEach(row => {
            const { Name, PlusOne } = row;
            $('#csv-data').append(`
                <p>Name: ${Name}, Plus One: ${PlusOne}</p>
            `);
        });
    });
});
