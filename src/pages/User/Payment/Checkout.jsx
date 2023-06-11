import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../../../components/shared/Container";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useCart from "../../../hooks/useCart";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import "./Checkout.css";

const notify = () => toast.error("Payment failed");
const notify2 = () => toast.success("Payment successfull");

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const [data, refetch] = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const price = data.reduce((sum, item) => sum + parseFloat(item.price), 0);

  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    axios
      .post(
        "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/create-payment-intent",
        { price }
      )
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      })
      .then((res) => {
        if (res.paymentIntent.status === "succeeded") {
          notify2();
          setPaymentLoading(false);

          const payment = {
            email: user.email,
            transactionId: res.paymentIntent.id,
            price,
            date: new Date(),
            quantity: data.length,
            cartItems: data.map((item) => item._id),
            classItems: data.map((item) => item.classId),
          };

          axios
            .post(
              "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/payments",
              payment
            )
            .then((res) => {
              if (res.data.deleteResult.deletedCount > 0) {
                refetch();
              } else {
                notify();
                setPaymentLoading(false);
              }
            })
            .catch(() => {});
        }
      });
  };
  return (
    <div className="w-96 mx-auto">
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
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-purple-600 px-4 mt-6 rounded-sm text-white"
        >
          {!paymentLoading ? (
            "Pay"
          ) : (
            <span className="loading loading-spinner loading-xs"></span>
          )}
        </button>
      </form>
      {cardError && <p className="text-red-500 mt-4">{cardError}</p>}
    </div>
  );
};

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Checkout = () => {
  return (
    <Container>
      <Elements stripe={stripePromise}>
        <h1 className="w-96 mx-auto text-center text-2xl font-bold my-12 border-t-2 border-b-2 py-2 shadow text-purple-700">
          Payment
        </h1>
        <CheckoutForm />
      </Elements>
    </Container>
  );
};

export default Checkout;
