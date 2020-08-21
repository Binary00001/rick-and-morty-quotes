import React, { useState, useEffect } from "react";
import "./App.css";

import QuoteList from "./components/quoteList";

const App = () => {
  const [quote, setQuote] = useState({});

  const getQuote = () => {
    let index = Math.floor(Math.random() * QuoteList.length);
    setQuote(QuoteList[index]);
  };

  useEffect(() => {
    let index = Math.floor(Math.random() * QuoteList.length);

    setQuote(QuoteList[index]);
  }, []);

  return (
    <div className="App">
      <div className="quote-box" id="quote-box">
        <div className="grey-strip">
          <p className="title">Rick and Morty Quote Generator</p>
        </div>
        <div className="quote-content">
          <div className="quote-text" id="text">
            "{quote.quote}"
          </div>
          <div className="quote-author" id="author">
            - {quote.character}
          </div>
          <p>
            Season: {quote.season}
            <br />
            Episode: <em>{quote.episode}</em>
          </p>
        </div>

        <div className="links">
          <a
            href="#!"
            className="new-quote btn"
            id="new-quote"
            onClick={getQuote}
          >
            Generate New Quote
          </a>
          {/* <a href="#!" className="tweet-quote btn" id="tweet-quote">
            Tweet Quote
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default App;
