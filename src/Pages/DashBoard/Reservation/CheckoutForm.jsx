import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const CheckoutForm = () => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  //--------client to server post data--------
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", totalPrice)
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
      console.log("Payment Method", paymentMethod);
      setError('')
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
        disabled={!stripe }
      >
        Pay
      </button>
      <p className="text-lg text-red-600 mt-5">{error}</p>
    </form>
  );
};

export default CheckoutForm;
