// Configure AWS SDK
AWS.config.update({
    region: 'us-east-1', // Replace with your DynamoDB region
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:example-id', // Replace with your Identity Pool ID
    }),
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

document.getElementById('rsvp-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get form values
    const name = document.getElementById('name').value;
    const plusOne = document.getElementById('plus-one').value;

    // Construct the item to send to DynamoDB
    const params = {
        TableName: 'RSVPs', // Replace with your DynamoDB table name
        Item: {
            Name: name,
            PlusOne: plusOne,
        },
    };

    try {
        // Insert the item into DynamoDB
        await dynamodb.put(params).promise();
        alert('Your RSVP has been successfully submitted!');
    } catch (error) {
        console.error('Error writing to DynamoDB:', error);
        alert('There was an error submitting your RSVP. Please try again.');
    }
});

// Eventually have to move this all to functions.js so I can access values
