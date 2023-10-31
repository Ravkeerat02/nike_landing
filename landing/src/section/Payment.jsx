import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useToasts } from "react-toast-notifications";
import { products } from "../constants";
import Notification from "../components/Notifications";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { addToast } = useToasts();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      const { token, error } = await stripe.createToken(
        elements.getElement(CardElement)
      );

      if (error) {
        throw new Error(error.message);
      }

      // Send the token to your server for payment processing (simulate success here)
      console.log(token);
      console.log("Price:", products[0].price);

      // Simulate a successful payment for demonstration purposes
      setPaymentSuccess(true);

      // Show success notification
      addToast("Payment successful! Thank you for your purchase.", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      console.error(error);
      setError(error.message);

      // Show error notification
      addToast(`Payment failed: ${error.message}`, {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Payment Details</h2>
        <div className="w-full p-4 border rounded-md">
          <CardElement className="w-full outline-none" />
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <button
            type="submit"
            className={`w-full md:w-auto btn-primary ${
              loading && "opacity-50"
            }`}
            disabled={!stripe || loading}
          >
            {loading
              ? "Processing..."
              : `Pay ${products[0].price} with Credit Card`}
          </button>

          {/* Add more payment options buttons here (PayPal, Google Pay, Apple Pay, etc.) */}
        </div>
      </form>

      {paymentSuccess && <Notification />}
    </div>
  );
};

export default PaymentForm;
