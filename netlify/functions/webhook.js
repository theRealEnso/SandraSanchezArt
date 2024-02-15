exports.handler = async (event) => {
    try {
      if (event.httpMethod !== "POST") {
        return {
          statusCode: 405,
          body: JSON.stringify({ error: "Method Not Allowed" }),
        };
      }
  
      // Process the webhook payload
      const payload = JSON.parse(event.body);
  
      // Do something with the payload
      console.log("Webhook received:", payload);
      if (endpointSecret) {
        // Get the signature sent by Stripe
        const signature = request.headers['stripe-signature'];
        try {
          event = stripe.webhooks.constructEvent(
            request.body,
            signature,
            endpointSecret
          );
        } catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return response.sendStatus(400);
        }
      }
    
      // Handle the event
      switch (event.type) {
        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
          // Then define and call a method to handle the successful payment intent.
          // handlePaymentIntentSucceeded(paymentIntent);
          break;
        case 'payment_method.attached':
          const paymentMethod = event.data.object;
          // Then define and call a method to handle the successful attachment of a PaymentMethod.
          // handlePaymentMethodAttached(paymentMethod);
          break;
        default:
          // Unexpected event type
          console.log(`Unhandled event type ${event.type}.`);
      }
  
      // Return a response (optional)
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Webhook received successfully!" }),
      };
    } catch (error) {
      console.error("Webhook error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "An error occurred while processing the webhook.",
        }),
      };
    }
  };