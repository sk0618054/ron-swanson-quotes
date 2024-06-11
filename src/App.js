import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );

    const data = await response.json();
    // print(data);
    // console.log(data);
    setQuote(data[0]);
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote-card">
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>
      <div className="saved-quotes">
        <h2>Saved Quotes</h2>
        {savedQuotes.map((savedQuote, index) => (
          <div key={index} className="saved-quote-card">
            <p>{savedQuote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
