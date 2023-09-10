import React, { useState } from 'react';
import styled
 from 'styled-components';

 const Wrapper = styled.section`
 .predict-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="date"],
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .predicted-price {
    margin-top: 10px;
    font-weight: bold;
  }
  `;
function Predict() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedVegName, setSelectedVegName] = useState('carrot');
  const [predictedPrice, setPredictedPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      date: selectedDate,
      vegName: selectedVegName
    };

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      setPredictedPrice(responseData.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="predict-container">
      <h2>Predict Vegetable Price</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Select Vegetable:</label>
          <select
            value={selectedVegName}
            onChange={(e) => setSelectedVegName(e.target.value)}
          >
            <option value="carrot">Carrot</option>
            <option value="tomato">Tomato</option>
            <option value="broccoli">Broccoli</option>
            <option value="avocado">Avocado</option>
            <option value="onion">Onion</option>
            <option value="cucumber ">Cucumber</option>
            <option value="ladyfinger">Ladyfinger</option>
            <option value="ginger">Ginger</option>
            <option value="Mango">Mango</option>
            <option value="cauliflower">Cauliflower</option>
          </select>
        </div>
        <button type="submit">Predict Price</button>
      </form>
      {predictedPrice && (
        <p className="predicted-price">
          Predicted Price of {selectedVegName} on {new Date(selectedDate).toLocaleDateString()}  : Rs{' '}
          {predictedPrice}
        </p>
      )}
    </div>
  );
}

export default Predict;
