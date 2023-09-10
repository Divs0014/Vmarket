
import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
   useStripe, 
   useElements
  } from "@stripe/react-stripe-js";
  import styled from "styled-components";
  import React,{ useContext,useState, useEffect } from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCreditCard, faCalendar, faLock } from '@fortawesome/free-solid-svg-icons'; // Correct import
  import { useCartContext } from './context/cart_context';
  import axios from 'axios';
  import { useNavigate, Link } from "react-router-dom"

const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif;

  .payment-container {
    width: 360px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .payment-form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 20px;
    color: #333;
    font-size: 24px;
    display: flex;
    align-items: center;
  }

  .card-element {
    margin-bottom: 20px;
  }

  .card-row {
    justify-content: space-between;
  }

  .card-label {
    font-size: 14px;
    color: #555;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }

  .card-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    color: #333;
    transition: border-color 0.3s ease-in-out;
  }

  .card-input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }

  .card-button {
    background-color: #007bff;
    color: white;
    padding: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.2s ease-in-out;
  }

  .card-button:hover {
    background-color: #0056b3;
  }

  .payment-result {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #007bff;
  }
  `;
  const CheckoutPage=()=>{
    const navigate = useNavigate();
    const [paymentResult, setPaymentResult] = useState('');
    const { total_price, setCart } = useCartContext();
    console.log("price",total_price);
  const stripe = useStripe();
  const elements = useElements();
  const handlePayment= async(e)=>{
  e.preventDefault();
  const response = await axios.post(
          `http://localhost:8000/create-payment-intent`,
          {
            amount:total_price,
            currency: 'inr',
          },
        );
  if (response.status === 200){
    console.log("yes");
    try{
  const confirmPayment = await stripe.confirmCardPayment(
            response.data.clientSecret,
            {
              payment_method: {
                card: elements.getElement(CardNumberElement),
              },
            }
          );
          
          console.log(confirmPayment); 
  if(confirmPayment.paymentIntent.status === "succeeded"){
    setPaymentResult('Payment confirmed');
    setCart({});
    elements.getElement(CardNumberElement).clear();
    elements.getElement(CardExpiryElement).clear();
    elements.getElement(CardCvcElement).clear();
  console.log('payment confirmed');
  alert("Order Successful");
  navigate('/');
  }
  }
  catch
  {
    
  }
  }}

    return (
      <Wrapper>
        <div className="payment-container">
          <div className="payment-form">
            <h2>
              <FontAwesomeIcon icon={faCreditCard} /> Secure Payment
            </h2>
            <form onSubmit={handlePayment}>
              <div className="card-element">
                <label className="card-label">
                  <FontAwesomeIcon icon={faCreditCard} /> Card Number
                </label>
                <CardNumberElement className="card-input" />
              </div>
              <div className="card-row">
                <div className="card-element">
                  <label className="card-label">
                    <FontAwesomeIcon icon={faCalendar} /> Expiration Date
                  </label>
                  <CardExpiryElement className="card-input" />
                </div>
                <div className="card-element">
                  <label className="card-label">
                    <FontAwesomeIcon icon={faLock} /> CVC
                  </label>
                  <CardCvcElement className="card-input" />
                </div>
              </div>
              <button className="card-button">Confirm Payment</button>
            </form>
          </div>
          <div className="payment-result">{paymentResult}</div>
        </div>
      </Wrapper>
    );
  };

  export default CheckoutPage;