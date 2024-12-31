import React, { useState } from 'react';
import axios from 'axios';
import "./Global.css"

const Detect = () => {
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');
  const [features, setFeatures] = useState(Array(28).fill(''));
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    const data = {
      Time: parseFloat(time),
      Amount: parseFloat(amount),
      V: features.map((f) => parseFloat(f)),
    };

    try {
      const res = await axios.post('http://localhost:5000/predict', data);
      setResponse(res.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.error || 'Server responded with an error');
      } else if (err.request) {
        setError('No response received from the server. Please check your network.');
      } else {
        setError('An unexpected error occurred: ' + err.message);
      }
    }
  };

  return (
    <section id='detect' className='bg-slate-300'>

      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Detect Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Time:</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
              />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
              />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Features (V1 to V28):</label>
            <div className="features flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <input
                key={index}
                type="number"
                value={feature}
                onChange={(e) => handleFeatureChange(index, e.target.value)}
                placeholder={`V${index + 1}`}
                className="flex-grow border border-gray-300 rounded-md p-2"
                required
                />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600"
            >
            Detect
          </button>
        </form>
        {response && (
          <div className="response bg-green-100 border border-green-300 rounded-md p-4 mt-4">
            <h3 className="text-lg font-medium mb-2">Prediction Result:</h3>
            <p className="mb-1">Message: {response.message}</p>
            <p>Prediction: {response.prediction === 0 ? 'Legitimate' : 'Fraudulent'}</p>
          </div>
        )}
        {error && (
          <div className="error bg-red-100 border border-red-300 rounded-md p-4 mt-4">
            <h3 className="text-lg font-medium mb-2">Error:</h3>
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Detect;
