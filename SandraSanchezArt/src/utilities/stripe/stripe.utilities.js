// to run our stripe instance
import { loadStripe } from '@stripe/stripe-js';
const publishableKey = import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY || 'your_default_key_here';
export const stripePromise = loadStripe(publishableKey);
