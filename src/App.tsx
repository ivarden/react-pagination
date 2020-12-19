import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const itemLength = items.length;

  const fetchDataApi = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  };
  useEffect(() => {
    fetchDataApi();
  }, []);

  const showMoreItems = () => {
    visible <= itemLength && setVisible(visible + 3);
  };
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const Cards = () => (
    <div className="Items-wrapper">
      {items.slice(0, visible).map(({ userId, id, title, body }) => (
        <div key={id} data-userid={userId} className="Item-container">
          <div>
            <span className="Item-number">{id}</span>
          </div>
          <div>
            <div className="Item-title">{title}</div>
            <div>{body}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const Button = () =>
    visible <= itemLength ? (
      <button className="Btn" onClick={showMoreItems}>
        Load more
      </button>
    ) : (
      <button className="Btn" onClick={scrollUp}>
        Scroll Up
      </button>
    );

  return (
    <div className="App" id="top">
      <div className="App-container">
        <header className="App-header"><h2>React pagination variant-01</h2></header>
      </div>
      <div className="App-container">
        <div className="App-wrapper">
          <Cards />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
