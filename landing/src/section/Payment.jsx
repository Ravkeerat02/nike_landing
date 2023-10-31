import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { products } from "../constants";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server for payment processing
      console.log(token);
      console.log("Price:", products[0].price);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Payment Details</h2>
        <div className="w-full p-4 border rounded-md">
          <CardElement className="w-full outline-none" />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
          <button
            type="submit"
            className="w-full md:w-auto btn-primary"
            disabled={!stripe}
          >
            Pay ${products[0].price} with Credit Card
          </button>

          {/* PayPal Payment Option */}
          <button
            type="button"
            className="w-full md:w-auto btn-secondary"
            disabled={!stripe}
          >
            Pay with PayPal
          </button>

          {/* Other Payment Options */}
          <button
            type="button"
            className="w-full md:w-auto btn-tertiary"
            disabled={!stripe}
          >
            Other Payment Options
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
