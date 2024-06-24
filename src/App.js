import "./App.css";
import React, { useState } from "react";
import { TelegramShareButton, LinkedinShareButton,WhatsappShareButton, EmailShareButton,FacebookShareButton, TwitterShareButton } from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const getQuoteString = () => {
    return `"${quote.content}" - ${quote.author}`;
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns-generate">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote} className="btn">
            Generate Another Quote
          </button>
        </div>

        <div className="btns">
          <button>
            {" "}
            <FacebookShareButton
              url={window.location.href} // Share current page URL
              quote={getQuoteString()}
              className="btn"
            >
              Share on Facebook
            </FacebookShareButton>
          </button>
          <button>
          <TwitterShareButton
            url={getQuoteString()} // Share the quote directly
            title={`"${quote.content}" - ${quote.author}`} // Add quote and author as title
            className="btn"
          >
            Share on Twitter
          </TwitterShareButton>
          </button>

          <button>
          <EmailShareButton
            url={getQuoteString()} // Share the quote directly
            title={`"${quote.content}" - ${quote.author}`} // Add quote and author as title
            className="btn"
          >
            Share on Email
          </EmailShareButton>
          </button>
          <button>
          <WhatsappShareButton
            url={getQuoteString()} // Share the quote directly
            title={`"${quote.content}" - ${quote.author}`} // Add quote and author as title
            className="btn"
          >
            Share on Whatsapp
          </WhatsappShareButton>
          </button>

          <button>
          <LinkedinShareButton
            url={getQuoteString()} // Share the quote directly
            title={`"${quote.content}" - ${quote.author}`} // Add quote and author as title
            className="btn"
          >
            Share on Linkedin
          </LinkedinShareButton>
          </button>

       

          <button>
          <TelegramShareButton
            url={getQuoteString()} // Share the quote directly
            title={`"${quote.content}" - ${quote.author}`} // Add quote and author as title
            className="btn"
          >
            Share on Telegram
          </TelegramShareButton>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
