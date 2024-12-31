// $(document).ready(function () {
//     // Load the CSV file
//     $.get('guest-list-test.csv', function (data) {
//         // Parse the CSV using jquery-csv
//         const parsedData = $.csv.toObjects(data); // Convert CSV rows to an array of objects

//         // Display the data or process it further
//         parsedData.forEach(row => {
//             const { guest, plusOne, children } = row;
//             if (guest === "Garret" && plusOne) {
//                 $('#csv-data').append(`
//                     <p>Will ${children} be attending?</p>
//                 `);
//             }
//             else {
                
//             }
//         });
//     });
// });

// parsedData.forEach(row => {
//     if (row.guest === "true") {
//         $('#csv-data').append(`
//             <p>Name: ${row.Name}, Plus One: ${row.PlusOne}</p>
//         `);
//     }
// });

import Papa from 'papaparse';

const csv = Papa.unparse('guest-list-test.csv');
const parsedCSV = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true
}).data;

// $('#csv-data').append(`
//     <p>${csv[1]}</p>
//     `)
console.log(csv);