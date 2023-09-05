import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import useAuth from "../hooks/useAuth/useAuth";

export default function CheckoutForm({ price ,myGames,refetch}) {
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    // Fetch the client secret from your server
    axios.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("[error]", error);
      setCardError(error.message);
      return;
    }

    setProcessing(true);

    try {
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        }
      );

      if (confirmError) {
        console.error("[confirmError]", confirmError);
        setCardError("Payment confirmation failed");
      } else if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
        quantity:myGames.length,
        items:myGames.map((game)=>game._id),
        itemsName:myGames.map((game)=>game.name),
        status:'paid'
        };
         
        axios.post('/payments',payment)
        .then((res)=>{
          if(res.insertedId){
            refetch()
          }
        })

        console.log("[PaymentIntent]", payment);
      }
    } catch (e) {
      console.error("Error confirming payment:", e);
      setCardError("Payment confirmation failed");
    }

    setProcessing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-sky-600 btn text-white mt-12"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-red-600">{cardError}</p>}

      {transactionId && (
        <p className="text-green-600">
          Transaction Complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
}
