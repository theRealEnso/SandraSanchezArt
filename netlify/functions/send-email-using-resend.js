// import {Resend} from 'resend';

// const resend = new Resend(process.env.VITE_REACT_APP_RESEND_API_KEY);


const RESEND_API_KEY = process.env.VITE_REACT_APP_RESEND_API_KEY;

export const handler = async(event) => {

    try {
        const {from, subject, to, react} = JSON.parse(event.body);

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'sandrasanchezart.space',
                to: 'bennnnnnnvu@gmail.com',
                subject: 'hello',
                html: '<strong>it works!</strong',
            })
        })

        if(response.ok){
            const data = await response.json();
            return {
                statusCode: 200,
                body: data,
            }
        }
    } catch (error) {
        console.log(error);
        return {
            body: JSON.stringify({error: `Failed to send email`})
        }
    }
};