import React, { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");      
  const [author, setAuthor] = useState("");    

  useEffect(() => {
    // public api bata random quote fetch garxa
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);      // update quote state
        setAuthor(data.author);      // update author state
      });
  }, []); // note: only runs once when component mounts

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>🧠 Random Quote</h2>
      <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>{quote}</p>
      <p>— {author}</p>
    </div>
  );
}

export default App;
