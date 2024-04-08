import axios from 'axios';
const Stripe = require('stripe');
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51P2wNHSCGHOajAjImVwDwVEk0JhHpDGX70o8iT9yyscRbs4Mr67FYhc4ot4dgPap34ITy4tvgy55qcu03DkqsmrZ00cfGYToZi'
);
export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.replace(session.data.session.url);
  } catch (error) {
    console.log(error);
    showAlert('Error', error);
  }
};
