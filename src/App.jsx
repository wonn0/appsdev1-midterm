import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import Item from "./Item";
import "./App.css";

const getLocalStorage = () => {
  var temp = localStorage.getItem("items");

  if (!temp) {
    return [];
  }

  return (temp = JSON.parse(localStorage.getItem("items")));
};

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("add");
  const [index, setIndex] = useState();
  const [currentName, setCurrentName] = useState("");
  const [items, setItems] = useState(getLocalStorage);

  const onChange = (target) => {
    setMessage("");
    setShowAlert(false);
    setCurrentName(target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (items.includes(currentName) || !currentName) {
      setShowAlert(true);
      setMessage("Invalid or existing input. Please try again.");
      setCurrentName("");
      return;
    }

    if (mode === "add") {
      setItems((existingItems) => [...existingItems, currentName]);
      setShowAlert(true);
      setMessage(`${currentName} was added to the list`);
      setCurrentName("");
      return;
    }

    const temp = items;
    temp[index] = currentName;
    setShowAlert(true);
    setMessage(`Item changed to ${currentName}`);
    setItems(temp);
    setCurrentName("");
    setMode("add");
  };

  const onEdit = (item, currentIndex) => {
    setMode("edit");
    setCurrentName(item);
    setIndex(currentIndex);
  };

  const onDelete = (index) => {
    setShowAlert(true);
    setMessage("Removed item");
    setItems(items.filter((item) => items.indexOf(item) !== index));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      {showAlert && <Alert message={message} />}
      <div className="input-container">
        <h1 className="title">Grocery Bud</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            value={currentName}
            onChange={(x) => onChange(x.target.value)}
            placeholder="Enter item name here..."
          />
          <button type="submit" className="submit-button">{mode == "add" ? "Submit" : "Edit"}</button>
        </form>
      </div>
      <div className="list-container">
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              name={item}
              onEdit={() => onEdit(item, index)}
              onDelete={() => onDelete(index)}
            />
          );
        })}
      </div>
      <button type="button" className="clear-button" onClick={() => setItems([])}>
        Clear All
      </button>
    </div>
  );
}

export default App;
