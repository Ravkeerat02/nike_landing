import React from "react";
import ReactDOM from "react-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastProvider } from "react-toast-notifications";
import App from "./App.jsx";
import "./index.css";

const stripePromise = loadStripe(
  "pk_live_51KFTftQaBwXpPqlqJObuNlZjUPLAAdR7wAs4ysATWSiQ5tRISf9adIIhqguoZOFXWbnqQ7Vv2WdJtVCPr2tsG7gq00qkFhoLJO"
); // Replace with your actual Publishable Key

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
