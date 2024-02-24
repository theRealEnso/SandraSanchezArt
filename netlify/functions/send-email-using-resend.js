// import {Resend} from 'resend';

// const resend = new Resend(process.env.VITE_REACT_APP_RESEND_API_KEY);


const RESEND_API_KEY = process.env.VITE_REACT_APP_RESEND_API_KEY;

export const handler = async (event) => {

    try {
        const {from, subject, to, react} = JSON.parse(event.body);

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'email@sandrasanchezart.space',
                to: 'bennnnnnnvu@gmail.com',
                subject: 'hello',
                html: '<strong>payment successful!</strong>',
            })
        })

        if(response.ok){
            return {
                statusCode: 200,
                body: JSON.stringify(`Successfully sent email!`),
            }
        }
    } catch (error) {
        console.log(error);
        return {
            body: JSON.stringify({error: `Failed to send email`})
        }
    }
};