// netlify/functions/webhook.js
exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" })
      };
    }
    const payload = JSON.parse(event.body);
    console.log("Webhook received:", payload);
    if (endpointSecret) {
      const signature = request.headers["stripe-signature"];
      try {
        event = stripe.webhooks.constructEvent(
          request.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        console.log(`\u26A0\uFE0F  Webhook signature verification failed.`, err.message);
        return response.sendStatus(400);
      }
    }
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        console.log(paymentIntent);
        break;
      case "payment_method.attached":
        const paymentMethod = event.data.object;
        console.log(paymentMethod);
        break;
      default:
        console.log(`Unhandled event type ${event.type}.`);
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Webhook received successfully!" })
    };
  } catch (error) {
    console.error("Webhook error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An error occurred while processing the webhook."
      })
    };
  }
};
//# sourceMappingURL=webhook.js.map
