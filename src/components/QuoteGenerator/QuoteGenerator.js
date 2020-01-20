import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";
import Signature from "../Signature/Signature";

const useFetch = url => {
  const [quotes, setQuotes] = useState();
  const [loading, setLoading] = useState(true);
  const random = Math.floor(Math.random() * 10);

  useEffect(() => {
    async function fetchQuotes() {
      const response = await fetch(url);
      const data = await response.json();
      const quote = data[random].excerpt.rendered.replace(/<[^>]*>?/gm, "");
      /// console.log(`data:`, data[0].excerpt.rendered);
      setQuotes(quote);
      setLoading(false);
    }
    fetchQuotes();
  }, []);
  console.log(`quotes:`, quotes);
  return { quotes, loading };
};

function refreshPage() {
  window.location.reload(false);
}

function QuoteGenerator() {
  const { quotes, loading } = useFetch(
    "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
  );
  return (
    <div className="QuoteGenerator">
      <h2 className="quoteTitle"> Here's something to keep in mind today...</h2>
      {loading ? (
        <div className="loading"> ...loading </div>
      ) : (
        <div className="quote"> {quotes}</div>
      )}
      <Signature />
      <button className="newQuoteButton" onClick={refreshPage}>
        Click for a little extra motivation 😊
      </button>
    </div>
  );
}

export default QuoteGenerator;
