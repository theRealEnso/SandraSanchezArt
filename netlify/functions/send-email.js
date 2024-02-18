import aws from 'aws-sdk';

const ses = new aws.SES({ region: 'us-east-1' });

export const handler = async (event) => {
    const { subject, recipient, message } = JSON.parse(event.body);

    const params = {
        Destination: {
            ToAddresses: [recipient]
        },
        Message: {
            Body: {
                Text: { Data: message }
            },
            Subject: { Data: subject }
        },
        Source: 'bennnnnnnvu@gmail.com', // Make sure this is verified in your SES console
    };

    try {
        await ses.sendEmail(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error sending email:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' })
        };
    }
};