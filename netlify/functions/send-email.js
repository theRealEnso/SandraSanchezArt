import {render} from '@react-email/render';

import {SES} from '@aws-sdk/client-ses';
import aws from 'aws-sdk';

import ConfirmationEmail from '../../src/emails/confirmation-email-component';

const ses = new SES({ 
    region: process.env.VITE_REACT_APP_AWS_REGION,
    accessKeyId: process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY_ID,
    secretAccessKey: process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
});

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
        Source: 'bennnnnnnvu@gmail.com', 
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