import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const stripeInstance = stripe(process.env.VITE_REACT_APP_STRIPE_SECRET_KEY);

export const handler = async (event) => {
    try {
        const {amount} = JSON.parse(event.body);

        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return {
            statusCode: 200,
            body: JSON.stringify({paymentIntent})
        };

    } catch (error) {
        console.log(error);

        return {
            statusCode: 400,
            body: JSON.stringify({error})
        };
    };
};

// import in the dotenv library, then run config on it. Running config attaches all the secret variables inside the .env file into the process environment
// require("dotenv").config();
// const stripe = require("stripe")(process.env.VITE_REACT_APP_STRIPE_SECRET_KEY);

// exports.handler = async (event) => {
//     try {
//         const {amount} = JSON.parse(event.body);

//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: "usd",
//             payment_method_types: ["card"],
//         });

//         return {
//             statusCode: 200,
//             body: JSON.stringify({paymentIntent})
//         };

//     } catch (error) {
//         console.log(error);

//         return {
//             statusCode: 400,
//             body: JSON.stringify({error})
//         };
//     };
// };

