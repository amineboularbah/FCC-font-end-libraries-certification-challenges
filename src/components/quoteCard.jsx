import React, { Component } from "react";
import "../componentStyle/quoteCard.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
class Card extends Component {
  state = {
    quotes: [],
    index: 0,
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            quotes: res.quotes,
          },
          this.getRandomIndex
        );
      });
  }
  getRandomIndex = () => {
    const { quotes } = this.state;
    const index =
      quotes.length > 0 ? Math.floor(Math.random() * quotes.length) : 0;

    this.setState({
      index,
    });
  };
  render() {
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const twitterURL =
      quote &&
      `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
    return (
      <div className="container d-flex justify-content-center vh-100 align-items-center">
        <div className="col-8 box p-4 rounded">
          <div id="quote-box ">
            {quote && <h6 id="text">{quote.quote}</h6>}
            <div className="float-right">
              {quote && <cite i="author">-{quote.author}</cite>}
            </div>
            <br /> <br />
            <div className="d-flex justify-content-between">
              <a href={twitterURL} id="tweet-quote" className="btn btn-primary">
                <i className="fab fa-twitter"></i> Tweet
              </a>
              <button
                id="new-quote"
                className="btn btn-primary"
                onClick={this.getRandomIndex}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
