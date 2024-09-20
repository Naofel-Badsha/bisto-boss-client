import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  //--------client to server post data--------
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res =>{
       console.log(res.data.clientSecret);
       setClientSecret(res.data.clientSecret) 
    })
},[axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message)
    } else {
      console.log("Payment method", paymentMethod);
      setError('')
    }

    //---------Confirm payment---or---payment----intent----
    const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

      if(confirmError){
        console.log('confirm error')
      }
      else{
        console.log('payment intent', paymentIntent)
        if(paymentIntent.status === "succeeded"){
          console.log('transaction id', paymentIntent.id)
          setTransactionId(paymentIntent.id);
        }
      }
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 border-[#008080] p-10">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#033d52fa",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn text-xl text-white bg-[#008080] border-0 mt-10"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-lg text-red-600 mt-5">{error}</p>
      {transactionId && <p className="text-green-700">Your transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
